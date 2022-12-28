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
            <h1 style={{ fontSize: '60px' }}>Contact Me!</h1>
            <form className='contact-form' ref={form} onSubmit={sendEmail}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', flexDirection: 'column', width: '70%'}}>
                        <label>Name</label>
                        <input type="text" name="user_name" style={{ width: '100%' }} />
                        <label>Email</label>
                        <input type="email" name="user_email" style={{ width: '100%' }} />
                    </div>
                    <i className="fa-solid fa-envelope" style={{ fontSize: '700%', paddingRight: '2%', alignSelf: 'center'}}></i>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                <label>Message</label>
                <textarea name="message" style={{ height: '100px', color: 'black', marginBottom: '2%' }} />
                <input className="btn btn-primary" type="submit" value="Send" />
                </div>
            </form>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton style={{ backgroundColor: '#cbfff5', borderRadius: '5px' }}>
                    <Modal.Title>Message Successfully Sent!</Modal.Title>
                </Modal.Header>
            </Modal>

        </div>
    )
}

export default Contact;