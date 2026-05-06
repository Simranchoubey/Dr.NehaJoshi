const services = [
  {key:'acne', title:'Acne Treatment', desc:'Medical & cosmetic acne care'},
  {key:'hair', title:'Hair Loss Treatment', desc:'PRP, medical therapy'},
  {key:'allergy', title:'Skin Allergy', desc:'Diagnosis and management'},
  {key:'antiaging', title:'Anti-Aging', desc:'Peels, injectables & skin rejuvenation'},
  {key:'laser', title:'Laser Treatment', desc:'Laser therapies for hair & skin'},
  {key:'pigment', title:'Pigmentation Treatment', desc:'Targeted pigmentation care'},
]

function Icon({name}){
  const common = {width:24, height:24, fill:'none', stroke:'currentColor', strokeWidth:1.8}
  switch(name){
    case 'acne':
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden>
          <circle cx="12" cy="12" r="8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 8L9 9" />
        </svg>
      )
    case 'hair':
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden>
          <path d="M4 20c4-6 12-6 16 0" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'allergy':
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden>
          <path d="M12 3v18" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 12h18" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'antiaging':
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden>
          <path d="M12 2v20" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="8" r="2" />
        </svg>
      )
    case 'laser':
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden>
          <rect x="3" y="3" width="18" height="18" rx="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'pigment':
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden>
          <path d="M12 3v18" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 12h18" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    default:
      return null
  }
}

import AnimateIn from './AnimateIn'

export default function Services(){
  return (
    <AnimateIn>
  <section id="services" className="section max-w-6xl mx-auto px-4 sm:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Our Services</h2>
        <p className="mt-4 text-slate-500 text-lg">Comprehensive dermatological care using state-of-the-art treatments customized for your skin.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(s => (
          <article key={s.key} className="card group hover:bg-slate-50/50 transition-colors">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                <Icon name={s.key} />
              </div>
              <div className="pt-1">
                <h3 className="font-semibold text-slate-900 text-lg">{s.title}</h3>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">{s.desc}</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <a href="#contact" className="text-sm text-primary font-medium group-hover:text-blue-700 transition-colors">Learn more →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
    </AnimateIn>
  )
}
