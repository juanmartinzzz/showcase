import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
  {
    title: 'Current Saga: Blue Collar Hero 🎖️',
    company: 'Flow Kaching + Invoice Ally',
    sectionOneTitle: 'My vision',
    sectionOneThings: [
      'I\'ll save blue collar companies from breaking the bank on TikTok apocalypse, by managing their SEO + referral + discount + loyalty programs',
      'I\'m going to remove stress from small business owners by using AI to automate payment reminders to difficult clients',
    ],
    sectionTwoTitle: 'What I\'ll do',
    sectionTwoThings: [
      'Level up as founder - build my network, enter accelerator programs, find mentorship',
      'Spend time with customers, learn about their pain, find beta testers',
    ]
  },
  {
    title: 'Ad Exchange Product Guru Era 💰',
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
    title: 'Double Life in Montréal 🍁',
    company: 'District M + Rolls.co',
    sectionOneTitle: 'Rocking it as',
    sectionOneThings: [
      'AdTech dev and team leader at District M by day',
      'Dark kitchen co-funder by night at Rolls.co (and head of all tech problems)',
    ],
    sectionTwoTitle: 'My power moves',
    sectionTwoThings: [
      'Built e-commerce + operations + reporting apps to optimize our dark kitchen',
      'Went through accelerator program + pitched to investors',
      'Survived Montréal winter while improving my dev team\'s process and work quality',
    ]
  },
  {
    title: 'My California Agency Phase 🌴',
    company: 'FullStack Labs INC',
    sectionOneTitle: 'My roles',
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
      'Build product for clients using Oracle ADF, an ambitious framework with good intentions but regular results',
      'Keep clients from having meltdowns while my team "creatively enhanced" the product',
    ],
    sectionTwoTitle: 'How I crushed it',
    sectionTwoThings: [
      'Learned teamwork basics while telling the customer "we\'re working on it" in 50 different ways',
      'Developed your first gray hairs dealing with client expectations (but hey, they make you look distinguished!)',
    ]
  }
];

const ExperienceV2 = () => {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold gradient-text mb-12">Experience</h2>

      <div className="flex flex-col gap-24">
        {experiences.map((experience, index) => (
          <div className={`w-full md:w-[66vw] flex ${index % 2 === 0 ? 'self-start' : 'self-end'}`} key={index}>
            <div className="flex flex-col w-1/4 md:justify-center text-md md:text-2xl">
              <h3 className="font-bold gradient-text text-center">{experience.title}</h3>

              <p className="text-warning text-center">@</p>

              <p className="text-white text-center">{experience.company}</p>
            </div>

            <div className="gradient-line-horizontal h-64 mx-6 md:self-center"></div>

            <div className="flex flex-col w-3/4">
              <div className="text-light/60 mb-2">
                <span className="font-semibold text-warning md:text-xl">{experience.sectionOneTitle}</span>
              </div>

              <div className="flex flex-wrap gap-6 mb-6">
                {experience.sectionOneThings.map((item, idx) => (
                  <div key={idx} className="glass-card flex-1 min-w-[48%] p-4">
                    <p className="text-light/80 leading-tight">{item}</p>
                  </div>
                ))}
              </div>

              <div className="text-light/60 mb-2">
                <span className="font-semibold text-warning md:text-xl">{experience.sectionTwoTitle}</span>
              </div>

              <div className="flex flex-wrap gap-6">
                {experience.sectionTwoThings.map((item, idx) => (
                  <div key={idx} className="glass-card flex-1 min-w-[48%] p-4">
                    <p className="text-light/80 leading-tight">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ExperienceV2