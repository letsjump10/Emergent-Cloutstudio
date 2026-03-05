import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: 'Clout Studio transformed our online presence. We went from invisible to fully booked. They truly understand local businesses in Uttarakhand.',
      author: 'Rajesh Kumar',
      position: 'Owner, Mountain View Restaurant',
      location: 'Roorkee',
    },
    {
      quote: 'Their PPC campaigns delivered 4.2x ROAS in just 3 months. Our business completely transformed from a cost center to a profit machine.',
      author: 'Priya Sharma',
      position: 'Founder, Himalayan Crafts Co.',
      location: 'Dehradun',
    },
    {
      quote: 'I went from 800 followers to 25,000 in 6 months. Clout Studio knows Instagram inside out. Now I have a waitlist for my coaching programs.',
      author: 'Vikram Singh',
      position: 'Peak Performance Coaching',
      location: 'Haridwar',
    },
    {
      quote: 'The WhatsApp automation bot is like having 3 full-time sales reps working 24/7. Absolute game changer for our real estate business.',
      author: 'Suresh Mehta',
      position: 'Director, Ganga Realty',
      location: 'Haridwar',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" data-testid="testimonials-section">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-syne font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Real feedback from businesses we've helped grow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white border border-gray-200 p-8 rounded-lg hover:border-brand-blue hover:shadow-lg transition-all duration-300"
              data-testid={`testimonial-${index}`}
            >
              <Quote size={32} className="text-brand-orange/30 mb-4" />
              <p className="text-black mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-brand-orange flex items-center justify-center font-syne font-bold text-white rounded-lg">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-black">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                  <div className="text-xs text-brand-orange">{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;