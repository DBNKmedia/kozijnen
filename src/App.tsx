import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Zap } from 'lucide-react';
import Navbar from './components/Navbar';
import Configurator from './components/Configurator';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-20">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            className="w-full h-[600px] object-cover"
            alt="Modern Dutch Architecture"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Premium Dutch Window Frames
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Crafting quality and efficiency for your home since 1970
              </p>
              <a
                href="#configurator"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Configure Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Windows?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Superior Quality</h3>
              <p className="text-gray-600">
                Premium materials and Dutch craftsmanship ensure lasting durability
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Zap className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Energy Efficient</h3>
              <p className="text-gray-600">
                Advanced insulation technology for optimal energy savings
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <CheckCircle2 className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">10-Year Warranty</h3>
              <p className="text-gray-600">
                Complete peace of mind with our comprehensive warranty
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Configurator Section */}
      <section id="configurator" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Design Your Perfect Window</h2>
          <Configurator />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 md:p-12">
                <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                <p className="text-gray-600 mb-6">
                  Visit our showroom or contact us for a consultation
                </p>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    <strong>Address:</strong><br />
                    Windowstraat 123<br />
                    1234 AB Amsterdam
                  </p>
                  <p className="text-gray-600">
                    <strong>Phone:</strong><br />
                    +31 20 123 4567
                  </p>
                  <p className="text-gray-600">
                    <strong>Email:</strong><br />
                    info@dutchframes.nl
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                  alt="Our Showroom"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">DutchFrames</h3>
              <p className="text-gray-400">
                Quality window frames since 1970
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#products" className="text-gray-400 hover:text-white">Products</a></li>
                <li><a href="#configurator" className="text-gray-400 hover:text-white">Configurator</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} DutchFrames. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;