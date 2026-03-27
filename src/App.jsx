import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './Pages/Home'
import HeroSection from './Componenets/Hero'
import { CartsDiv } from './Componenets/Carts'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='CTA'>
        <HeroSection/>
        <Home/>
        <CartsDiv/>
      </div>
    </>
  )
}

export default App
