import React, { useState } from "react";

import "@styles/contact-form/_contact-form.scss";

const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    consent: false,
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    contact:'',
    consent:''
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "consent") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Name validation
    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
      valid = false;
    } else {
      newErrors.name = '';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(formData.email.trim()=== ''){
        newErrors.email = 'Email is required';
        valid=false;
    }
     else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Invalid email address';
      valid = false;
    } else {
      newErrors.email = '';
    }

     // Name validation
     if (formData.contact.trim() === '') {
      newErrors.contact = 'Contact is required';
      valid = false;
    } else {
      newErrors.contact = '';
    }


     // Consent validation
     if (formData.consent === false) {
        newErrors.consent = 'Please agree the consent';
        valid = false;
      } else {
        newErrors.consent = '';
      }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateForm()){
      alert('Thankyou')
    }
  };


  return (
    <div className="form-container">
      <h3 className="text-center">Get Expert Assistance</h3>
      <form onSubmit={handleSubmit} noValidate>
        <div className="group-input">
          <div className="input-wrapper">
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
          {errors.name && <p className="text-danger ">{errors.name}</p>}
          </div>
          
          <div className="input-wrapper">
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
          {errors.email && <p className="text-danger ">{errors.email}</p>}
          </div>
          

          <div className="input-wrapper">
          <input
            type="number"
            placeholder="Contact"
            name="contact"
            onChange={handleChange}
            value={formData.contact}
          />
           {errors.contact && <p className="text-danger ">{errors.contact}</p>}
          </div>
         
         <div className="input-wrpper">
         <div className="checkbox-group d-flex">
            <input
              type="checkbox"
              name="consent"
              id="consent"
              className="align-self-start"
              value={formData.consent}
              onChange={handleChange}
            />
            <label htmlFor="consent">
              I hereby give consent to process my personal information, as
              specified in Privacy Policy and Notice For Consent
            </label>
            
          </div>
          {errors.consent && <p className="text-danger ">{errors.consent}</p>}
         </div>
          
        </div>
        <button type="submit" className="button-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
