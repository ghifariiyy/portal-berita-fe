import { Clock, User, Eye } from 'lucide-react';
import { NewsItem } from '../pages/Index';
import { formatDistanceToNow } from 'date-fns';
import { id } from 'date-fns/locale';
import { useNavigate } from 'react-router-dom';

interface NewsCardProps {
  news: NewsItem;
  featured?: boolean;
  onRead?: () => void;
}

const NewsCard = ({ news, featured = false, onRead }: NewsCardProps) => {
  const navigate = useNavigate();

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

  const truncateContent = (content: string, maxLength: number = featured ? 200 : 120) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + '...';
  };

  const handleClick = () => {
    if (onRead) {
      onRead();
    } else {
      navigate(`/news/${news.id}`);
    }
  };

  // Placeholder images
  const placeholderImages = [
    'https://images.unsplash.com/photo-1614632537239-14be945c5ead?w=800&h=450&fit=crop',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=450&fit=crop',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=450&fit=crop',
    'https://images.unsplash.com/photo-1558618047-b2c9c8e2c79b?w=800&h=450&fit=crop',
    'https://images.unsplash.com/photo-1526230427235-0b25c5c00f8e?w=800&h=450&fit=crop',
    'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=800&h=450&fit=crop',
    'https://images.unsplash.com/photo-1593766827228-8a3783b542d9?w=800&h=450&fit=crop',
  ];

  const imageIndex = news.id % placeholderImages.length;

  const imageUrl =
    news.image && news.image !== ''
      ? `http://localhost:5000${news.image}`
      : placeholderImages[imageIndex];

  if (featured) {
    return (
      <article
        className="bg-white rounded-xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 hover:transform hover:-translate-y-2 cursor-pointer group"
        onClick={handleClick}
      >
        <div className="relative">
          <img
            src={imageUrl}
            alt={news.title}
            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = placeholderImages[imageIndex];
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute top-6 left-6">
            <span className="bg-gradient-to-r from-red-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold font-roboto-condensed shadow-lg">
              HEADLINE
            </span>
          </div>
          <div className="absolute bottom-6 left-6 right-6">
            <h1 className="text-3xl font-bold text-white mb-3 font-roboto-condensed leading-tight group-hover:text-red-200 transition-colors">
              {news.title}
            </h1>
            <p className="text-gray-200 text-base mb-4 line-clamp-2 whitespace-pre-line">
              {truncateContent(news.content)}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-gray-300">
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>{news.authorName}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{formatDate(news.createdAt)}</span>
                </div>
              </div>
              <div className="flex items-center space-x-1 text-sm text-gray-300">
                <Eye className="h-4 w-4" />
                <span>{Math.floor(Math.random() * 1000) + 100}</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1 cursor-pointer group"
      onClick={handleClick}
    >
      <div className="relative">
        <img
          src={imageUrl}
          alt={news.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = placeholderImages[imageIndex];
          }}
        />
        <div className="absolute top-3 left-3">
          <span className="bg-gradient-to-r from-red-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold font-roboto-condensed">
            OLAHRAGA
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-red-600 transition-colors font-roboto-condensed leading-tight">
          {news.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed whitespace-pre-line">
          {truncateContent(news.content)}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center space-x-3 text-xs text-gray-500">
            <div className="flex items-center space-x-1">
              <User className="h-3 w-3" />
              <span className="font-medium">{news.authorName}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>{formatDate(news.createdAt)}</span>
            </div>
          </div>

          <div className="flex items-center space-x-1 text-xs text-gray-500">
            <Eye className="h-3 w-3" />
            <span>{Math.floor(Math.random() * 500) + 50}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
