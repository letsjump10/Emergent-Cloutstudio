import { motion } from 'framer-motion';
import { ArrowRight, Zap, Repeat, Filter, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const AutopilotSection = () => {
  const steps = [
    { icon: Zap, title: 'Traffic', desc: 'Ads drive visitors to your landing page' },
    { icon: Filter, title: 'Capture', desc: 'Lead form + WhatsApp auto-reply' },
    { icon: Repeat, title: 'Qualify', desc: 'Bot qualifies leads 24/7' },
    { icon: BarChart, title: 'Convert', desc: 'CRM routes hot leads to your team' },
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden" data-testid="autopilot-section">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-white border border-gray-200 rounded-full mb-6 shadow-sm">
            <p className="text-brand-orange text-sm font-medium uppercase tracking-wider">Our Signature System</p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-syne font-bold mb-4">
            Growth System on Autopilot
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            From traffic to conversion, everything runs automatically. Focus on your business while we handle the marketing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative"
              >
                <div className="bg-white border border-gray-200 p-6 rounded-lg text-center hover:border-brand-blue hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-brand-blue to-brand-orange rounded-lg flex items-center justify-center">
                    <Icon size={32} className="text-white" />
                  </div>
                  <div className="mb-2 font-mono text-brand-orange text-sm font-medium">Step {index + 1}</div>
                  <h3 className="text-xl font-syne font-bold mb-2 text-black">{step.title}</h3>
                  <p className="text-black text-sm">{step.desc}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-brand-blue to-brand-orange" />
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white border border-gray-200 rounded-lg p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-syne font-bold mb-4 text-black">Why Autopilot Wins</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-brand-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-black"><strong>24/7 Lead Capture:</strong> Never miss an inquiry, even at 3 AM</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2 flex-shrink-0" />
                  <span className="text-black"><strong>Instant Response:</strong> WhatsApp/Instagram auto-reply in seconds</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-brand-blue rounded-full mt-2 flex-shrink-0" />
                  <span className="text-black"><strong>Qualify Automatically:</strong> Filter out tire-kickers, focus on buyers</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2 flex-shrink-0" />
                  <span className="text-black"><strong>Lower CAC:</strong> Automation reduces cost per acquisition by 40-60%</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 border border-gray-200 p-6 rounded-lg">
              <h4 className="text-xl font-syne font-bold mb-4 text-brand-blue">Perfect For:</h4>
              <ul className="space-y-2 text-black">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-brand-orange rounded-full" />
                  Service businesses (coaching, real estate, healthcare)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-brand-blue rounded-full" />
                  E-commerce stores
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-brand-orange rounded-full" />
                  Local businesses in Roorkee, Haridwar, Dehradun
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-brand-blue rounded-full" />
                  Startups scaling fast
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/services/marketing-on-autopilot"
              className="inline-flex items-center gap-2 px-8 py-4 btn-primary group rounded-lg"
              data-testid="autopilot-cta"
            >
              <span>Learn More About Autopilot</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AutopilotSection;