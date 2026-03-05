import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { caseStudiesData, getCaseStudiesByCategory } from '../data/caseStudiesData';

const Work = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'SEO', 'PPC', 'Social', 'Website', 'Automation'];
  const filteredCaseStudies = getCaseStudiesByCategory(activeCategory);

  return (
    <>
      <Helmet>
        <title>Our Work - Case Studies & Results | Clout Studio Roorkee</title>
        <meta
          name="description"
          content="See real results from our digital marketing campaigns. Case studies from businesses in Roorkee, Haridwar, Dehradun & across India."
        />
      </Helmet>

      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-16 bg-[#0A0A0A] relative overflow-hidden">
          <div className="absolute inset-0 grid-overlay opacity-20" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-syne font-bold mb-6">
                Our <span className="text-neon-cyan">Work</span>
              </h1>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Real businesses. Real results. See how we've helped companies across Uttarakhand achieve their growth goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-[#030303] sticky top-20 z-30 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-wrap items-center justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'btn-primary'
                      : 'glass-panel hover:border-neon-cyan/50'
                  }`}
                  data-testid={`filter-${category.toLowerCase()}`}
                >
                  <span>{category}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 bg-[#030303]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map((study, index) => (
                <motion.div
                  key={study.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link
                    to={`/work/${study.slug}`}
                    className="block group h-full glass-panel hover:border-neon-cyan/50 transition-all duration-300 overflow-hidden"
                    data-testid={`case-study-${study.slug}`}
                  >
                    <div className="aspect-video overflow-hidden bg-surface">
                      <img
                        src={study.thumbnail}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="inline-block px-3 py-1 bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-xs font-medium uppercase tracking-wider mb-3">
                        {study.category}
                      </div>
                      <h3 className="text-xl font-syne font-bold mb-3 group-hover:text-neon-cyan transition-colors line-clamp-2">
                        {study.title}
                      </h3>
                      <p className="text-sm text-white/60 mb-4">
                        {study.client} • {study.location}
                      </p>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        {study.results.slice(0, 2).map((result) => (
                          <div key={result.metric}>
                            <div className="text-2xl font-syne font-bold text-neon-cyan">{result.value}</div>
                            <div className="text-xs text-white/60">{result.metric}</div>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center text-neon-cyan text-sm group-hover:gap-2 transition-all">
                        <span>Read Case Study</span>
                        <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {filteredCaseStudies.length === 0 && (
              <div className="text-center py-16">
                <p className="text-white/60 text-lg">No case studies found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-neon-cyan/10 via-purple-500/10 to-neon-cyan/10 border-y border-white/5">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl font-syne font-bold mb-4">Want Results Like These?</h2>
            <p className="text-white/70 mb-8">
              Let's create a custom growth strategy for your business.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 btn-primary group">
              <span>Start Your Success Story</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Work;