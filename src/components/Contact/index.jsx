import React from "react";

function Contact() {
    return (
        <>
            <h1 style={{fontSize: '60px'}}>Contact Me!</h1>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Your Name:</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="John Doe" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput2" class="form-label">Email address:</label>
                <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message:</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
            </div>
            <button type="button" class="btn btn-primary">Submit</button>
        </>
    )
}

export default Contact;