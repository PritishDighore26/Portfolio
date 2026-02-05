import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Layout from './components/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* FIXED NAVBAR AT TOP */}
      <Navbar />

      {/* LAYOUT WITH FIXED SIDEBAR + MAIN CONTENT */}
      <Layout>
        {/* All sections render on the right side */}
        <Home />
        <About/>

        
      </Layout>
      <Footer />
      
    </>
  )
}

export default App
