import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js';

const Contact = () => {
  const form = useRef();
  const [formState, setFormState] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  // working on
  const [user_nameErr, setUserNameErr] = useState({});
  const [user_emailErr, setEmailErr] = useState({});
  const [message_err, setMessageErr] = useState({});

  const handleChange = (e) => {
    const value = e.target.value;
    setFormState({
      ...formState,
      [e.target.name]: value,
    });
  };

  const handleValidation = () => {
    const user_nameErr = {};
    const user_emailErr = {};
    const message_err = {};
    let isValid = true;

    if (formState.user_name.trim().length < 5) {
      user_nameErr.user_nameInvalid = 'Please enter a valid name.';
      isValid = false;
    }

    if (!formState.user_email.includes('@')) {
      user_emailErr.user_emailInvalid = 'Please enter a valid e-mail.';
      isValid = false;
    }

    if (formState.message.trim().length < 5) {
      message_err.messageInvalid = 'Please enter a valid message.';
      isValid = false;
    }

    setUserNameErr(user_nameErr);
    setEmailErr(user_emailErr);
    setMessageErr(message_err);

    return isValid;
  };
  // end working on

  const sendEmail = (e) => {
    e.preventDefault();
    const isValid = handleValidation();
    if (isValid) {
      emailjs
        .sendForm(
          'service_in0itit',
          'template_h8l5byv',
          form.current,
          'user_Zod23S6fYb9xLRNmu8Yz7'
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Thank you for your message!',
        text: 'I will respond as soon as possible!',
        showConfirmButton: false,
        timer: 2500,
      });
    }
  };

  return (
    <div className='contact-wrapper'>
      <h3 className='contact-header'>Contact Me</h3>
      <div className='contact-form'>
        <form className='form-info' ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input onChange={handleChange} type='text' name='user_name' />
          {Object.keys(user_nameErr).map((key) => {
            return <p style={{ color: 'red' }}>{user_nameErr[key]}</p>;
          })}
          <label>Email</label>
          <input onChange={handleChange} type='email' name='user_email' />
          {Object.keys(user_emailErr).map((key) => {
            return <p style={{ color: 'red' }}>{user_emailErr[key]}</p>;
          })}
          <label>Message</label>
          <textarea
            onChange={handleChange}
            className='textbox'
            name='message'
          />{' '}
          {Object.keys(message_err).map((key) => {
            return <p style={{ color: 'red' }}>{message_err[key]}</p>;
          })}
          <input id='submit-button' type='submit' value='Send' />
        </form>
      </div>
    </div>
  );
};

export default Contact;
