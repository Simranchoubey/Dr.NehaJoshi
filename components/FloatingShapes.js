"use client"
import { motion } from 'framer-motion'

const float = {
  animate: i => ({
    x: [0, (i%2? -12:12), 0],
    y: [0, (i%3? -8:8), 0],
    rotate: [0, (i%2? 8:-8), 0],
    transition: {
      duration: 12 + i * 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  })
}

export default function FloatingShapes(){
  const shapes = [
    {type:'sphere', size:120, left:'-8%', top:'10%', material:'material-frosted'},
    {type:'ring', size:160, left:'70%', top:'0%', material:'material-matte'},
    {type:'cube', size:90, left:'50%', top:'50%', material:'material-reflect'},
    {type:'sphere', size:64, left:'20%', top:'70%', material:'material-matte'},
    {type:'ring', size:110, left:'80%', top:'60%', material:'material-frosted'}
  ]

  return (
    <div className="shape-container pointer-events-none -z-10">
      {shapes.map((s,i)=> (
        <motion.div key={i} className={`shape ${s.material}`} style={{width:s.size, height:s.size, left:s.left, top:s.top, borderRadius: s.type==='cube'?16:'50%'}} custom={i} variants={float} animate="animate">
          {/* simple SVG representation */}
          {s.type==='sphere' && (
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <radialGradient id={`g${i}`} cx="30%" cy="30%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                  <stop offset="100%" stopColor="rgba(200,220,255,0.4)" />
                </radialGradient>
              </defs>
              <circle cx="50" cy="50" r="48" fill={`url(#g${i})`} />
            </svg>
          )}

          {s.type==='ring' && (
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <circle cx="50" cy="50" r="36" fill="none" stroke="rgba(200,210,255,0.5)" strokeWidth="12" />
            </svg>
          )}

          {s.type==='cube' && (
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <rect x="8" y="8" width="84" height="84" rx="10" fill="rgba(240,245,255,0.6)" />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  )
}
