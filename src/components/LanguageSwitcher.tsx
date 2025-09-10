'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { Globe, ChevronDown } from 'lucide-react'

interface LanguageSwitcherProps {
  isScrolled?: boolean
}

const LanguageSwitcher = ({ isScrolled = false }: LanguageSwitcherProps) => {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)
  const closeDropdown = () => setIsOpen(false)

  const buttonClass = isScrolled
    ? 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300'
    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'

  const iconClass = isScrolled ? 'text-gray-700' : 'text-white'

  return (
    <div className="relative">
      <motion.button
        onClick={toggleDropdown}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-sm transition-all duration-300 ${buttonClass}`}
      >
        <Globe className={`w-4 h-4 ${iconClass}`} />
        <span className="text-sm font-medium">
          {language === 'en' ? 'English' : 'ਪੰਜਾਬੀ'}
        </span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} ${iconClass}`} />
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop to close dropdown */}
            <div 
              className="fixed inset-0 z-40" 
              onClick={closeDropdown}
            />
            
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50 min-w-[140px]"
            >
              <button
                onClick={() => {
                  setLanguage('en')
                  closeDropdown()
                }}
                className={`w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors duration-200 flex items-center gap-3 ${
                  language === 'en' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                }`}
              >
                <span className="text-lg">🇬🇧</span>
                <div>
                  <div className="text-sm font-medium">English</div>
                  <div className="text-xs text-gray-500">EN</div>
                </div>
              </button>
              
              <div className="border-t border-gray-100" />
              
              <button
                onClick={() => {
                  setLanguage('pa')
                  closeDropdown()
                }}
                className={`w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors duration-200 flex items-center gap-3 ${
                  language === 'pa' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                }`}
              >
                <span className="text-lg">🇮🇳</span>
                <div>
                  <div className="text-sm font-medium">ਪੰਜਾਬੀ</div>
                  <div className="text-xs text-gray-500">PA</div>
                </div>
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default LanguageSwitcher
