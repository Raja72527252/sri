'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Plus, Minus } from 'lucide-react'

const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const faqs = [
    {
      question: 'How long does it take to build a custom home?',
      answer: 'The timeline for building a custom home typically ranges from 6-12 months, depending on the size, complexity, and weather conditions. We provide detailed project timelines during the planning phase and keep you updated throughout the construction process.'
    },
    {
      question: 'What is included in your building quote?',
      answer: 'Our comprehensive quotes include all construction costs, materials, labor, permits, and project management. We provide detailed breakdowns so you know exactly what you\'re paying for, with no hidden costs or surprises.'
    },
    {
      question: 'Do you handle permits and approvals?',
      answer: 'Yes, we handle all necessary permits, council approvals, and compliance requirements. Our team has extensive experience with Melbourne\'s building regulations and will ensure your project meets all legal requirements.'
    },
    {
      question: 'Can I make changes during construction?',
      answer: 'While we prefer to finalize all details before construction begins, we understand that changes may be necessary. Minor changes can often be accommodated, though they may affect timeline and costs. We\'ll discuss any implications before proceeding.'
    },
    {
      question: 'What warranty do you provide?',
      answer: 'We provide comprehensive warranty coverage including structural warranty, defects liability period, and ongoing support. Our team stands behind our work and is committed to your long-term satisfaction.'
    },
    {
      question: 'How do you ensure quality control?',
      answer: 'We have rigorous quality control processes including regular inspections, skilled craftsmen, premium materials, and adherence to Australian building standards. Our project managers conduct regular site visits and quality checks.'
    },
    {
      question: 'What sets SHRI apart from other builders?',
      answer: 'Our commitment to quality, attention to detail, transparent communication, and customer satisfaction sets us apart. With 15+ years of experience and 500+ successful projects, we have the expertise to deliver exceptional results.'
    },
    {
      question: 'Do you work with architects and designers?',
      answer: 'Yes, we work with a network of trusted architects and designers, or we can work with your chosen professionals. Our collaborative approach ensures seamless integration between design and construction phases.'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Got questions about building with SHRI? Here are answers to some of the 
            most common questions we receive from our clients.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-4">
              {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                  >
                    <span className="font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0">
                      {openItems.includes(index) ? (
                        <Minus className="w-5 h-5 text-cyan-500" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openItems.includes(index) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => {
                const actualIndex = index + Math.ceil(faqs.length / 2)
                return (
                  <motion.div
                    key={actualIndex}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: actualIndex * 0.1, duration: 0.6 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(actualIndex)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                    >
                      <span className="font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </span>
                      <div className="flex-shrink-0">
                        {openItems.includes(actualIndex) ? (
                          <Minus className="w-5 h-5 text-cyan-500" />
                        ) : (
                          <Plus className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {openItems.includes(actualIndex) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-8 md:p-12 rounded-2xl text-white">
              <h3 className="text-3xl font-bold mb-4">
                Still Have Questions?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Can&apos;t find the answer you&apos;re looking for? Our team is here to help 
                with any questions about your building project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Contact Us Today
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
