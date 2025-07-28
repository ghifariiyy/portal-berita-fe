import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, User, LogOut, PlusCircle, Menu, X, Clock, Sun } from 'lucide-react';

interface Weather {
  temp: string;
  condition: string;
}

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [weather] = useState<Weather>({ temp: '28°C', condition: 'Cerah' });

  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem('token');
  const userName = localStorage.getItem('userName') || 'User';

  const categories = [
    { name: 'SEPAK BOLA', slug: 'sepak-bola' },
    { name: 'BOLA BASKET', slug: 'bola-basket' },
    { name: 'BULUTANGKIS', slug: 'bulutangkis' },
    { name: 'TENNIS', slug: 'tennis' },
    { name: 'MMA', slug: 'mma' },
    { name: 'TINJU', slug: 'tinju' },
    { name: 'MOTO GP', slug: 'moto-gp' },
    { name: 'E-SPORT', slug: 'e-sport' },
    { name: 'LAINNYA', slug: 'lainnya' }
  ];

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('id-ID', {
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'Asia/Jakarta'
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    navigate('/');
    setIsUserMenuOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-slate-900 text-white shadow-xl">
      {/* Top Bar with Time & Weather */}
      <div className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-1">
          <div className="flex justify-between items-center text-xs">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>Jakarta, {currentTime} WIB</span>
              </div>
              <div className="hidden sm:flex items-center space-x-1">
                <Sun className="h-3 w-3" />
                <span>
                  {weather.temp} | {weather.condition}
                </span>
              </div>
            </div>
            <div className="text-slate-400">Portal Berita Olahraga Terdepan</div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Modern Text Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-3xl font-extrabold tracking-tight text-white">
              <span className="text-red-500">SPORT</span>
              <span className="text-blue-400">NEWS</span>
            </h1>
          </Link>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <input
                type="text"
                placeholder="Cari berita olahraga..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-slate-400"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
            </form>
          </div>

          {/* Desktop User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <User className="h-5 w-5" />
                  <span className="text-sm font-medium">{userName}</span>
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-xl py-2 z-50 border border-slate-700">
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-sm hover:bg-slate-700"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Dashboard Saya
                    </Link>
                    <Link
                      to="/add-news"
                      className="flex items-center px-4 py-2 text-sm hover:bg-slate-700"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <PlusCircle className="h-4 w-4 mr-2" />
                      Tulis Artikel
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-sm hover:bg-slate-700"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex space-x-3">
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium hover:text-red-400 transition-colors"
                >
                  MASUK
                </Link>
                <Link
                  to="/register"
                  className="px-6 py-2 bg-gradient-to-r from-red-600 to-blue-600 text-white text-sm font-bold rounded-lg hover:from-red-700 hover:to-blue-700 transition-all shadow-lg"
                >
                  DAFTAR
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-800"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Categories Navigation */}
      <div className="bg-slate-800 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="hidden md:flex space-x-8 overflow-x-auto py-4">
            {categories.map((category) => (
              <Link
                key={category.slug}
                to={`/kategori/${category.slug}`}
                className="whitespace-nowrap text-sm font-roboto-condensed font-medium text-slate-300 hover:text-white hover:bg-slate-700 px-3 py-2 rounded transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </div>

          {/* Mobile Categories - Horizontal Scroll */}
          <div className="md:hidden py-3">
            <div className="flex space-x-4 overflow-x-auto pb-2">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  to={`/kategori/${category.slug}`}
                  className="whitespace-nowrap text-xs font-roboto-condensed font-medium text-slate-300 hover:text-white bg-slate-700 px-3 py-2 rounded"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-4 py-4 space-y-4">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Cari berita olahraga..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white placeholder-slate-400"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
            </form>

            {/* Mobile User Actions */}
            {isLoggedIn ? (
              <div className="space-y-2">
                <Link
                  to="/dashboard"
                  className="block py-2 text-sm font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Dashboard Saya
                </Link>
                <Link
                  to="/add-news"
                  className="block py-2 text-sm font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Tulis Artikel
                </Link>
                <button
                  onClick={handleLogout}
                  className="block py-2 text-sm font-medium text-red-400"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                <Link
                  to="/login"
                  className="block py-2 text-sm font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  MASUK
                </Link>
                <Link
                  to="/register"
                  className="block py-2 text-sm font-medium text-red-400"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  DAFTAR
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
