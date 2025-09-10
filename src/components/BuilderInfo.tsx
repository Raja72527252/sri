'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Users, Home, Calendar, Trophy, CheckCircle, Star } from 'lucide-react'

const BuilderInfo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const achievements = [
    { icon: Home, number: '500+', label: 'Homes Built', color: 'from-blue-500 to-purple-600' },
    { icon: Users, number: '15+', label: 'Years Experience', color: 'from-green-500 to-teal-600' },
    { icon: Award, number: '50+', label: 'Awards Won', color: 'from-orange-500 to-red-600' },
    { icon: Star, number: '98%', label: 'Client Satisfaction', color: 'from-yellow-500 to-orange-600' }
  ]

  const features = [
    'Premium Quality Materials',
    'Expert Craftsmanship',
    'On-Time Delivery',
    'Comprehensive Warranty',
    'Transparent Pricing',
    'Dedicated Project Manager'
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m0 0h100v100h-100z' fill='none'/%3E%3Cpath d='m0 0 50 50m0-50 50 50m-100 0 50 50m0-50 50 50' stroke='%23000' stroke-width='1'/%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Builders Melbourne -
            <br />
            <span className="text-4xl md:text-6xl">Transforming Homes</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Experience the difference with Melbourne&apos;s most trusted home builders. 
            We don&apos;t just build houses, we create dream homes that reflect your lifestyle and aspirations.
          </p>
        </motion.div>

        {/* Achievement Stats with Enhanced Animations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group text-center relative"
            >
              <div className={`w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${achievement.color} p-1 shadow-lg hover:shadow-2xl transition-all duration-300`}>
                <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                  <achievement.icon className="w-10 h-10 text-gray-700 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2"
              >
                {achievement.number}
              </motion.div>
              <div className="text-gray-600 font-medium">{achievement.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Melbourne&apos;s Premier
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                House Builders
              </span>
            </h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              For over 15 years, SHRI has been at the forefront of Melbourne&apos;s construction industry, 
              delivering exceptional homes that stand the test of time. Our commitment to quality, 
              innovation, and client satisfaction has made us the preferred choice for discerning homeowners.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg"
              >
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300"
              >
                View Portfolio
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {/* Main large image */}
              <motion.div
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="col-span-2 relative overflow-hidden rounded-3xl shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Luxury home interior"
                  className="w-full h-80 object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2">
                    <div className="text-sm font-semibold text-gray-800">Premium Interior</div>
                  </div>
                </div>
              </motion.div>
              
              {/* Two smaller images */}
              <motion.div
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="relative overflow-hidden rounded-2xl shadow-lg"
              >
                <img 
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Modern kitchen"
                  className="w-full h-40 object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="relative overflow-hidden rounded-2xl shadow-lg"
              >
                <img 
                  src="https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Luxury bathroom"
                  className="w-full h-40 object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </motion.div>
            </div>

            {/* Floating Badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -top-6 -right-6 bg-gradient-to-r from-orange-500 to-red-600 text-white p-4 rounded-2xl shadow-xl"
            >
              <div className="text-center">
                <Trophy className="w-8 h-8 mx-auto mb-1" />
                <div className="text-xs font-semibold">Award Winner</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-2xl shadow-xl"
            >
              <div className="text-center">
                <Calendar className="w-8 h-8 mx-auto mb-1" />
                <div className="text-xs font-semibold">15+ Years</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BuilderInfo
