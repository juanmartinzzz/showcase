import { motion } from 'framer-motion'
import { Code2, Briefcase, Rocket, Route, Plus } from 'lucide-react'

const subtitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: { scale: 1, rotate: 0 }
}

function Hero() {
  const durationSecondsXs = 0.3;
  const durationSecondsSm = 0.6;
  const durationSecondsMd = 0.9;
  const durationSecondsLg = 1.2;
  const durationSecondsXl = 1.5;
  const durationSeconds2xl = 1.8;

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: durationSecondsSm }}
        className="glass-card p-8 md:p-12"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: durationSecondsSm }}
          className="text-6xl md:text-8xl font-bold gradient-text mb-8 text-glow"
        >
          Hi, I'm Juan
        </motion.h1>

        <div className="space-y-8">
          {[
            { text: 'dev', icon: Code2 },
            { text: 'product', icon: Route },
            { text: 'founder', icon: Rocket }
          ].map(({ text, icon: Icon }, index) => (
            <div key={text} className="flex items-center space-x-4">
              <motion.div
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.2, duration: durationSeconds2xl }}
              >
                <Icon className="w-8 h-8 text-secondary" />
              </motion.div>
              <motion.p
                variants={subtitleVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.2, duration: durationSecondsSm }}
                className="text-3xl md:text-4xl text-white opacity-80"
              >
                {text}
              </motion.p>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: durationSecondsLg }}
          className="mt-12"
        >
          <div className="gradient-line w-full mb-8" />
          <p className="text-xl text-light/80">
            <span className="font-bold">15 years solving software and business puzzles</span> <Plus className='w-6 h-6 inline-block text-secondary' /> bringing products to life.
          </p>
          <p className="text-xl text-light/80 max-w-2xl">
            Now building my own stuff. Thanks for checking it out.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero