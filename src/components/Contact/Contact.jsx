import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";
import { motion } from "framer-motion";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_diymyjq",
        "template_5p0p71n",
        form.current,
        "BQq_3LSROccpLk4e2"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        },
        (error) => {
          toast.error("An error occurred, please try again later.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      );

    e.target.reset();
  };

  const handleSendClick = (e) => {
    e.preventDefault();
    form.current.dispatchEvent(
      new Event("submit", { bubbles: true, cancelable: true })
    );
  };

  return (
    <>
      {/* Toast Container */}
      <ToastContainer />

      <div className="bg-zinc-900 flex flex-col md:flex-row justify-center h-screen mb-20">
        <div className="left md:w-[580px] md:h-[700px] h-[530px]">
          {/* "Contact Me" heading with slide-in animation from left top right */}
          <motion.div
            initial={{ opacity: 0, x: -100 }} // Same initial position for both
            animate={{ opacity: 1, x: 0 }} // Same animate position for both
            transition={{ duration: 1, ease: "easeOut" }}
            className="md:mt-28 mt-10 ml-4 md:ml-10 text-5xl font-bold text-white hover:scale-95 duration-300 ease-in-out hover:text-slate-400"
          >
            Contact Me
          </motion.div>

          {/* "Think we’d make a great team..." with slide-in animation from left to right */}
          <motion.div
            initial={{ opacity: 0, x: -100 }} // Same initial position for both
            animate={{ opacity: 1, x: 0 }} // Same animate position for both
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }} // Delay for the second element
            className="mt-8 ml-4 md:ml-10 text-white text-xl font-medium"
          >
            Think we’d make a great team? Let’s turn coffee chats into code!
          </motion.div>

          {/* Links with slide-in animation from bottom to top */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            className="links flex gap-4 ml-4 md:gap-8 md:ml-10 mt-10"
          >
            <a
              href="https://github.com/aditionkar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="buttonpro">
                <span> Github </span>
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/aditionkar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="buttonpro">
                <span> Linkedin </span>
              </button>
            </a>
            <a
              href="https://www.instagram.com/m4diti/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="buttonpro">
                <span> Instagram </span>
              </button>
            </a>
          </motion.div>

          {/* "Download Resume" with slide-in animation from bottom to top */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
            className="resume"
          >
            <div className="container2">
              <a href="#" className="button type--C">
                <div className="button__line"></div>
                <div className="button__line"></div>
                <span className="button__text">Download Resume</span>
                <div className="button__drow1"></div>
                <div className="button__drow2"></div>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="right md:w-[590px] md:h-[700px] h-[400px]">
          {/* Login box with fade-in animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2, ease: "easeOut" }}
            className="login-box"
          >
            <p>Let's Get Connected!</p>
            <form ref={form} onSubmit={sendEmail}>
              <div className="user-box">
                <input required name="from_name" type="text" />
                <label>Name</label>
              </div>
              <div className="user-box">
                <input required name="reply_to" type="email" />
                <label>Email</label>
              </div>
              <div className="user-box">
                <input required name="message" type="text" />
                <label>Message</label>
              </div>
              <a href="#" onClick={handleSendClick}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Send
              </a>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Contact;
