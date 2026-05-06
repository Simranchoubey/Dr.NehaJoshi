"use client"
import { useState } from 'react'
import AnimateIn from './AnimateIn'

export default function BookingForm(){
  const [name,setName] = useState('')
  const [phone,setPhone] = useState('')
  const [msg,setMsg] = useState('')
  const [loading,setLoading] = useState(false)

  async function handleSubmit(e){
    e.preventDefault()
    setLoading(true)
    try{
      const res = await fetch('/api/book',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({name,phone,msg,paid:false})
      })
        const data = await res.json()
        alert('Appointment request received. We will contact you.')
        setName('')
        setPhone('')
        setMsg('')
    }catch(err){
      console.error(err)
      alert('Failed to submit')
    }finally{setLoading(false)}
  }

  // Simplified booking: posts booking data to /api/book

  return (
    <AnimateIn>
    <section id="booking" className="section max-w-6xl mx-auto px-4 sm:px-8">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Book Your Consultation</h2>
        <p className="mt-4 text-slate-500 text-lg">Take the first step towards healthier, glowing skin. Fill out the form below and our team will get back to you.</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-4 card max-w-2xl mx-auto p-8 md:p-10 shadow-xl border border-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block">
            <span className="text-sm font-semibold text-slate-700 ml-1">Full Name</span>
            <input
              required
              value={name}
              onChange={e=>setName(e.target.value)}
              className="mt-2 w-full border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 rounded-xl p-4 transition-all outline-none bg-slate-50/30"
              placeholder="e.g. John Doe"
              aria-label="Name"
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold text-slate-700 ml-1">Phone Number</span>
            <input
              required
              type="tel"
              value={phone}
              onChange={e=>setPhone(e.target.value)}
              className="mt-2 w-full border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 rounded-xl p-4 transition-all outline-none bg-slate-50/30"
              placeholder="+91 98765 43210"
              aria-label="Phone"
            />
          </label>
        </div>

        <label className="block mt-6">
          <span className="text-sm font-semibold text-slate-700 ml-1">Your Message (Optional)</span>
          <textarea
            value={msg}
            onChange={e=>setMsg(e.target.value)}
            className="mt-2 w-full border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 rounded-xl p-4 h-32 transition-all outline-none bg-slate-50/30 resize-none"
            placeholder="Tell us about your skin concerns or preferred time..."
            aria-label="Message"
          />
        </label>

        <div className="mt-8">
          <button 
            disabled={loading} 
            type="submit" 
            className="btn btn-primary w-full py-4 text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all font-semibold"
          >
            {loading? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : 'Schedule My Consultation'}
          </button>
          <p className="mt-4 text-center text-xs text-slate-400">By submitting, you agree to being contacted regarding your appointment.</p>
        </div>
      </form>
    </section>
    </AnimateIn>
  )
}
