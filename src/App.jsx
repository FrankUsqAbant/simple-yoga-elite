import ScrollProgress from './components/ScrollProgress'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Disciplines from './sections/Disciplines'
import Sanctuary from './sections/Sanctuary'
import Memberships from './sections/Memberships'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className="obsidian-page">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Disciplines />
        <Sanctuary />
        <Memberships />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
