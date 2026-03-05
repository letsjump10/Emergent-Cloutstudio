import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const tiers = [
    {
      name: 'Starter',
      tagline: 'For Local Presence',
      price: '₹25,000',
      period: '/month',
      description: 'Perfect for local businesses in Roorkee, Haridwar wanting to get started',
      features: [
        'Website/Landing Page',
        'Google Business Profile setup',
        'Social media (2 platforms)',
        'Monthly content (8 posts)',
        'Basic SEO optimization',
        'Monthly performance report',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Growth',
      tagline: 'For Scaling Businesses',
      price: '₹60,000',
      period: '/month',
      description: 'Comprehensive marketing for businesses ready to grow',
      features: [
        'Everything in Starter, plus:',
        'SEO (10 keywords)',
        'Content marketing (4 blogs/month)',
        'Social media (3 platforms)',
        'Monthly content (20 posts + stories)',
        'Email marketing setup',
        'Weekly performance reports',
        'Dedicated account manager',
      ],
      cta: 'Most Popular',
      popular: true,
    },
    {
      name: 'Scale',
      tagline: 'For Maximum Growth',
      price: '₹1,20,000',
      period: '/month',
      description: 'Full automation + PPC for aggressive growth',
      features: [
        'Everything in Growth, plus:',
        'PPC campaigns (Google + Meta)',
        'WhatsApp/Instagram automation',
        'Landing pages + A/B testing',
        'CRM integration',
        'Advanced analytics dashboard',
        'Priority support',
        'Quarterly strategy sessions',
      ],
      cta: 'Go Big',
      popular: false,
    },
  ];

  return (
    <section className="py-24 bg-[#0A0A0A]" data-testid="pricing-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-syne font-bold mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Choose the plan that fits your business goals. No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative"
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-neon-cyan text-black text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <div
                className={`h-full glass-panel p-8 ${
                  tier.popular ? 'border-neon-cyan/50 shadow-[0_0_30px_rgba(0,240,255,0.2)]' : ''
                }`}
                data-testid={`pricing-tier-${tier.name.toLowerCase()}`}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-syne font-bold mb-2">{tier.name}</h3>
                  <p className="text-sm text-neon-cyan mb-4">{tier.tagline}</p>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-syne font-bold">{tier.price}</span>
                    <span className="text-white/60">{tier.period}</span>
                  </div>
                  <p className="text-sm text-white/60">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check size={20} className="text-neon-cyan flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 ${
                    tier.popular ? 'btn-primary' : 'btn-secondary'
                  } group`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-white/60 mb-4">Need a custom package?</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-neon-cyan hover:underline"
          >
            Let's talk about your specific needs
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;