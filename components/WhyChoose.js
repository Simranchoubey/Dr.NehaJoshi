import AnimateIn from './AnimateIn'

export default function WhyChoose(){
  const items = [
    {title:'18+ Years Experience', desc:'Decades of clinical expertise in dermatology.'},
    {title:'600+ Happy Patients', desc:'Proven results and trusted care.'},
    {title:'Advanced Technology', desc:'State-of-the-art lasers and diagnostics.'},
    {title:'Personalized Care', desc:'Treatment plans tailored to you.'}
  ]

  return (
    <AnimateIn>
  <section id="why" className="section section--alt max-w-6xl mx-auto px-4 sm:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Why Choose Us</h2>
        <p className="mt-4 text-slate-500 text-lg">We combine clinical excellence with a compassionate, patient-centered approach.</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it,idx)=> (
          <div key={idx} className="card text-center flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 border border-blue-100 shadow-sm">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-semibold text-slate-900 text-lg">{it.title}</h3>
            <p className="mt-3 text-sm text-slate-500 leading-relaxed">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
    </AnimateIn>
  )
}
