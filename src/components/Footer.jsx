import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: '𝕏', href: '#', label: 'Twitter' },
    { icon: 'f', href: '#', label: 'Facebook' },
    { icon: '📷', href: '#', label: 'Instagram' },
    { icon: '💼', href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="border-t border-accent/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-bold text-gold mb-2">Rugs City Plus</h3>
            <p className="text-gray-400 text-sm">Premium luxury rugs for discerning collectors</p>
          </motion.div>

          {/* Links */}
          {[
            {
              title: 'Company',
              links: ['About', 'Blog', 'Careers', 'Contact'],
            },
            {
              title: 'Legal',
              links: ['Privacy', 'Terms', 'Cookies', 'Compliance'],
            },
            {
              title: 'Connect',
              links: ['Twitter', 'Instagram', 'Facebook', 'LinkedIn'],
            },
          ].map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-accent/20 pt-8">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-6">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-gold hover:bg-accent/20 hover:border-gold transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm">
            <p>© {currentYear} Rugs City Plus. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
