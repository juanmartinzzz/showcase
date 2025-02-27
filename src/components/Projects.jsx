import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, ExternalLink, Github } from 'lucide-react';
import club1 from '../assets/images/680club/1.png';
import club2 from '../assets/images/680club/2.png';
import flowka1 from '../assets/images/flowka/1.png';
import flowka2 from '../assets/images/flowka/2.png';
import flowka3 from '../assets/images/flowka/3.png';
import flowka4 from '../assets/images/flowka/4.png';
import flowka5 from '../assets/images/flowka/5.png';
import flowka6 from '../assets/images/flowka/6.png';
import rolls1 from '../assets/images/rolls-co/1.png';
import rolls2 from '../assets/images/rolls-co/2.png';
import rolls3 from '../assets/images/rolls-co/3.png';
import rolls4 from '../assets/images/rolls-co/4.jpg';
import rolls5 from '../assets/images/rolls-co/5.png';
import memochat1 from '../assets/images/memochat-ai/1.png';
import memochat2 from '../assets/images/memochat-ai/2.png';
import memochat3 from '../assets/images/memochat-ai/3.png';
import invoiceAlly1 from '../assets/images/invoice-ally/1.png';
import invoiceAlly2 from '../assets/images/invoice-ally/2.png';
import invoiceAlly3 from '../assets/images/invoice-ally/3.png';
import invoiceAlly4 from '../assets/images/invoice-ally/4.png';
import invoiceAlly5 from '../assets/images/invoice-ally/5.png';
import cryptoChaser1 from '../assets/images/crypto-chaser/1.png';

const imageTransitionDelaySeconds = 6;

const projects = [
  {
    id: 100,
    title: 'Invoice Ally',
    descriptionTitle: 'Get paid faster, let AI take care of sending reminders and chasing payments 💵',
    descriptionDetails: 'After only a couple days work in 2025-Feb-22, I\'m preparing to launch an MVP so I can put it in the hands of people who can benefit from this service, and reduce their stress when it comes to getting paid, especially from extra-difficult clients.',
    techStack: ['React', 'Supabase', 'PostgreSQL', 'Telegram Bot API'],
    images: [invoiceAlly1, invoiceAlly2, invoiceAlly3, invoiceAlly4, invoiceAlly5],
    video: 'https://placehold.co/600x400/png',
    details: 'IOU the deets.',
    links: {},
    statuses: [
      {label: 'Idea stage', active: false},
      {label: 'Active dev', active: true},
      {label: 'MVP done', active: false},
      {label: 'Live', active: false},
      {label: 'Finished', active: false},
    ],
  },
  {
    id: 101,
    title: 'Memochat AI',
    descriptionTitle: 'Capture the life story of a dear family member - or your own! 📖',
    descriptionDetails: 'A work in progress, I\'m building a mobile app that allows anyone to capture the life story of a family member, friend, or even themelves. The app uses AI to guide the User through different stages of their life, and allows for 2 or more people to enhance the questions or ask follow-ups.',
    techStack: ['Flutter', 'Android', 'iOS', 'Dart', 'Supabase', 'PostgreSQL'],
    images: [memochat1, memochat2, memochat3],
    video: 'https://placehold.co/600x400/png',
    details: 'IOU the deets.',
    links: {},
    statuses: [
      {label: 'Idea stage', active: false},
      {label: 'Active dev', active: true},
      {label: 'MVP done', active: false},
      {label: 'Live', active: false},
      {label: 'Finished', active: false},
    ],
  },
  {
    id: 102,
    title: 'The Crypto Chaser',
    descriptionTitle: 'A must-have companion to explore the insane world of crypto daytrading and live to tell the tale 💎',
    descriptionDetails: 'I built this app in 2025-Jan over a weekend to help me keep a birds-eye view of movements in crypto exchanges, and alert me when there are opportunities I may be interested in. I have a couple more features to add over time, but it\'s already been really useful.',
    techStack: ['React', 'Node.js', 'Binance API', 'KuCoin API'],
    images: [cryptoChaser1],
    video: 'https://placehold.co/600x400/png',
    details: 'IOU the deets.',
    links: {},
    statuses: [
      {label: 'Idea stage', active: false},
      {label: 'Active dev', active: true},
      {label: 'MVP done', active: true},
      {label: 'Live', active: false},
      {label: 'Finished', active: false},
    ],
  },
  {
    id: 103,
    title: '680 Club',
    descriptionTitle: 'A fintech app created for a client with a vision to help people increase their credit score 💳',
    descriptionDetails: 'Adam J hired me to build this app in 2024-September and 3 months later he was ready to launch. I built the frontend with React + Firebase, and a Node.js backend with an Ubuntu Server VPS in Digital Ocean, integrated with Stripe for payments and RBC for payouts. The product uses encryption and passed a pentest to ensure customer sensitive data is safeguarded. Had lots of fun orquestrating everything for the launch.',
    techStack: ['React', 'Node.js', 'Ubuntu Server', 'Digital Ocean',  'Firebase', 'Stripe', 'RBC Bank'],
    images: [club1, club2],
    video: 'https://placehold.co/600x400/png',
    details: 'IOU the deets.',
    links: {
      live: 'https://680club.com'
    },
    statuses: [
      {label: 'Idea stage', active: false},
      {label: 'Active dev', active: false},
      {label: 'MVP done', active: false},
      {label: 'Live', active: true},
      {label: 'Finished', active: false},
    ],
  },
  {
    id: 104,
    title: 'Flow Kaching',
    descriptionTitle: 'Helping blue collar businesses get more clients without breaking the bank 🏦',
    descriptionDetails: 'I started Flow Kaching to pursue my vision that blue collar businesses should be able to get more clients without spending lots of time and money on social marketing and video creation. To support the service I built a serverless PWA in React + Firebase and added Telegram and Whatsapp integrations. Additionally we also built websites for our clients who had no online presence.',
    techStack: ['React', 'Firebase', 'Telegram Bot API', 'Whatsapp API', 'Corporate Identity'],
    images: [flowka1, flowka2, flowka3, flowka4, flowka5, flowka6],
    video: 'https://placehold.co/600x400/png',
    details: 'IOU the deets.',
    links: {
      live: 'https://flowkaching.com'
    },
    statuses: [
      {label: 'Idea stage', active: false},
      {label: 'Active dev', active: true},
      {label: 'MVP done', active: true},
      {label: 'Live', active: true},
      {label: 'Finished', active: false},
    ],
  },
  {
    id: 105,
    title: 'Rolls Co',
    descriptionTitle: 'A combo of apps to keep a dark kitchen running smoothly 🍣',
    descriptionDetails: 'I was recruited by my friend Samantha R to help her growing busines reach the next level. I built the Rolls Co e-commerce app, as well as a PWA to handle toe kitchen\'s operation and reporting.',
    techStack: ['React', 'Firebase', 'Telegram Bot API', 'PWA', 'Reporting'],
    images: [rolls1, rolls2, rolls3, rolls4, rolls5],
    video: 'https://placehold.co/600x400/png',
    details: 'IOU the deets.',
    links: {},
    statuses: [
      {label: 'Idea stage', active: false},
      {label: 'Active dev', active: false},
      {label: 'MVP done', active: false},
      {label: 'Live', active: false},
      {label: 'Finished', active: true},
    ],
  },
]

