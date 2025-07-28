import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import NewsCard from '../components/NewsCard';
import Footer from '../components/Footer';
import { getAllNews } from '../services/api';
import { ArrowRight, TrendingUp } from 'lucide-react';

export interface NewsItem {
  id: number;
  title: string;
  content: string;
  authorName: string;
  createdAt: string;
  category: string;
  image?: string;
  trending?: string;
  quickAccess?: string;
}

const backendUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const Index = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get('q') || '';

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getAllNews();
        setNews(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const filteredNews =
    query
      ? news.filter((item) =>
          `${item.title} ${item.content} ${item.category}`
            .toLowerCase()
            .includes(query.toLowerCase())
        )
      : selectedCategory === 'all'
      ? news
      : news.filter((item) =>
          item.title.toLowerCase().includes(selectedCategory.toLowerCase())
        );

  const featuredNews = filteredNews[0];
  const otherNews = filteredNews.slice(1);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured News Section */}
            {featuredNews && !loading && (
              <div className="mb-8">
                <div className="flex items-center mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-red-600 to-blue-600 rounded-full mr-4"></div>
                  <h2 className="text-3xl font-bold text-gray-900 font-roboto-condensed">
                    HEADLINE UTAMA
                  </h2>
                </div>
                <NewsCard news={featuredNews} featured />
              </div>
            )}

            {/* Latest News Section */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-1 h-8 bg-gradient-to-b from-red-600 to-blue-600 rounded-full mr-4"></div>
                  <h2 className="text-2xl font-bold text-gray-900 font-roboto-condensed">
                    BERITA TERBARU
                  </h2>
                </div>
                <button className="flex items-center text-red-600 hover:text-red-700 font-medium text-sm transition-colors">
                  Lihat Semua
                  <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>

              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-lg shadow-lg animate-pulse"
                    >
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
                  {otherNews.map((newsItem) => (
                    <NewsCard key={newsItem.id} news={newsItem} />
                  ))}
                </div>
              )}

              {!loading && filteredNews.length === 0 && (
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-roboto-condensed">
                    Tidak Ada Berita
                  </h3>
                  <p className="text-gray-500">
                    Belum ada berita yang tersedia saat ini
                  </p>
                </div>
              )}
            </div>

            {/* Sorotan Minggu Ini */}
            {!loading && filteredNews.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <div className="flex items-center mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-red-600 to-blue-600 rounded-full mr-4"></div>
                  <h2 className="text-2xl font-bold text-gray-900 font-roboto-condensed">
                    SOROTAN MINGGU INI
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {otherNews.slice(0, 4).map((newsItem) => {
                    const imageUrl =
                      newsItem.image && newsItem.image.trim() !== ''
                        ? newsItem.image.startsWith('http')
                          ? newsItem.image
                          : `${backendUrl}${newsItem.image}`
                        : 'https://images.unsplash.com/photo-1614632537239-14be945c5ead?w=80&h=80&fit=crop';

                    return (
                      <div
                        key={newsItem.id}
                        className="flex space-x-4 p-4 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                        onClick={() =>
                          (window.location.href = `/news/${newsItem.id}`)
                        }
                      >
                        <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                          <img
                            src={imageUrl}
                            alt={newsItem.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-sm text-gray-900 line-clamp-2 mb-1 font-roboto-condensed">
                            {newsItem.title}
                          </h4>
                          <p className="text-xs text-gray-500 line-clamp-2">
                            {newsItem.content.substring(0, 100)}...
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
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

export default Index;
