import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error('Please fill in all fields');
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
      await axios.post(`${BACKEND_URL}/api/contact`, formData);
      setIsSuccess(true);
      toast.success('Message sent! We\'ll get back to you soon.');
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast.error('Something went wrong. Please try calling us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Get In Touch | Clout Studio Roorkee</title>
        <meta
          name="description"
          content="Contact Clout Studio in Roorkee, Uttarakhand. Call, WhatsApp, or visit us. Free consultation for digital marketing services. Serving Haridwar, Dehradun & India."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Clout Studio",
              "telephone": "+919740959176",
              "email": "hello@cloutstudio.co",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Roorkee",
                "addressRegion": "Uttarakhand",
                "postalCode": "247667",
                "addressCountry": "IN"
              }
            }
          })}
        </script>
      </Helmet>

      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-16 bg-[#0A0A0A] relative overflow-hidden">
          <div className="absolute inset-0 grid-overlay opacity-20" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-syne font-bold mb-6">
                Get In <span className="text-neon-cyan">Touch</span>
              </h1>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Ready to grow your business? Let's talk. Free consultation, no obligation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16 bg-[#030303]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-syne font-bold mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 flex items-center justify-center glass-panel border-neon-cyan/30 flex-shrink-0">
                        <Phone size={24} className="text-neon-cyan" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <a href="tel:9740959176" className="text-white/70 hover:text-neon-cyan transition-colors">
                          +91 97409 59176
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 flex items-center justify-center glass-panel border-neon-cyan/30 flex-shrink-0">
                        <Mail size={24} className="text-neon-cyan" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <a href="mailto:hello@cloutstudio.co" className="text-white/70 hover:text-neon-cyan transition-colors">
                          hello@cloutstudio.co
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 flex items-center justify-center glass-panel border-neon-cyan/30 flex-shrink-0">
                        <MapPin size={24} className="text-neon-cyan" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Location</h3>
                        <p className="text-white/70">
                          Roorkee, Uttarakhand 247667<br />India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 flex items-center justify-center glass-panel border-neon-cyan/30 flex-shrink-0">
                        <Clock size={24} className="text-neon-cyan" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Business Hours</h3>
                        <p className="text-white/70">
                          Monday - Saturday<br />9:00 AM - 6:00 PM IST
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-panel p-6">
                  <h3 className="font-syne font-bold mb-4">Quick Response Promise</h3>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full mt-1.5 flex-shrink-0" />
                      <span>Email responses within 24 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full mt-1.5 flex-shrink-0" />
                      <span>Phone/WhatsApp responses within 2 hours during business hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full mt-1.5 flex-shrink-0" />
                      <span>Free 30-minute consultation call</span>
                    </li>
                  </ul>
                </div>

                <a
                  href="https://wa.me/919740959176"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-medium flex items-center justify-center gap-2 transition-colors"
                  data-testid="whatsapp-contact-btn"
                >
                  <MessageCircle size={24} />
                  <span>Chat on WhatsApp</span>
                </a>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {isSuccess ? (
                  <div className="glass-panel p-12 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      className="w-24 h-24 mx-auto mb-6 bg-neon-cyan/10 border-2 border-neon-cyan flex items-center justify-center"
                    >
                      <CheckCircle size={48} className="text-neon-cyan" />
                    </motion.div>
                    <h2 className="text-3xl font-syne font-bold mb-4">Message Sent!</h2>
                    <p className="text-white/70 mb-8">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({ name: '', email: '', phone: '', message: '' });
                      }}
                      className="px-8 py-3 btn-secondary"
                    >
                      <span>Send Another Message</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="glass-panel p-8 space-y-6" data-testid="contact-form">
                    <h2 className="text-2xl font-syne font-bold mb-6">Send Us a Message</h2>

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
                        data-testid="contact-form-name"
                      />
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
                          data-testid="contact-form-email"
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
                          data-testid="contact-form-phone"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Message <span className="text-neon-cyan">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-neon-cyan outline-none transition-colors resize-none"
                        placeholder="Tell us about your project, goals, or questions..."
                        data-testid="contact-form-message"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
                      data-testid="contact-form-submit"
                    >
                      <Send size={20} />
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-16 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-syne font-bold mb-4">Find Us</h2>
              <p className="text-white/60">Based in Roorkee, serving businesses across Uttarakhand and India</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="glass-panel overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55330.89285143793!2d77.84834799999999!3d29.8543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eb36115c12a47%3A0xd4f5d136d2a2e0e4!2sRoorkee%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clout Studio Location"
              />
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
