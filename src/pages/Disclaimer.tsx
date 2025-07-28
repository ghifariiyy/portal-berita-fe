
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { AlertTriangle, Info, Shield, FileText } from 'lucide-react';

const Disclaimer = () => {
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
                  <h1 className="text-3xl font-bold text-gray-900 font-roboto-condensed">DISCLAIMER</h1>
                </div>
                <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6">
                  <div className="flex items-center">
                    <AlertTriangle className="h-5 w-5 text-orange-400 mr-2" />
                    <p className="text-orange-800 text-sm">
                      Please read this disclaimer carefully before using SportNews services
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <section>
                  <div className="flex items-center mb-4">
                    <Info className="h-6 w-6 text-blue-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900 font-roboto-condensed">GENERAL INFORMATION</h2>
                  </div>
                  <div className="prose max-w-none text-gray-600">
                    <p className="mb-4">
                      The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, 
                      SportNews excludes all representations, warranties, obligations, and liabilities arising out of or in 
                      connection with the information provided on this website.
                    </p>
                  </div>
                </section>

                <section>
                  <div className="flex items-center mb-4">
                    <FileText className="h-6 w-6 text-green-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900 font-roboto-condensed">CONTENT ACCURACY</h2>
                  </div>
                  <div className="prose max-w-none text-gray-600">
                    <p className="mb-4">
                      While we strive to provide accurate and up-to-date sports news and information, SportNews makes no 
                      warranties or representations as to the accuracy, completeness, or reliability of any information 
                      on this website.
                    </p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Sports scores and statistics may contain errors or delays</li>
                      <li>News articles are based on available information at the time of publication</li>
                      <li>Player statistics and team information may be subject to official corrections</li>
                      <li>Live updates during sporting events may experience technical delays</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <div className="flex items-center mb-4">
                    <Shield className="h-6 w-6 text-red-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900 font-roboto-condensed">LIMITATION OF LIABILITY</h2>
                  </div>
                  <div className="prose max-w-none text-gray-600">
                    <p className="mb-4">SportNews will not be liable for any damages including, but not limited to:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Direct, indirect, incidental, or consequential damages</li>
                      <li>Loss of profits, data, or business opportunities</li>
                      <li>Damages arising from reliance on information provided</li>
                      <li>Technical issues, website downtime, or service interruptions</li>
                      <li>Actions taken based on sports betting or gambling information</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-roboto-condensed">THIRD-PARTY CONTENT</h2>
                  <div className="prose max-w-none text-gray-600">
                    <p className="mb-4">
                      Our website may contain links to third-party websites and services. SportNews is not responsible 
                      for the content, accuracy, or availability of such external sites. The inclusion of any link does 
                      not imply endorsement by SportNews.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-roboto-condensed">USER-GENERATED CONTENT</h2>
                  <div className="prose max-w-none text-gray-600">
                    <p className="mb-4">
                      Comments, opinions, and other content submitted by users do not reflect the views of SportNews. 
                      We are not responsible for user-generated content and reserve the right to remove any content 
                      that violates our community guidelines.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-roboto-condensed">SPORTS BETTING DISCLAIMER</h2>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="h-6 w-6 text-red-600 mt-1" />
                      <div>
                        <h3 className="font-bold text-red-900 mb-2">Important Notice</h3>
                        <p className="text-red-800 text-sm mb-4">
                          SportNews does not encourage or promote sports betting or gambling activities. Any information 
                          related to odds, predictions, or betting should be used for entertainment purposes only.
                        </p>
                        <ul className="text-red-800 text-sm space-y-1">
                          <li>• Gambling can be addictive</li>
                          <li>• Only bet what you can afford to lose</li>
                          <li>• Seek help if gambling becomes a problem</li>
                          <li>• Check local laws regarding sports betting</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-roboto-condensed">MEDICAL DISCLAIMER</h2>
                  <div className="prose max-w-none text-gray-600">
                    <p className="mb-4">
                      Any health, fitness, or medical information provided on SportNews is for informational purposes 
                      only and should not be considered professional medical advice. Always consult with qualified 
                      healthcare professionals before starting any fitness program or making health-related decisions.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-roboto-condensed">COPYRIGHT NOTICE</h2>
                  <div className="prose max-w-none text-gray-600">
                    <p className="mb-4">
                      All content on SportNews is protected by copyright law. While we strive to respect intellectual 
                      property rights, if you believe any content infringes your copyright, please contact us immediately 
                      for prompt resolution.
                    </p>
                  </div>
                </section>

                <section className="bg-gray-50 rounded-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-roboto-condensed">CHANGES TO DISCLAIMER</h2>
                  <p className="text-gray-600 mb-4">
                    SportNews reserves the right to update this disclaimer at any time without prior notice. 
                    Changes will be effective immediately upon posting on this page.
                  </p>
                  <p className="text-gray-600">
                    <strong>Last updated:</strong> January 1, 2024
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-roboto-condensed">CONTACT US</h2>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-gray-800">
                      If you have questions about this disclaimer:<br />
                      <strong>Email:</strong> legal@sportnews.com<br />
                      <strong>Phone:</strong> +62 21 1234 5678<br />
                      <strong>Address:</strong> Jl. Sudirman No. 123, Jakarta Pusat 10110
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

export default Disclaimer;
