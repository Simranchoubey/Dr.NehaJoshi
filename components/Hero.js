"use client"
import { motion } from 'framer-motion'
import FloatingShapes from './FloatingShapes'

export default function Hero(){
  return (
    <section id="hero" className="py-24 md:py-32 relative overflow-visible bg-derma">
      <FloatingShapes />
      <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
        <motion.div initial={{ x: -20, opacity:0 }} animate={{ x:0, opacity:1 }} transition={{ duration:0.6 }}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">Healthy Skin Starts with Expert Care</h1>
          <p className="mt-5 text-lg text-slate-500 max-w-xl leading-relaxed">Trusted Dermatologist in Ahmedabad with 18+ years experience</p>
          <div className="mt-8 flex gap-4">
            <a href="tel:+918675600088" className="btn btn-primary shadow-soft px-8 py-3 text-lg">Call Now</a>
          </div>
          <div className="mt-6 text-sm text-slate-400 font-medium">4.8 ⭐ (600+ patient reviews) • Limited Appointments Available Today</div>
        </motion.div>

        <motion.div initial={{ x: 20, opacity:0 }} animate={{ x:0, opacity:1 }} transition={{ duration:0.6 }}>
          <div className="card flex items-center justify-center h-72 md:h-[22rem] w-full max-w-md mx-auto aspect-square">
            <img src="/doctor.jpg" alt="Dr Neha Joshi" className="w-56 h-56 md:w-64 md:h-64 img-clean img-portrait object-cover shadow-soft" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
