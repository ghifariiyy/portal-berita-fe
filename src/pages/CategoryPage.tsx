import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsCard from '../components/NewsCard';
import Sidebar from '../components/Sidebar';
import { getAllNews } from '../services/api';
import { NewsItem } from './Index';
import { TrendingUp } from 'lucide-react';

const CategoryPage = () => {
  const { category } = useParams();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  const categoryMap: { [key: string]: string } = {
    'sepak-bola': 'SEPAK BOLA',
    'bola-basket': 'BOLA BASKET',
    'bulutangkis': 'BULUTANGKIS',
    'tennis': 'TENNIS',
    'mma': 'MMA',
    'tinju': 'TINJU',
    'moto-gp': 'MOTO GP',
    'e-sport': 'E-SPORT',
    'lainnya': 'LAINNYA',
    'basket': 'BOLA BASKET',
    'sepak': 'SEPAK BOLA',
  };

  const categoryTitle =
    categoryMap[category || ''] || category?.toUpperCase() || 'KATEGORI';

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getAllNews();

        const normalizedCategory =
          (categoryMap[category || ''] || category || '')
            .replace(/-/g, ' ')
            .trim()
            .toUpperCase();

        console.log("category param:", category);
        console.log("normalizedCategory:", normalizedCategory);
        console.log("all news:", data);

        const filteredNews = data.filter((item: NewsItem) => {
          if (!item.category) return false;
          const itemCategory = item.category.replace(/-/g, ' ').trim().toUpperCase();
          return itemCategory === normalizedCategory;
        });

        setNews(filteredNews);
      } catch (error) {
        console.error('Error fetching category news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  const handleReadNews = (newsItem: NewsItem) => {
    window.location.href = `/news/${newsItem.id}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Category Header */}
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-red-600 to-blue-600 rounded-full mr-4"></div>
                <h1 className="text-3xl font-bold text-gray-900 font-roboto-condensed">{categoryTitle}</h1>
              </div>
              <p className="text-gray-600">
                Berita terbaru seputar {categoryTitle.toLowerCase()}
              </p>
            </div>

            {/* News Grid */}
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-white rounded-lg shadow-lg animate-pulse">
                    <div className="h-48 bg-gray-300 rounded-t-lg"></div>
                    <div className="p-5">
                      <div className="h-4 bg-gray-300 rounded mb-3"></div>
                      <div className="h-4 bg-gray-300 rounded mb-3"></div>
                      <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {news.map((newsItem) => (
                  <NewsCard
                    key={newsItem.id}
                    news={newsItem}
                    onRead={() => handleReadNews(newsItem)}
                  />
                ))}
              </div>
            )}

            {!loading && news.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-roboto-condensed">Tidak Ada Berita</h3>
                <p className="text-gray-500">Belum ada berita untuk kategori {categoryTitle.toLowerCase()}</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CategoryPage;
