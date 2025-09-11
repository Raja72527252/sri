'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'pa'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation data
const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.designs': 'Designs',
    'nav.contact': 'Contact',
    'nav.gallery': 'Gallery',
    'nav.getQuote': 'Get Quote',
    'header.tagline': 'HOME BUILDERS',
    'header.subtitle': "Melbourne's Finest",

    // Hero Section
    'hero.title': "MELBOURNE'S PREMIUM HOME BUILDERS",
    'hero.subtitle': 'Building Dreams into Reality',
    'hero.description': 'Transform your vision into a stunning home with our expert craftsmanship and innovative designs.',
    'hero.getStarted': 'Get Started',
    'hero.viewProjects': 'View Projects',
    'hero.typewriter.1': 'Your Dream Home Awaits',
    'hero.typewriter.2': 'Quality Construction Guaranteed',
    'hero.typewriter.3': 'Melbourne\'s Trusted Builders',
    'hero.typewriter.4': 'Innovative Home Designs',
    'hero.typewriter.5': 'Excellence in Every Detail',

    // About Section
    'about.title': 'About Mann Homes',
    'about.subtitle': 'Building Dreams',
    'about.description': 'With over two decades of excellence in home building, Mann Homes has established itself as Melbourne\'s premier luxury home builder, creating extraordinary homes that exceed expectations.',
    'about.experience': 'Over 15 years of experience building quality homes across Melbourne',
    'about.commitment': 'Committed to excellence in every aspect of home construction',
    'about.innovation': 'Innovative designs that blend functionality with aesthetic appeal',
    'about.detailedDescription': 'At Mann Home Builders, we believe that every home should be a reflection of its owner\'s personality and lifestyle. Our team of expert architects, designers, and craftsmen work together to bring your vision to life with unparalleled attention to detail.',
    'about.achievements.title': 'Our Achievements',
    'about.visionTitle': 'Your Vision, Our Expertise',
    'about.whyChooseTitle': 'Why Choose Mann Homes?',
    'about.whyChooseSubtitle': 'Discover what sets us apart in the home building industry',
    'about.stats.projects': 'Projects Completed',
    'about.stats.experience': 'Years Experience',
    'about.stats.clients': 'Happy Clients',
    'about.stats.awards': 'Awards Won',

    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'We offer comprehensive building services to bring your vision to life, from initial design to final completion.',
    'services.custom.title': 'Custom Home Design',
    'services.custom.description': 'Tailored designs that reflect your unique style and preferences.',
    'services.construction.title': 'Quality Construction',
    'services.construction.description': 'Expert craftsmanship using premium materials and techniques.',
    'services.renovation.title': 'Home Renovations',
    'services.renovation.description': 'Transform your existing space with our renovation expertise.',
    'services.consultation.title': 'Design Consultation',
        'services.consultation.description': 'Professional guidance to bring your vision to life.',
    'services.readyToStart.title': 'Ready to Start Your Project?',
    'services.readyToStart.subtitle': 'Let\'s discuss your vision and turn it into reality with our expert team.',
    'services.readyToStart.consultation': 'Get Free Consultation',
    'services.readyToStart.portfolio': 'View Portfolio',

    // Why Choose Us Section

    // House Designs
    'designs.title': 'House Designs',
    'designs.subtitle': 'Explore our collection of thoughtfully designed homes',
    'designs.floorPlans': 'Detailed Floor Plans',
    'designs.floorPlans.subtitle': 'Explore our meticulously crafted floor plans designed for modern living',
    'designs.viewDetails': 'View Details',
    'designs.exploreAll': 'Explore All Floor Plans',

    // Success Stories
    'success.title': 'Our Success Stories',
    'success.subtitle': 'Transforming Lives Through Quality Construction',
    'success.description': 'Every project tells a story of transformation, dreams realized, and families finding their perfect home.',
    'success.stats.homes': 'Homes Completed',
    'success.stats.years': 'Years Experience',
    'success.stats.awards': 'Awards Won',
    'success.stats.satisfaction': 'Client Satisfaction',

    // Contact
    'contact.title': 'Get Started on Your Home Building Journey Today',
    'contact.subtitle': 'Ready to turn your dream home into reality? Contact us today for a free consultation and discover how we can bring your vision to life.',
    'contact.phone': 'Call Us',
    'contact.email': 'Email Us',
    'contact.address': 'Visit Us',
    'contact.getQuote': 'Get Free Quote',
    'contact.form.title': 'Send us a Message',
    'contact.form.firstName': 'First Name *',
    'contact.form.lastName': 'Last Name *',
    'contact.form.email': 'Email Address *',
    'contact.form.phone': 'Phone Number',
    'contact.form.projectType': 'Project Type',
    'contact.form.message': 'Message *',
    'contact.form.firstNamePlaceholder': 'Enter your first name',
    'contact.form.lastNamePlaceholder': 'Enter your last name',
    'contact.form.emailPlaceholder': 'Enter your email',
    'contact.form.phonePlaceholder': 'Enter your phone number',
    'contact.form.messagePlaceholder': 'Tell us about your project...',
    'contact.form.selectProject': 'Select project type',
    'contact.form.newHome': 'New Home Build',
    'contact.form.extension': 'Home Extension',
    'contact.form.renovation': 'Renovation',
    'contact.form.commercial': 'Commercial Project',
    'contact.form.other': 'Other',
    'contact.form.sendMessage': 'Send Message',

    // Footer
    'footer.newsletter.title': 'Stay Updated',
    'footer.newsletter.description': 'Subscribe to our newsletter for the latest news and project updates.',
    'footer.newsletter.subscribe': 'Subscribe',
    'footer.copyright': '© 2024 Mann Home Builders. All rights reserved.',

    // Testimonials
    'testimonials.title': 'What Our Clients Say About Us',
    'testimonials.subtitle': 'Don\'t just take our word for it. Here\'s what our satisfied clients have to say about their experience building with Mann Homes.',
    'testimonials.getInTouch': 'Get In Touch',

    // Why Choose Us
    'whyChoose.title': 'Why Build With Mann Homes?',
    'whyChoose.subtitle': 'Discover what sets us apart as Melbourne\'s premier home builders. Our commitment to excellence shows in every detail.',
    'whyChoose.quality.title': 'Award-Winning Quality',
    'whyChoose.quality.description': 'Recognized excellence in construction and design with multiple industry awards.',
    'whyChoose.warranty.title': 'Warranty Protection',
        'whyChooseUs.warranty.description': 'Complete peace of mind with our guarantee',
    'whyChoose.process.title': 'Our Building Process',
    'whyChoose.process.consultation': 'Consultation',
    'whyChoose.process.consultationDesc': 'Initial meeting to discuss your vision',
    'whyChoose.process.design': 'Design',
    'whyChoose.process.designDesc': 'Creating detailed plans and 3D models',
    'whyChoose.process.approval': 'Approval',
    'whyChoose.process.approvalDesc': 'Obtaining necessary permits and approvals',
    'whyChoose.process.construction': 'Construction',
    'whyChoose.process.constructionDesc': 'Building your home with precision',
    'whyChoose.process.handover': 'Handover',
    'whyChoose.process.handoverDesc': 'Final inspection and key handover',
    'whyChoose.readyToBuild.title': 'Ready to Build Your Dream Home?',
    'whyChoose.readyToBuild.subtitle': 'Take the first step towards your new home. Contact us today for a personalized consultation.',
    'whyChoose.readyToBuild.contact': 'Contact Us Today',
    'whyChoose.readyToBuild.getQuote': 'Get Free Quote',

    // Custom Build Section
    'whyChoose.delivery.title': 'On-Time Delivery',
    'whyChoose.delivery.description': 'Committed to delivering your project on schedule without compromising quality.',
    'whyChoose.team.title': 'Expert Team',
    'whyChoose.team.description': 'Highly skilled craftsmen and designers with decades of combined experience.',
    'whyChoose.materials.title': 'Quality Materials',
    'whyChoose.materials.description': 'Only the finest materials and fixtures sourced from trusted suppliers.',
    'whyChoose.satisfaction.title': 'Customer Satisfaction',
    'whyChoose.satisfaction.description': '98% customer satisfaction rate with hundreds of happy homeowners.',

    // Custom Build
    'customBuild.title': 'Build Your Dream Home With Custom',
    'customBuild.titleHighlight': 'Excellence',
    'customBuild.description1': 'Every family is unique, and so should be their home. Our custom home building service allows you to create a space that perfectly reflects your lifestyle, preferences, and dreams.',
    'customBuild.description2': 'With Mann Homes, you\'re not just getting a house – you\'re getting a home designed specifically for you, built with the highest quality materials and craftsmanship in Melbourne.',
    'customBuild.features.architectural': 'Architectural Design Services',
    'customBuild.features.materials': 'Premium Material Selection',
    'customBuild.features.interior': 'Custom Interior Design',
    'customBuild.features.smart': 'Smart Home Integration',
    'customBuild.features.energy': 'Energy Efficient Solutions',
    'customBuild.features.luxury': 'Luxury Finishes & Fixtures',
    'customBuild.features.landscaping': 'Landscaping & Outdoor Spaces',
    'customBuild.features.management': 'Comprehensive Project Management',
    'customBuild.journey.title': 'Your Custom Build Journey',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Got questions about building with Mann Homes? Here are answers to some of the most common questions we receive from our clients.',
    'faq.timeline.question': 'How long does it take to build a custom home?',
    'faq.timeline.answer': 'The timeline for building a custom home typically ranges from 6-12 months, depending on the size, complexity, and weather conditions.',
    'faq.quote.question': 'What is included in your building quote?',
    'faq.quote.answer': 'Our comprehensive quotes include all construction costs, materials, labor, permits, and project management.',
    'faq.permits.question': 'Do you handle permits and approvals?',
    'faq.permits.answer': 'Yes, we handle all necessary permits, council approvals, and compliance requirements.',
    'faq.changes.question': 'Can I make changes during construction?',
    'faq.changes.answer': 'Minor changes can often be accommodated, though they may affect timeline and costs.',
    'faq.warranty.question': 'What warranty do you provide?',
    'faq.warranty.answer': 'We provide comprehensive warranty coverage including structural warranty and defects liability period.',
    'faq.quality.question': 'How do you ensure quality control?',
    'faq.quality.answer': 'We have rigorous quality control processes including regular inspections and skilled craftsmen.',
    'faq.difference.question': 'What sets Mann Homes apart from other builders?',
    'faq.difference.answer': 'Our commitment to quality, attention to detail, and customer satisfaction with 15+ years of experience.',
    'faq.consultation': 'Schedule Consultation',
    'faq.stillHaveQuestions': 'Still Have Questions?',

    // Builder Info
    'builderInfo.title': 'Builders Melbourne',
    'builderInfo.subtitle': 'Transforming Homes',
    'builderInfo.description': 'Experience the difference with Melbourne\'s most trusted home builders. We don\'t just build houses, we create dream homes that reflect your lifestyle and aspirations.',
    'builderInfo.premier': 'Melbourne\'s Premier',
    'builderInfo.houseBuilders': 'House Builders',
    'builderInfo.companyDescription': 'For over 15 years, Mann Homes has been at the forefront of Melbourne\'s construction industry, delivering exceptional homes that stand the test of time.',
    'builderInfo.features.premium': 'Premium Quality Materials',
    'builderInfo.features.craftsmanship': 'Expert Craftsmanship',
    'builderInfo.features.delivery': 'On-Time Delivery',
    'builderInfo.features.warranty': 'Comprehensive Warranty',
    'builderInfo.features.pricing': 'Transparent Pricing',
    'builderInfo.features.manager': 'Dedicated Project Manager',

    // Common
    'common.readMore': 'Read More',
    'common.learnMore': 'Learn More',
    'common.viewAll': 'View All',
    'common.getStarted': 'Get Started',
  },
  pa: {
    // Header
    'nav.home': 'ਘਰ',
    'nav.about': 'ਸਾਡੇ ਬਾਰੇ',
    'nav.services': 'ਸੇਵਾਵਾਂ',
    'nav.designs': 'ਡਿਜ਼ਾਈਨ',
    'nav.contact': 'ਸੰਪਰਕ',
    'nav.gallery': 'ਗੈਲਰੀ',
    'nav.getQuote': 'ਕੋਟ ਲਓ',

    // Hero Section
    'hero.title': 'ਮੈਲਬਰਨ ਦੇ ਪ੍ਰੀਮੀਅਮ ਘਰ ਬਿਲਡਰ',
    'hero.subtitle': 'ਸਪਨਿਆਂ ਨੂੰ ਹਕੀਕਤ ਵਿੱਚ ਬਦਲਣਾ',
    'hero.description': 'ਸਾਡੀ ਮਾਹਰ ਕਾਰੀਗਰੀ ਅਤੇ ਨਵੀਨ ਡਿਜ਼ਾਈਨਾਂ ਨਾਲ ਆਪਣੇ ਵਿਜ਼ਨ ਨੂੰ ਇੱਕ ਸ਼ਾਨਦਾਰ ਘਰ ਵਿੱਚ ਬਦਲੋ।',
    'hero.getStarted': 'ਸ਼ੁਰੂ ਕਰੋ',
    'hero.viewProjects': 'ਪ੍ਰੋਜੈਕਟ ਦੇਖੋ',
    'hero.typewriter.1': 'ਤੁਹਾਡਾ ਸਪਨਿਆਂ ਦਾ ਘਰ ਇੰਤਜ਼ਾਰ ਕਰ ਰਿਹਾ ਹੈ',
    'hero.typewriter.2': 'ਗੁਣਵੱਤਾ ਨਿਰਮਾਣ ਦੀ ਗਾਰੰਟੀ',
    'hero.typewriter.3': 'ਮੈਲਬਰਨ ਦੇ ਭਰੋਸੇਮੰਦ ਬਿਲਡਰ',
    'hero.typewriter.4': 'ਨਵੀਨ ਘਰ ਡਿਜ਼ਾਈਨ',
    'hero.typewriter.5': 'ਹਰ ਵੇਰਵੇ ਵਿੱਚ ਉਤਕਰਸ਼ਤਾ',

    // About Section
    'about.title': 'ਸ਼੍ਰੀ ਹੋਮਜ਼ ਬਾਰੇ',
    'about.subtitle': 'ਸਪਨੇ ਬਣਾਉਣਾ',
    'about.description': 'ਘਰ ਬਣਾਉਣ ਵਿੱਚ ਦੋ ਦਹਾਕਿਆਂ ਤੋਂ ਵੱਧ ਦੀ ਉਤਕਰਸ਼ਤਾ ਨਾਲ, ਸ਼੍ਰੀ ਨੇ ਆਪਣੇ ਆਪ ਨੂੰ ਮੈਲਬਰਨ ਦਾ ਪ੍ਰੀਮੀਅਰ ਲਗਜ਼ਰੀ ਘਰ ਬਿਲਡਰ ਵਜੋਂ ਸਥਾਪਿਤ ਕੀਤਾ ਹੈ।',
    'about.experience': 'ਮੈਲਬਰਨ ਭਰ ਵਿੱਚ ਗੁਣਵੱਤਾ ਘਰ ਬਣਾਉਣ ਦਾ 15 ਸਾਲਾਂ ਤੋਂ ਵੱਧ ਦਾ ਤਜਰਬਾ',
    'about.commitment': 'ਘਰ ਨਿਰਮਾਣ ਦੇ ਹਰ ਪਹਿਲੂ ਵਿੱਚ ਉਤਕਰਸ਼ਤਾ ਲਈ ਵਚਨਬੱਧ',
    'about.innovation': 'ਨਵੀਨ ਡਿਜ਼ਾਈਨ ਜੋ ਕਾਰਜਸ਼ੀਲਤਾ ਨੂੰ ਸੁੰਦਰਤਾ ਨਾਲ ਮਿਲਾਉਂਦੇ ਹਨ',
    'about.detailedDescription': 'ਸ਼੍ਰੀ ਹੋਮ ਬਿਲਡਰ ਵਿਖੇ, ਅਸੀਂ ਮੰਨਦੇ ਹਾਂ ਕਿ ਹਰ ਘਰ ਆਪਣੇ ਮਾਲਕ ਦੀ ਸ਼ਖਸੀਅਤ ਅਤੇ ਜੀਵਨਸ਼ੈਲੀ ਦਾ ਪ੍ਰਤੀਬਿੰਬ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ। ਸਾਡੀ ਮਾਹਰ ਆਰਕੀਟੈਕਟਾਂ, ਡਿਜ਼ਾਈਨਰਾਂ ਅਤੇ ਕਾਰੀਗਰਾਂ ਦੀ ਟੀਮ ਤੁਹਾਡੇ ਵਿਜ਼ਨ ਨੂੰ ਬੇਮਿਸਾਲ ਧਿਆਨ ਨਾਲ ਜੀਵਨ ਵਿੱਚ ਲਿਆਉਣ ਲਈ ਮਿਲ ਕੇ ਕੰਮ ਕਰਦੀ ਹੈ।',
    'about.achievements.title': 'ਸਾਡੀਆਂ ਪ੍ਰਾਪਤੀਆਂ',
    'about.visionTitle': 'ਤੁਹਾਡਾ ਵਿਜ਼ਨ, ਸਾਡੀ ਮਹਾਰਤ',
    'about.whyChooseTitle': 'ਸ਼੍ਰੀ ਕਿਉਂ ਚੁਣੋ?',
    'about.whyChooseSubtitle': 'ਘਰ ਬਣਾਉਣ ਦੇ ਉਦਯੋਗ ਵਿੱਚ ਸਾਨੂੰ ਕੀ ਵੱਖ ਬਣਾਉਂਦਾ ਹੈ ਦਾ ਪਤਾ ਕਰੋ',
    'about.stats.projects': 'ਪੂਰੇ ਕੀਤੇ ਪ੍ਰੋਜੈਕਟ',
    'about.stats.experience': 'ਸਾਲਾਂ ਦਾ ਤਜਰਬਾ',
    'about.stats.clients': 'ਖੁਸ਼ ਗਾਹਕ',
    'about.stats.awards': 'ਜਿੱਤੇ ਪੁਰਸਕਾਰ',

    // Services Section
    'services.title': 'ਸਾਡੀਆਂ ਸੇਵਾਵਾਂ',
    'services.subtitle': 'ਅਸੀਂ ਤੁਹਾਡੇ ਵਿਜ਼ਨ ਨੂੰ ਜੀਵਨ ਵਿੱਚ ਲਿਆਉਣ ਲਈ ਸ਼ੁਰੂਆਤੀ ਡਿਜ਼ਾਈਨ ਤੋਂ ਲੈ ਕੇ ਅੰਤਿਮ ਪੂਰਤੀ ਤੱਕ ਵਿਆਪਕ ਬਿਲਡਿੰਗ ਸੇਵਾਵਾਂ ਪ੍ਰਦਾਨ ਕਰਦੇ ਹਾਂ।',
    'services.custom.title': 'ਕਸਟਮ ਘਰ ਡਿਜ਼ਾਈਨ',
    'services.custom.description': 'ਤੁਹਾਡੀ ਵਿਲੱਖਣ ਸ਼ੈਲੀ ਅਤੇ ਪਸੰਦਾਂ ਨੂੰ ਦਰਸਾਉਣ ਵਾਲੇ ਅਨੁਕੂਲਿਤ ਡਿਜ਼ਾਈਨ।',
    'services.construction.title': 'ਗੁਣਵੱਤਾ ਨਿਰਮਾਣ',
    'services.construction.description': 'ਪ੍ਰੀਮੀਅਮ ਸਮੱਗਰੀ ਅਤੇ ਤਕਨੀਕਾਂ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹੋਏ ਮਾਹਰ ਕਾਰੀਗਰੀ।',
    'services.renovation.title': 'ਘਰ ਦਾ ਨਵੀਨੀਕਰਣ',
    'services.renovation.description': 'ਸਾਡੀ ਨਵੀਨੀਕਰਣ ਮਹਾਰਤ ਨਾਲ ਆਪਣੀ ਮੌਜੂਦਾ ਜਗ੍ਹਾ ਨੂੰ ਬਦਲੋ।',
    'services.consultation.title': 'ਡਿਜ਼ਾਈਨ ਸਲਾਹ',
    'services.consultation.description': 'ਤੁਹਾਡੇ ਵਿਜ਼ਨ ਨੂੰ ਜੀਵਨ ਵਿੱਚ ਲਿਆਉਣ ਲਈ ਪੇਸ਼ੇਵਰ ਮਾਰਗਦਰਸ਼ਨ।',
    'services.readyToStart.title': 'ਆਪਣਾ ਪ੍ਰੋਜੈਕਟ ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਤਿਆਰ ਹੋ?',
    'services.readyToStart.subtitle': 'ਆਓ ਤੁਹਾਡੇ ਵਿਜ਼ਨ ਬਾਰੇ ਚਰਚਾ ਕਰੀਏ ਅਤੇ ਸਾਡੀ ਮਾਹਰ ਟੀਮ ਨਾਲ ਇਸਨੂੰ ਹਕੀਕਤ ਵਿੱਚ ਬਦਲੀਏ।',
    'services.readyToStart.consultation': 'ਮੁਫਤ ਸਲਾਹ ਲਓ',
    'services.readyToStart.portfolio': 'ਪੋਰਟਫੋਲੀਓ ਦੇਖੋ',

    // House Designs
    'designs.title': 'ਘਰ ਦੇ ਡਿਜ਼ਾਈਨ',
    'designs.subtitle': 'ਸੋਚ-ਸਮਝ ਕੇ ਡਿਜ਼ਾਈਨ ਕੀਤੇ ਘਰਾਂ ਦੇ ਸਾਡੇ ਸੰਗ੍ਰਹਿ ਦੀ ਖੋਜ ਕਰੋ',
    'designs.floorPlans': 'ਵਿਸਤ੍ਰਿਤ ਫਲੋਰ ਪਲਾਨ',
    'designs.floorPlans.subtitle': 'ਆਧੁਨਿਕ ਜੀਵਨ ਲਈ ਡਿਜ਼ਾਈਨ ਕੀਤੇ ਸਾਡੇ ਸਾਵਧਾਨੀ ਨਾਲ ਤਿਆਰ ਕੀਤੇ ਫਲੋਰ ਪਲਾਨਾਂ ਦੀ ਖੋਜ ਕਰੋ',
    'designs.viewDetails': 'ਵੇਰਵੇ ਦੇਖੋ',
    'designs.exploreAll': 'ਸਾਰੇ ਫਲੋਰ ਪਲਾਨ ਦੇਖੋ',

    // Success Stories
    'success.title': 'ਸਾਡੀਆਂ ਸਫਲਤਾ ਦੀਆਂ ਕਹਾਣੀਆਂ',
    'success.subtitle': 'ਗੁਣਵੱਤਾ ਨਿਰਮਾਣ ਦੁਆਰਾ ਜੀਵਨ ਨੂੰ ਬਦਲਣਾ',
    'success.description': 'ਹਰ ਪ੍ਰੋਜੈਕਟ ਤਬਦੀਲੀ, ਸਾਕਾਰ ਹੋਏ ਸਪਨਿਆਂ, ਅਤੇ ਪਰਿਵਾਰਾਂ ਦੇ ਆਪਣੇ ਸੰਪੂਰਨ ਘਰ ਲੱਭਣ ਦੀ ਕਹਾਣੀ ਕਹਿੰਦਾ ਹੈ।',
    'success.stats.homes': 'ਪੂਰੇ ਕੀਤੇ ਘਰ',
    'success.stats.years': 'ਸਾਲਾਂ ਦਾ ਤਜਰਬਾ',
    'success.stats.awards': 'ਜਿੱਤੇ ਪੁਰਸਕਾਰ',
    'success.stats.satisfaction': 'ਗਾਹਕ ਸੰਤੁਸ਼ਟੀ',

    // Contact
    'contact.title': 'ਅੱਜ ਹੀ ਆਪਣੇ ਘਰ ਬਿਲਡਿੰਗ ਸਫਰ ਦੀ ਸ਼ੁਰੂਆਤ ਕਰੋ',
    'contact.subtitle': 'ਆਪਣੇ ਸਪਨਿਆਂ ਦੇ ਘਰ ਨੂੰ ਹਕੀਕਤ ਵਿੱਚ ਬਦਲਣ ਲਈ ਤਿਆਰ ਹਨ? ਮੁਫਤ ਸਲਾਹ ਲਈ ਅੱਜ ਹੀ ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।',
    'contact.phone': 'ਸਾਨੂੰ ਕਾਲ ਕਰੋ',
    'contact.email': 'ਸਾਨੂੰ ਈਮੇਲ ਕਰੋ',
    'contact.address': 'ਸਾਡੇ ਕੋਲ ਆਓ',
    'contact.getQuote': 'ਮੁਫਤ ਕੋਟ ਲਓ',
    'contact.form.title': 'ਸਾਨੂੰ ਸੁਨੇਹਾ ਭੇਜੋ',
    'contact.form.firstName': 'ਪਹਿਲਾ ਨਾਮ *',
    'contact.form.lastName': 'ਆਖਰੀ ਨਾਮ *',
    'contact.form.email': 'ਈਮੇਲ ਪਤਾ *',
    'contact.form.phone': 'ਫੋਨ ਨੰਬਰ',
    'contact.form.projectType': 'ਪ੍ਰੋਜੈਕਟ ਦੀ ਕਿਸਮ',
    'contact.form.message': 'ਸੁਨੇਹਾ *',
    'contact.form.firstNamePlaceholder': 'ਆਪਣਾ ਪਹਿਲਾ ਨਾਮ ਦਾਖਲ ਕਰੋ',
    'contact.form.lastNamePlaceholder': 'ਆਪਣਾ ਆਖਰੀ ਨਾਮ ਦਾਖਲ ਕਰੋ',
    'contact.form.emailPlaceholder': 'ਆਪਣਾ ਈਮੇਲ ਦਾਖਲ ਕਰੋ',
    'contact.form.phonePlaceholder': 'ਆਪਣਾ ਫੋਨ ਨੰਬਰ ਦਾਖਲ ਕਰੋ',
    'contact.form.messagePlaceholder': 'ਸਾਨੂੰ ਆਪਣੇ ਪ੍ਰੋਜੈਕਟ ਬਾਰੇ ਦੱਸੋ...',
    'contact.form.selectProject': 'ਪ੍ਰੋਜੈਕਟ ਦੀ ਕਿਸਮ ਚੁਣੋ',
    'contact.form.newHome': 'ਨਵਾਂ ਘਰ ਬਿਲਡ',
    'contact.form.extension': 'ਘਰ ਦਾ ਵਿਸਤਾਰ',
    'contact.form.renovation': 'ਨਵੀਨੀਕਰਣ',
    'contact.form.commercial': 'ਵਪਾਰਕ ਪ੍ਰੋਜੈਕਟ',
    'contact.form.other': 'ਹੋਰ',
    'contact.form.sendMessage': 'ਸੁਨੇਹਾ ਭੇਜੋ',

    // Footer
    'footer.newsletter.title': 'ਅੱਪਡੇਟ ਰਹੋ',
    'footer.newsletter.description': 'ਨਵੀਨਤਮ ਖਬਰਾਂ ਅਤੇ ਪ੍ਰੋਜੈਕਟ ਅੱਪਡੇਟਾਂ ਲਈ ਸਾਡੇ ਨਿਊਜ਼ਲੈਟਰ ਦੀ ਗਾਹਕੀ ਲਓ।',
    'footer.newsletter.subscribe': 'ਗਾਹਕੀ ਲਓ',
    'footer.copyright': '© 2024 ਸ਼੍ਰੀ ਹੋਮ ਬਿਲਡਰ। ਸਾਰੇ ਅਧਿਕਾਰ ਰਾਖਵੇਂ ਹਨ।',

    // Testimonials
    'testimonials.title': 'ਸਾਡੇ ਗਾਹਕ ਸਾਡੇ ਬਾਰੇ ਕੀ ਕਹਿੰਦੇ ਹਨ',
    'testimonials.subtitle': 'ਸਿਰਫ਼ ਸਾਡੀ ਗੱਲ ਨਾ ਮੰਨੋ। ਇੱਥੇ ਸਾਡੇ ਸੰਤੁਸ਼ਟ ਗਾਹਕਾਂ ਦੇ ਵਿਚਾਰ ਹਨ ਜੋ ਸ਼੍ਰੀ ਨਾਲ ਆਪਣੇ ਤਜਰਬੇ ਬਾਰੇ ਕਹਿੰਦੇ ਹਨ।',
    'testimonials.getInTouch': 'ਸੰਪਰਕ ਕਰੋ',

    // Why Choose Us
    'whyChoose.title': 'ਸ਼੍ਰੀ ਹੋਮਜ਼ ਨਾਲ ਕਿਉਂ ਬਣਾਓ?',
    'whyChoose.subtitle': 'ਪਤਾ ਕਰੋ ਕਿ ਕੀ ਸਾਨੂੰ ਮੈਲਬਰਨ ਦੇ ਪ੍ਰੀਮੀਅਰ ਘਰ ਬਿਲਡਰਾਂ ਵਜੋਂ ਵੱਖ ਬਣਾਉਂਦਾ ਹੈ।',
    'whyChoose.quality.title': 'ਪੁਰਸਕਾਰ ਜੇਤੂ ਗੁਣਵੱਤਾ',
    'whyChoose.quality.description': 'ਕਈ ਉਦਯੋਗ ਪੁਰਸਕਾਰਾਂ ਨਾਲ ਨਿਰਮਾਣ ਅਤੇ ਡਿਜ਼ਾਈਨ ਵਿੱਚ ਮਾਨਤਾ ਪ੍ਰਾਪਤ ਉਤਕਰਸ਼ਤਾ।',
    'whyChoose.warranty.title': 'ਵਾਰੰਟੀ ਸੁਰੱਖਿਆ',
    'whyChoose.warranty.description': 'ਸਾਲਾਂ ਤੱਕ ਮਨ ਦੀ ਸ਼ਾਂਤੀ ਦੇਣ ਵਾਲੀ ਵਿਆਪਕ ਵਾਰੰਟੀ ਕਵਰੇਜ।',
    'whyChoose.delivery.title': 'ਸਮੇਂ ਸਿਰ ਡਿਲਿਵਰੀ',
    'whyChoose.delivery.description': 'ਗੁਣਵੱਤਾ ਨਾਲ ਸਮਝੌਤਾ ਕੀਤੇ ਬਿਨਾਂ ਸਮੇਂ ਸਿਰ ਪ੍ਰੋਜੈਕਟ ਦੇਣ ਲਈ ਵਚਨਬੱਧ।',
    'whyChoose.team.title': 'ਮਾਹਰ ਟੀਮ',
    'whyChoose.team.description': 'ਦਹਾਕਿਆਂ ਦੇ ਸੰਯੁਕਤ ਤਜਰਬੇ ਵਾਲੇ ਉੱਚ ਕੁਸ਼ਲ ਕਾਰੀਗਰ ਅਤੇ ਡਿਜ਼ਾਈਨਰ।',
    'whyChoose.materials.title': 'ਗੁਣਵੱਤਾ ਸਮੱਗਰੀ',
    'whyChoose.materials.description': 'ਭਰੋਸੇਮੰਦ ਸਪਲਾਇਰਾਂ ਤੋਂ ਸਿਰਫ਼ ਸਭ ਤੋਂ ਵਧੀਆ ਸਮੱਗਰੀ ਅਤੇ ਫਿਕਸਚਰ।',
    'whyChoose.satisfaction.title': 'ਗਾਹਕ ਸੰਤੁਸ਼ਟੀ',
    'whyChoose.satisfaction.description': 'ਸੈਂਕੜੇ ਖੁਸ਼ ਘਰ ਮਾਲਕਾਂ ਨਾਲ 98% ਗਾਹਕ ਸੰਤੁਸ਼ਟੀ ਦਰ।',
    'whyChoose.process.title': 'ਸਾਡੀ ਬਿਲਡਿੰਗ ਪ੍ਰਕਿਰਿਆ',
    'whyChoose.process.consultation': 'ਸਲਾਹ-ਮਸ਼ਵਰਾ',
    'whyChoose.process.consultationDesc': 'ਤੁਹਾਡੇ ਵਿਜ਼ਨ ਬਾਰੇ ਚਰਚਾ ਕਰਨ ਲਈ ਸ਼ੁਰੂਆਤੀ ਮੀਟਿੰਗ',
    'whyChoose.process.design': 'ਡਿਜ਼ਾਈਨ',
    'whyChoose.process.designDesc': 'ਵਿਸਤ੍ਰਿਤ ਯੋਜਨਾਵਾਂ ਅਤੇ 3D ਮਾਡਲ ਬਣਾਉਣਾ',
    'whyChoose.process.approval': 'ਮਨਜ਼ੂਰੀ',
    'whyChoose.process.approvalDesc': 'ਜ਼ਰੂਰੀ ਪਰਮਿਟ ਅਤੇ ਮਨਜ਼ੂਰੀਆਂ ਪ੍ਰਾਪਤ ਕਰਨਾ',
    'whyChoose.process.construction': 'ਨਿਰਮਾਣ',
    'whyChoose.process.constructionDesc': 'ਸਟੀਕਤਾ ਨਾਲ ਤੁਹਾਡਾ ਘਰ ਬਣਾਉਣਾ',
    'whyChoose.process.handover': 'ਸੌਂਪਣਾ',
    'whyChoose.process.handoverDesc': 'ਅੰਤਿਮ ਨਿਰੀਖਣ ਅਤੇ ਚਾਬੀ ਸੌਂਪਣਾ',
    'whyChoose.readyToBuild.title': 'ਆਪਣੇ ਸੁਪਨਿਆਂ ਦਾ ਘਰ ਬਣਾਉਣ ਲਈ ਤਿਆਰ ਹੋ?',
    'whyChoose.readyToBuild.subtitle': 'ਆਪਣੇ ਨਵੇਂ ਘਰ ਵੱਲ ਪਹਿਲਾ ਕਦਮ ਚੁੱਕੋ। ਵਿਅਕਤੀਗਤ ਸਲਾਹ ਲਈ ਅੱਜ ਹੀ ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।',
    'whyChoose.readyToBuild.contact': 'ਅੱਜ ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ',
    'whyChoose.readyToBuild.getQuote': 'ਮੁਫਤ ਕੋਟ ਲਓ',

    // Custom Build
    'customBuild.title': 'ਆਪਣੇ ਸਪਨਿਆਂ ਦਾ ਘਰ ਕਸਟਮ ਨਾਲ ਬਣਾਓ',
    'customBuild.titleHighlight': 'ਉਤਕਰਸ਼ਤਾ',
    'customBuild.description1': 'ਹਰ ਪਰਿਵਾਰ ਵਿਲੱਖਣ ਹੈ, ਅਤੇ ਇਸੇ ਤਰ੍ਹਾਂ ਉਨ੍ਹਾਂ ਦਾ ਘਰ ਵੀ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ।',
    'customBuild.description2': 'ਸ਼੍ਰੀ ਨਾਲ, ਤੁਹਾਨੂੰ ਸਿਰਫ਼ ਘਰ ਨਹੀਂ ਮਿਲ ਰਿਹਾ - ਤੁਹਾਨੂੰ ਖਾਸ ਤੌਰ ਤੇ ਤੁਹਾਡੇ ਲਈ ਡਿਜ਼ਾਈਨ ਕੀਤਾ ਘਰ ਮਿਲ ਰਿਹਾ ਹੈ।',
    'customBuild.features.architectural': 'ਆਰਕੀਟੈਕਚਰਲ ਡਿਜ਼ਾਈਨ ਸੇਵਾਵਾਂ',
    'customBuild.features.materials': 'ਪ੍ਰੀਮੀਅਮ ਮਟੀਰੀਅਲ ਸਿਲੈਕਸ਼ਨ',
    'customBuild.features.interior': 'ਕਸਟਮ ਇੰਟੀਰੀਅਰ ਡਿਜ਼ਾਈਨ',
    'customBuild.features.smart': 'ਸਮਾਰਟ ਹੋਮ ਇੰਟੀਗ੍ਰੇਸ਼ਨ',
    'customBuild.features.energy': 'ਊਰਜਾ ਕੁਸ਼ਲ ਹੱਲ',
    'customBuild.features.luxury': 'ਲਗਜ਼ਰੀ ਫਿਨਿਸ਼ਸ ਅਤੇ ਫਿਕਸਚਰ',
    'customBuild.features.landscaping': 'ਲੈਂਡਸਕੇਪਿੰਗ ਅਤੇ ਬਾਹਰੀ ਸਪੇਸ',
    'customBuild.features.management': 'ਵਿਆਪਕ ਪ੍ਰੋਜੈਕਟ ਮੈਨੇਜਮੈਂਟ',
    'customBuild.journey.title': 'ਤੁਹਾਡਾ ਕਸਟਮ ਬਿਲਡ ਸਫਰ',

    // FAQ
    'faq.title': 'ਅਕਸਰ ਪੁੱਛੇ ਜਾਣ ਵਾਲੇ ਸਵਾਲ',
    'faq.subtitle': 'ਸ਼੍ਰੀ ਨਾਲ ਬਿਲਡਿੰਗ ਬਾਰੇ ਸਵਾਲ ਹਨ? ਇੱਥੇ ਸਾਡੇ ਗਾਹਕਾਂ ਤੋਂ ਸਭ ਤੋਂ ਆਮ ਸਵਾਲਾਂ ਦੇ ਜਵਾਬ ਹਨ।',
    'faq.timeline.question': 'ਕਸਟਮ ਘਰ ਬਣਾਉਣ ਵਿੱਚ ਕਿੰਨਾ ਸਮਾਂ ਲੱਗਦਾ ਹੈ?',
    'faq.timeline.answer': 'ਕਸਟਮ ਘਰ ਬਣਾਉਣ ਦਾ ਸਮਾਂ ਆਮ ਤੌਰ ਤੇ 6-12 ਮਹੀਨੇ ਹੁੰਦਾ ਹੈ।',
    'faq.quote.question': 'ਤੁਹਾਡੇ ਬਿਲਡਿੰਗ ਕੋਟ ਵਿੱਚ ਕੀ ਸ਼ਾਮਲ ਹੈ?',
    'faq.quote.answer': 'ਸਾਡੇ ਵਿਆਪਕ ਕੋਟਸ ਵਿੱਚ ਸਾਰੀਆਂ ਨਿਰਮਾਣ ਲਾਗਤਾਂ, ਸਮੱਗਰੀ, ਮਜ਼ਦੂਰੀ ਸ਼ਾਮਲ ਹੈ।',
    'faq.permits.question': 'ਕੀ ਤੁਸੀਂ ਪਰਮਿਟ ਅਤੇ ਮਨਜ਼ੂਰੀਆਂ ਸੰਭਾਲਦੇ ਹੋ?',
    'faq.permits.answer': 'ਹਾਂ, ਅਸੀਂ ਸਾਰੇ ਜ਼ਰੂਰੀ ਪਰਮਿਟ, ਕੌਂਸਿਲ ਮਨਜ਼ੂਰੀਆਂ ਸੰਭਾਲਦੇ ਹਾਂ।',
    'faq.changes.question': 'ਕੀ ਮੈਂ ਨਿਰਮਾਣ ਦੌਰਾਨ ਬਦਲਾਅ ਕਰ ਸਕਦਾ ਹਾਂ?',
    'faq.changes.answer': 'ਛੋਟੇ ਬਦਲਾਅ ਅਕਸਰ ਕੀਤੇ ਜਾ ਸਕਦੇ ਹਨ, ਹਾਲਾਂਕਿ ਇਹ ਸਮਾਂ ਅਤੇ ਲਾਗਤ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰ ਸਕਦੇ ਹਨ।',
    'faq.warranty.question': 'ਤੁਸੀਂ ਕੀ ਵਾਰੰਟੀ ਪ੍ਰਦਾਨ ਕਰਦੇ ਹੋ?',
    'faq.warranty.answer': 'ਅਸੀਂ ਸਟ੍ਰਕਚਰਲ ਵਾਰੰਟੀ ਸਮੇਤ ਵਿਆਪਕ ਵਾਰੰਟੀ ਕਵਰੇਜ ਪ੍ਰਦਾਨ ਕਰਦੇ ਹਾਂ।',
    'faq.quality.question': 'ਤੁਸੀਂ ਗੁਣਵੱਤਾ ਨਿਯੰਤਰਣ ਕਿਵੇਂ ਯਕੀਨੀ ਬਣਾਉਂਦੇ ਹੋ?',
    'faq.quality.answer': 'ਸਾਡੇ ਕੋਲ ਨਿਯਮਿਤ ਨਿਰੀਖਣ ਅਤੇ ਕੁਸ਼ਲ ਕਾਰੀਗਰਾਂ ਸਮੇਤ ਸਖ਼ਤ ਗੁਣਵੱਤਾ ਨਿਯੰਤਰਣ ਪ੍ਰਕਿਰਿਆਵਾਂ ਹਨ।',
    'faq.difference.question': 'ਸ਼੍ਰੀ ਨੂੰ ਹੋਰ ਬਿਲਡਰਾਂ ਤੋਂ ਕੀ ਵੱਖ ਬਣਾਉਂਦਾ ਹੈ?',
    'faq.difference.answer': '15+ ਸਾਲਾਂ ਦੇ ਤਜਰਬੇ ਨਾਲ ਗੁਣਵੱਤਾ, ਵੇਰਵੇ ਦਾ ਧਿਆਨ ਅਤੇ ਗਾਹਕ ਸੰਤੁਸ਼ਟੀ ਲਈ ਸਾਡੀ ਵਚਨਬੱਧਤਾ।',
    'faq.consultation': 'ਸਲਾਹ ਦਾ ਸਮਾਂ ਤਿਹ ਕਰੋ',
    'faq.stillHaveQuestions': 'ਕੀ ਅਜੇ ਵੀ ਸਵਾਲ ਹਨ?',

    // Builder Info
    'builderInfo.title': 'ਬਿਲਡਰ ਮੈਲਬਰਨ',
    'builderInfo.subtitle': 'ਘਰਾਂ ਨੂੰ ਬਦਲਣਾ',
    'builderInfo.description': 'ਮੈਲਬਰਨ ਦੇ ਸਭ ਤੋਂ ਭਰੋਸੇਮੰਦ ਘਰ ਬਿਲਡਰਾਂ ਨਾਲ ਫਰਕ ਦਾ ਅਨੁਭਵ ਕਰੋ। ਅਸੀਂ ਸਿਰਫ਼ ਘਰ ਨਹੀਂ ਬਣਾਉਂਦੇ, ਅਸੀਂ ਸਪਨਿਆਂ ਦੇ ਘਰ ਬਣਾਉਂਦੇ ਹਾਂ।',
    'builderInfo.premier': 'ਮੈਲਬਰਨ ਦੇ ਪ੍ਰੀਮੀਅਰ',
    'builderInfo.houseBuilders': 'ਹਾਉਸ ਬਿਲਡਰ',
    'builderInfo.companyDescription': '15 ਸਾਲਾਂ ਤੋਂ ਵੱਧ ਸਮੇਂ ਤੋਂ, ਸ਼੍ਰੀ ਮੈਲਬਰਨ ਦੇ ਨਿਰਮਾਣ ਉਦਯੋਗ ਵਿੱਚ ਮੋਹਰੀ ਰਿਹਾ ਹੈ, ਸਮੇਂ ਦੀ ਕਸੌਟੀ ਤੇ ਖਰੇ ਉਤਰਨ ਵਾਲੇ ਸ਼ਾਨਦਾਰ ਘਰ ਪ੍ਰਦਾਨ ਕਰਦਾ ਰਿਹਾ ਹੈ।',
    'builderInfo.features.premium': 'ਪ੍ਰੀਮੀਅਮ ਗੁਣਵੱਤਾ ਸਮੱਗਰੀ',
    'builderInfo.features.craftsmanship': 'ਮਾਹਰ ਕਾਰੀਗਰੀ',
    'builderInfo.features.delivery': 'ਸਮੇਂ ਸਿਰ ਡਿਲਿਵਰੀ',
    'builderInfo.features.warranty': 'ਵਿਆਪਕ ਵਾਰੰਟੀ',
    'builderInfo.features.pricing': 'ਪਾਰਦਰਸ਼ੀ ਕੀਮਤ',
    'builderInfo.features.manager': 'ਸਮਰਪਿਤ ਪ੍ਰੋਜੈਕਟ ਮੈਨੇਜਰ',

    // Common
    'common.readMore': 'ਹੋਰ ਪੜ੍ਹੋ',
    'common.learnMore': 'ਹੋਰ ਜਾਣੋ',
    'common.viewAll': 'ਸਾਰੇ ਦੇਖੋ',
    'common.getStarted': 'ਸ਼ੁਰੂ ਕਰੋ',
  }
}

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    const translation = translations[language] as Record<string, string>
    return translation[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
