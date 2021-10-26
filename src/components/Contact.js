import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     'service_in0itit',
    //     'template_h8l5byv',
    //     form.current,
    //     'user_Zod23S6fYb9xLRNmu8Yz7'
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    e.target.reset();
    Swal.fire('The Internet?', 'That thing is still around?', 'question');
  };

  return (
    <div className='contact-wrapper'>
      <h3 className='contact-header'>Contact</h3>
      <div className='contact-form'>
        <form className='form-info' ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type='text' name='user_name' />
          <label>Email</label>
          <input type='email' name='user_email' />
          <label>Message</label>
          <textarea className='textbox' name='message' />
          <input id='submit-button' type='submit' value='Send' />
        </form>
      </div>
    </div>
  );
};

export default Contact;
