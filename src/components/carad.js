import React from 'react';
import './Card.css'; 

const Card = () => {
  return (
    <div className='app-container'>
      <span className='custom-tag1'>Work</span>
      <p className='cla123'>

Some of the noteworthy projects I have built:</p>
    <div className="custom-card">
      <div className="custom-image-wrap" >
        <img src={`${process.env.PUBLIC_URL}/imagew.png`} alt="Card Image"  />
      </div>
      <div className="custom-content">
        <h2>Wingie</h2>
        <p>A platform for comparing and finding affordable flights, as well<br/> as booking and purchasing tickets safely and easily in a few<br/> simple clicks.</p>
        <div className="custom-technology-tags">
          <span className="custom-tag">React</span>
          <span className="custom-tag">Type script</span>
          <span className="custom-tag">React Bootstrap</span>
          <span className="custom-tag">Firebase</span>
          <span className="custom-tag">Express.js</span>
          <span className="custom-tag">PostgreSQl</span>
          <span className="custom-tag">Styled Components</span>
          <span className="custom-tag">Redux</span>
        </div>
        <a href="https://www.wingie.com/" className="custom-link-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
  <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
</svg>
        </a>
      </div>
    </div>
    <div className="custom-card">
      <div className="custom-image-wrap">
        <img src={`${process.env.PUBLIC_URL}/image2.png`} alt="Card Image" />
      </div>
      <div className="custom-content">
        <h2>Fiskil</h2>
        <p>A platform for accessing real-time open banking and energy<br/> data to help you grow your business, backed with scalable <br/>back-end infrastructure.</p>
        <div className="custom-technology-tags">
          <span className="custom-tag">React</span>
          <span className="custom-tag">Type script</span>
          <span className="custom-tag">React Query</span>
          <span className="custom-tag">Firebase</span>
          <span className="custom-tag">Express.js</span>
          <span className="custom-tag">PostgreSQl</span>
          <span className="custom-tag">TailWind</span>
          <span className="custom-tag">Redux ToolKit</span>
          <span className="custom-tag">Matriel Ui</span>
          <span className="custom-tag">Next Js</span>
          <span className="custom-tag">Aws Ampliyfy</span>
          <span className="custom-tag">Cypress</span>
          <span className="custom-tag">Story Book</span>


        </div>
        <a href="https://fiskil.com.au/" className="custom-link-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
  <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
</svg>
        </a>
      </div>
    </div>
    <div className="custom-card">
      <div className="custom-image-wrap">
        <img src={`${process.env.PUBLIC_URL}/image3.png`} alt="Card Image" />
      </div>
      <div className="custom-content">
        <h2>Pepehousing</h2>
        <p>A platform for renting a flat or room in Poland. You may browse<br/> hundreds of verified deals, contact the vendor, and pay onlin<br/> in a simple and secure manner.

</p>
        <div className="custom-technology-tags">
          <span className="custom-tag">React</span>
          <span className="custom-tag">Type script</span>
          <span className="custom-tag">React Query</span>
          <span className="custom-tag">Next js</span>
          <span className="custom-tag">TailWind</span>
          <span className="custom-tag">Storybook</span>
          <span className="custom-tag">Redux ToolKit</span>
        </div>
        <a href="https://www.wingie.com/" className="custom-link-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
  <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
</svg>
        </a>
      </div>
    </div>
    </div>
  );
};

export default Card;
