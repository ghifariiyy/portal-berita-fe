import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsCard from '../components/NewsCard';
import Sidebar from '../components/Sidebar';
import { getAllNews } from '../services/api';
import { NewsItem } from './Index';
import { Trophy, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LeaguePage = () => {
  const { league } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  const leagueMap: { [key: string]: { name: string; description: string } } = {
    'premier-league': { name: 'Premier League', description: 'Liga Inggris' },
    'la-liga': { name: 'La Liga', description: 'Liga Spanyol' },
    'serie-a': { name: 'Serie A', description: 'Liga Italia' },
    'bundesliga': { name: 'Bundesliga', description: 'Liga Jerman' },
    'nba': { name: 'NBA', description: 'National Basketball Association' },
    'ufc': { name: 'UFC', description: 'Ultimate Fighting Championship' }
  };

  const currentLeague = leagueMap[league || ''] || { 
    name: league?.replace('-', ' ').toUpperCase() || 'LIGA', 
    description: 'Liga Olahraga' 
  };

  useEffect(() => {
    const fetchLeagueNews = async () => {
      try {
        const data = await getAllNews();

        const filteredNews = data.filter(
          (item: NewsItem) =>
            (item.quickAccess || '')
              .trim()
              .toLowerCase() === (league || '')
              .trim()
              .toLowerCase()
        );

        setNews(filteredNews);
      } catch (error) {
        console.error('Error fetching league news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeagueNews();
  }, [league]);

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
            {/* Back Button */}
            <button
              onClick={() => navigate(-1)}
              className="flex items-center space-x-2 text-gray-600 hover:text-red-600 mb-6 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Kembali</span>
            </button>

            {/* League Header */}
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <Trophy className="h-8 w-8 text-blue-500 mr-4" />
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 font-roboto-condensed">{currentLeague.name}</h1>
                  <p className="text-gray-600 mt-1">{currentLeague.description}</p>
                </div>
              </div>
            </div>

            {/* League News Grid */}
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

export default LeaguePage;
