
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      console.log('Newsletter subscription:', email);
      setEmail('');
      // TODO: Implement newsletter subscription
    }
  };

  const sportsCategories = [
    { name: 'Sepak Bola', slug: 'sepak-bola' },
    { name: 'Bola Basket', slug: 'bola-basket' },
    { name: 'Bulutangkis', slug: 'bulutangkis' },
    { name: 'Tennis', slug: 'tennis' },
    { name: 'MMA', slug: 'mma' },
    { name: 'Tinju', slug: 'tinju' }
  ];

  const quickLinks = [
    { name: 'Tentang Kami', path: '/tentang-kami' },
    { name: 'Hubungi Kami', path: '/hubungi-kami' },
    { name: 'Kebijakan Privasi', path: '/kebijakan-privasi' },
    { name: 'Syarat & Ketentuan', path: '/syarat-dan-ketentuan' },
    { name: 'Karir', path: '/karir' },
    { name: 'Iklan', path: '/iklan' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl font-roboto-condensed">S</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-roboto-condensed">SPORTNEWS</h3>
                <p className="text-sm text-slate-400">Breaking Sports</p>
              </div>
            </Link>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Portal berita olahraga terdepan yang menyajikan informasi terkini, analisis mendalam, dan liputan eksklusif dari dunia olahraga.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors hover:scale-110 transform duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-sky-500 rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors hover:scale-110 transform duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors hover:scale-110 transform duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors hover:scale-110 transform duration-300">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Sports Categories */}
          <div>
            <h4 className="text-lg font-bold mb-5 font-roboto-condensed">KATEGORI OLAHRAGA</h4>
            <ul className="space-y-3">
              {sportsCategories.map((category, index) => (
                <li key={index}>
                  <Link 
                    to={`/kategori/${category.slug}`}
                    className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 transform duration-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 opacity-0 hover:opacity-100 transition-opacity"></span>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-5 font-roboto-condensed">TAUTAN CEPAT</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 transform duration-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-5 font-roboto-condensed">HUBUNGI KAMI</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="text-slate-400">info@sportnews.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="text-slate-400">+62 21 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-slate-400">Jakarta, Indonesia</span>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h5 className="text-sm font-bold mb-3 font-roboto-condensed text-slate-300">BERLANGGANAN NEWSLETTER</h5>
              <form onSubmit={handleNewsletterSubmit} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Anda"
                  className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white placeholder-slate-400"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-red-600 to-blue-600 rounded-r-lg hover:from-red-700 hover:to-blue-700 transition-all"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2024 SportNews. All rights reserved. | Powered by Sports Journalism
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/privacy-policy" className="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-slate-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
              <Link to="/cookie-policy" className="text-slate-400 hover:text-white text-sm transition-colors">Cookie Policy</Link>
              <Link to="/disclaimer" className="text-slate-400 hover:text-white text-sm transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
