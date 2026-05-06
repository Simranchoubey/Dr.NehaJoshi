import '../styles/globals.css'
import { Inter, Poppins } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ subsets: ['latin'], weight: ['400','600','700'], variable: '--font-poppins' })

export const metadata = {
  title: 'Best Dermatologist in Ahmedabad | Dr. Neha Joshi',
  description: 'Dr. Neha Joshi — Skin specialist in Ahmedabad with 18+ years of experience in acne, pigmentation, hair loss and advanced laser treatments. Book a consultation today.',
  applicationName: 'Dr. Neha Joshi Clinic',
  authors: [{ name: 'Dr. Neha Joshi' }],
  openGraph: {
    title: 'Best Dermatologist in Ahmedabad | Dr. Neha Joshi',
    description: 'Skin specialist in Ahmedabad with 18+ years of experience offering acne, pigmentation, hair loss and laser treatments.',
    url: 'https://www.example.com',
    siteName: 'Dr. Neha Joshi - Dermatology',
    images: [
      {
        url: 'https://www.example.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr Neha Joshi - Dermatologist'
      }
    ],
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Dermatologist in Ahmedabad | Dr. Neha Joshi',
    description: 'Skin specialist in Ahmedabad with 18+ years of experience offering acne, pigmentation, hair loss and laser treatments.',
    images: ['https://www.example.com/og-image.jpg']
  }
}

export default function RootLayout({ children }){
  return (
    <html lang="en" className={`${inter.className} ${poppins.className}`}>
      <body>
        {/* Google Analytics / any head scripts can be added here */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXX" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
          gtag('config', 'G-XXXX');
        `}</Script>

        <meta name="theme-color" content="#ffffff" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "Dr. Neha Joshi",
          "image": "https://www.example.com/doctor.jpg",
          "telephone": "+918675600088",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "5th Floor, Medico House, Near Visat Circle",
            "addressLocality": "Ahmedabad",
            "addressRegion": "Gujarat",
            "postalCode": "",
            "addressCountry": "IN"
          },
          "priceRange": "₹₹",
          "url": "https://www.example.com",
          "aggregateRating": {"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"600"}
        })}} />

  {children}
      </body>
    </html>
  )
}
