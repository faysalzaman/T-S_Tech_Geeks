/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_udy2ybw",
        "template_ilw9iiw",
        formData,
        "zzBSTr3IC2SvPK1f8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    // Clear the form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg h-[60vh] mb-4 md:mb-0 md:ml-20 md:mr-10 relative">
        <img
          src="https://res.cloudinary.com/dqph3qip7/image/upload/v1719431598/ts_geeks/mac.png"
          alt="Contact"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/3 p-8 bg-gray-100 h-[60vh] mb-4 md:mb-0 md:ml-6 md:mr-6">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <div className="text-xl mb-6">
          <div className="text-xl flex items-center mb-4">
            <i className="fas fa-map-marker-alt text-blue-500 mr-4 fa-2x"></i>
            <span>
              <span className="font-bold text-base sm:text-lg md:text-lg">
                1 Fairfax Rd, Egg Harbor Township,
              </span>
              <br />
              <span className="font-bold text-base sm:text-lg md:text-lg">
                New Jersey, United states 08234
              </span>
            </span>
          </div>
          <div className="text-xl flex items-center mb-4">
            <i className="fas fa-mobile-alt text-blue-500 mr-4 fa-2x"></i>
            <a href="tel:+16504885152" className="text-blue-500">
              <span className="font-bold">+1 (201) 619-5952</span>
            </a>
          </div>
          <div className="text-xl flex items-center">
            <i className="fas fa-envelope text-blue-500 mr-4 fa-2x"></i>
            <a
              href="mailto:info@mcb-solutions.com"
              className="text-blue-500 font-bold"
            >
              sales@technovait.us
            </a>
          </div>
          <div className="mt-5">Contact us for more information.</div>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-4 bg-white rounded-lg shadow-lg h-[60vh] md:ml-10 md:mr-10">
        <form
          className="space-y-4 h-full flex flex-col justify-between"
          onSubmit={handleSubmit}
        >
          <h3 className="text-xl font-semibold mb-2">Need More Info?</h3>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full px-4 py-2 border border-gray-300 rounded-md h-32 resize-none"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
