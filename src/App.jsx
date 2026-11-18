import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
      </main>
    </div>
  )
}