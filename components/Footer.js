export default function Footer(){
  return (
    <footer className="mt-12 bg-slate-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-start gap-6">
        <div>
          <div className="font-semibold">Dr. Neha Joshi</div>
          <div className="text-sm text-slate-600 mt-2">Best Dermatologist in Ahmedabad</div>
        </div>
        <div className="text-sm">
          <div>Phone: <a href="tel:+918675600088" className="text-blue-600">+91 86756 00088</a></div>
          <div className="mt-2">© {new Date().getFullYear()} Dr. Neha Joshi</div>
        </div>
      </div>
    </footer>
  )
}
