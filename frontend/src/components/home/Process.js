import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      title: 'Discovery & Audit',
      description: 'We analyze your business, competitors, and current marketing. Identify gaps and opportunities.',
      details: ['Free strategy call', 'Competitor analysis', 'Current state audit', 'Goal setting'],
    },
    {
      title: 'Strategy & Planning',
      description: 'Custom growth plan tailored to your business, budget, and goals. No cookie-cutter solutions.',
      details: ['Custom roadmap', 'Channel selection', 'Budget allocation', 'Timeline & milestones'],
    },
    {
      title: 'Execution & Launch',
      description: 'We build and launch your campaigns. Websites, ads, content, automation - everything goes live.',
      details: ['Campaign setup', 'Content creation', 'Technical setup', 'Testing & QA'],
    },
    {
      title: 'Optimize & Scale',
      description: 'Continuous monitoring, A/B testing, and optimization. We scale what works, cut what doesn\'t.',
      details: ['Weekly reports', 'A/B testing', 'Performance optimization', 'Scaling winners'],
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" data-testid="process-section">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-syne font-bold mb-4">
            How We Work
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            A proven 4-step process that gets results, every time
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white border border-gray-200 p-8 rounded-lg hover:border-brand-blue hover:shadow-lg transition-all duration-300"
              data-testid={`process-step-${index}`}
            >
              <div className="grid md:grid-cols-[auto_1fr] gap-8">
                <div className="flex md:flex-col items-center md:items-start gap-4">
                  <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-brand-blue to-brand-orange rounded-lg">
                    <span className="text-2xl font-syne font-bold text-white">{index + 1}</span>
                  </div>
                  <div className="hidden md:block w-0.5 h-full bg-gradient-to-b from-brand-blue to-brand-orange" />
                </div>

                <div>
                  <h3 className="text-2xl font-syne font-bold mb-3 text-black">{step.title}</h3>
                  <p className="text-black mb-6">{step.description}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {step.details.map((detail) => (
                      <div key={detail} className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-brand-orange flex-shrink-0" />
                        <span className="text-sm text-black">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;