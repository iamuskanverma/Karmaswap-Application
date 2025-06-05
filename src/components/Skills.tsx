import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  'Programming Languages': ['Java', 'Python', 'JavaScript'],
  'Frameworks & Libraries': ['Spring Boot', 'Hibernate', 'JUnit', 'React'],
  'Databases': ['MySQL', 'PostgreSQL', 'MongoDB'],
  'Tools & Technologies': ['Git', 'Maven', 'Docker', 'Jenkins', 'AWS'],
  'Soft Skills': ['Problem Solving', 'Team Collaboration', 'Communication']
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <motion.div 
                key={category}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-primary-700">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full text-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;