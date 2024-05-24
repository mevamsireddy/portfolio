import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <main className="home">
      <div className="intro">
        <h2>Hello!</h2>
        <h3>I'm vamsi</h3>
        <p>
          I’m a UX designer passionate about creating usable digital products.
          I have worked with incredibly talented people across different companies.
        </p>
      </div>
      <div className="work">
        <h3>Work / Projects</h3>
        <ul>
          <li className="project">
            <h4>Redesigned Streaming App</h4>
            <p>
              Conducted extensive user research to identify key pain points within the current streaming app. Utilized user interviews, surveys, and usability testing to gather actionable insights. Redesigned the UI/UX, focusing on improving navigation, content discovery, and user satisfaction.
            </p>
          </li>
          <li className="project">
            <h4>Created a Dogwalker App</h4>
            <p>
              Engaged in comprehensive field research and contextual inquiries to understand the needs of dog owners and walkers. Created personas and user journey maps to capture diverse user requirements. Designed and iterated on multiple prototypes to develop a user-friendly mobile application.
            </p>
          </li>
          <li className="project">
            <h4>Predicting Urban Water Quality Using Machine Learning</h4>
            <p>
              Collaborated with environmental scientists to identify critical factors affecting urban water quality. Designed a user-friendly web application using Figma, allowing users to predict water quality based on various inputs. Implemented machine learning models to analyze data and generate predictions. Conducted usability testing to refine the interface, ensuring accessibility and informativeness for both experts and the general public. <a href="https://www.figma.com/proto/WIHj2alXQFo1pxDEcpV7eq/WaterFlow?page-id=0%3A1&type=design&node-id=1-2&viewport=178%2C-38%2C0.17&t=JVTEXZT1LPqCutOU-1&scaling=scale-down&starting-point-node-id=1%3A2&mode=design">[Prototype Link]</a>
            </p>
          </li>
          <li className="project">
            <h4>Chatbot Flow Builder</h4>
            <p>
              Conducted thorough user research to understand the needs of users creating chatbot conversation flows. Designed an intuitive web application using React and React Flow, enabling users to visually create and manage chatbot nodes and edges. Performed usability testing to validate the design, simplifying the process of building complex chatbot interactions. <a href="https://chatbots-flow-builder.vercel.app/">[Web App Link]</a>
            </p>
          </li>
          <li className="project">
            <h4>Simple Portfolio Site</h4>
            <p>
              Developed a clean and interactive portfolio site to showcase my work and skills. The site includes multiple pages such as home, about, and projects, each designed to provide an engaging user experience. Conducted A/B testing to refine the layout and improve user engagement. The site serves as a central hub for potential clients and employers to learn more about my expertise and past projects.
            </p>
          </li>
        </ul>
      </div>
      <footer>
        <p>Let's create something amazing together!</p>
      </footer>
    </main>
  );
};

export default Home;
