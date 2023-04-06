import React from 'react'
import '../../Style/ContactUs.css'

import { BsLinkedin } from 'react-icons/bs';
const ContactUs = () => {
  return (
    <>
   <div className="contain">

<div className="wrapper">

  <div className="form">
    <h4>GET IN TOUCH</h4>
    <h2 className="form-headline">Send us a message</h2>
    <form id="submit-form">
      <p>
        <input id="name" className="form-input" type="text" placeholder="Your Name*"/>
        <small className="name-error"></small>
      </p>
      <p>
        <input id="email" className="form-input" type="email" placeholder="Your Email*"/>
        <small className="name-error"></small>
      </p>
      <p className="full-width">
        <input id="company-name" className="form-input" type="text" placeholder="Company Name*" required/>
        <small></small>
      </p>
      <p className="full-width">
        <textarea  minLength="20" id="message" cols="30" rows="7" placeholder="Your Message*" required></textarea>
        <small></small>
      </p>
      <p className="full-width">
        <input type="checkbox" id="checkbox" name="checkbox" defaultChecked/> Yes, I would like to receive communications by call / email about Company's services.
      </p>
      <p className="full-width">
        <input type="submit" className="submit-btn" value="Submit"/>
        <button className="reset-btn">Reset</button>
      </p>
    </form>
  </div>

  <div className="contacts contact-wrapper">

    <ul>
      <li><span className="highlight-text-grey">If you have any questions regarding your order, feel free to send email, call or Whatsapp us on our support number</span></li>
      <span className="hightlight-contact-info">
        <li className="email-info"><i className="fa fa-envelope" aria-hidden="true"></i> umermemon4648@gmail.com</li>
        
        <div className='flex'>
        <li><BsLinkedin/> <span className="highlight-text">https://www.linkedin.com/in/m-umer-memon/</span></li>
        </div>

      </span>
    </ul>
  </div>
</div>
</div>
    </>
  )
}

export default ContactUs
