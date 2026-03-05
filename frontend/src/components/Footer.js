import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const services = [
    { name: 'Website Design & Development', slug: 'website-design-development' },
    { name: 'Social Media Management', slug: 'social-media-management' },
    { name: 'SEO Services', slug: 'seo-services' },
    { name: 'PPC Advertising', slug: 'ppc-advertising' },
    { name: 'Content Creation', slug: 'content-creation' },
    { name: 'Marketing Automation', slug: 'marketing-automation' },
  ];

  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Work', path: '/work' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="relative bg-gray-50 border-t border-gray-200" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="text-2xl font-syne font-bold">
              <span className="gradient-text">CLOUT</span>
              <span className="text-gray-900"> STUDIO</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Your growth partner in Roorkee. We help businesses across Uttarakhand and India scale with data-driven digital marketing.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-orange transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gray-900 font-syne font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-gray-600 hover:text-brand-blue text-sm transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-syne font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-brand-blue text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-900 font-syne font-bold mb-6">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-600 text-sm">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-brand-orange" />
                <span>Roorkee, Uttarakhand 247667, India</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600 text-sm">
                <Phone size={18} className="flex-shrink-0 text-brand-blue" />
                <a href="tel:9740959176" className="hover:text-brand-blue transition-colors">
                  +91 97409 59176
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-600 text-sm">
                <Mail size={18} className="flex-shrink-0 text-brand-blue" />
                <a href="mailto:hello@cloutstudio.co" className="hover:text-brand-blue transition-colors">
                  hello@cloutstudio.co
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2026 Clout Studio. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-brand-blue transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-brand-blue transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;