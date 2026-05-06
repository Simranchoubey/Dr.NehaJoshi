import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Reviews from '../components/Reviews'
import WhyChoose from '../components/WhyChoose'
import Gallery from '../components/Gallery'
import BookingForm from '../components/BookingForm'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import FloatingActions from '../components/FloatingActions'

export default function Home(){
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6">
        <Hero />
        <About />
  <Services />
  <WhyChoose />
  <Reviews />
        <Gallery />
        <BookingForm />
        <Contact />
      </main>
      <FloatingActions />
      <Footer />
    </>
  )
}
