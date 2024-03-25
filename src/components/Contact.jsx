import emailjs from "emailjs-com";

import React, { useState } from "react";
import useTextAnimation from "../utils/textAnimation";
import FormField from "./FormField";

function Contact() {
  const sectionRef = useTextAnimation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tvmo5gt",
        "template_3l0w0b6",
        e.target,
        "h9YldQX1tEv9XmBIm"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Thank you for your message. We will get back to you soon!");
          // Reset form here if you wish
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          // Handle errors here, possibly a different message or a retry mechanism
        }
      );
  };

  return (
    <form
      id="contact"
      className="flex flex-col items-center justify-center gap-2.5 text-white"
      ref={sectionRef}
      onSubmit={handleSubmit}
    >
      <h2 className="hide section text-3xl md:text-4xl my-7 pt-5  text-center">
        Contact
      </h2>
      <h3 className="w-[80%] mb-5 text-center">
        Do you have a project concept? Let us collaborate to make it happen.
      </h3>
      <FormField
        label="NAME"
        id="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
      />
      <FormField
        label="EMAIL"
        id="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      <FormField
        label="MESSAGE"
        id="message"
        type="textarea"
        value={formData.message}
        onChange={handleChange}
      />
      <button
        className="w-20 text-cyan-300 bg-transparent p-2 mb-8 rounded-full hover:text-black hover:bg-cyan-300"
        type="submit"
      >
        Send
      </button>
    </form>
  );
}

export default Contact;
