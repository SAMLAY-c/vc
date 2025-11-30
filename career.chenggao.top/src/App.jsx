import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// 页面组件
import Header from './components/Header'
import Hero from './components/Hero'
import Education from './components/Education'
import Internships from './components/Internships'
import Projects from './components/Projects'
import AISection from './components/AISection'
import Contact from './components/Contact'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

import InternshipDetail from './pages/InternshipDetail'
import ProjectDetail from './pages/ProjectDetail'

// 联系表单页面
import ContactFormPage from './pages/ContactFormPage'

// 主页组件
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
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact-form" element={<ContactFormPage />} />
      </Routes>
    </Router>
  )
}

export default App;