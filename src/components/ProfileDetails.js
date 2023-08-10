import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFigma, faTwitter, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub as fabGithub, faFigma as fabFigma, faTwitter as fabTwitter } from '@fortawesome/free-brands-svg-icons';
import './profile.css';

const ProfileDetails = () => {
  return (
    <div className="profile-container">
      <div className="profile-details">
        <div className="profile-text">
          <h1 className='heading'>Hi, I'm Abdul Basit 👋</h1>
          <br />
          I'm a full stack developer (React.js & Node.js) with a focus on creating 
          <br/>(and occasionally designing) exceptional digital experiences that are fast, <br />
          accessible, visually appealing, and responsive. Even though I have been creating
          <br />web applications for over 2 years, I still love it as if it was something new.
          <br />
          Faisalabad, Pakistan
          <div className="location">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Faisalabad, Pakistan
          </div>
          <span className="available-text">Available for new projects</span>
          {/* Icons */}
          <div className="icons">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={fabGithub} /></a>
            <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={fabFigma} /></a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={fabTwitter} /></a>
          </div>
        </div>
        <div className="profile-image">
          <img 
            src={`${process.env.PUBLIC_URL}/my.jpg`}
            alt="Profile"
            className="custom-profile-pic"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
