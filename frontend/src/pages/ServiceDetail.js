import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Clock, Users } from 'lucide-react';
import { getServiceBySlug } from '../data/servicesData';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import LeadFormSection from '../components/home/LeadFormSection';

const ServiceDetail = () => {
  const { serviceSlug } = useParams();
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{service.name} - Clout Studio Roorkee</title>
        <meta name="description" content={service.description} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": service.name,
            "provider": {
              "@type": "LocalBusiness",
              "name": "Clout Studio",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Roorkee",
                "addressRegion": "Uttarakhand",
                "postalCode": "247667",
                "addressCountry": "IN"
              }
            },
            "areaServed": "Roorkee, Haridwar, Dehradun, Uttarakhand, India",
            "description": service.description
          })}
        </script>
      </Helmet>

      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-16 bg-[#0A0A0A] relative overflow-hidden">
          <div className="absolute inset-0 grid-overlay opacity-20" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
            <Link to="/services" className="inline-flex items-center gap-2 text-neon-cyan hover:underline mb-8">
              <ArrowLeft size={20} />
              <span>Back to Services</span>
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-syne font-bold mb-6">
                {service.name}
              </h1>
              <p className="text-xl text-white/70 max-w-3xl mb-8">{service.description}</p>
              
              <div className="flex flex-wrap items-center gap-8">
                <div className="flex items-center gap-3">
                  <Clock size={24} className="text-neon-cyan" />
                  <div>
                    <div className="text-sm text-white/60">Timeline</div>
                    <div className="font-semibold">{service.timeline}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users size={24} className="text-neon-cyan" />
                  <div>
                    <div className="text-sm text-white/60">Tools Used</div>
                    <div className="font-semibold">{service.toolsStack.slice(0, 2).join(', ')}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="py-16 bg-[#030303]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-syne font-bold mb-6">Who It's For</h2>
                <ul className="space-y-4">
                  {service.whoItsFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle size={24} className="text-neon-cyan flex-shrink-0 mt-0.5" />
                      <span className="text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h2 className="text-3xl font-syne font-bold mb-6">What's Included</h2>
                <ul className="space-y-4">
                  {service.deliverables.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle size={24} className="text-neon-cyan flex-shrink-0 mt-0.5" />
                      <span className="text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-[#0A0A0A]">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-syne font-bold mb-4">Our Process</h2>
              <p className="text-white/60">How we deliver {service.name.toLowerCase()}</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass-panel p-6 text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center glass-panel border-neon-cyan/30">
                    <span className="text-xl font-syne font-bold text-neon-cyan">{index + 1}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{step}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="py-16 bg-[#030303]">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-syne font-bold mb-4">Tools & Stack</h2>
              <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
                {service.toolsStack.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 glass-panel border-neon-cyan/30 text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-syne font-bold mb-4">Frequently Asked Questions</h2>
            </motion.div>

            <Accordion type="single" collapsible className="space-y-4">
              {service.faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-panel border-white/10 px-6"
                >
                  <AccordionTrigger className="text-left font-syne font-bold hover:text-neon-cyan transition-colors">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <LeadFormSection />
      </main>
    </>
  );
};

export default ServiceDetail;