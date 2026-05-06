import AnimateIn from './AnimateIn'

export default function About(){
  return (
    <AnimateIn>
  <section id="about" className="section section--alt">
      <div className="card max-w-4xl mx-auto p-8 md:p-12">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">About Dr. Neha Joshi</h2>

        <p className="mt-6 text-slate-600 leading-relaxed text-lg">Dr. Neha Joshi is a respected dermatologist based in Ahmedabad with over 18 years of clinical experience. She practices a patient-first approach that blends the latest evidence-based dermatology with compassionate, individualized care.</p>

        <h3 className="mt-8 font-medium text-slate-800">Areas of Expertise</h3>
        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-600">
          <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Medical acne management & cosmetic acne care</li>
          <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Hair loss diagnosis and treatments (including PRP)</li>
          <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Advanced laser therapies & pigmentation treatments</li>
          <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Anti-aging treatments: peels, injectables, and skin rejuvenation</li>
        </ul>

        <h3 className="mt-8 font-medium text-slate-800">Patient Care Philosophy</h3>
        <p className="mt-3 text-slate-600 leading-relaxed">Dr. Joshi focuses on clear communication, realistic outcomes, and long-term skin health. Each treatment plan is tailored to the patient's needs, taking into account lifestyle, medical history, and cosmetic goals.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm font-medium text-slate-700">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center text-center shadow-sm">18+ Years Experience</div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center text-center shadow-sm">600+ Verified Patients</div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center text-center shadow-sm">Advanced Clinical Technology</div>
        </div>

        <div className="mt-10">
          <a href="#booking" className="btn btn-primary px-8">Book a Consultation</a>
        </div>
      </div>
    </section>
    </AnimateIn>
  )
}
