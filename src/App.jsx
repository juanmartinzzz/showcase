import Hero from './components/Hero'
import Stats from './components/Stats'
import { motion } from 'framer-motion'
import Contact from './components/Contact'
import Projects from './components/Projects'
import ExperienceV2 from './components/ExperienceV2'
import { useInView } from 'react-intersection-observer'
import { GithubIcon, LinkedinIcon, TwitterIcon, Mail, MapPin, Smartphone } from 'lucide-react'

const App = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.003
  })

  return (
    <div className="min-h-screen bg-dark grid-pattern">
      <div className="fixed inset-0 bg-gradient-to-b from-dark via-dark/95 to-primary/20 pointer-events-none" />

      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="py-6 sticky top-0 z-50">
            <div className="glass-card p-4 text-white">
              <motion.div
                initial={{ opacity: 0, filter: 'blur(8px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 3 }}
                className="flex justify-between items-center"
              >
                <div className='flex gap-2 md:gap-4'>
                  {/* <a href="https://github.com" target="_blank" rel="noopener noreferrer"> */}
                    {/* <GithubIcon className="w-6 h-6 hover:text-secondary transition-colors duration-600" /> */}
                  {/* </a> */}
                  <a href="https://www.linkedin.com/in/juanito-martinez/" target="_blank" rel="noopener noreferrer">
                    <LinkedinIcon className="w-6 h-6 hover:text-secondary transition-colors duration-600" />
                  </a>
                  <a href="https://x.com/Chained_block" target="_blank" rel="noopener noreferrer">
                    <TwitterIcon className="w-6 h-6 hover:text-secondary transition-colors duration-600" />
                  </a>
                  <a href="mailto:juan.martinzzz@gmail.com">
                    <Mail className="w-6 h-6 hover:text-secondary transition-colors duration-600" />
                  </a>
                  <a href="mailto:contact@example.com">
                    <Smartphone className="w-6 h-6 hover:text-secondary transition-colors duration-600" />
                  </a>
                </div>

                <div className='text-secondary text-center font-bold'>Juan Martínez</div>

                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-secondary" />
                  <span>Montréal, QC</span>
                </div>
              </motion.div>
            </div>
          </nav>

          <Hero />

          <Stats />

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 250 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.3 }}
          >
            <Projects />
          </motion.div>

          <ExperienceV2 />
          <Contact />

          <footer className="glass-card mt-20 py-12 border-b-0">
            <div className="text-center italic">
              <p className="text-light mb-12">© 2025 Juanito. All rights reserved.</p>
              <div className="gradient-line w-24 mx-auto" />
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default App