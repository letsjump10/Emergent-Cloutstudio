import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const LeadFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business_name: '',
    website: '',
    services: [],
    monthly_budget: '',
    callback_time: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const serviceOptions = [
    'Website Design & Development',
    'Social Media Management',
    'SEO Services',
    'GEO Optimization',
    'PPC Advertising',
    'Landing Pages',
    'Content Creation',
    'Images & Videos',
    'Reels Production',
    'WhatsApp Automation',
    'Marketing Autopilot',
  ];

  const budgetOptions = [
    'Under ₹25,000/month',
    '₹25,000 - ₹50,000/month',
    '₹50,000 - ₹1,00,000/month',
    'Above ₹1,00,000/month',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      toast.error('Please enter a valid 10-digit phone number');
      return;
    }

    setIsSubmitting(true);

    try {
      await axios.post(`${BACKEND_URL}/api/leads`, formData);
      setIsSuccess(true);
      toast.success('Success! We\'ll contact you soon.');
    } catch (error) {
      console.error('Error submitting lead:', error);
      toast.error('Something went wrong. Please try WhatsApp instead.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#030303]" data-testid="lead-form-success">
        <div className="max-w-2xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="w-24 h-24 mx-auto mb-6 bg-neon-cyan/10 border-2 border-neon-cyan flex items-center justify-center"
          >
            <CheckCircle size={48} className="text-neon-cyan" />
          </motion.div>
          <h2 className="text-3xl font-syne font-bold mb-4">Thank You!</h2>
          <p className="text-white/70 mb-8">
            We've received your inquiry. Our team will reach out within 24 hours to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/919740959176"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 btn-primary flex items-center gap-2"
              data-testid="whatsapp-cta"
            >
              <MessageCircle size={20} />
              <span>Chat on WhatsApp Now</span>
            </a>
            <button
              onClick={() => setIsSuccess(false)}
              className="px-8 py-3 btn-secondary"
            >
              <span>Submit Another Inquiry</span>
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#030303]" data-testid="lead-form-section">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-syne font-bold mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg text-white/60">
            Fill out the form below or WhatsApp us directly for a free consultation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass-panel p-8 space-y-6"
            data-testid="lead-form"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Name <span className="text-neon-cyan">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-neon-cyan outline-none transition-colors"
                  placeholder="Your full name"
                  data-testid="lead-form-name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone <span className="text-neon-cyan">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-neon-cyan outline-none transition-colors"
                  placeholder="10-digit mobile number"
                  data-testid="lead-form-phone"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email <span className="text-neon-cyan">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-neon-cyan outline-none transition-colors"
                  placeholder="your@email.com"
                  data-testid="lead-form-email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Business Name</label>
                <input
                  type="text"
                  name="business_name"
                  value={formData.business_name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-neon-cyan outline-none transition-colors"
                  placeholder="Your business name"
                  data-testid="lead-form-business"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Website (if any)</label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-neon-cyan outline-none transition-colors"
                placeholder="https://yourwebsite.com"
                data-testid="lead-form-website"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-3">What do you need? (Select all that apply)</label>
              <div className="grid sm:grid-cols-2 gap-3">
                {serviceOptions.map((service) => (
                  <label
                    key={service}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={formData.services.includes(service)}
                      onChange={() => handleServiceToggle(service)}
                      className="w-5 h-5 bg-white/5 border border-white/10 checked:bg-neon-cyan checked:border-neon-cyan cursor-pointer"
                    />
                    <span className="text-sm text-white/70 group-hover:text-white transition-colors">
                      {service}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Monthly Budget</label>
                <select
                  name="monthly_budget"
                  value={formData.monthly_budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-neon-cyan outline-none transition-colors"
                  data-testid="lead-form-budget"
                >
                  <option value="">Select budget range</option>
                  {budgetOptions.map((budget) => (
                    <option key={budget} value={budget}>
                      {budget}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Preferred Callback Time</label>
                <select
                  name="callback_time"
                  value={formData.callback_time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-neon-cyan outline-none transition-colors"
                  data-testid="lead-form-callback"
                >
                  <option value="">Select time</option>
                  <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                  <option value="Afternoon (12 PM - 5 PM)">Afternoon (12 PM - 5 PM)</option>
                  <option value="Evening (5 PM - 8 PM)">Evening (5 PM - 8 PM)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-neon-cyan outline-none transition-colors resize-none"
                placeholder="Tell us more about your project or goals..."
                data-testid="lead-form-message"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
              data-testid="lead-form-submit"
            >
              <Send size={20} />
              <span>{isSubmitting ? 'Sending...' : 'Send Inquiry'}</span>
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glass-panel p-8 space-y-6 md:w-80"
          >
            <div>
              <h3 className="text-xl font-syne font-bold mb-4">Or Message Us Directly</h3>
              <a
                href="https://wa.me/919740959176"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium flex items-center justify-center gap-2 transition-colors"
                data-testid="whatsapp-direct-btn"
              >
                <MessageCircle size={20} />
                <span>WhatsApp Us</span>
              </a>
            </div>

            <div className="pt-6 border-t border-white/10">
              <h4 className="font-semibold mb-3">What Happens Next?</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full mt-1.5 flex-shrink-0" />
                  <span>We'll review your inquiry within 24 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full mt-1.5 flex-shrink-0" />
                  <span>Free 30-minute strategy call</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full mt-1.5 flex-shrink-0" />
                  <span>Custom proposal tailored to your goals</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadFormSection;
