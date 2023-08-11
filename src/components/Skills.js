import React from 'react';
import { IconContext } from 'react-icons';
import {
  FaJs,
  FaJsSquare,
  FaReact,
  FaServer,
  FaNode,
  FaCommentDots,
  FaSass,
  FaPalette,
  FaFigma,
  FaRegFileCode,
  FaSquarespace,
  FaGit,
  FaBezierCurve,
} from 'react-icons/fa';
import './Skills.css';

const skillsData = [
  { name: 'JavaScript', icon: FaJs, colorClass: 'skill-js', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'TypeScript', icon: FaJsSquare, colorClass: 'skill-ts', link: 'https://www.typescriptlang.org/' },
  { name: 'React', icon: FaReact, colorClass: 'skill-react', link: 'https://reactjs.org/' },
  { name: 'Next.js', icon: FaServer, colorClass: 'skill-next', link: 'https://nextjs.org/' },
  { name: 'Node.js', icon: FaNode, colorClass: 'skill-node', link: 'https://nodejs.org/' },
  { name: 'Socket.io', icon: FaCommentDots, colorClass: 'skill-socket', link: 'https://socket.io/' },
  { name: 'Sass/Scss', icon: FaSass, colorClass: 'skill-sass', link: 'https://sass-lang.com/' },
  { name: 'Tailwindcss', icon: FaPalette, colorClass: 'skill-tailwind', link: 'https://tailwindcss.com/' },
  { name: 'Figma', icon: FaFigma, colorClass: 'skill-figma', link: 'https://www.figma.com/' },
  { name: 'Cypress', icon: FaRegFileCode, colorClass: 'skill-cypress', link: 'https://www.cypress.io/' },
  { name: 'Storybook', icon: FaSquarespace, colorClass: 'skill-storybook', link: 'https://storybook.js.org/' },
  { name: 'Git', icon: FaGit, colorClass: 'skill-git', link: 'https://git-scm.com/' },
  { name: 'Nest.js', icon: FaBezierCurve, colorClass: 'skill-nest', link: 'https://nestjs.com/' },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <div className='exp2'><h5>Skills</h5></div>
      <IconContext.Provider value={{ size: '5rem' }}>
        {skillsData.map(skill => (
          <div key={skill.name} className="skill-item">
            <a href={skill.link} target="_blank" rel="noopener noreferrer" className="skill-link">
              <div className={`skill-button ${skill.colorClass}`}>
                <skill.icon />
              </div>
              <h6 className="skill-name">{skill.name}</h6>
            </a>
          </div>
        ))}
      </IconContext.Provider>
    </div>
  );
};

export default Skills;
