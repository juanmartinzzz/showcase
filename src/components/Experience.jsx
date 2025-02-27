import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
  {
    company: 'Tech Giant Inc.',
    role: 'Senior Dev',
    period: '2018 - Present',
    description: 'Led development of core platform features in several projects, from SaaS and e-commerce to fintech and crypto trading.'
  },
  {
    company: 'Startup Hub',
    role: 'Product Manager',
    period: '2020 - Present',
    description: 'Managed product roadmap and led a team of up to 7 backend devs working on a high-throughput ad exchange, taking it from 250 KUSD to 1 MUSD Gross Revenue per day.'
  },
  {
    company: 'Innovation Labs',
    role: 'Fullstack Dev',
    period: '2011 - 2018',
    description: 'Worked in agencies and led the tech area of a cargo logistics company in my home country Colombia.'
  }
];

const experiencesV2 = [
  {
    title: 'Current Saga: Blue Collar Hero',
    company: 'Flow Kaching + Invoice Ally',
    sectionOneTitle: 'My vision',
    sectionOneThings: [
      'I will save blue collar businesses from breaking the bank on TikTok apocalypse, by managing their SEO + referral + discount + loyalty programs',
      'I will remove stress from small business owners by using AI to automate payment reminders to difficult clients',
    ],
    sectionTwoTitle: 'What I\'ll do',
    sectionTwoThings: [
      'Level up as founder - build my network, enter accelerator programs, find mentorship',
      'Spend time with customers, learn about their pain, find beta testers',
    ]
  },
  {
    title: 'Ad Exchange Product Guru Period 💰',
    company: 'Sharethrough',
    sectionOneTitle: 'Led the charge on',
    sectionOneThings: [
      'Taking Gross Revenue from a quarter million, all the way to 1 million USD/day',
      'Running A/B tests and making data-driven decisions every. Single. Day',
    ],
    sectionTwoTitle: 'Success recipe',
    sectionTwoThings: [
      'Literally turn data into gold',
      'Navigate complex industry dynamics as well as bringing internal tech changes',
    ]
  },
  {
    title: 'Montreal Double Life 🍁',
    company: 'Sharethrough + Rolls.co',
    sectionOneTitle: 'Rocking it as',
    sectionOneThings: [
      'AdTech dev and team leader at District M',
      'Dark kitchen by night at Rolls.co (and co-founder, and CTO, and head of all tech problems)',
    ],
    sectionTwoTitle: 'My power moves',
    sectionTwoThings: [
      'Built e-commerce + operations + reporting apps for my co-founder\'s kitchen',
      'Went through accelerator program + pitched to investors',
      'Survived Montréal winter while improving my dev team\'s process and work quality',
    ]
  },
  {
    title: 'My California Agency Phase 🌴',
    company: 'FullStack Labs INC',
    sectionOneTitle: 'My roles were',
    sectionOneThings: [
      'Senior dev extraordinaire',
      'Human bridge between designers and devs',
      'Master of "we can totally make that deadline"',
    ],
    sectionTwoTitle: 'How I leveled up',
    sectionTwoThings: [
      'Became fluent in requirement-speak',
      'Mastered art of making deadlines by creating smaller deliverables',
    ]
  },
  {
    title: 'Logistics Kingpin Era 👑',
    company: 'Champion Air Cargo',
    sectionOneTitle: 'My domain included',
    sectionOneThings: [
      'Being tech wizard-in-chief for the whole company (no pressure!)',
      'Juggling DevOps, dev, and stakeholder coms on the daily, from server-room to boardroom (yup, physical in-house servers were big back then)',
    ],
    sectionTwoTitle: 'Greatest hits',
    sectionTwoThings: [
      'Built and maintained company\'s digital nervous system',
      'Learned to speak "tech" + "business" fluently',
    ]
  },
  {
    title: 'The Oracle Wrestling Championship 🤼‍♂️',
    company: 'SOAIN LTD',
    sectionOneTitle: 'My mission',
    sectionOneThings: [
      'Build product for clients using Oracle ADF, an ambitious framework with better intentions than results',
      'Keep clients from having meltdowns while my team "creatively enhanced" the product',
    ],
    sectionTwoTitle: 'How I crushed it',
    sectionTwoThings: [
      'Learned teamwork basics while telling the customer "we\'re working on it" in 50 different ways',
      'Developed your first gray hairs dealing with client expectations (but hey, they make you look distinguished!)',
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold gradient-text mb-12">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="glass-card p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-secondary">{exp.role}</h3>
                {/* <p className="text-light">{exp.company}</p> */}
              </div>

              <div className="flex items-center space-x-2 text-light/60">
                <Calendar className="w-4 h-4" />
                <span>{exp.period}</span>
              </div>
            </div>
            <p className="text-light/80">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience