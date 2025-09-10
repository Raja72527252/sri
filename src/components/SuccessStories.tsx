'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Play } from 'lucide-react'

const SuccessStories = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Success Stories
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Transforming Lives Through Quality Construction
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Every project tells a story of transformation, dreams realized, and 
              families finding their perfect home. Our success is measured not just 
              in buildings completed, but in the joy and satisfaction of our clients.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              From young families buying their first home to executives seeking 
              luxury properties, we&apos;ve helped hundreds of Melbourne residents 
              create spaces they truly love.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                  <span className="text-cyan-600 font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Initial Consultation</h4>
                  <p className="text-gray-600">Understanding your vision and requirements</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                  <span className="text-cyan-600 font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Design & Planning</h4>
                  <p className="text-gray-600">Creating detailed plans and 3D visualizations</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                  <span className="text-cyan-600 font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Quality Construction</h4>
                  <p className="text-gray-600">Building with precision and attention to detail</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Success story video thumbnail"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Play className="w-8 h-8 text-cyan-500 ml-1" />
                </motion.button>
              </div>
            </div>
            
            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-500 mb-1">500+</div>
                <div className="text-gray-600 text-sm">Happy Families</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute -top-6 -right-6 bg-white p-6 rounded-lg shadow-xl"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-500 mb-1">98%</div>
                <div className="text-gray-600 text-sm">Satisfaction Rate</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-gray-200"
        >
          {[
            { number: '500+', label: 'Homes Completed', suffix: '', bgColor: 'bg-blue-50', textColor: 'text-blue-600', borderColor: 'border-blue-200' },
            { number: '15', label: 'Years Experience', suffix: '+', bgColor: 'bg-green-50', textColor: 'text-green-600', borderColor: 'border-green-200' },
            { number: '50', label: 'Awards Won', suffix: '+', bgColor: 'bg-purple-50', textColor: 'text-purple-600', borderColor: 'border-purple-200' },
            { number: '98', label: 'Client Satisfaction', suffix: '%', bgColor: 'bg-orange-50', textColor: 'text-orange-600', borderColor: 'border-orange-200' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
              className={`text-center p-6 rounded-2xl ${stat.bgColor} border ${stat.borderColor} hover:shadow-lg transition-all duration-300`}
            >
              <div className={`text-4xl font-bold ${stat.textColor} mb-2`}>
                {stat.number}{stat.suffix}
              </div>
              <div className="text-gray-700 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SuccessStories
