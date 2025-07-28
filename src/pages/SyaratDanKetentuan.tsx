
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { FileText, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

const SyaratDanKetentuan = () => {
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
                  <h1 className="text-3xl font-bold text-gray-900 font-roboto-condensed">SYARAT DAN KETENTUAN</h1>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <div className="flex items-center">
                    <AlertTriangle className="h-5 w-5 text-yellow-400 mr-2" />
                    <p className="text-yellow-800 text-sm">
                      Dengan menggunakan SportNews, Anda menyetujui syarat dan ketentuan berikut
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <section>
                  <div className="flex items-center mb-4">
                    <FileText className="h-6 w-6 text-blue-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900 font-roboto-condensed">PENERIMAAN SYARAT</h2>
                  </div>
                  <div className="prose max-w-none text-gray-600">
                    <p className="mb-4">
                      Dengan mengakses dan menggunakan situs web SportNews, Anda setuju untuk terikat oleh syarat dan ketentuan ini. 
                      Jika Anda tidak setuju dengan bagian mana pun dari syarat-syarat ini, Anda tidak boleh menggunakan layanan kami.
                    </p>
                  </div>
                </section>

                <section>
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900 font-roboto-condensed">PENGGUNAAN YANG DIIZINKAN</h2>
                  </div>
                  <div className="prose max-w-none text-gray-600">
                    <p className="mb-4">Anda diizinkan untuk:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Mengakses dan membaca artikel berita olahraga</li>
                      <li>Membuat akun pengguna dengan informasi yang akurat</li>
                      <li>Berinteraksi dengan konten melalui komentar dan berbagi</li>
                      <li>Menggunakan fitur pencarian dan navigasi situs</li>
                      <li>Berlangganan newsletter dan notifikasi</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <div className="flex items-center mb-4">
                    <XCircle className="h-6 w-6 text-red-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900 font-roboto-condensed">PENGGUNAAN YANG DILARANG</h2>
                  </div>
                  <div className="prose max-w-none text-gray-600">
                    <p className="mb-4">Anda DILARANG untuk:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Menyalin, mendistribusikan, atau memodifikasi konten tanpa izin</li>
                      <li>Menggunakan situs untuk aktivitas ilegal atau merugikan</li>
                      <li>Mengirim spam, virus, atau malware</li>
                      <li>Melakukan scraping atau crawling otomatis</li>
                      <li>Mengganggu operasi normal situs web</li>
                      <li>Menyamar sebagai pengguna lain atau memberikan informasi palsu</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-roboto-condensed">HAK KEKAYAAN INTELEKTUAL</h2>
                  <div className="prose max-w-none text-gray-600">
                    <p className="mb-4">
                      Semua konten di SportNews, termasuk teks, gambar, logo, dan desain, dilindungi oleh hak cipta dan 
                      hak kekayaan intelektual lainnya. Penggunaan konten tanpa izin tertulis dari SportNews adalah 
                      pelanggaran hukum.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-roboto-condensed">AKUN PENGGUNA</h2>
                  <div className="prose max-w-none text-gray-600">
                    <p className="mb-4">Ketika membuat akun, Anda bertanggung jawab untuk:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Memberikan informasi yang akurat dan terkini</li>
                      <li>Menjaga kerahasiaan kata sandi Anda</li>
                      <li>Memberitahu kami jika terjadi penggunaan tidak sah pada akun Anda</li>
                      <li>Tidak berbagi akun dengan orang lain</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-roboto-condensed">KONTEN PENGGUNA</h2>
                  <div className="prose max-w-none text-gray-600">
                    <p className="mb-4">
                      Jika Anda mengirimkan konten (komentar, artikel, dll), Anda memberikan SportNews lisensi 
                      non-eksklusif untuk menggunakan, memodifikasi, dan menampilkan konten tersebut. Anda 
                      bertanggung jawab penuh atas konten yang Anda kirimkan.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-roboto-condensed">PEMBATASAN TANGGUNG JAWAB</h2>
                  <div className="prose max-w-none text-gray-600">
                    <p className="mb-4">
                      SportNews tidak bertanggung jawab atas kerugian langsung atau tidak langsung yang timbul dari 
                      penggunaan situs ini. Kami tidak menjamin keakuratan 100% dari semua informasi yang disajikan.
                    </p>
                  </div>
                </section>

                <section className="bg-red-50 rounded-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-roboto-condensed">PELANGGARAN DAN SANKSI</h2>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                      <h3 className="font-bold text-gray-900 mb-2">Peringatan</h3>
                      <p className="text-gray-600 text-sm">Pelanggaran ringan akan mendapat peringatan tertulis</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                      <h3 className="font-bold text-gray-900 mb-2">Suspensi Sementara</h3>
                      <p className="text-gray-600 text-sm">Pelanggaran berulang dapat menyebabkan suspensi akun</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-red-600">
                      <h3 className="font-bold text-gray-900 mb-2">Terminasi Permanen</h3>
                      <p className="text-gray-600 text-sm">Pelanggaran serius akan menyebabkan penghapusan akun permanen</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-roboto-condensed">PERUBAHAN SYARAT</h2>
                  <div className="prose max-w-none text-gray-600">
                    <p className="mb-4">
                      SportNews berhak mengubah syarat dan ketentuan ini kapan saja. Perubahan akan dinotifikasi 
                      melalui situs web dan/atau email. Penggunaan berkelanjutan setelah perubahan dianggap sebagai 
                      persetujuan terhadap syarat yang baru.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-roboto-condensed">KONTAK</h2>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-gray-800">
                      Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini:<br />
                      <strong>Email:</strong> legal@sportnews.com<br />
                      <strong>Telepon:</strong> +62 21 1234 5678
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

export default SyaratDanKetentuan;
