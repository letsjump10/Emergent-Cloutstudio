import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50" data-testid="hero-section">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 inline-block px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm"
          >
            <p className="gradient-text text-sm font-medium uppercase tracking-wider">Roorkee's Premier Digital Marketing Agency</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-syne font-bold mb-8 leading-tight text-gray-900"
            data-testid="hero-headline"
          >
            Scale Your Business with
            <br />
            <span className="gradient-text">Marketing on Autopilot</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            data-testid="hero-subheadline"
          >
            We help businesses in Roorkee, Haridwar, Dehradun, and across India get more leads, sales, and growth.
            Done-for-you digital marketing that actually works.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="px-8 py-4 btn-primary text-base w-full sm:w-auto flex items-center justify-center gap-2 group rounded-lg"
              data-testid="hero-cta-primary"
            >
              <span>Get Free Strategy Call</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a
              href="tel:9740959176"
              className="px-8 py-4 btn-secondary text-base w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg"
              data-testid="hero-cta-secondary"
            >
              <Phone size={20} />
              <span>Call: +91 97409 59176</span>
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-gray-500 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-blue rounded-full" />
              <span>Trusted by 50+ Businesses</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-orange rounded-full" />
              <span>Based in Roorkee, UK</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-blue rounded-full" />
              <span>Proven Results</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;