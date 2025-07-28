import { useEffect, useState } from 'react';
import { TrendingUp, Trophy, Clock, Users, Flame, Star, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAllNews } from '../services/api';
import { NewsItem } from '../pages/Index';

const Sidebar = () => {
  const trendingTopics = [
    { title: 'Liga Champions 2024', count: '2.4k', trend: '+12%', slug: 'liga-champions-2024' },
    { title: 'World Cup Qatar', count: '1.8k', trend: '+8%', slug: 'world-cup-qatar' },
    { title: 'NBA Finals', count: '1.2k', trend: '+15%', slug: 'nba-finals' },
    { title: 'Wimbledon 2024', count: '950', trend: '+5%', slug: 'wimbledon-2024' },
    { title: 'Formula 1 Monaco', count: '780', trend: '+20%', slug: 'formula-1-monaco' }
  ];

  const quickAccess = [
    { name: 'Premier League', color: 'bg-purple-600', icon: Trophy, matches: '12 Pertandingan', slug: 'premier-league' },
    { name: 'La Liga', color: 'bg-red-600', icon: Trophy, matches: '8 Pertandingan', slug: 'la-liga' },
    { name: 'Serie A', color: 'bg-green-600', icon: Trophy, matches: '10 Pertandingan', slug: 'serie-a' },
    { name: 'Bundesliga', color: 'bg-yellow-600', icon: Trophy, matches: '6 Pertandingan', slug: 'bundesliga' },
    { name: 'NBA', color: 'bg-blue-600', icon: Users, matches: '15 Pertandingan', slug: 'nba' },
    { name: 'UFC', color: 'bg-orange-600', icon: Users, matches: '3 Event', slug: 'ufc' }
  ];

  const [hotNews, setHotNews] = useState<NewsItem[]>([]);
  const [loadingHot, setLoadingHot] = useState(true);

  useEffect(() => {
    const fetchHotNews = async () => {
      try {
        const data = await getAllNews();
        const sorted = data
          .sort((a: NewsItem, b: NewsItem) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
          .slice(0, 5);
        setHotNews(sorted);
      } catch (err) {
        console.error('Failed to fetch hot news', err);
      } finally {
        setLoadingHot(false);
      }
    };
    fetchHotNews();
  }, []);

  return (
    <div className="space-y-6">
      {/* Trending Topics */}
      <div className="bg-white rounded-xl shadow-xl p-6">
        <div className="flex items-center mb-5">
          <Flame className="h-5 w-5 text-red-500 mr-2" />
          <h3 className="text-lg font-bold text-gray-900 font-roboto-condensed">TRENDING</h3>
        </div>
        <div className="space-y-3">
          {trendingTopics.map((topic, index) => (
            <Link
              key={index}
              to={`/trending/${topic.slug}`}
              className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors group block"
            >
              <div className="flex items-center flex-1">
                <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-red-500 to-blue-500 text-white text-sm font-bold rounded-full mr-3">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-800 group-hover:text-red-600 transition-colors">
                    {topic.title}
                  </div>
                  <div className="text-xs text-gray-500">
                    {topic.count} pembaca • <span className="text-green-500">{topic.trend}</span>
                  </div>
                </div>
              </div>
              <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-red-500 transition-colors" />
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Access Liga */}
      <div className="bg-white rounded-xl shadow-xl p-6">
        <div className="flex items-center mb-5">
          <Trophy className="h-5 w-5 text-blue-500 mr-2" />
          <h3 className="text-lg font-bold text-gray-900 font-roboto-condensed">AKSES CEPAT LIGA</h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {quickAccess.map((league, index) => {
            const IconComponent = league.icon;
            return (
              <Link key={index} to={`/liga/${league.slug}`} className="group cursor-pointer">
                <div className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`w-12 h-12 ${league.color} rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-sm font-bold text-gray-800 mb-1 font-roboto-condensed">
                      {league.name}
                    </span>
                    <span className="text-xs text-gray-500">{league.matches}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Hot News */}
      <div className="bg-white rounded-xl shadow-xl p-6">
        <div className="flex items-center mb-5">
          <Star className="h-5 w-5 text-yellow-500 mr-2" />
          <h3 className="text-lg font-bold text-gray-900 font-roboto-condensed">BERITA POPULER</h3>
        </div>
        <div className="space-y-4">
          {loadingHot ? (
            <p className="text-sm text-gray-500">Loading...</p>
          ) : hotNews.length === 0 ? (
            <p className="text-sm text-gray-500">Belum ada berita populer.</p>
          ) : (
            hotNews.map((news, index) => (
              <Link
                to={`/news/${news.id}`}
                key={news.id}
                className="group block cursor-pointer"
              >
                <div className="p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <h4 className="text-sm font-medium text-gray-800 group-hover:text-red-600 transition-colors mb-2 line-clamp-2">
                    {news.title}
                  </h4>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{new Date(news.createdAt).toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="h-3 w-3" />
                      <span>{index + 1}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
