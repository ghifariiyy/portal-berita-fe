
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { FileText, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

const TermsOfService = () => {
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
                  <h1 className="text-3xl font-bold text-gray-900 font-roboto-condensed">TERMS OF SERVICE</h1>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <div className="flex items-center">
                    <AlertTriangle className="h-5 w-5 text-yellow-400 mr-2" />
                    <p className="text-yellow-800 text-sm">
                      By using SportNews, you agree to these terms and conditions
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <section>
                  <div className="flex items-center mb-4">
                    <FileText className="h-6 w-6 text-blue-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900 font-roboto-condensed">ACCEPTANCE OF TERMS</h2>
                  </div>
                  <div className="prose max-w-none text-gray-600">
                    <p className="mb-4">
                      By accessing and using the SportNews website, you agree to be bound by these terms and conditions. 
                      If you do not agree to any part of these terms, you must not use our services.
                    </p>
                  </div>
                </section>

                <section>
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900 font-roboto-condensed">PERMITTED USE</h2>
                  </div>
                  <div className="prose max-w-none text-gray-600">
                    <p className="mb-4">You are permitted to:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Access and read sports news articles</li>
                      <li>Create a user account with accurate information</li>
                      <li>Interact with content through comments and sharing</li>
                      <li>Use search and navigation features</li>
                      <li>Subscribe to newsletters and notifications</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <div className="flex items-center mb-4">
                    <XCircle className="h-6 w-6 text-red-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900 font-roboto-condensed">PROHIBITED USE</h2>
                  </div>
                  <div className="prose max-w-none text-gray-600">
                    <p className="mb-4">You are PROHIBITED from:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Copying, distributing, or modifying content without permission</li>
                      <li>Using the site for illegal or harmful activities</li>
                      <li>Sending spam, viruses, or malware</li>
                      <li>Performing automated scraping or crawling</li>
                      <li>Disrupting normal site operations</li>
                      <li>Impersonating other users or providing false information</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-roboto-condensed">INTELLECTUAL PROPERTY</h2>
                  <div className="prose max-w-none text-gray-600">
                    <p className="mb-4">
                      All content on SportNews, including text, images, logos, and design, is protected by copyright and 
                      other intellectual property rights. Use of content without written permission from SportNews is 
                      a violation of the law.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-roboto-condensed">USER ACCOUNTS</h2>
                  <div className="prose max-w-none text-gray-600">
                    <p className="mb-4">When creating an account, you are responsible for:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Providing accurate and current information</li>
                      <li>Maintaining the confidentiality of your password</li>
                      <li>Notifying us of any unauthorized use of your account</li>
                      <li>Not sharing your account with others</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-roboto-condensed">LIMITATION OF LIABILITY</h2>
                  <div className="prose max-w-none text-gray-600">
                    <p className="mb-4">
                      SportNews is not liable for any direct or indirect damages arising from the use of this site. 
                      We do not guarantee 100% accuracy of all information presented.
                    </p>
                  </div>
                </section>

                <section className="bg-red-50 rounded-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-roboto-condensed">VIOLATIONS AND SANCTIONS</h2>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                      <h3 className="font-bold text-gray-900 mb-2">Warning</h3>
                      <p className="text-gray-600 text-sm">Minor violations will receive written warnings</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                      <h3 className="font-bold text-gray-900 mb-2">Temporary Suspension</h3>
                      <p className="text-gray-600 text-sm">Repeated violations may result in account suspension</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-red-600">
                      <h3 className="font-bold text-gray-900 mb-2">Permanent Termination</h3>
                      <p className="text-gray-600 text-sm">Serious violations will result in permanent account deletion</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-roboto-condensed">CONTACT</h2>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-gray-800">
                      If you have questions about these terms of service:<br />
                      <strong>Email:</strong> legal@sportnews.com<br />
                      <strong>Phone:</strong> +62 21 1234 5678
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

export default TermsOfService;
