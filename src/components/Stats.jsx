import { motion } from 'framer-motion'
import { Eye, Plus } from 'lucide-react'

const stats = [
  { label: 'Years Experience', value: '15+', things:
    ['fullstack', 'backend', 'data analytics', 'product vision', 'founder']
  },
  { label: 'Projects Completed', value: '35+', things:
    ['sofware agency', 'ecommerce pwa', 'saas', 'intl cargo logistics', 'ad exchange', 'fintech', 'crypto trading']
  },
  { label: 'Technologies', value: '30+', things:
    ['js & ts', 'react & node', 'serverless', 'flutter', 'php', 'sql', 'docker']
  },
  { label: 'Happy Clients', value: '10+', things:
    ['SOAIN', 'Champion Air Cargo', 'District M', 'Rolls Co', 'Sharethrough', '680 Club', 'Flow Kaching']
  },
]

function Stats() {
  return (
    <section className="py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.66, duration: 0.6 }}
            className="glass-card p-6 text-center"
          >
            <h3 className="text-4xl font-bold gradient-text">{stat.value}</h3>

            <p className="text-light/80">{stat.label}</p>

            <div className="gradient-line-light w-full my-4"></div>

            <div key={stat.label} className="text-sm text-light/60 italic">
              {stat.things.map((thing, index) => (
                <div key={index}>{thing}</div>
              ))}
              {stat.label === 'Years Experience' ? (
                <motion.div
                  animate={{ opacity: [1, 0.7, 1], filter: ['blur(0px)', 'blur(1.5px)', 'blur(0px)'] }}
                  transition={{ delay: 0, duration: 3, repeat: Infinity, repeatType: 'loop' }}
                  className='flex justify-center items-center gap-1 text-secondary'
                >
                  <span className='leading-none'>What will the</span>
                  <Eye className='w-8 h-8' />
                  <span className='leading-none'>future bring?</span>
                </motion.div>
              ) : (
                <div className='flex justify-center text-secondary'>
                  <Plus className='w-8 h-8' />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Stats