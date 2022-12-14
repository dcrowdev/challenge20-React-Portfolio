import './contact.css'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Modal from 'react-bootstrap/Modal';

function Contact() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_KEY, process.env.REACT_APP_TEMPLATE_KEY, form.current, 'qQqIxAsUd-hDWmx2t')
            .then((result) => {
                console.log(result.text);
                handleShow();
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

     return (
        <div className="contact-container">
            <div className="contact-wrapper">
            <h1 style={{ fontSize: '60px' }}>Contact Me!</h1>
            <form className='contact-form' ref={form} onSubmit={sendEmail}>
                <div className='top-form'>
                <i className="fa-solid fa-envelope custom-envelope"></i>
                    <div className='top-form-inputs'>
                        <label className='labels'>Name</label>
                        <input type="text" name="user_name" className='text-inputs' required />
                        <label className='labels'>Email</label>
                        <input type="email" name="user_email" className='text-inputs' required />
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                <label className='labels'>Message</label>
                <textarea name="message" className='message-text' required />
                <input className="send-btn" type="submit" value="Send" />
                </div>
            </form>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton style={{ backgroundColor: '#cbfff5', borderRadius: '5px' }}>
                    <Modal.Title>Message Successfully Sent!</Modal.Title>
                </Modal.Header>
            </Modal>
            </div>
        </div>
    )
}

export default Contact;