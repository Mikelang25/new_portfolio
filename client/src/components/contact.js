import React, { Component } from "react";
import './contact.css'

class Contact extends Component {

    state = {
        name:"",
        email:"",
        phone:"",
        message:""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    submitMessage = event => {
        console.log("This is working")
    }

    render() {
        return (
            <div className="col-md-10">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 contact-container">
                        <h5>Contact Me</h5>
                        <form>
                            <label className="lbl-contact">Name</label><br></br>
                            <input className="inp-name" name="name" type="text" required placeholder="Enter your name" onChange={this.handleInputChange} value={this.state.name}></input><br></br>
                            <label className="lbl-contact" required>Email</label><br></br>
                            <input className="inp-email" type="text" name="email" placeholder="friend@friends.com" onChange={this.handleInputChange} value={this.state.email}></input><br></br>
                            <label className="lbl-contact">Phone</label><br></br>
                            <input  className="inp-phone" type="text" name="phone" placeholder="(999)-999-9999" onChange={this.handleInputChange} value={this.state.phone}></input><br></br>
                            <label className="lbl-contact">Message</label><br></br>
                            <textarea className="inp-message" required placeholder="Leave a message!" name="message" onChange={this.handleInputChange} value={this.state.message}></textarea><br></br>
                            <input type="submit" value="Send" onClick={this.submitMessage}></input>
                        </form>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        );
    }
}

export default Contact;