import './App.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Layout from './components/Layout'

import Home from './pages/Home'
import Experience from './pages/Experience'
import Project from './pages/Project'
import Skills from './pages/Skills'
import Education from './pages/Education'
import Contact from './pages/Contact'

function App() {
  return (
  <>
    <Navbar />
    <Layout>
      <Home />
      <Experience />
      <Project/>
      <Skills/>
      <Education/>
      <Contact/>
    </Layout>
    <Footer />
  </>
)
}
export default App