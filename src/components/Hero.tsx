import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="py-20 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 animate-gradient">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Hi, I'm Muskan Verma
          </motion.h1>
          <div className="text-xl md:text-2xl text-white mb-8">
            <TypeAnimation
              sequence={[
                'Java Developer',
                2000,
                'Backend Engineer',
                2000,
                'Problem Solver',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <motion.p 
            className="text-lg text-white mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Passionate Java developer from Ayodhya, UP, creating robust and scalable applications
            with modern technologies.
          </motion.p>
          <motion.div 
            className="flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { href: "https://github.com/yourusername", icon: Github },
              { href: "https://linkedin.com/in/yourusername", icon: Linkedin },
              { href: "mailto:your.email@example.com", icon: Mail }
            ].map((social, index) => (
              <motion.a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full text-primary-600 hover:text-primary-800 hover:scale-110 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <social.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;