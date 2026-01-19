import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero({ scrollY }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2026-03-01').getTime()
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Parallax effect */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo/Brand */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-block">
            <div className="text-6xl font-bold bg-gradient-to-r from-accent via-gold to-accent bg-clip-text text-transparent">
              ✨
            </div>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-7xl font-display font-bold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-white via-gold to-accent bg-clip-text text-transparent">
            Rugs City Plus
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-12 font-light max-w-2xl mx-auto"
        >
          Premium luxury rugs curated for the most discerning collectors. Coming soon to elevate your space.
        </motion.p>

        {/* Countdown */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="grid grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-br from-accent/20 to-gold/20 backdrop-blur-md border border-accent/30 rounded-lg p-4 md:p-6"
                whileHover={{ scale: 1.05, borderColor: '#d4af37' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-gold mb-2">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-widest">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-accent to-accent/80 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Notify Me
          </motion.button>
          <motion.button
            className="px-8 py-4 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-20 flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-gray-400 text-sm">Scroll to explore</div>
        </motion.div>
      </motion.div>
    </section>
  )
}
