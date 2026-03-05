import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'Do you work with businesses outside Roorkee?',
      answer: 'Yes! While we\'re based in Roorkee, Uttarakhand, we work with businesses across India and globally. We specialize in serving local businesses in Roorkee, Haridwar, Dehradun, and nearby cities, but our services are available nationwide.',
    },
    {
      question: 'How long does it take to see results?',
      answer: 'It depends on the service. PPC campaigns can drive traffic immediately (within days). SEO typically takes 3-6 months for significant results. Social media growth varies but expect 2-3 months for momentum. Website builds take 2-4 weeks. We set realistic expectations upfront.',
    },
    {
      question: 'What\'s included in the monthly retainer?',
      answer: 'Each package includes specific deliverables (outlined in our pricing section). Typical retainers cover strategy, content creation, campaign management, reporting, and ongoing optimization. We provide a detailed scope of work before you commit.',
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Most services require a minimum 3-month commitment (SEO, social media, PPC need time to work). After the initial period, you can cancel with 30 days\' notice. One-time projects (websites, landing pages) have no ongoing commitment.',
    },
    {
      question: 'Do I need a big budget for PPC?',
      answer: 'We recommend a minimum of ₹20,000/month in ad spend for meaningful results. Management fees are separate. We work with your budget to maximize ROI. Smaller budgets are better suited for SEO and organic strategies.',
    },
    {
      question: 'Will I have a dedicated account manager?',
      answer: 'Yes, for Growth and Scale packages. You\'ll have a single point of contact who understands your business and coordinates all activities. Starter package includes email support with 24-48 hour response time.',
    },
    {
      question: 'What makes you different from other agencies?',
      answer: 'We\'re local to Uttarakhand, so we understand the regional market. We focus on ROI, not vanity metrics. Our "Marketing on Autopilot" system is unique - full automation from ads to lead qualification. Plus, we\'re upfront about what works and what doesn\'t.',
    },
    {
      question: 'Do you offer free consultations?',
      answer: 'Yes! We offer a free 30-minute strategy call where we audit your current marketing, identify opportunities, and recommend a custom plan. No pressure, no obligation. Book via our contact page.',
    },
  ];

  return (
    <section className="py-24 bg-[#0A0A0A]" data-testid="faq-section">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-syne font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-white/60">
            Everything you need to know before getting started
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-4" data-testid="faq-accordion">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-panel border-white/10 px-6"
                data-testid={`faq-item-${index}`}
              >
                <AccordionTrigger className="text-left font-syne font-bold hover:text-neon-cyan transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;