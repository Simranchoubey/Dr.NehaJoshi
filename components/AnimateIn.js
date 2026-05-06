"use client"
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function AnimateIn({ children, delay = 0, className='' }){
  const ref = useRef(null)
  const controls = useAnimation()

  useEffect(()=>{
    const el = ref.current
    if(!el) return
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(entry => {
        if(entry.isIntersecting){
          controls.start({ opacity: 1, y: 0, transition: { duration: 0.48, delay } })
          obs.unobserve(el)
        }
      })
    }, { threshold: 0.12 })
    obs.observe(el)
    return ()=> obs.disconnect()
  }, [controls, delay])

  return (
    <motion.div ref={ref} initial={{ opacity:0, y:20 }} animate={controls} className={className}>
      {children}
    </motion.div>
  )
}
