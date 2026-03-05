import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, MapPin, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on metrics that matter: leads, revenue, ROI. Not vanity metrics.',
    },
    {
      icon: Heart,
      title: 'Transparent',
      description: "No smoke and mirrors. We tell you what works, what doesn't, and why.",
    },
    {
      icon: TrendingUp,
      title: 'Growth-Focused',
      description: "Your growth is our success. We're invested in long-term partnerships.",
    },
    {
      icon: Users,
      title: 'Local Expertise',
      description: 'We understand the Uttarakhand market and the unique needs of local businesses.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Digital Marketing Agency in Roorkee | Clout Studio</title>
        <meta
          name="description"
          content="Clout Studio: Roorkee-based digital marketing agency helping businesses across Uttarakhand grow with data-driven strategies. Meet our team and mission."
        />
      </Helmet>

      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="py-16 bg-[#0A0A0A] relative overflow-hidden">
          <div className="absolute inset-0 grid-overlay opacity-20" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-syne font-bold mb-6">
                About <span className="text-neon-cyan">Clout Studio</span>
              </h1>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Your growth partner in Roorkee, Uttarakhand. We help businesses scale with data-driven digital marketing.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 bg-[#030303]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <Eye size={48} className="text-neon-cyan" />
                  <h2 className="text-3xl font-syne font-bold">Our Mission</h2>
                </div>
                <p className="text-white/70 leading-relaxed mb-4">
                  We exist to make high-quality digital marketing accessible to businesses in Roorkee, Haridwar, Dehradun, and across India.
                </p>
                <p className="text-white/70 leading-relaxed">
                  Too many great businesses are held back by poor online presence. We're here to change that. Our goal is simple: drive real results that impact your bottom line.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-panel p-8"
              >
                <img
                  src="https://images.unsplash.com/photo-1758518727707-b023e285b709?crop=entropy&cs=srgb&fm=jpg&q=85"
                  alt="Team collaboration"
                  className="w-full h-64 object-cover mb-6"
                />
                <h3 className="text-xl font-syne font-bold mb-3">Why Roorkee?</h3>
                <p className="text-white/70 leading-relaxed">
                  Roorkee is our home. We understand the local market, the challenges businesses face here, and the opportunities that exist. Being local means we're always available, always invested, and always committed to seeing our community thrive.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-syne font-bold mb-4">Our Values</h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                The principles that guide how we work with every client
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="glass-panel p-6 text-center hover:border-neon-cyan/50 transition-colors duration-300"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center glass-panel border-neon-cyan/30">
                      <Icon size={32} className="text-neon-cyan" />
                    </div>
                    <h3 className="text-xl font-syne font-bold mb-3">{value.title}</h3>
                    <p className="text-sm text-white/60">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-[#030303]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-syne font-bold mb-4">Meet the Team</h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Experienced marketers, designers, and strategists committed to your success
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="glass-panel p-8 md:p-12 text-center"
            >
              <img
                src="https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=srgb&fm=jpg&q=85"
                alt="Team working together"
                className="w-full h-96 object-cover mb-8"
              />
              <p className="text-white/70 leading-relaxed max-w-3xl mx-auto mb-6">
                Our team combines years of experience in digital marketing, design, development, and business strategy. We've helped dozens of businesses across Uttarakhand and India achieve their growth goals.
              </p>
              <p className="text-white/70 leading-relaxed max-w-3xl mx-auto">
                What sets us apart? We don't just execute campaigns - we become an extension of your team. Your wins are our wins. Your challenges are ours to solve.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Local Presence */}
        <section className="py-16 bg-[#0A0A0A]">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-8 md:p-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <MapPin size={48} className="text-neon-cyan" />
                <h2 className="text-3xl font-syne font-bold">Serving Uttarakhand</h2>
              </div>
              <p className="text-white/70 leading-relaxed mb-6">
                While we're based in Roorkee, we actively serve businesses across Uttarakhand including:
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {['Roorkee', 'Haridwar', 'Dehradun', 'Rishikesh', 'Haldwani', 'Nainital', 'Rudrapur', 'Kashipur'].map((city) => (
                  <div key={city} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-neon-cyan rounded-full" />
                    <span className="text-white/70">{city}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/70 leading-relaxed">
                And of course, we work with clients across India and globally through remote collaboration.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-neon-cyan/10 via-purple-500/10 to-neon-cyan/10 border-y border-white/5">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl font-syne font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-white/70 mb-8">
              Let's discuss your goals and create a custom growth plan for your business.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 btn-primary group">
              <span>Get in Touch</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
