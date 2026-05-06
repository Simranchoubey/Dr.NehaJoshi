"use client"
import { useState } from 'react'

import AnimateIn from './AnimateIn'

export default function Gallery(){
  const imgs = [
    {src:'/clinic1.jpg', alt:'Clinic reception and waiting area'},
    {src:'/clinic2.jpg', alt:'Consultation room'},
    {src:'/clinic3.jpg', alt:'Laser treatment setup'},
    {src:'/clinic4.jpg', alt:'Skin treatment closeup'},
  ]

  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  function openAt(i){ setIndex(i); setOpen(true) }
  function close(){ setOpen(false) }

  return (
    <AnimateIn>
    <section id="gallery" className="py-12">
      <h2 className="text-xl font-semibold">Clinic Gallery</h2>

      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {imgs.map((img,i)=> (
          <button key={i} onClick={()=>openAt(i)} className="rounded-lg overflow-hidden focus:outline-none">
            <img src={img.src} alt={img.alt} className="w-full h-36 img-clean object-cover" />
          </button>
        ))}
      </div>

      {open && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="max-w-3xl w-full">
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="relative">
                <img src={imgs[index].src} alt={imgs[index].alt} className="w-full h-[60vh] img-clean object-contain bg-black" />
                <button onClick={close} className="absolute top-4 right-4 bg-white p-2 rounded-full">✕</button>
              </div>
              <div className="p-4">
                <div className="text-sm text-slate-600">{imgs[index].alt}</div>
                <div className="mt-3 flex justify-between">
                  <div>
                    <button disabled={index===0} onClick={()=>setIndex(i=>i-1)} className="px-3 py-2 rounded-lg border">Previous</button>
                    <button disabled={index===imgs.length-1} onClick={()=>setIndex(i=>i+1)} className="ml-3 px-3 py-2 rounded-lg border">Next</button>
                  </div>
                  <div>
                    <button onClick={close} className="btn-primary">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
    </AnimateIn>
  )
}
