import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const features = [
  {
    icon: '🏆',
    title: 'Curated Excellence',
    description: 'Hand-selected premium rugs from master artisans worldwide',
  },
  {
    icon: '✨',
    title: 'Luxury Quality',
    description: 'Finest materials and craftsmanship in every piece',
  },
  {
    icon: '🌍',
    title: 'Global Collection',
    description: 'Authentic designs from diverse cultures and traditions',
  },
  {
    icon: '🛡️',
    title: 'Authenticity Guaranteed',
    description: 'Certified genuine with full provenance documentation',
  },
]

export default function Features() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
            <span className="bg-gradient-to-r from-gold to-accent bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience the pinnacle of luxury rug collection with our carefully curated selection
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-gold/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-secondary/50 backdrop-blur-md border border-accent/20 rounded-xl p-8 h-full hover:border-gold/50 transition-colors duration-300">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
