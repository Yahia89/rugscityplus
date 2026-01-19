import { motion } from 'framer-motion'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section className="py-20 px-4 relative" ref={ref}>
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-gold/30 rounded-2xl blur-2xl opacity-50"></div>

          {/* Content */}
          <div className="relative bg-gradient-to-br from-secondary/80 to-primary/80 backdrop-blur-xl border border-accent/30 rounded-2xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="bg-gradient-to-r from-gold to-accent bg-clip-text text-transparent">
                Be First to Know
              </span>
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Join our exclusive list and get early access to our premium collection
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 bg-primary/50 border border-accent/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors duration-300"
                required
              />
              <motion.button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-accent to-accent/80 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Notify Me
              </motion.button>
            </form>

            {submitted && (
              <motion.p
                className="mt-4 text-gold font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                ✓ Thank you! Check your email for updates.
              </motion.p>
            )}

            <p className="text-gray-500 text-sm mt-6">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
