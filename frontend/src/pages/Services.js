import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - Digital Marketing Solutions | Clout Studio Roorkee</title>
        <meta
          name="description"
          content="Complete digital marketing services: SEO, PPC, social media, website design, content creation, marketing automation. Serving Roorkee, Haridwar, Dehradun & India."
        />
      </Helmet>

      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-16 bg-white relative overflow-hidden">
          <div className="absolute inset-0 grid-overlay opacity-20" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-syne font-bold mb-6">
                Our <span className="text-brand-blue">Services</span>
              </h1>
              <p className="text-xl text-black max-w-3xl mx-auto">
                Full-service digital marketing solutions to help your business grow. From strategy to execution, we handle it all.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="space-y-8">
              {servicesData.map((service, index) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="glass-panel hover:border-brand-blue/50 transition-all duration-300"
                  data-testid={`service-${service.slug}`}
                >
                  <Link to={`/services/${service.slug}`} className="block p-8">
                    <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 flex items-center justify-center glass-panel border-brand-blue/30">
                            <span className="text-brand-blue text-xl font-bold">{(index + 1).toString().padStart(2, '0')}</span>
                          </div>
                          <h2 className="text-2xl sm:text-3xl font-syne font-bold group-hover:text-brand-blue transition-colors">
                            {service.name}
                          </h2>
                        </div>
                        <p className="text-black mb-6 leading-relaxed">{service.description}</p>
                        
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <h3 className="text-sm font-semibold text-brand-blue mb-3 uppercase tracking-wider">Who it's for:</h3>
                            <ul className="space-y-2">
                              {service.whoItsFor.slice(0, 2).map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                  <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full mt-1.5 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h3 className="text-sm font-semibold text-brand-blue mb-3 uppercase tracking-wider">Key deliverables:</h3>
                            <ul className="space-y-2">
                              {service.deliverables.slice(0, 2).map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                  <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full mt-1.5 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-4">
                        <div className="text-right">
                          <div className="text-sm text-gray-600 mb-1">Timeline</div>
                          <div className="font-semibold text-brand-blue">{service.timeline}</div>
                        </div>
                        <div className="inline-flex items-center gap-2 px-6 py-3 btn-primary group">
                          <span>Learn More</span>
                          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-neon-cyan/10 via-purple-500/10 to-neon-cyan/10 border-y border-gray-200">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl font-syne font-bold mb-4">Not sure which service you need?</h2>
            <p className="text-black mb-8">Book a free consultation and we'll recommend the best approach for your business.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 btn-primary group">
              <span>Get Free Consultation</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;