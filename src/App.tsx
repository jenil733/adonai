
import Home from './components/home'
import AboutUs from './components/about_us'
import OurBus from './components/our_bus'
import Services from './components/services'
import WhyAdonai from './components/why_adonai'
import Gallery from './components/gallery'
import Testimonials from './components/Testimonials'
import Faq from './components/faq'
import Footer from './components/footer'
import { useScrollAnimation } from './hooks/useScrollAnimation'

function App() {
  useScrollAnimation()

  return (
    <>
      <Home />
      <AboutUs />
      <OurBus />
      <Services />
      <WhyAdonai />
      <Gallery />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  )
}

export default App
