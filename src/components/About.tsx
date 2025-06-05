import React from 'react';
import { GraduationCap, Briefcase, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
              <p className="text-gray-600 mb-6">
                I am a Java Developer with a passion for building efficient and scalable backend systems.
                My expertise includes Spring Boot, Hibernate, and RESTful APIs. I focus on writing clean,
                maintainable code and following best practices in software development.
              </p>
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 text-primary-600 mr-2" />
                <span className="text-gray-600">Ayodhya, Uttar Pradesh, India</span>
              </div>
            </div>
            <div>
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <GraduationCap className="h-5 w-5 text-primary-600 mr-2" />
                  <h4 className="font-semibold">Education</h4>
                </div>
                <div className="ml-7">
                  <p className="font-medium">B.Tech in Computer Science</p>
                  <p className="text-gray-600">Your University Name</p>
                  <p className="text-gray-500">2019 - 2023</p>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-3">
                  <Briefcase className="h-5 w-5 text-primary-600 mr-2" />
                  <h4 className="font-semibold">Experience</h4>
                </div>
                <div className="ml-7">
                  <p className="font-medium">Java Developer</p>
                  <p className="text-gray-600">Company Name</p>
                  <p className="text-gray-500">2023 - Present</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;