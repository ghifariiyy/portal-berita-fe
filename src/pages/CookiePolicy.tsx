
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { Cookie, Settings, Eye, BarChart } from 'lucide-react';

const CookiePolicy = () => {
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
                  <h1 className="text-3xl font-bold text-gray-900 font-roboto-condensed">COOKIE POLICY</h1>
                </div>
                <p className="text-gray-600 text-lg">
                  This Cookie Policy explains how SportNews uses cookies and similar technologies on our website.
                </p>
              </div>

              <div className="space-y-8">
                <section>
                  <div className="flex items-center mb-4">
                    <Cookie className="h-6 w-6 text-orange-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900 font-roboto-condensed">WHAT ARE COOKIES?</h2>
                  </div>
                  <div className="prose max-w-none text-gray-600">
                    <p className="mb-4">
                      Cookies are small text files that are stored on your device when you visit our website. 
                      They help us provide you with a better browsing experience by remembering your preferences 
                      and improving site functionality.
                    </p>
                  </div>
                </section>

                <section>
                  <div className="flex items-center mb-4">
                    <Settings className="h-6 w-6 text-blue-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900 font-roboto-condensed">TYPES OF COOKIES WE USE</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="font-bold text-gray-900 mb-3 font-roboto-condensed">ESSENTIAL COOKIES</h3>
                      <p className="text-gray-600 text-sm mb-3">
                        These cookies are necessary for the website to function properly and cannot be disabled.
                      </p>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Authentication cookies</li>
                        <li>• Security cookies</li>
                        <li>• Load balancing cookies</li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="font-bold text-gray-900 mb-3 font-roboto-condensed">FUNCTIONAL COOKIES</h3>
                      <p className="text-gray-600 text-sm mb-3">
                        These cookies enable enhanced functionality and personalization features.
                      </p>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Language preferences</li>
                        <li>• Theme settings</li>
                        <li>• User preferences</li>
                      </ul>
                    </div>
                    
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="font-bold text-gray-900 mb-3 font-roboto-condensed">ANALYTICS COOKIES</h3>
                      <p className="text-gray-600 text-sm mb-3">
                        These cookies help us understand how visitors interact with our website.
                      </p>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Google Analytics</li>
                        <li>• Page view tracking</li>
                        <li>• User behavior analysis</li>
                      </ul>
                    </div>
                    
                    <div className="bg-red-50 p-6 rounded-lg">
                      <h3 className="font-bold text-gray-900 mb-3 font-roboto-condensed">ADVERTISING COOKIES</h3>
                      <p className="text-gray-600 text-sm mb-3">
                        These cookies are used to deliver relevant advertisements to users.
                      </p>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Ad targeting</li>
                        <li>• Conversion tracking</li>
                        <li>• Retargeting pixels</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <div className="flex items-center mb-4">
                    <Eye className="h-6 w-6 text-green-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900 font-roboto-condensed">THIRD-PARTY COOKIES</h2>
                  </div>
                  <div className="prose max-w-none text-gray-600">
                    <p className="mb-4">We also use third-party services that may set their own cookies:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong>Google Analytics:</strong> For website traffic analysis</li>
                      <li><strong>Social Media Platforms:</strong> For social sharing features</li>
                      <li><strong>Advertising Networks:</strong> For targeted advertising</li>
                      <li><strong>Video Players:</strong> For embedded sports videos</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <div className="flex items-center mb-4">
                    <BarChart className="h-6 w-6 text-purple-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900 font-roboto-condensed">MANAGING COOKIES</h2>
                  </div>
                  <div className="prose max-w-none text-gray-600">
                    <p className="mb-4">You can control cookies through:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong>Browser Settings:</strong> Most browsers allow you to block or delete cookies</li>
                      <li><strong>Cookie Preferences:</strong> Use our cookie banner to manage preferences</li>
                      <li><strong>Opt-out Tools:</strong> Use industry opt-out tools for advertising cookies</li>
                    </ul>
                    
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                      <p className="text-yellow-800 text-sm">
                        <strong>Note:</strong> Disabling certain cookies may affect website functionality and your user experience.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="bg-gray-50 rounded-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-roboto-condensed">COOKIE CONSENT</h2>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      When you first visit our website, you'll see a cookie banner asking for your consent. 
                      You can choose to:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded-lg text-center">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-green-600 font-bold">✓</span>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Accept All</h3>
                        <p className="text-gray-600 text-sm">Allow all cookies for the best experience</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Settings className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Customize</h3>
                        <p className="text-gray-600 text-sm">Choose which types of cookies to allow</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg text-center">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-red-600 font-bold">✗</span>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Reject</h3>
                        <p className="text-gray-600 text-sm">Allow only essential cookies</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 font-roboto-condensed">CONTACT US</h2>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-gray-800">
                      If you have questions about our use of cookies:<br />
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

export default CookiePolicy;
