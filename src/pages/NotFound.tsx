
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-32 h-32 bg-gradient-to-br from-red-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
            <span className="text-white font-bold text-6xl font-roboto-condensed">404</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 font-roboto-condensed">HALAMAN TIDAK DITEMUKAN</h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman telah dipindahkan atau dihapus.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-red-600 to-blue-600 text-white font-bold rounded-lg hover:from-red-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Home className="h-5 w-5 mr-2" />
            Kembali ke Beranda
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Kembali ke Halaman Sebelumnya
          </button>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Butuh bantuan? <Link to="/" className="text-red-600 hover:text-red-700 font-medium">Hubungi kami</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
