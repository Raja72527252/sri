'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Bed, Bath, Square, Car } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const HouseDesigns = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  const { t } = useLanguage()

  const designs = [
    {
      id: 1,
      title: 'The Hampton',
      category: 'Luxury Family Home',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      specs: {
        bedrooms: 4,
        bathrooms: 3,
        area: 320,
        garage: 2
      },
      price: 'From $850,000'
    },
    {
      id: 2,
      title: 'The Melbourne',
      category: 'Modern Contemporary',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      specs: {
        bedrooms: 3,
        bathrooms: 2,
        area: 250,
        garage: 2
      },
      price: 'From $650,000'
    },
    {
      id: 3,
      title: 'The Brighton',
      category: 'Executive Home',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      specs: {
        bedrooms: 5,
        bathrooms: 4,
        area: 420,
        garage: 3
      },
      price: 'From $1,200,000'
    },
    {
      id: 4,
      title: 'The Coastal',
      category: 'Seaside Living',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      specs: {
        bedrooms: 3,
        bathrooms: 2,
        area: 280,
        garage: 1
      },
      price: 'From $720,000'
    }
  ]

  return (
    <section id="designs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('designs.title')}
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('designs.subtitle')}
          </p>
        </motion.div>

        {/* Design Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {designs.map((design, index) => (
            <motion.div
              key={design.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={design.image}
                  alt={design.title}
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {design.category}
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {design.title}
                </h3>
                
                <div className="grid grid-cols-2 gap-3 mb-3 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    <span>{design.specs.bedrooms} Beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    <span>{design.specs.bathrooms} Baths</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="w-4 h-4" />
                    <span>{design.specs.area}m²</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Car className="w-4 h-4" />
                    <span>{design.specs.garage} Garage</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-cyan-600">
                    {design.price}
                  </span>
                  <button className="text-cyan-500 hover:text-cyan-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-300 text-sm">
                    {t('designs.viewDetails')}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floor Plans Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="inline-block bg-blue-100 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold mb-4"
            >
              Architectural Excellence
            </motion.div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('designs.floorPlans')}
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('designs.floorPlans.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { 
                id: 1, 
                name: 'Modern Villa Plan', 
                image: '/plan1.webp', 
                fallback: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                description: 'Spacious 4-bedroom villa design',
                features: ['4 Bedrooms', '3 Bathrooms', 'Open Kitchen', 'Garden View']
              },
              { 
                id: 2, 
                name: 'Contemporary Home', 
                image: '/plan2.webp', 
                fallback: 'https://images.unsplash.com/photo-1600607688920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                description: 'Open-concept living layout',
                features: ['3 Bedrooms', '2 Bathrooms', 'Living Area', 'Modern Design']
              },
              { 
                id: 3, 
                name: 'Family Residence', 
                image: '/plan3.webp', 
                fallback: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                description: 'Multi-level family home',
                features: ['5 Bedrooms', '4 Bathrooms', 'Study Room', 'Garage']
              },
              { 
                id: 4, 
                name: 'Luxury Estate', 
                image: '/plan4.webp', 
                fallback: 'https://images.unsplash.com/photo-1600607688920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                description: 'Premium estate design',
                features: ['6 Bedrooms', '5 Bathrooms', 'Pool Area', 'Premium Finish']
              }
            ].map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border-2 border-gray-100 hover:border-blue-200"
              >
                <div className="relative overflow-hidden border-b-2 border-gray-100 aspect-video">
                  <img 
                    src={plan.image}
                    alt={plan.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = plan.fallback;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-gray-200 shadow-sm">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
                
                <div className="p-3">
                  <h4 className="text-base font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                    {plan.name}
                  </h4>
                  <p className="text-gray-600 mb-2 text-xs leading-tight">
                    {plan.description}
                  </p>
                  
                  <div className="space-y-1 mb-2">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs text-gray-700">
                        <div className="w-1 h-1 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-2 w-full bg-gray-100 hover:bg-blue-50 text-gray-700 hover:text-blue-600 py-1.5 px-3 rounded-lg font-medium transition-all duration-300 text-xs"
                  >
                    {t('designs.viewDetails')}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2, duration: 0.8 }}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-semibold flex items-center gap-3 mx-auto transition-all duration-300 shadow-lg"
            >
              {t('designs.exploreAll')}
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HouseDesigns
