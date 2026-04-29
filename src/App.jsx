import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ProductCategories from './components/ProductCategories'
import FeaturedProducts from './components/FeaturedProducts'
import WhyChooseUs from './components/WhyChooseUs'
import IndustriesServed from './components/IndustriesServed'
import Testimonials from './components/Testimonials'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-warm-neutral-50 selection:bg-medical-blue-100 selection:text-medical-blue-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProductCategories />
        <FeaturedProducts />
        <WhyChooseUs />
        <IndustriesServed />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
