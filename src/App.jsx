import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Home from './pages/Home'
import Service from './pages/services/Service'
import About from './pages/about/About'
import Portfolio from './pages/portfolio/Portfolio'
import Contact from './pages/Contact'

// Services subpages
import TechnologyConsulting from './pages/services/TechnologyConsulting'
import BusinessConsulting from './pages/services/BusinessConsulting'

// Portfolio subpages
import CaseStudies from './pages/portfolio/CaseStudies'
import Blog from './pages/portfolio/Blog'

// About subpages
import Careers from './pages/about/Careers'
import Testimonials from './pages/about/Testimonials'
import FAQs from './pages/about/FAQs'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>

        {/* Main pages */}
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='services' element={<Service />} />
        <Route path='about' element={<About />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='contact' element={<Contact />} />

        {/* Services subpages */}
        <Route path='services/TechnologyConsulting' element={<TechnologyConsulting />} />
        <Route path='services/BusinessConsulting' element={<BusinessConsulting />} />

        {/* About subpages */}
        <Route path='about/careers' element={<Careers />} />
        <Route path='about/testimonials' element={<Testimonials />} />
        <Route path='about/faqs' element={<FAQs />} />

        {/* Portfolio subpages */}
        <Route path='portfolio/case-studies' element={<CaseStudies />} />
        <Route path='portfolio/blog' element={<Blog />} />

      </Route>
    )
  )

  return (
    <div className='min-h-screen bg-gray-50'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
