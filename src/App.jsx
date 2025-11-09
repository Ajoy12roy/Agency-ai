import React, { useState, useRef, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import OurWork from './components/OurWOrk'
import Teams from './components/Teams'
import ContactUs from './components/ContractUs'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'




const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      return storedTheme
    }
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDarkMode ? 'dark' : 'light'
  }
  return 'light'
}

const App = () => {

const dotRef = useRef(null)
const outlineRef = useRef(null)

const mouse = useRef({x: 0, y: 0})
const position = useRef({x: 0, y: 0})

useEffect(() => {
  const handleMouseMove = (e) => {
    mouse.current.x = e.clientX
    mouse.current.y = e.clientY
  }

  document.addEventListener('mousemove', handleMouseMove)

  const animate = () => {
    position.current.x += (mouse.current.x - position.current.x) * 0.4
    position.current.y += (mouse.current.y - position.current.y) * 0.4
    if (dotRef.current) {
      dotRef.current.style.transform = `translate3d(${mouse.current.x - 6 }px, ${mouse.current.y - 6 }px, 0)`
    }
    if (outlineRef.current) {
      outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`
    }
    requestAnimationFrame(animate)
  }
  animate()

  return () => {
    document.removeEventListener('mousemove', handleMouseMove)
  }
}, [])

  const [theme, setTheme] = useState(getInitialTheme)

  return (
    <div className={theme === 'dark' ? 'dark bg-gray-950 relative' : 'relative'}>
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme}/>
      <TrustedBy />
      <Services theme={theme} />
      <OurWork />
      <Teams />
      <ContactUs />
      <Footer  theme={theme}/>

<div ref={outlineRef} className='fixed top-0 left-0 h-12 w-12 rounded-full bg-transparent 
border border-primary pointer-events-none z-[9999]' style={{transition: 'transform 0.1s ease-out'}}>

</div>

<div ref={dotRef} className='fixed top-0 left-0 h-3 w-3  bg-primary rounded-full
border border-primary pointer-events-none z-[9999] '>

</div>

      
    </div>
  )
}

export default App
