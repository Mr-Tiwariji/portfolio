import React from "react";
import "./contact.css";
import { RiMailSendFill } from "react-icons/ri";
import { SiMessenger } from "react-icons/si";
import { RiWhatsappFill } from "react-icons/ri";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zyn0gek",
        "template_hgefo4e",
        form.current,
        "FH9Sp-mAr1hrQGr-2"
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
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        {/* ===CONTACT OPTIONS=== */}
        <div className="contact__options">
          <article className="contact__option">
            <RiMailSendFill className="contact__option-icon" />
            <h4>Email</h4>
            <h5>rav******96@gmail.com</h5>
            <a
              href="mailto:raviranjantiwari96@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Mail
            </a>
          </article>

          <article className="contact__option">
            <SiMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Ravi Ranjan Tiwari</h5>
            <a
              href="https://www.facebook.com/raviranjan.tiwari.127"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <RiWhatsappFill className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+91-8**8**2**6</h5>
            <a href="https://wa.me/8908082136" target="_blank" rel="noreferrer">
              Send a Message
            </a>
          </article>
        </div>
        {/* ===CONTACT FORM=== */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
