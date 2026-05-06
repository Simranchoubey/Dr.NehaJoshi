import AnimateIn from './AnimateIn'

const reviews = [
  {id:1, text:'Excellent doctor and staff'},
  {id:2, text:'Best treatment experience'},
  {id:3, text:'Very kind and professional'}
]

export default function Reviews(){
  return (
    <AnimateIn>
  <section id="reviews" className="section max-w-6xl mx-auto px-4 sm:px-8">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Patient Reviews</h2>
          <div className="mt-3 text-lg text-slate-500">Rated 4.8 ⭐ by 600+ patients</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:block px-4 py-2 bg-slate-50 border border-slate-100 rounded-lg text-sm text-slate-600 font-medium">Verified Reviews</div>
          <a href="tel:+918675600088" className="btn btn-primary">Book Consultation</a>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map(r => (
          <blockquote key={r.id} className="card border-l-4 border-l-blue-500/20">
            <p className="text-slate-700 leading-relaxed text-lg italic">“{r.text}”</p>
            <footer className="mt-6 border-t border-slate-50 pt-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400">V</div>
              <div>
                <div className="text-sm font-semibold text-slate-900">Verified Patient</div>
                <div className="text-xs text-slate-400">Treatment received clinic</div>
              </div>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
    </AnimateIn>
  )
}
