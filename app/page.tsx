'use client'
import About from '@/components/About'
import Blog from '@/components/Blog'
import Hero from '@/components/Hero'
import MobileNav from '@/components/MobileNav'
import Nav from '@/components/Nav'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import Testimonial from '@/components/Testimonial'
import { useState } from 'react'

export default function Home() {

  const [nav, setNav] = useState(false)
  const openNav = () => setNav(true)
  const closeNav = () => setNav(false)


  return (
    <div className='overflow-x-hidden select-none'>
      {/* NavBar */}
      <div>
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav}/>

        {/* Hero Section */}

        <Hero />

        <div className='relative z-[3000]'>
          <About />

          {/* services */}
          <Services />

          {/* skills */}
          <Skills />

          {/* Projects */}
          <Projects />

          {/* reviews
          <Testimonial />
          <Blog /> */}
        </div>
      </div>
    </div>
  )
}
