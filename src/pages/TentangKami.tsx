
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { Users, Target, Award, Heart } from 'lucide-react';

const TentangKami = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="mb-8">
                <div className="flex items-center mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-red-600 to-blue-600 rounded-full mr-4"></div>
                  <h1 className="text-3xl font-bold text-gray-900 font-roboto-condensed">TENTANG KAMI</h1>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Portal berita olahraga terdepan yang menghadirkan informasi terkini dari dunia olahraga Indonesia dan internasional.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-roboto-condensed">MISI KAMI</h3>
                  <p className="text-gray-600">
                    Menyajikan berita olahraga yang akurat, terpercaya, dan up-to-date untuk para penggemar olahraga di seluruh Indonesia.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-roboto-condensed">VISI KAMI</h3>
                  <p className="text-gray-600">
                    Menjadi platform berita olahraga nomor satu di Indonesia yang memberikan pengalaman membaca terbaik.
                  </p>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 font-roboto-condensed">KOMITMEN KAMI</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Heart className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Akurasi Informasi</h4>
                      <p className="text-gray-600">Kami berkomitmen menyajikan berita yang akurat dan terverifikasi dari sumber terpercaya.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Komunitas Olahraga</h4>
                      <p className="text-gray-600">Membangun komunitas penggemar olahraga yang solid dan saling mendukung.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Target className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Inovasi Digital</h4>
                      <p className="text-gray-600">Terus berinovasi dalam penyajian konten digital yang menarik dan interaktif.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-roboto-condensed">BERGABUNGLAH DENGAN KAMI</h3>
                <p className="text-gray-700 mb-4">
                  Jadilah bagian dari komunitas SportNews dan nikmati pengalaman membaca berita olahraga yang tak terlupakan.
                </p>
                <div className="flex space-x-4">
                  <span className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium">100K+ Pembaca</span>
                  <span className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">50+ Penulis</span>
                  <span className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium">24/7 Update</span>
                </div>
              </div>
            </div>
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

export default TentangKami;