function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Auto-play images
  useState(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
    }, imageTransitionDelaySeconds * 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      layout
      className="glass-card"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative h-96 flex justify-center">
        <img
          src={project.images[currentImageIndex]}
          alt={`Project ${currentImageIndex + 1}`}
          className="max-h-96 object-contain"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
      </div>

      <div className="p-6">
        <div className="flex flex-col mb-6">
          <div className="flex items-center gap-2">
            {project.statuses.map((status) => (
              <div key={status.label} className="flex-1">
                <div className={`h-1 ${status.active ? 'bg-secondary' : 'bg-light/30'} mb-1`} />

                <div className={`text-xs ${status.active ? 'text-white' : 'text-light/80'} w-full text-center`}>{status.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-bold gradient-text">{project.title}</h3>
          <div className="flex space-x-4">
            {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 text-light hover:text-secondary transition-colors duration-600" />
              </a>
            )}

            {project.links.live && (
              <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5 text-light hover:text-secondary transition-colors duration-600" />
              </a>
            )}
          </div>
        </div>

        <p className="text-white font-bold mb-6 leading-tight">{project.descriptionTitle}</p>
        <p className="text-light mb-6 leading-tight">{project.descriptionDetails}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm glass-card hover:bg-secondary/20 transition-colors duration-600"
            >
              {tech}
            </span>
          ))}
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full border gradient-border px-4 py-2 flex items-center justify-center gap-2 hover:bg-secondary/20 transition-colors duration-600"
        >
          More info
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </button>

        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-4 p-4 border border-white/20 absolute bg-dark"
          >
            <p className="text-light">{project.details}</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold gradient-text mb-12">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects