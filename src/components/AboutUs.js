import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <div className="about-container">
      <div className="image-container" >
        <img className="image" src={`${process.env.PUBLIC_URL}/my (2).jpg`} alt="Profile Picture" />
      </div>
        <h4 className='abothed'>About Me</h4>
      <div className="about-text">
        <h3>Curious about me? Here you have it:</h3>
        <p>
          I'm a passionate, self-proclaimed designer who specializes in full stack development
          <br/>  (React.js & Node.js). I am enthusiastic about bringing the technical and visual 
          <br/>aspects of digital products to life.
           User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
          I began my journey as a web developer in 2018, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the 
          <br/>latest technologies along the way. Now, in my early thirties, 5 years after starting my web development journey,
          <br/> I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
          I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
          When I'm not in full-on developer mode, you can find me hovering around on Twitter or on Indie Hackers, witnessing the journey of early 
          <br/>startups or enjoying some free time. You can follow me on Twitter where I share tech-related insights and build in public, or you can follow me on GitHub.
          <br/>Finally, some quick bits about me:
          <ul>
            <li>Bs Computer Engineering</li>  <li>Full-time freelancer</li>
            <li>Avid learner</li>
            <li>Aspiring indie hacker</li>
          </ul>
          One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
