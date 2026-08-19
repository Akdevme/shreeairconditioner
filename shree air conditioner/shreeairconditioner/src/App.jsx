import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AboutView from './components/AboutView'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ServicesView from './components/ServicesView'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[linear-gradient(135deg,#f5f7fa_0%,#c3cfe2_100%)] text-slate-900">
        <Navbar />
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesView />} />
            <Route path="/about" element={<AboutView />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
