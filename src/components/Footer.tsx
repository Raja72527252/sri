'use client'

import { motion } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter,
  Clock,
  Home,
  Users,
  Award,
  ArrowRight,
  ArrowUp
} from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const quickLinks = [
    { name: t('nav.home'), href: '#home', icon: Home },
    { name: t('nav.about'), href: '#about', icon: Users },
    { name: t('nav.services'), href: '#services', icon: Award },
    { name: t('nav.designs'), href: '#designs', icon: Home },
    { name: 'Gallery', href: '#gallery', icon: Users },
    { name: t('nav.contact'), href: '#contact', icon: Phone }
  ]

  const services = [
    'Custom Home Design',
    'House Extensions',
    'Renovations',
    'Project Management',
    'Interior Design',
    'Landscape Design'
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:text-sky-500' }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full blur-xl"
        />
      </div>

      <div className="relative">
        {/* Main footer content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mb-6"
              >
                <h3 className="text-4xl font-bold mb-3">
                  <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">MANN</span>
                  <span className="text-white ml-2 text-2xl font-light">HOMES</span>
                </h3>
              </motion.div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Building dream homes across Melbourne with over 25 years of excellence, 
                innovation, and unmatched craftsmanship.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 backdrop-blur-sm rounded-lg p-3 text-center"
                >
                  <div className="text-2xl font-bold text-amber-400">500+</div>
                  <div className="text-xs text-gray-300">Homes Built</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-blue-700/20 to-indigo-700/20 backdrop-blur-sm rounded-lg p-3 text-center"
                >
                  <div className="text-2xl font-bold text-blue-400">25+</div>
                  <div className="text-xs text-gray-300">{t('success.stats.years')}</div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 5,
                      boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)'
                    }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 hover:bg-gradient-to-r hover:from-amber-600 hover:to-orange-600`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href={link.href}
                      className="flex items-center space-x-3 text-gray-300 hover:text-amber-400 transition-colors duration-300 group"
                    >
                      <motion.div
                        whileHover={{ rotate: 15 }}
                        className="w-8 h-8 bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-lg flex items-center justify-center group-hover:from-amber-600/40 group-hover:to-orange-600/40 transition-all duration-300"
                      >
                        <link.icon className="w-4 h-4" />
                      </motion.div>
                      <span className="font-medium">{link.name}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-all duration-300 cursor-pointer group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full group-hover:shadow-lg group-hover:shadow-purple-500/50"
                    />
                    <span className="font-medium">{service}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Contact Info
              </h4>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start space-x-3 p-3 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm hover:from-blue-600/20 hover:to-purple-600/20 transition-all duration-300"
                >
                  <MapPin className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">Office Address</p>
                    <p className="text-gray-300 text-sm">PO Box 2034<br />Melton South, VIC 3338</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm hover:from-blue-600/20 hover:to-purple-600/20 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <p className="text-gray-300 text-sm">+61 0434 055 559</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm hover:from-blue-600/20 hover:to-purple-600/20 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-gray-300 text-sm">info@mannhomes.com.au</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm hover:from-blue-600/20 hover:to-purple-600/20 transition-all duration-300"
                >
                  <Clock className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">Hours</p>
                    <p className="text-gray-300 text-sm">Mon-Fri: 8AM-6PM<br />Sat: 9AM-4PM</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700/50 backdrop-blur-sm"
        >
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-xl font-bold mb-2 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  {t('footer.newsletter.title')}
                </h4>
                <p className="text-gray-300">
                  {t('footer.newsletter.description')}
                </p>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <input
                  type="email"
                  placeholder={t('contact.form.emailPlaceholder')}
                  className="flex-1 md:w-80 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-400 backdrop-blur-sm"
                />
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg"
                >
                  {t('footer.newsletter.subscribe')}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="border-t border-gray-700/50 backdrop-blur-sm"
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                {t('footer.copyright')}
              </div>
              <div className="flex items-center space-x-6">
                <div className="flex space-x-6 text-sm">
                  <motion.a
                    whileHover={{ color: '#60a5fa' }}
                    href="#"
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
                  >
                    Privacy Policy
                  </motion.a>
                  <motion.a
                    whileHover={{ color: '#a855f7' }}
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    Terms of Service
                  </motion.a>
                  <motion.a
                    whileHover={{ color: '#06b6d4' }}
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    Sitemap
                  </motion.a>
                </div>
                
                {/* Back to Top Button */}
                <motion.button
                  onClick={scrollToTop}
                  whileHover={{ 
                    y: -2,
                    scale: 1.05,
                    boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-orange-600/20 hover:from-blue-600/40 hover:to-purple-600/40 px-4 py-2 rounded-full text-gray-300 hover:text-white transition-all duration-300 text-sm backdrop-blur-sm border border-gray-600/50"
                >
                  <span>Back to Top</span>
                  <ArrowUp className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
