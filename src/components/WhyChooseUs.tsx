'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Shield, Clock, Users, Hammer, Star } from 'lucide-react'

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const features = [
    {
      icon: Award,
      title: 'Award-Winning Quality',
      description: 'Recognized excellence in construction and design with multiple industry awards.'
    },
    {
      icon: Shield,
      title: 'Warranty Protection',
      description: 'Comprehensive warranty coverage giving you peace of mind for years to come.'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Committed to delivering your project on schedule without compromising quality.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Highly skilled craftsmen and designers with decades of combined experience.'
    },
    {
      icon: Hammer,
      title: 'Quality Materials',
      description: 'Only the finest materials and fixtures sourced from trusted suppliers.'
    },
    {
      icon: Star,
      title: 'Customer Satisfaction',
      description: '98% customer satisfaction rate with hundreds of happy homeowners.'
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
            Why Build With SHRI Homes?
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what sets us apart as Melbourne&apos;s premier home builders. 
            Our commitment to excellence shows in every detail.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 text-cyan-600 rounded-full mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                <feature.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Building Process
          </h3>
          
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Initial meeting to discuss your vision' },
              { step: '02', title: 'Design', description: 'Creating detailed plans and 3D models' },
              { step: '03', title: 'Approval', description: 'Obtaining necessary permits and approvals' },
              { step: '04', title: 'Construction', description: 'Building your home with precision' },
              { step: '05', title: 'Handover', description: 'Final inspection and key handover' }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 bg-cyan-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{process.title}</h4>
                <p className="text-gray-600 text-sm">{process.description}</p>
                
                {/* Connector Line */}
                {index < 4 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300 -z-10"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Build Your Dream Home?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Join hundreds of satisfied homeowners who chose SHRI for their building journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300">
                Start Your Project
              </button>
              <button className="border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
