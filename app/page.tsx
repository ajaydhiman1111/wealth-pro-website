import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Highlights } from '@/components/highlights'
import { About } from '@/components/about'
import { Amenities } from '@/components/amenities'
import { MasterPlan } from '@/components/master-plan'
import { Pricing } from '@/components/pricing'
import { Gallery } from '@/components/gallery'
import { VideoGallery } from '@/components/video-gallery'
import { Testimonials } from '@/components/testimonials'
import { FAQs } from '@/components/faqs'
import { Location } from '@/components/location'
import { EnquiryForm } from '@/components/enquiry-form'
import { Footer } from '@/components/footer'
import { FloatingActions } from '@/components/floating-actions'
import { siteConfig } from '@/lib/site-config'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstatelisting',
  name: siteConfig.project,
  description:
    'Gated luxury plotted township near the Delhi–Dehradun Expressway with world-class amenities and MDDA-approved residential plots.',
  url: 'https://ektaavenue-phase3.example.com',
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Off Delhi–Dehradun Expressway',
    addressLocality: 'Dehradun',
    addressRegion: 'Uttarakhand',
    addressCountry: 'IN',
  },
  image: 'https://ektaavenue-phase3.example.com/images/hero-aerial.png',
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Amenities />
        <MasterPlan />
        <Pricing />
        <Gallery />
        <VideoGallery />
        <Testimonials />
        <Location />
        <FAQs />
        <EnquiryForm />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
