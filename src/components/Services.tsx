'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Home, Wrench, Palette, Shield, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  const { t } = useLanguage()

  const services = [
    {
      icon: Home,
      title: t('services.custom.title'),
      description: t('services.custom.description'),
      features: ['Architectural Design', 'Site Preparation', 'Quality Construction', 'Final Inspection']
    },
    {
      icon: Wrench,
      title: t('services.renovation.title'),
      description: t('services.renovation.description'),
      features: ['Kitchen Renovations', 'Bathroom Upgrades', 'Home Extensions', 'Interior Design']
    },
    {
      icon: Palette,
      title: t('services.consultation.title'),
      description: t('services.consultation.description'),
      features: ['3D Visualization', 'Material Selection', 'Color Consultation', 'Space Planning']
    },
    {
      icon: Shield,
      title: t('services.construction.title'),
      description: t('services.construction.description'),
      features: ['Timeline Management', 'Budget Control', 'Quality Assurance', 'Regular Updates']
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('services.title')}
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-cyan-200"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 text-cyan-600 rounded-full mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                  <service.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="group-hover:bg-cyan-500 group-hover:text-white border border-cyan-500 text-cyan-500 px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2 mx-auto">
                  {t('common.learnMore')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              {t('services.readyToStart.title')}
            </h3>
            <p className="text-xl mb-8 opacity-90">
              {t('services.readyToStart.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                {t('services.readyToStart.consultation')}
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                {t('services.readyToStart.portfolio')}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
