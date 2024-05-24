import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <main className="about">
      <div className="contact-info">
        <h2>Antony A</h2>
        <div className="icons">
          <a href="mailto:aaaaaa@gmail.com"><FaEnvelope /></a>
          <a href="https://linkedin.com"><FaLinkedin /></a>
          <a href="https://github.com"><FaGithub /></a>
        </div>
      </div>
      <section className="about-me">
        <h3>About Me</h3>
        <p>
          I am a UX designer with a strong foundation in user-centered design principles, responsive design, and extensive experience in user research methods such as interviews and usability testing. Proficient in design tools like Adobe Photoshop and Illustrator, and skilled in creating user personas, journey maps, wireframes, and prototypes using Figma and Adobe XD. My technical expertise includes web technologies like HTML, CSS, and React.js, complemented by strong communication and problem-solving skills.
        </p>
      </section>
      <section className="skills">
        <h3>Key Skills</h3>
        <ul>
          <li>User-Centered Design Principles</li>
          <li>Responsive Design</li>
          <li>User Research (Interviews, Usability Testing)</li>
          <li>Design Tools: Adobe Photoshop, Illustrator</li>
          <li>User Personas and Journey Maps</li>
          <li>Web Technologies (HTML, CSS, React.js)</li>
          <li>Wireframes and Prototyping (Figma, Adobe XD)</li>
          <li>Soft Skills (Communication, Problem-Solving)</li>
        </ul>
      </section>
      <section className="experience">
        <h3>Experience</h3>
        <div className="experience-item">
          <h4>Edunet Foundation | Front-End Developer (Intern)</h4>
          <p>June 2023 – July 2023</p>
          <p>
            Designed & built a responsive portfolio site using HTML, CSS, JS, & Bootstrap, enhancing user experience.
          </p>
        </div>
        <div className="experience-item">
          <h4>Infosys Springboard | Full Stack Cloud Developer (Intern)</h4>
          <p>January 2023 – May 2023</p>
          <p>
            Developed an Online Library platform on GCP with a user-friendly web app (HTML, CSS, PHP), MariaDB database, and deployed on a LAMP stack using Compute Engine.
          </p>
        </div>
      </section>
      <section className="education">
        <h3>Education and Certifications</h3>
        <div className="education-item">
          <h4>Bachelor of Technology in Computer Science & Engineering</h4>
          <p>May 2024</p>
        </div>
        <div className="education-item">
          <h4>Google UX Design Professional | Coursera</h4>
          <p>June 2023</p>
          <p>
            Studied UX design foundations, covering ideation, wireframing, and creating low-fidelity and high-fidelity prototypes using Figma. Conducted UX research to enhance my understanding of user needs and preferences.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
