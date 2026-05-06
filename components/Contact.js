import AnimateIn from './AnimateIn'

export default function Contact(){
  return (
    <AnimateIn>
    <section id="contact" className="py-12">
      <h2 className="text-xl font-semibold">Contact & Location</h2>
      <h3 className="mt-2 text-lg font-medium">Visit Our Clinic</h3>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
  <div className="card">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-slate-50 rounded-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 21s-6.5-4.35-9-8a7.5 7.5 0 1115 0c-2.5 3.65-9 8-9 8z" stroke="#0f172a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="10" r="2.2" stroke="#0f172a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium">Clinic Location</h4>
              <p className="mt-2 text-sm text-slate-600">5th Floor, Medico House, Near Visat Circle, Ahmedabad, Gujarat</p>
              <p className="mt-2 text-sm">Hours: Mon-Sat 10:00 - 6:00</p>
              <p className="mt-3 text-sm">
                <a className="text-blue-600" href="https://maps.app.goo.gl/N5gj26hpPgR3YaZG9" target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
              </p>
            </div>
          </div>
        </div>

  <div className="card">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-slate-50 rounded-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M21 15v4a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3a1 1 0 011-1h2l1-2" stroke="#0f172a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 6v4a1 1 0 001 1h3a1 1 0 001-1V8a1 1 0 00-1-1H5l-2-1" stroke="#0f172a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="w-full">
              <h4 className="font-medium">Call & Directions</h4>
              <p className="mt-2 text-sm">Phone: <a href="tel:+918675600088" className="text-blue-600">+91 86756 00088</a></p>
              <p className="mt-3 text-sm">
                <a className="text-blue-600" href="https://maps.app.goo.gl/N5gj26hpPgR3YaZG9" target="_blank" rel="noopener noreferrer">Open directions in Google Maps</a>
              </p>
            </div>
          </div>
        </div>
      <div className="mt-6">
        <div className="w-full h-64 rounded-lg overflow-hidden shadow-soft">
          <iframe
            title="clinic-map-full"
            aria-label="Clinic full map"
            src="https://maps.google.com/maps?q=5th%20Floor%2C%20Medico%20House%2C%20Near%20Visat%20Circle%2C%20Ahmedabad%2C%20Gujarat&z=16&output=embed"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
      </div>
    </section>
    </AnimateIn>
  )
}
