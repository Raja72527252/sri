'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Award, 
  Users, 
  Calendar, 
  Home, 
  Star, 
  Shield, 
  Clock,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Heart,
  Zap
} from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const { t } = useLanguage()

  const stats = [
    { 
      icon: Home, 
      number: '500+', 
      label: t('about.stats.projects'),
      color: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10'
    },
    { 
      icon: Calendar, 
      number: '25+', 
      label: t('about.stats.experience'),
      color: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10'
    },
    { 
      icon: Users, 
      number: '1000+', 
      label: t('about.stats.clients'),
      color: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-500/10 to-emerald-500/10'
    },
    { 
      icon: Award, 
      number: '50+', 
      label: t('about.stats.awards'),
      color: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-500/10 to-red-500/10'
    }
  ]

  // Helper functions for stat colors without gradients
  const getStatIconBg = (index: number) => {
    const colors = ['bg-blue-100', 'bg-purple-100', 'bg-green-100', 'bg-orange-100'];
    return colors[index % colors.length];
  }

  const getStatIconColor = (index: number) => {
    const colors = ['text-blue-600', 'text-purple-600', 'text-green-600', 'text-orange-600'];
    return colors[index % colors.length];
  }

  const getStatTextColor = (index: number) => {
    const colors = ['text-blue-600', 'text-purple-600', 'text-green-600', 'text-orange-600'];
    return colors[index % colors.length];
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0
    }
  }

  const features = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Every project undergoes rigorous quality checks at each stage',
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We pride ourselves on completing projects on time, every time',
      gradient: 'from-green-600 to-cyan-600'
    },
    {
      icon: Heart,
      title: 'Customer-Centric',
      description: 'Your satisfaction is our top priority in everything we do',
      gradient: 'from-pink-600 to-rose-600'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Latest technology and sustainable building practices',
      gradient: 'from-yellow-600 to-orange-600'
    }
  ]

  const achievements = [
    'Master Builders Association Member',
    'Green Building Certified',
    'ISO 9001 Quality Management',
    'Safety Excellence Award 2023',
    'Customer Choice Award Winner',
    'Sustainable Building Pioneer'
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-green-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                {t('about.title')}
              </div>
            </motion.div>
            <motion.h2 
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                {t('about.subtitle')}
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Since 1999
              </span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              {t('about.description')}
            </motion.p>
          </motion.div>

          {/* Enhanced Stats Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)'
                }}
                className={`bg-white backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 group`}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 ${getStatIconBg(index)} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl`}
                >
                  <stat.icon className={`w-8 h-8 ${getStatIconColor(index)}`} />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.3 + 0.5 }}
                  className={`text-4xl font-bold ${getStatTextColor(index)} mb-2`}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-700 font-semibold text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <motion.h3 
                  className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent"
                >
                  {t('about.visionTitle')}
                </motion.h3>
                <motion.p 
                  className="text-lg text-gray-600 leading-relaxed mb-8"
                >
                  {t('about.detailedDescription')}
                </motion.p>
              </div>

              {/* Enhanced Achievements */}
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">{t('about.achievements.title')}</h4>
                <div className="grid grid-cols-1 gap-3">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement}
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      className="flex items-center space-x-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 hover:border-green-300 transition-all duration-300 group"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                        className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0"
                      >
                        <CheckCircle className="w-5 h-5 text-white" />
                      </motion.div>
                      <span className="text-gray-800 font-medium group-hover:text-gray-900 transition-colors">
                        {achievement}
                      </span>
                      <ArrowRight className="w-4 h-4 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="relative">
                {/* Main image container with enhanced styling */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ duration: 0.6 }}
                  className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 p-1 rounded-3xl shadow-2xl"
                >
                  <div className="bg-gradient-to-br from-gray-100 to-white p-8 rounded-3xl">
                    <div className="w-full h-80 bg-gradient-to-br from-blue-100 via-purple-50 to-cyan-50 rounded-2xl flex items-center justify-center relative overflow-hidden">
                      {/* Enhanced image placeholder */}
                      <img 
                        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Modern home construction"
                        className="w-full h-full object-cover rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl" />
                    </div>
                  </div>
                </motion.div>

                {/* Floating elements */}
                <motion.div
                  animate={{ 
                    y: [-10, 10, -10],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white p-4 rounded-2xl shadow-xl"
                >
                  <Star className="w-8 h-8" />
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [10, -10, 10],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-400 to-emerald-400 text-white p-4 rounded-2xl shadow-xl"
                >
                  <TrendingUp className="w-8 h-8" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Features Grid */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-4">
                {t('about.whyChooseTitle')}
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {t('about.whyChooseSubtitle')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.05,
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)'
                  }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200 hover:border-gray-300 transition-all duration-500 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
