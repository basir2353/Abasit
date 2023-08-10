import React from 'react';
import './ThreeCardLayout.css'; // Import the updated CSS file

const ThreeCardLayout = () => {
  return (
    <div>

      <div className="testimonials-heading">
        <p className='data1'>Testimonials</p>
        <p>Nice things people have said about me:</p>
      </div>
      <div className="my-three-card-container">
        <div className="my-card">
          <img src={`${process.env.PUBLIC_URL}/person1.webp`} alt="Image" />
          <p className="my-card-paragraph">"Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development."</p>
          <h4 className="my-card-title">Krisztian Gyuris</h4>
          <p className="my-small-text">Founder - inboxgenie.io</p>
        </div>

        <div className="my-card">
          <img src={`${process.env.PUBLIC_URL}/person2.webp`} alt="Image" />
          <p className="my-card-paragraph">"Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team."</p>
          <h4 className="my-card-title">Eugen Esanu</h4>
          <p className="my-small-text">Founder - shosho.design</p>
        </div>

        <div className="my-card">
          <img src={`${process.env.PUBLIC_URL}/person3.svg`} alt="Image" />
          <p className="my-card-paragraph">"Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues."</p>
          <h4 className="my-card-title">Joe Matkin</h4>
          <p className="my-small-text">Freelancer</p>
        </div>
      </div>
    </div>
  );
};

export default ThreeCardLayout;
