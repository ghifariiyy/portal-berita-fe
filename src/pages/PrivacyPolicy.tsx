
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { Shield, Lock, Eye, Database } from 'lucide-react';

const PrivacyPolicy = () => {
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
                  <h1 className="text-3xl font-bold text-gray-900 font-roboto-condensed">PRIVACY POLICY</h1>
                </div>
                <p className="text-gray-600 text-lg">
                  This Privacy Policy describes how SportNews collects, uses, and protects your personal information.
                </p>
              </div>

              <div className="space-y-8">
                <section>
                  <div className="flex items-center mb-4">
                    <Database className="h-6 w-6 text-blue-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900 font-roboto-condensed">INFORMATION WE COLLECT</h2>
                  </div>
                  <div className="prose max-w-none text-gray-600">
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Personal information you provide when registering (name, email, phone)</li>
                      <li>Your activity data on our website (articles read, visit duration)</li>
                      <li>Technical information (IP address, browser type, operating system)</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <div className="flex items-center mb-4">
                    <Eye className="h-6 w-6 text-green-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900 font-roboto-condensed">HOW WE USE INFORMATION</h2>
                  </div>
                  <div className="prose max-w-none text-gray-600">
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Provide and improve SportNews services</li>
                      <li>Personalize content and news recommendations</li>
                      <li>Send newsletters and notifications (with your consent)</li>
                      <li>Analyze site usage for service improvements</li>
                      <li>Account-related and customer service communications</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <div className="flex items-center mb-4">
                    <Lock className="h-6 w-6 text-red-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900 font-roboto-condensed">DATA SECURITY</h2>
                  </div>
                  <div className="prose max-w-none text-gray-600">
                    <ul className="list-disc ml-6 space-y-2">
                      <li>SSL encryption for all data transmissions</li>
                      <li>Restricted access to personal data by authorized staff only</li>
                      <li>24/7 security monitoring against cyber threats</li>
                      <li>Regular data backups to prevent data loss</li>
                      <li>Regular security audits by independent third parties</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <div className="flex items-center mb-4">
                    <Shield className="h-6 w-6 text-purple-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900 font-roboto-condensed">YOUR RIGHTS</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-bold text-gray-900 mb-2">Data Access</h3>
                      <p className="text-gray-600 text-sm">Request a copy of personal data we hold about you</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-bold text-gray-900 mb-2">Data Correction</h3>
                      <p className="text-gray-600 text-sm">Request correction or update of inaccurate information</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-bold text-gray-900 mb-2">Data Deletion</h3>
                      <p className="text-gray-600 text-sm">Request deletion of personal data under certain conditions</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-bold text-gray-900 mb-2">Data Portability</h3>
                      <p className="text-gray-600 text-sm">Request transfer of your data to another service</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-roboto-condensed">CONTACT US</h2>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-gray-800">
                      If you have questions about this privacy policy:<br />
                      <strong>Email:</strong> privacy@sportnews.com<br />
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

export default PrivacyPolicy;
