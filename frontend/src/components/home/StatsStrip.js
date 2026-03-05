import { motion } from 'framer-motion';

const StatsStrip = () => {
  const stats = [
    { value: '50+', label: 'Happy Clients' },
    { value: '₹2Cr+', label: 'Revenue Generated' },
    { value: '340%', label: 'Avg. Growth Rate' },
    { value: '24/7', label: 'Support Available' },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-neon-cyan/10 via-purple-500/10 to-neon-cyan/10 border-y border-white/5" data-testid="stats-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
              data-testid={`stat-${index}`}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-syne font-bold text-neon-cyan mb-2">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;