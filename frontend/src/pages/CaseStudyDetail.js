import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Target, Lightbulb, Wrench, TrendingUp, Quote } from 'lucide-react';
import { getCaseStudyBySlug } from '../data/caseStudiesData';
import LeadFormSection from '../components/home/LeadFormSection';

const CaseStudyDetail = () => {
  const { caseStudySlug } = useParams();
  const caseStudy = getCaseStudyBySlug(caseStudySlug);

  if (!caseStudy) {
    return <Navigate to="/work" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{caseStudy.title} - Clout Studio Case Study</title>
        <meta name="description" content={caseStudy.problem} />
      </Helmet>

      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-16 bg-[#0A0A0A] relative overflow-hidden">
          <div className="absolute inset-0 grid-overlay opacity-20" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
            <Link to="/work" className="inline-flex items-center gap-2 text-neon-cyan hover:underline mb-8">
              <ArrowLeft size={20} />
              <span>Back to Work</span>
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-sm font-medium uppercase tracking-wider mb-6">
                {caseStudy.category}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-syne font-bold mb-6">
                {caseStudy.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-white/60 mb-8">
                <div>
                  <span className="font-semibold text-white">Client:</span> {caseStudy.client}
                </div>
                <div>
                  <span className="font-semibold text-white">Location:</span> {caseStudy.location}
                </div>
              </div>
            </motion.div>

            {/* Results Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            >
              {caseStudy.results.map((result, index) => (
                <div key={result.metric} className="glass-panel p-6 text-center" data-testid={`result-${index}`}>
                  <div className="text-3xl sm:text-4xl font-syne font-bold text-neon-cyan mb-2">
                    {result.value}
                  </div>
                  <div className="text-sm text-white/60">{result.metric}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Thumbnail */}
        <section className="py-0 bg-[#030303]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={caseStudy.thumbnail}
                alt={caseStudy.title}
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Problem */}
        <section className="py-16 bg-[#030303]">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <Target size={32} className="text-neon-cyan" />
                <h2 className="text-3xl font-syne font-bold">The Problem</h2>
              </div>
              <p className="text-lg text-white/70 leading-relaxed">{caseStudy.problem}</p>
            </motion.div>
          </div>
        </section>

        {/* Strategy */}
        <section className="py-16 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <Lightbulb size={32} className="text-neon-cyan" />
                <h2 className="text-3xl font-syne font-bold">Our Strategy</h2>
              </div>
              <ul className="space-y-4">
                {caseStudy.strategy.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center glass-panel border-neon-cyan/30">
                      <span className="font-bold text-neon-cyan">{index + 1}</span>
                    </div>
                    <p className="text-white/70 leading-relaxed pt-1">{item}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Execution */}
        <section className="py-16 bg-[#030303]">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <Wrench size={32} className="text-neon-cyan" />
                <h2 className="text-3xl font-syne font-bold">Execution Timeline</h2>
              </div>
              <div className="space-y-6">
                {caseStudy.execution.map((phase, index) => (
                  <div key={index} className="glass-panel p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center glass-panel bg-neon-cyan/10 border-neon-cyan/30">
                        <span className="font-bold text-neon-cyan text-sm">{index + 1}</span>
                      </div>
                      <p className="text-white/70 leading-relaxed pt-1">{phase}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Results Detail */}
        <section className="py-16 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <TrendingUp size={32} className="text-neon-cyan" />
                <h2 className="text-3xl font-syne font-bold">The Results</h2>
              </div>
              <p className="text-lg text-white/70 leading-relaxed mb-8">{caseStudy.results_detail}</p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {caseStudy.results.map((result) => (
                  <div key={result.metric} className="glass-panel p-6">
                    <div className="text-4xl font-syne font-bold text-neon-cyan mb-2">
                      {result.value}
                    </div>
                    <div className="text-white/60">{result.metric}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonial */}
        {caseStudy.testimonial && (
          <section className="py-16 bg-[#030303]">
            <div className="max-w-4xl mx-auto px-6 md:px-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-panel p-8 md:p-12"
              >
                <Quote size={48} className="text-neon-cyan/30 mb-6" />
                <p className="text-xl text-white/90 leading-relaxed mb-8 italic">
                  "{caseStudy.testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center font-syne font-bold text-neon-cyan text-2xl">
                    {caseStudy.testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-lg">{caseStudy.testimonial.author}</div>
                    <div className="text-white/60">{caseStudy.testimonial.position}</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* CTA */}
        <LeadFormSection />
      </main>
    </>
  );
};

export default CaseStudyDetail;