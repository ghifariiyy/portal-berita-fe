import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, Trash2, Edit2, XCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { createNews, getUserNews, deleteNews } from '../services/api';
import { NewsItem } from './Index';

const AddNews = () => {
  const [formData, setFormData] = useState<{
    title: string;
    content: string;
    image: File | null;
    category: string;
    quickAccess?: string;
    trending?: string;
  }>({
    title: '',
    content: '',
    image: null,
    category: '',
    quickAccess: '',
    trending: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [myNews, setMyNews] = useState<NewsItem[]>([]);
  const [loadingMyNews, setLoadingMyNews] = useState(true);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const navigate = useNavigate();

  const trendingOptions = [
    { label: 'Pilih Trending', value: '' },
    { label: 'Liga Champions 2024', value: 'liga-champions-2024' },
    { label: 'World Cup Qatar', value: 'world-cup-qatar' },
    { label: 'NBA Finals', value: 'nba-finals' },
    { label: 'Wimbledon 2024', value: 'wimbledon-2024' },
    { label: 'Formula 1 Monaco', value: 'formula-1-monaco' }
  ];

  const quickAccessOptions = [
    { label: 'Pilih Akses Cepat', value: '' },
    { label: 'Premier League', value: 'premier-league' },
    { label: 'La Liga', value: 'la-liga' },
    { label: 'Serie A', value: 'serie-a' },
    { label: 'Bundesliga', value: 'bundesliga' },
    { label: 'NBA', value: 'nba' },
    { label: 'UFC', value: 'ufc' }
  ];

  useEffect(() => {
    const fetchMyNews = async () => {
      try {
        const data = await getUserNews();
        setMyNews(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingMyNews(false);
      }
    };
    fetchMyNews();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError('');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, image: file });
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else {
      setPreviewUrl(null);
    }
  };

  const handleRemoveImage = () => {
    setFormData({ ...formData, image: null });
    setPreviewUrl(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.content.trim() || !formData.category.trim()) {
      setError('Judul, konten, dan kategori harus diisi');
      return;
    }

    const data = new FormData();
    data.append('title', formData.title);
    data.append('content', formData.content);
    data.append('category', formData.category);
    if (formData.quickAccess) data.append('quickAccess', formData.quickAccess);
    if (formData.trending) data.append('trending', formData.trending);
    if (formData.image) data.append('image', formData.image);

    setLoading(true);
    try {
      await createNews(data);
      navigate('/dashboard', {
        state: { message: 'Artikel berhasil dipublikasikan!' }
      });
    } catch (error: any) {
      setError(error.response?.data?.message || 'Gagal mempublikasikan artikel');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Yakin ingin hapus berita ini?')) return;
    try {
      await deleteNews(id.toString());
      setMyNews((prev) => prev.filter((item) => item.id !== id));
    } catch {
      alert('Gagal menghapus berita');
    }
  };

  const handleEdit = (id: number) => {
    navigate(`/edit-news/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-200 flex items-center space-x-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <h1 className="text-2xl font-bold text-gray-900">Tulis Artikel Baru</h1>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6" encType="multipart/form-data">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
                {error}
              </div>
            )}

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-md"
              placeholder="Judul Artikel"
              required
            />

            <div>
              <label className="block text-sm mb-1">Gambar Artikel</label>
              <div
                className="relative mt-1 w-full max-w-sm mx-auto h-48 border-2 border-dashed border-gray-300 rounded-md overflow-hidden cursor-pointer flex justify-center items-center bg-gray-50"
                onClick={() => document.getElementById('hiddenFileInput')?.click()}
              >
                {previewUrl ? (
                  <>
                    <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveImage();
                      }}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 shadow"
                    >
                      <XCircle className="h-4 w-4" />
                    </button>
                  </>
                ) : (
                  <span className="text-gray-400">Klik untuk pilih gambar</span>
                )}
              </div>
              <input
                id="hiddenFileInput"
                type="file"
                name="image"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-md"
              required
            >
              <option value="">Pilih Kategori</option>
              <option value="Sepak Bola">Sepak Bola</option>
              <option value="Bola Basket">Bola Basket</option>
              <option value="Bulutangkis">Bulutangkis</option>
              <option value="Tennis">Tennis</option>
              <option value="MMA">MMA</option>
              <option value="Tinju">Tinju</option>
              <option value="Moto GP">Moto GP</option>
              <option value="E-Sport">E-Sport</option>
              <option value="Lainnya">Lainnya</option>
            </select>

            <select
              name="quickAccess"
              value={formData.quickAccess || ''}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-md"
            >
              {quickAccessOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>

            <select
              name="trending"
              value={formData.trending || ''}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-md"
            >
              {trendingOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>

            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows={8}
              className="w-full px-4 py-3 border rounded-md"
              placeholder="Konten Artikel"
              required
            />

            <div className="flex justify-end gap-3 pt-4 border-t">
              <button
                type="button"
                onClick={() => navigate('/dashboard')}
                className="px-4 py-2 border rounded-md"
              >
                Batal
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                {loading ? 'Mempublikasikan...' : 'Publikasikan'}
              </button>
            </div>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Berita Saya</h2>
          {loadingMyNews ? (
            <p>Loading...</p>
          ) : myNews.length === 0 ? (
            <p>Belum ada berita yang Anda tulis.</p>
          ) : (
            <ul className="space-y-4">
              {myNews.map((item) => (
                <li
                  key={item.id}
                  className="bg-gray-50 rounded p-4 shadow flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-600">
                      {new Date(item.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <div className="space-x-2">
                    <button
                      onClick={() => handleEdit(item.id)}
                      className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
                    >
                      <Edit2 className="inline h-4 w-4 mr-1" /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
                    >
                      <Trash2 className="inline h-4 w-4 mr-1" /> Hapus
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AddNews;
