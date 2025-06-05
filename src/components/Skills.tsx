import React from 'react';

const skills = {
  'Programming Languages': ['Java', 'Python', 'JavaScript'],
  'Frameworks & Libraries': ['Spring Boot', 'Hibernate', 'JUnit', 'React'],
  'Databases': ['MySQL', 'PostgreSQL', 'MongoDB'],
  'Tools & Technologies': ['Git', 'Maven', 'Docker', 'Jenkins', 'AWS'],
  'Soft Skills': ['Problem Solving', 'Team Collaboration', 'Communication']
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;