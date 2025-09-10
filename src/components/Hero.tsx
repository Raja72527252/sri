'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowRight, Play } from 'lucide-react'

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const changingTexts = [
    'Transform your vision into reality with our expert craftsmanship',
    'Building exceptional homes across Melbourne since 2010',
    'Luxury custom homes designed for modern living',
    'Quality construction with innovative design solutions',
    'Your dream home awaits with premium building services'
  ]
  const currentText = changingTexts[currentTextIndex]
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.slice(0, displayedText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 3000) // Wait 3s before deleting
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentText.slice(0, displayedText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % changingTexts.length)
        }
      }
    }, isDeleting ? 50 : 80) // Faster deletion, slower typing
    
    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, currentText, changingTexts.length])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Multi-layer Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80")'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 1, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [0, -1, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 blur-3xl"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight"
          >
            <motion.span 
              className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              MELBOURNE&apos;S PREMIUM HOME BUILDERS
            </motion.span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto min-h-[60px] flex items-center justify-center"
          >
            <span className="text-center">
              {displayedText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block w-0.5 h-6 bg-gradient-to-b from-blue-400 to-purple-400 ml-1"
              />
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 25px 50px rgba(59, 130, 246, 0.4)' 
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg flex items-center gap-3 transition-all duration-300 shadow-2xl"
            >
              Start Your Journey
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-2xl font-semibold text-lg flex items-center gap-3 transition-all duration-300"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center"
              >
                <Play className="w-4 h-4 ml-1" />
              </motion.div>
              Watch Our Story
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="w-8 h-14 border-2 border-white/50 rounded-full flex justify-center relative"
        >
          <motion.div
            animate={{ y: [0, 20, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="w-1.5 h-4 bg-gradient-to-b from-white to-cyan-300 rounded-full mt-3"
          />
        </motion.div>
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="text-white/70 text-sm mt-2 font-medium"
        >
          Scroll to explore
        </motion.p>
      </motion.div>
    </section>
  )
}

export default Hero
