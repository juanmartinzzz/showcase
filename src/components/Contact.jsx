import { useState } from 'react';
import { motion } from 'framer-motion';
import telegram from '../integrations/telegram';
import { MessageSquare, Pencil } from 'lucide-react';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [isMessageSent, setIsMessageSent] = useState(false);

  const sendMessage = () => {
    telegram.sendMessage({
      message: email + '\n\n' + message
    });

    setTimeout(() => {
      setIsMessageSent(true);
    }, 1 * 1000);
  }

  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold gradient-text mb-12 text-center">Get in Touch</h2>
      <div className="glass-card p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label htmlFor="email" className="block text-warning mb-2">Email, phone, insta, anything you want.</label>
              <input
                type="email"
                id="email"
                className="w-full bg-white/10 border border-white/20 p-3 text-light focus:border-secondary outline-none transition-colors duration-300"
                placeholder="A way to contact you back"
                value={email}
                onChange={({target}) => setEmail(target.value)}
              />
            </div>

            <div className="flex-2">
              <label htmlFor="message" className="block text-warning mb-2">How can I help you?</label>
              <textarea
                id="message"
                rows="4"
                className="w-full bg-white/10 border border-white/20 p-3 text-light focus:border-secondary outline-none transition-colors duration-300"
                placeholder="Your message..."
                value={message}
                onChange={({target}) => setMessage(target.value)}
              />
            </div>
          </div>
          {isMessageSent ? (
            <p className="text-light text-center font-semibold">Message sent! 🎉</p>
          ) : (
            <button className={`w-full ${(email !== '' && message !== '') ? 'gradient-border' : 'bg-white/5 border border-white/10'} p-3 flex items-center gap-2 justify-center cursor-pointer`} onClick={() => {(email !== '' && message !== '') && sendMessage()}}>
              <span>{(email !== '' && message !== '') ? 'Send Message' : 'Please fill the form to send a message!'}</span>
              {(email !== '' && message !== '') ? <MessageSquare className="w-5 h-5" /> : <Pencil className="w-5 h-5" />}
            </button>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Contact