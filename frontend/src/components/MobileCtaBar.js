import { Phone, MessageCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const MobileCtaBar = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg" data-testid="mobile-cta-bar">
      <div className="flex items-center justify-around py-3 px-4">
        <a
          href="tel:9740959176"
          className="flex flex-col items-center space-y-1 text-gray-600 hover:text-brand-blue transition-colors"
          data-testid="mobile-call-btn"
        >
          <Phone size={20} />
          <span className="text-xs font-medium">Call</span>
        </a>
        
        <a
          href="https://wa.me/919740959176"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center space-y-1 text-gray-600 hover:text-green-600 transition-colors"
          data-testid="mobile-whatsapp-btn"
        >
          <MessageCircle size={20} />
          <span className="text-xs font-medium">WhatsApp</span>
        </a>
        
        <Link
          to="/contact"
          className="flex flex-col items-center space-y-1 text-gray-600 hover:text-brand-orange transition-colors"
          data-testid="mobile-quote-btn"
        >
          <Mail size={20} />
          <span className="text-xs font-medium">Get Quote</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileCtaBar;