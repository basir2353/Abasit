import React from 'react';
import './Experience.css'; // Import your CSS file

const Experience = () => {
  return (
    <div className="container">
       <div className='exp1'> <h2>Experience</h2></div>
      <div className='exp'>
        <h4>Here is a quick summary of my most recent experiences:</h4>
      </div>
      <div className="card">
        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/upwork.png`} alt="Upwork Logo" width="50" height="50" />
        </div>
        <div className="description">
          <h2>Independent Freelancer</h2>
          <p>Worked for various clients like Fiskil, Shosho, Crowe MacKay LLP.</p>
          <p>Worked with a variety of technologies, including React, Next.js, Typescript, Express.js, PostgreSQL, Tailwindcss, Mui, Firebase, Storybook, Cypress, and others.</p>
        </div>
        <div className="date">
          <p>Nov 2021 - Present</p>
        </div>
        
      </div>
      <div className="card">
        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/downloadf.png`} alt="Upwork Logo" width="50" height="50" />
        </div>
        <div className="description">
          <h2>Full Stack Developer</h2>
          <p>
Worked as a full stack developer (React / Laravel).
</p>
        </div>
        <div className="date">
          <p>Dec 2015 - May 2017

</p>
        </div>
        
      </div>
      <div className="card">
        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/download.png`} alt="Upwork Logo" width="50" height="50" />
        </div>
        <div className="description">
          <h2>Team Lead</h2>
          <p>Acted as team lead in different projects.
Brainstormed new ideas & gathered requirements for internal projects.</p>
          <p>Designed architecture of different projects (frontend + backend).
Worked on enterprise-level projects for a variety of clients.
Handled sprint planning & task distribution</p>
        </div>
        <div className="date">
          <p>Jul 2017 - Oct 2021</p>
        </div>
        
      </div>
      
    </div>
  );
};

export default Experience;
