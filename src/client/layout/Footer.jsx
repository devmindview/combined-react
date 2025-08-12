import React from 'react';
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material';
// import WhatsAppChat from '../common/WhatsAppChat';
import bgImage from '../../assets/footer.jpg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-[#052e16] text-black pt-12 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top Adventure Text */}
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-gray-200">
            Embrace the Adventure
          </h2>
          <p className="text-gray-500 text-xs mt-0">
            Camp under the stars. Paddle through paradise.
          </p>
        </div> */}

        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm  ">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-normal mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-white font-light">
              <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
              <li><Link to="/products" className="hover:text-gray-400">Products</Link></li>
              <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
              <li><Link to="/dealer" className="hover:text-gray-400">For dealers</Link></li>
            </ul>
          </div>


          {/* Services */}
          <div>
            <h3 className="text-lg font-normal mb-4 text-white">Our Experiences</h3>
            <ul className="space-y-2 text-white font-light">
              <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
              <li><Link to="/about" className="hover:text-gray-400">Other</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-gray-400">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-gray-400">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-normal mb-4 text-white">Reach Out</h3>
            <ul className="space-y-2 text-white font-light">
              <li>+91 9074 279 105</li>
              <li>+91 7012 766 743</li>
              <li>combinedpharma123@gmail.com</li>
              <li>Combined Pharmaceuticals,</li>
              <li>Muringoor-680 309, Thrissur, Kerala</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-normal mb-4 text-white">Follow the Journey</h3>
            <div className="flex space-x-4 text-white font-light">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-black"><Facebook /></a>
              <a href="https://instagram.com/kayakify.kochi" target="_blank" rel="noopener noreferrer" className="hover:text-black"><Instagram /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-black"><Twitter /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-black"><YouTube /></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-slate-300 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-2">
          <p>&copy; 2025 Combined Pharmaceuticals. All rights reserved.</p>
          <p>Developed by - <a target='_blank' href="https://mindviewcreative.com/">Mindview Creative</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
