import './App.css'

import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import Layout from '../src/components/Layout'

import Home from '../src/pages/Home'
import Experience from './pages/Experience'
import Project from './pages/Project'

function App() {
  return (
  <>
    <Navbar />
    <Layout>
      <Home />
      <Experience />
      <Project/>
    </Layout>
    <Footer />
  </>
)

}

export default App
