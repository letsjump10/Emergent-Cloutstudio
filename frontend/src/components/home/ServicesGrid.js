import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Users, TrendingUp, Sparkles, Target, FileText, PenTool, Image, Video, MessageSquare, Zap } from 'lucide-react';

const iconMap = {
  Code, Users, TrendingUp, Sparkles, Target, FileText, PenTool, Image, Video, MessageSquare, Zap
};

const ServicesGrid = () => {
  const services = [
    { name: 'Website Design & Development', icon: 'Code', slug: 'website-design-development', desc: 'Fast, SEO-ready websites that convert' },
    { name: 'Social Media Management', icon: 'Users', slug: 'social-media-management', desc: 'Grow your brand on Instagram, Facebook, LinkedIn' },
    { name: 'SEO Services', icon: 'TrendingUp', slug: 'seo-services', desc: 'Rank higher on Google, get organic traffic' },
    { name: 'GEO Optimization', icon: 'Sparkles', slug: 'geo-optimization', desc: 'Be found on ChatGPT & AI search engines' },
    { name: 'PPC Advertising', icon: 'Target', slug: 'ppc-advertising', desc: 'Google & Meta Ads that drive ROI' },
    { name: 'Landing Pages', icon: 'FileText', slug: 'landing-pages', desc: 'High-converting pages for campaigns' },
    { name: 'Content Creation', icon: 'PenTool', slug: 'content-creation', desc: 'Blogs, ad copy, scripts that engage' },
    { name: 'Images & Videos', icon: 'Image', slug: 'images-videos-creation', desc: 'Professional visuals for your brand' },
    { name: 'Reels Production', icon: 'Video', slug: 'reels-production', desc: 'Viral-ready short-form videos' },
    { name: 'WhatsApp Auto-Reply', icon: 'MessageSquare', slug: 'marketing-automation', desc: 'Never miss a lead, 24/7 automation' },
    { name: 'Marketing Autopilot', icon: 'Zap', slug: 'marketing-on-autopilot', desc: 'Complete done-for-you growth system', featured: true },
  ];

  return (
    <section className="py-24 bg-white" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-syne font-bold mb-4" data-testid="services-heading">
            What We Do
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Full-service digital marketing solutions for businesses in Uttarakhand and beyond
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className={service.featured ? 'sm:col-span-2 lg:col-span-1 xl:col-span-2' : ''}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="block h-full group relative overflow-hidden bg-white border border-gray-200 hover:border-brand-blue hover:shadow-lg transition-all duration-300 p-6 rounded-lg"
                  data-testid={`service-card-${service.slug}`}
                >
                  <div className="flex flex-col h-full">
                    <div className="mb-4 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-brand-blue to-brand-orange rounded-lg group-hover:scale-110 transition-transform">
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-lg font-syne font-bold mb-2 text-black group-hover:text-brand-blue transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 flex-grow">{service.desc}</p>
                    <div className="flex items-center text-brand-orange text-sm group-hover:gap-2 transition-all">
                      <span>Learn More</span>
                      <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 btn-secondary group rounded-lg"
            data-testid="view-all-services-btn"
          >
            <span>View All Services</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;