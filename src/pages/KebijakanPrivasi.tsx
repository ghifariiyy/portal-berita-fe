
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { Shield, Eye, Lock, Users, AlertCircle } from 'lucide-react';

const KebijakanPrivasi = () => {
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
                  <h1 className="text-3xl font-bold text-gray-900 font-roboto-condensed">KEBIJAKAN PRIVASI</h1>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                  <div className="flex items-center">
                    <AlertCircle className="h-5 w-5 text-blue-400 mr-2" />
                    <p className="text-blue-800 text-sm">
                      Terakhir diperbarui: 1 Januari 2024
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  SportNews berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda. Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda.
                </p>
              </div>

              <div className="space-y-8">
                <section>
                  <div className="flex items-center mb-4">
                    <Shield className="h-6 w-6 text-green-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900 font-roboto-condensed">INFORMASI YANG KAMI KUMPULKAN</h2>
                  </div>
                  <div className="prose max-w-none text-gray-600">
                    <p className="mb-4">Kami mengumpulkan informasi berikut:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Informasi pribadi yang Anda berikan saat mendaftar (nama, email, nomor telepon)</li>
                      <li>Data aktivitas Anda di situs web (artikel yang dibaca, waktu kunjungan)</li>
                      <li>Informasi teknis (alamat IP, jenis browser, sistem operasi)</li>
                      <li>Cookies dan teknologi pelacakan serupa</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <div className="flex items-center mb-4">
                    <Eye className="h-6 w-6 text-blue-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900 font-roboto-condensed">BAGAIMANA KAMI MENGGUNAKAN INFORMASI</h2>
                  </div>
                  <div className="prose max-w-none text-gray-600">
                    <p className="mb-4">Informasi Anda digunakan untuk:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Menyediakan dan meningkatkan layanan SportNews</li>
                      <li>Personalisasi konten dan rekomendasi berita</li>
                      <li>Mengirim newsletter dan notifikasi (dengan persetujuan Anda)</li>
                      <li>Analisis penggunaan situs untuk perbaikan layanan</li>
                      <li>Komunikasi terkait akun dan layanan pelanggan</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <div className="flex items-center mb-4">
                    <Lock className="h-6 w-6 text-red-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900 font-roboto-condensed">KEAMANAN DATA</h2>
                  </div>
                  <div className="prose max-w-none text-gray-600">
                    <p className="mb-4">Kami menerapkan langkah-langkah keamanan yang ketat:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Enkripsi SSL untuk semua transmisi data</li>
                      <li>Akses terbatas ke data pribadi oleh staf yang berwenang</li>
                      <li>Pemantauan keamanan 24/7 terhadap ancaman cyber</li>
                      <li>Backup data secara berkala untuk mencegah kehilangan data</li>
                      <li>Audit keamanan reguler oleh pihak ketiga independen</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 text-purple-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900 font-roboto-condensed">BERBAGI INFORMASI</h2>
                  </div>
                  <div className="prose max-w-none text-gray-600">
                    <p className="mb-4">Kami TIDAK menjual data pribadi Anda. Informasi hanya dibagikan dalam kondisi berikut:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Dengan persetujuan eksplisit dari Anda</li>
                      <li>Kepada penyedia layanan pihak ketiga yang membantu operasi situs</li>
                      <li>Untuk mematuhi kewajiban hukum atau perintah pengadilan</li>
                      <li>Dalam situasi darurat untuk melindungi keselamatan pengguna</li>
                    </ul>
                  </div>
                </section>

                <section className="bg-gray-50 rounded-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-roboto-condensed">HAK-HAK ANDA</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h3 className="font-bold text-gray-900 mb-2">Akses Data</h3>
                      <p className="text-gray-600 text-sm">Meminta salinan data pribadi yang kami miliki tentang Anda</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h3 className="font-bold text-gray-900 mb-2">Perbaikan Data</h3>
                      <p className="text-gray-600 text-sm">Meminta perbaikan atau pembaruan informasi yang tidak akurat</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h3 className="font-bold text-gray-900 mb-2">Penghapusan Data</h3>
                      <p className="text-gray-600 text-sm">Meminta penghapusan data pribadi dalam kondisi tertentu</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h3 className="font-bold text-gray-900 mb-2">Portabilitas Data</h3>
                      <p className="text-gray-600 text-sm">Meminta transfer data Anda ke layanan lain</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-roboto-condensed">HUBUNGI KAMI</h2>
                  <p className="text-gray-600 mb-4">
                    Jika Anda memiliki pertanyaan tentang kebijakan privasi ini atau ingin menggunakan hak-hak Anda, silakan hubungi kami:
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-gray-800">
                      <strong>Email:</strong> privacy@sportnews.com<br />
                      <strong>Telepon:</strong> +62 21 1234 5678<br />
                      <strong>Alamat:</strong> Jl. Sudirman No. 123, Jakarta Pusat 10110
                    </p>
                  </div>
                </section>
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

export default KebijakanPrivasi;
