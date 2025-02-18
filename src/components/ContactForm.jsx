"use client"

import Image from 'next/image';
import React, { useState } from 'react';

function ContactForm() {
  let [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Number: "",
    Topic: "",
    Message: ""
  });

  const handleFieldChange = (e) => {
    setFormData((currData) => ({
      ...currData,
      [e.target.name]: e.target.value
    }));
  };

  let handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      Name: "",
      Email: "",
      Number: "",
      Topic: "",
      Message: ""
    });
  };

  return (
    <section className="contactform is__section">
      <div className="contact_section_wrapper has__flex has__gap container">
        <div className="contact_info_wrapper has__flex flex__column justify__center">
          <h2 className="is__heading has__margin text__center text__thin">
            Got the ideas?We've got <br /> the <strong className="highlight">Skills </strong>.Lets team up.
          </h2>
          <div className="form_wrapper">
            <form onSubmit={handleFormSubmit} className="has__flex has__gap">
              <input
                type="text"
                name="Name"
                className="feild"
                value={formData.Name}
                onChange={handleFieldChange}
                placeholder="Name *"
                required
              />
              <input
                type="email"
                name="Email"
                className="feild"
                value={formData.Email}
                onChange={handleFieldChange}
                placeholder="Email*"
                required
              />
              <input
                type="number"
                name="Number"
                className="feild"
                value={formData.Number}
                onChange={handleFieldChange}
                placeholder="Number*"
                min={0}
                required
              />
              <input
                type="text"
                name="Topic"
                className="feild"
                value={formData.Topic}
                onChange={handleFieldChange}
                placeholder="Topic"
              />
              <textarea
                className="feild"
                name="Message"
                value={formData.Message}
                onChange={handleFieldChange}
                placeholder="Message Here"
              />
              <div className="btn_wrapper has__flex justify__center">
                <button className="button has__gap" type="submit">Get in touch<span className="arrow">→</span></button>
              </div>
            </form>
          </div>
        </div>
        <div className="contact_image_wrapper">
          <div className="image_wrapper">
            <Image src="/support_girl.png" alt="Contact Team" width={800} height={1024} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;