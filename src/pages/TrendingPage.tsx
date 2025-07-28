import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsCard from '../components/NewsCard';
import Sidebar from '../components/Sidebar';
import { getAllNews } from '../services/api';
import { NewsItem } from './Index';
import { Flame, ArrowLeft } from 'lucide-react';

const TrendingPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  const trendingTopics = [
    { title: 'Liga Champions 2024', slug: 'liga-champions-2024' },
    { title: 'World Cup Qatar', slug: 'world-cup-qatar' },
    { title: 'NBA Finals', slug: 'nba-finals' },
    { title: 'Wimbledon 2024', slug: 'wimbledon-2024' },
    { title: 'Formula 1 Monaco', slug: 'formula-1-monaco' }
  ];

  const currentTopic = trendingTopics.find(topic => topic.slug === slug);
  const topicTitle =
    currentTopic?.title ||
    slug?.replace(/-/g, ' ').toUpperCase() ||
    'TRENDING TOPIC';

  useEffect(() => {
    const fetchTrendingNews = async () => {
      try {
        const data = await getAllNews();

        const filteredNews = data.filter((item: NewsItem) => {
          if (!slug) return false;
          return item.trending?.toLowerCase() === slug.toLowerCase();
        });

        setNews(filteredNews);
      } catch (error) {
        console.error('Error fetching trending news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingNews();
  }, [slug]);

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
            <button
              onClick={() => navigate(-1)}
              className="flex items-center space-x-2 text-gray-600 hover:text-red-600 mb-6 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Kembali</span>
            </button>

            <div className="mb-8">
              <div className="flex items-center mb-6">
                <Flame className="h-8 w-8 text-red-500 mr-4" />
                <h1 className="text-3xl font-bold text-gray-900 font-roboto-condensed">
                  {topicTitle}
                </h1>
              </div>
              <p className="text-gray-600">
                Berita trending seputar {topicTitle.toLowerCase()}
              </p>
            </div>

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
            ) : news.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {news.map((newsItem) => (
                  <NewsCard
                    key={newsItem.id}
                    news={newsItem}
                    onRead={() => handleReadNews(newsItem)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500 py-20">
                Tidak ada berita untuk {topicTitle}.
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

export default TrendingPage;
