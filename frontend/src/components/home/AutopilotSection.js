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
    <section className="py-24 bg-[#030303] relative overflow-hidden" data-testid="autopilot-section">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-overlay opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 glass-panel mb-6">
            <p className="text-neon-cyan text-sm font-medium uppercase tracking-wider">Our Signature System</p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-syne font-bold mb-4">
            Growth System on <span className="text-neon-cyan">Autopilot</span>
          </h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
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
                <div className="glass-panel p-6 text-center hover:border-neon-cyan/50 transition-colors duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 glass-panel flex items-center justify-center">
                    <Icon size={32} className="text-neon-cyan" />
                  </div>
                  <div className="mb-2 font-mono text-neon-cyan text-sm">Step {index + 1}</div>
                  <h3 className="text-xl font-syne font-bold mb-2">{step.title}</h3>
                  <p className="text-white/60 text-sm">{step.desc}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-neon-cyan/50 to-transparent" />
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
          className="glass-panel p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-syne font-bold mb-4">Why Autopilot Wins</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full mt-2 flex-shrink-0" />
                  <span className="text-white/70"><strong className="text-white">24/7 Lead Capture:</strong> Never miss an inquiry, even at 3 AM</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full mt-2 flex-shrink-0" />
                  <span className="text-white/70"><strong className="text-white">Instant Response:</strong> WhatsApp/Instagram auto-reply in seconds</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full mt-2 flex-shrink-0" />
                  <span className="text-white/70"><strong className="text-white">Qualify Automatically:</strong> Filter out tire-kickers, focus on buyers</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full mt-2 flex-shrink-0" />
                  <span className="text-white/70"><strong className="text-white">Lower CAC:</strong> Automation reduces cost per acquisition by 40-60%</span>
                </li>
              </ul>
            </div>
            <div className="glass-panel p-6 border-neon-cyan/30">
              <h4 className="text-xl font-syne font-bold mb-4 text-neon-cyan">Perfect For:</h4>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-neon-cyan rounded-full" />
                  Service businesses (coaching, real estate, healthcare)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-neon-cyan rounded-full" />
                  E-commerce stores
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-neon-cyan rounded-full" />
                  Local businesses in Roorkee, Haridwar, Dehradun
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-neon-cyan rounded-full" />
                  Startups scaling fast
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/services/marketing-on-autopilot"
              className="inline-flex items-center gap-2 px-8 py-4 btn-primary group"
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