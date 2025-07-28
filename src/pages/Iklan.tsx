
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { Target, BarChart, Users, Eye, TrendingUp, Star } from 'lucide-react';

const Iklan = () => {
  const adPackages = [
    {
      name: 'Banner Standard',
      price: 'Rp 5.000.000',
      period: '/bulan',
      features: ['Banner 728x90 pixels', 'Posisi header/footer', '500K impressions', 'Basic analytics'],
      popular: false
    },
    {
      name: 'Premium Spotlight',
      price: 'Rp 12.000.000',
      period: '/bulan',
      features: ['Banner 300x250 pixels', 'Posisi sidebar premium', '1M impressions', 'Advanced analytics', 'Mobile optimization'],
      popular: true
    },
    {
      name: 'Hero Banner',
      price: 'Rp 20.000.000',
      period: '/bulan',
      features: ['Banner 1920x400 pixels', 'Posisi hero/featured', '2M impressions', 'Premium analytics', 'Video support', 'Priority placement'],
      popular: false
    }
  ];

  const stats = [
    { icon: Users, label: 'Monthly Users', value: '2.5M+' },
    { icon: Eye, label: 'Page Views', value: '15M+' },
    { icon: TrendingUp, label: 'Engagement Rate', value: '8.5%' },
    { icon: Target, label: 'Sports Audience', value: '85%' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="mb-8">
                <div className="flex items-center mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-red-600 to-blue-600 rounded-full mr-4"></div>
                  <h1 className="text-3xl font-bold text-gray-900 font-roboto-condensed">BERIKLAN DI SPORTNEWS</h1>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Jangkau jutaan penggemar olahraga Indonesia melalui platform media olahraga terdepan. 
                  SportNews menawarkan solusi periklanan yang efektif untuk meningkatkan brand awareness Anda.
                </p>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-red-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-8 w-8 text-red-600" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1 font-roboto-condensed">{stat.value}</div>
                      <div className="text-gray-600 text-sm">{stat.label}</div>
                    </div>
                  );
                })}
              </div>

              {/* Why Advertise */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 font-roboto-condensed">MENGAPA BERIKLAN DI SPORTNEWS?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 font-roboto-condensed">TARGET AUDIENCE TEPAT</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        85% pembaca adalah penggemar olahraga aktif
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        Usia 18-45 tahun dengan daya beli tinggi
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        Tersebar di seluruh Indonesia
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 font-roboto-condensed">PERFORMA TINGGI</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        CTR rata-rata 2.8% (di atas industri)
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                        Engagement rate 8.5%
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                        Return visitor 65%
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Ad Packages */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 font-roboto-condensed">PAKET PERIKLANAN</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {adPackages.map((pkg, index) => (
                  <div key={index} className={`relative border-2 rounded-xl p-6 ${pkg.popular ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}>
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center">
                          <Star className="h-4 w-4 mr-1" />
                          POPULER
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 font-roboto-condensed">{pkg.name}</h3>
                      <div className="text-3xl font-bold text-red-600">{pkg.price}</div>
                      <div className="text-gray-500">{pkg.period}</div>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <button className={`w-full py-3 rounded-lg font-bold transition-all ${
                      pkg.popular 
                        ? 'bg-gradient-to-r from-red-600 to-blue-600 text-white hover:from-red-700 hover:to-blue-700' 
                        : 'border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
                    }`}>
                      PILIH PAKET
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-gradient-to-r from-red-50 to-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-roboto-condensed">CUSTOM ADVERTISING SOLUTION</h3>
                <p className="text-gray-600 mb-4">
                  Butuh solusi periklanan yang disesuaikan dengan kebutuhan spesifik Anda? Tim kami siap membantu 
                  merancang kampanye iklan yang tepat sasaran.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-blue-600 text-white font-bold rounded-lg hover:from-red-700 hover:to-blue-700 transition-all">
                    KONSULTASI GRATIS
                  </button>
                  <button className="px-6 py-3 border-2 border-red-600 text-red-600 font-bold rounded-lg hover:bg-red-600 hover:text-white transition-all">
                    DOWNLOAD MEDIA KIT
                  </button>
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

export default Iklan;
