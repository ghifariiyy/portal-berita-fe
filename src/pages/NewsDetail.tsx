import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, User, ArrowLeft, Eye, Share2 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getNewsById } from '../services/api';
import { NewsItem } from './Index';
import { formatDistanceToNow } from 'date-fns';
import { id } from 'date-fns/locale';

const NewsDetail = () => {
  const { id: newsId } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      if (!newsId) return;

      try {
        const data = await getNewsById(newsId);
        setNews(data);
      } catch (error) {
        console.error('Error fetching news:', error);
        setNews({
          id: Number(newsId),
          title: 'Detail Berita Olahraga',
          content:
            'Konten berita lengkap akan ditampilkan di sini. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          authorName: 'Admin SportNews',
          createdAt: new Date().toISOString(),
          category: 'LAINNYA',
          image: '',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [newsId]);

  const formatDate = (dateString: string) => {
    try {
      return formatDistanceToNow(new Date(dateString), {
        addSuffix: true,
        locale: id,
      });
    } catch {
      return 'Baru saja';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded mb-4"></div>
            <div className="h-64 bg-gray-300 rounded mb-6"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!news) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Berita Tidak Ditemukan
          </h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-gradient-to-r from-red-600 to-blue-600 text-white font-bold rounded-lg hover:from-red-700 hover:to-blue-700 transition-all"
          >
            Kembali ke Beranda
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gray-600 hover:text-red-600 mb-6 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="font-medium">Kembali</span>
        </button>

        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative h-80">
            <img
              src={
                news.image
                  ? `http://localhost:5000${news.image}`
                  : 'https://images.unsplash.com/photo-1614632537239-14be945c5ead?w=800&h=400&fit=crop'
              }
              alt={news.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src =
                  'https://images.unsplash.com/photo-1614632537239-14be945c5ead?w=800&h=400&fit=crop';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          <div className="p-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-roboto-condensed leading-tight">
              {news.title}
            </h1>

            <div className="flex items-center justify-between border-b border-gray-200 pb-6 mb-8">
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span className="font-medium">{news.authorName}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{formatDate(news.createdAt)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="h-4 w-4" />
                  <span>{Math.floor(Math.random() * 2000) + 500} views</span>
                </div>
              </div>

              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                <Share2 className="h-4 w-4" />
                <span className="text-sm font-medium">Bagikan</span>
              </button>
            </div>

            {/* Content */}
            <div className="prose max-w-none">
              <div className="text-lg leading-relaxed text-gray-800 whitespace-pre-line">
                {news.content}
              </div>
            </div>
          </div>
        </article>
      </div>

      <Footer />
    </div>
  );
};

export default NewsDetail;
