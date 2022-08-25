import emailjs from "@emailjs/browser";
import React, { useState, useRef } from "react";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";

const ContactForm = () => {
    const [forms, setForms] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [validator] = useState(
        new SimpleReactValidator({
            className: "errorMessage",
        })
    );

    const formRef = useRef();

    const changeHandler = (e) => {
        setForms({ ...forms, [e.target.name]: e.target.value });
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            emailjs
                .sendForm(
                    "gmail",
                    "portfolio_template",
                    formRef.current,
                    process.env.REACT_APP_EMAIL_KEY
                )
                .then(
                    (result) => {
                        console.log(result.text);
                    },
                    (error) => {
                        console.log({ error });
                        toast.error("Your email was not submitted.");
                    }
                );

            toast.success("Your email has been submitted. THANK YOU!");

            setForms({
                name: "",
                email: "",
                message: "",
            });
        } else validator.showMessages();
    };

    return (
        <form
            onSubmit={submitHandler}
            ref={formRef}
            className="contact-validation-active"
        >
            <div className="row">
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.name}
                            type="text"
                            name="name"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Your Name"
                        />
                        {validator.message(
                            "name",
                            forms.name,
                            "required|alpha_space"
                        )}
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input
                            value={forms.email}
                            type="email"
                            name="email"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Your Email"
                        />
                        {validator.message(
                            "email",
                            forms.email,
                            "required|email"
                        )}
                    </div>
                </div>

                <div className="col col-lg-12 col-12">
                    <textarea
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        value={forms.message}
                        type="text"
                        name="message"
                        placeholder="Message"
                    ></textarea>
                    {validator.message("message", forms.message, "required")}
                </div>
            </div>
            <div className="submit-area">
                <button type="submit" className="theme-btn">
                    Submit Now
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
