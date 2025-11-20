import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Education from './components/Education'
import Internships from './components/Internships'
import Projects from './components/Projects'
import AISection from './components/AISection'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetail from './pages/ProjectDetail'
import InternshipDetail from './pages/InternshipDetail'

function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Education />
        <Internships />
        <Projects />
        <AISection />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
        <Route path="/internship/:internshipId" element={<InternshipDetail />} />
      </Routes>
    </Router>
  )
}

export default App