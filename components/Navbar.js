"use client"
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar(){
  const [open,setOpen] = useState(false)
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(()=>{
    const ids = ['about','services','reviews','why','gallery','booking','contact']
    const observers = []
    ids.forEach(id => {
      const el = document.getElementById(id)
      if(!el) return
      const obs = new IntersectionObserver(([entry])=>{
        if(entry.isIntersecting){ setActive(id) }
      }, { threshold: 0.45 })
      obs.observe(el)
      observers.push(obs)
    })
    const onScroll = ()=> setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return ()=>{ observers.forEach(o=>o.disconnect()); window.removeEventListener('scroll', onScroll) }
  },[])

  function handleNavClick(e, id){
    e.preventDefault()
    const el = document.getElementById(id)
    if(el) el.scrollIntoView({ behavior:'smooth', block:'start' })
    setOpen(false)
  }
  return (
    <header className={`sticky top-0 bg-white/75 backdrop-blur-md z-40 border-b border-slate-900/5 transition-all duration-300 ${scrolled? 'nav-scrolled py-2':'py-4'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        <Link href="/" className="font-semibold text-xl tracking-tight text-slate-900" aria-label="Home">Dr. Neha Joshi</Link>
        <nav className="hidden md:flex gap-8 items-center text-sm font-medium">
          <a href="#about" onClick={(e)=>handleNavClick(e,'about')} className={`transition-colors hover:text-primary ${active==='about'? 'text-primary' : 'text-slate-600'}`}>About</a>
          <a href="#services" onClick={(e)=>handleNavClick(e,'services')} className={`transition-colors hover:text-primary ${active==='services'? 'text-primary' : 'text-slate-600'}`}>Services</a>
          <a href="#reviews" onClick={(e)=>handleNavClick(e,'reviews')} className={`transition-colors hover:text-primary ${active==='reviews'? 'text-primary' : 'text-slate-600'}`}>Reviews</a>
          <a href="#contact" onClick={(e)=>handleNavClick(e,'contact')} className={`btn btn-primary shadow-sm ${active==='contact'? 'ring-2 ring-primary ring-offset-2':''}`}>Contact Now</a>
        </nav>
        <div className="md:hidden">
          <button onClick={()=>setOpen(!open)} className="p-2 bg-slate-50 text-slate-600 rounded-lg border border-slate-100" aria-expanded={open} aria-controls="mobile-menu">Menu</button>
        </div>
      </div>
      {open && (
        <div id="mobile-menu" className="md:hidden px-4 pb-4" role="menu">
          <a href="#about" onClick={(e)=>handleNavClick(e,'about')} className="block py-2">About</a>
          <a href="#services" onClick={(e)=>handleNavClick(e,'services')} className="block py-2">Services</a>
          <a href="#reviews" onClick={(e)=>handleNavClick(e,'reviews')} className="block py-2">Reviews</a>
          <a href="#contact" onClick={(e)=>handleNavClick(e,'contact')} className="block py-2">Contact Now</a>
        </div>
      )}
    </header>
  )
}
