import Link from 'next/link'

export default function Success({ searchParams }){
  const name = searchParams.name || ''
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="card max-w-xl text-center">
        <h1 className="text-2xl font-semibold">Payment Successful</h1>
        <p className="mt-4">Thank you {name || 'patient'}, your consultation is booked. We will contact you shortly.</p>
        <div className="mt-6">
          <Link href="/" className="btn-primary">Return to Home</Link>
        </div>
      </div>
    </div>
  )
}
