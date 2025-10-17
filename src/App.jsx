import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import OurWOrk from './components/OurWOrk'
import Teams from './components/Teams'
import ContractUs from './components/ContractUs'

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
  const [theme, setTheme] = useState(getInitialTheme)

  return (
    <div className={theme === 'dark' ? 'dark bg-gray-950 relative' : 'relative'}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme}/>
      <TrustedBy />
      <Services theme={theme} />
      <OurWOrk />
      <Teams />
      <ContractUs />
      
    </div>
  )
}

export default App
