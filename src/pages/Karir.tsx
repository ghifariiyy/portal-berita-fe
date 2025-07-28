
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { Briefcase, Users, MapPin, Clock, Star, ArrowRight } from 'lucide-react';

const Karir = () => {
  const jobOpenings = [
    {
      title: 'Sports Journalist',
      department: 'Editorial',
      location: 'Jakarta',
      type: 'Full-time',
      level: 'Mid-Senior',
      description: 'Mencari jurnalis olahraga berpengalaman untuk meliput berbagai event olahraga nasional dan internasional.'
    },
    {
      title: 'Frontend Developer',
      department: 'Technology',
      location: 'Jakarta / Remote',
      type: 'Full-time',
      level: 'Senior',
      description: 'Mengembangkan dan memelihara platform digital SportNews dengan teknologi React dan Node.js.'
    },
    {
      title: 'Social Media Manager',
      department: 'Marketing',
      location: 'Jakarta',
      type: 'Full-time',
      level: 'Mid-Level',
      description: 'Mengelola strategi media sosial dan engagement dengan komunitas penggemar olahraga.'
    },
    {
      title: 'Video Editor',
      department: 'Content',
      location: 'Jakarta',
      type: 'Contract',
      level: 'Junior-Mid',
      description: 'Memproduksi konten video menarik untuk berbagai platform digital SportNews.'
    }
  ];

  const benefits = [
    { icon: Star, title: 'Gaji Kompetitif', desc: 'Paket kompensasi yang menarik sesuai industri' },
    { icon: Users, title: 'Tim Solid', desc: 'Bekerja dengan tim profesional dan suportif' },
    { icon: Briefcase, title: 'Karir Growth', desc: 'Peluang pengembangan karir yang jelas' },
    { icon: Clock, title: 'Work-Life Balance', desc: 'Fleksibilitas waktu kerja dan remote work' }
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
                  <h1 className="text-3xl font-bold text-gray-900 font-roboto-condensed">KARIR DI SPORTNEWS</h1>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Bergabunglah dengan tim SportNews dan jadilah bagian dari revolusi media olahraga digital Indonesia. 
                  Kami mencari talenta terbaik untuk berkembang bersama.
                </p>
              </div>

              {/* Benefits */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 font-roboto-condensed">MENGAPA BERGABUNG DENGAN KAMI?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                      <div key={index} className="bg-gradient-to-r from-red-50 to-blue-50 p-6 rounded-lg">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-blue-600 rounded-lg flex items-center justify-center">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2 font-roboto-condensed">{benefit.title}</h3>
                            <p className="text-gray-600">{benefit.desc}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Culture */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 font-roboto-condensed">BUDAYA KERJA KAMI</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-red-600">01</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 font-roboto-condensed">PASSION FOR SPORTS</h3>
                    <p className="text-gray-600 text-sm">Kami semua adalah penggemar olahraga sejati yang passionate dengan industri ini</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-blue-600">02</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 font-roboto-condensed">INNOVATION FIRST</h3>
                    <p className="text-gray-600 text-sm">Selalu mencari cara baru untuk menyajikan konten olahraga yang menarik</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-green-600">03</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 font-roboto-condensed">TEAM COLLABORATION</h3>
                    <p className="text-gray-600 text-sm">Kerja sama tim yang solid untuk mencapai tujuan bersama</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Openings */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 font-roboto-condensed">LOWONGAN PEKERJAAN</h2>
              <div className="space-y-6">
                {jobOpenings.map((job, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 font-roboto-condensed">{job.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">{job.department}</span>
                          <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">{job.type}</span>
                          <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">{job.level}</span>
                        </div>
                      </div>
                      <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-red-600 to-blue-600 text-white font-bold rounded-lg hover:from-red-700 hover:to-blue-700 transition-all">
                        <span>LAMAR</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-gray-600 text-sm mb-4">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{job.type}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600">{job.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">Tidak menemukan posisi yang sesuai?</p>
                <button className="px-6 py-3 border-2 border-red-600 text-red-600 font-bold rounded-lg hover:bg-red-600 hover:text-white transition-all">
                  KIRIM CV INISIATIF
                </button>
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

export default Karir;
