import React, { useState } from 'react';
import { RiContactsFill, RiMailLine, RiPhoneLine } from 'react-icons/ri'; // Import the icons
import './ContactSection.css'; // Import your CSS file

const ContactSection = () => {
  const [copyMessageVisible, setCopyMessageVisible] = useState(false);

  const copyPhoneNumber = () => {
    const phoneNumber = '+91 8980500565'; // Replace with your actual phone number
    navigator.clipboard.writeText(phoneNumber)
      .then(() => {
        setCopyMessageVisible(true);
        setTimeout(() => {
          setCopyMessageVisible(false);
        }, 2000);
      })
      .catch((error) => {
        console.error('Error copying phone number:', error);
      });
  };

  return (
    <section className="contact-section">
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-icon">
            <RiContactsFill size={30} />
          </div>
          <div className="contact-details">
            <p>Get in touch</p>
            <p>What’s next? Feel free to reach out to me if you are looking<br /> for a developer, have a query, or simply want to connect.</p>
          </div>
        </div>
        <div className="contact-options">
          <h1>Email: <a href="mailto:reachsagarshah@gmail.com">abasit5612345@gmail.com</a></h1>
          <h1> <RiPhoneLine size={18} />Phone: +923469517653 <span className="copy-icon" onClick={copyPhoneNumber}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard2-check" viewBox="0 0 16 16">
  <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z"/>
  <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z"/>
  <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3Z"/>
</svg></span></h1>
          <p>You may also find me on these platforms!</p>
        </div>
        {copyMessageVisible && <div className="copy-message">Phone number copied!</div>}
      </div>
    </section>
  );
};

export default ContactSection;
