import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { caseStudiesData } from '../../data/caseStudiesData';

const CaseStudies = () => {
  const featured = caseStudiesData.slice(0, 3);

  return (
    <section className="py-24 bg-white" data-testid="case-studies-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-syne font-bold mb-4">
            Real Results, Real Businesses
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            See how we've helped businesses in Uttarakhand and beyond achieve their growth goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((study, index) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                to={`/work/${study.slug}`}
                className="block group h-full bg-white border border-gray-200 hover:border-brand-blue hover:shadow-xl transition-all duration-300 overflow-hidden rounded-lg"
                data-testid={`case-study-card-${study.slug}`}
              >
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <img
                    src={study.thumbnail}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-brand-blue to-brand-orange text-white text-xs font-medium uppercase tracking-wider mb-3 rounded">
                    {study.category}
                  </div>
                  <h3 className="text-xl font-syne font-bold mb-3 text-black group-hover:text-brand-blue transition-colors">
                    {study.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {study.results.slice(0, 2).map((result) => (
                      <div key={result.metric}>
                        <div className="text-2xl font-syne font-bold" style={{
                          background: 'linear-gradient(135deg, #2563EB 0%, #F97316 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}>{result.value}</div>
                        <div className="text-xs text-gray-600">{result.metric}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center text-brand-orange text-sm group-hover:gap-2 transition-all">
                    <span>Read Case Study</span>
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-8 py-4 btn-secondary group rounded-lg"
            data-testid="view-all-work-btn"
          >
            <span>View All Case Studies</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;