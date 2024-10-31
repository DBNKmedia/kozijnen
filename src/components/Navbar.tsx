import React from 'react';
import { Menu, X, Phone, WindowIcon } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <WindowIcon className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">DutchFrames</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#products" className="text-gray-600 hover:text-blue-600">Products</a>
            <a href="#configurator" className="text-gray-600 hover:text-blue-600">Configurator</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
            <a href="tel:+31201234567" className="flex items-center text-blue-600">
              <Phone className="h-4 w-4 mr-2" />
              +31 20 123 4567
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-600">Home</a>
            <a href="#products" className="block px-3 py-2 text-gray-600">Products</a>
            <a href="#configurator" className="block px-3 py-2 text-gray-600">Configurator</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600">Contact</a>
            <a href="tel:+31201234567" className="block px-3 py-2 text-blue-600 flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              +31 20 123 4567
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}