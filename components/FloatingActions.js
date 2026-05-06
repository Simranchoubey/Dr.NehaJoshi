"use client"
import { motion } from 'framer-motion'

export default function FloatingActions(){
  return (
    <div>
      <a aria-label="WhatsApp chat" href="https://wa.me/918675600088?text=I%20would%20like%20to%20book%20an%20appointment" target="_blank" rel="noreferrer" className="fixed bottom-28 right-6 bg-green-500 text-white p-2.5 rounded-full shadow-lg z-50 focus:outline-none focus:ring-2 focus:ring-green-200">💬</a>

      <a aria-label="Call now" href="tel:+918675600088" className="fixed bottom-6 right-6 bg-blue-600 text-white p-2.5 rounded-full shadow-lg z-50 focus:outline-none focus:ring-2 focus:ring-blue-200">📞</a>

      <motion.a
        aria-label="Book appointment"
        href="#booking"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 16, delay: 0.2 }}
        className="fixed bottom-6 left-6 md:left-6 md:translate-x-0 left-1/2 transform -translate-x-1/2 md:transform-none btn-primary z-50 safe-left safe-right text-sm md:text-base font-medium"
      >
        Book Appointment
      </motion.a>
    </div>
  )
}
