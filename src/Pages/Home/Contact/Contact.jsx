import React from "react";
import emailjs from "emailjs-com";
import img from "../../../Assets/Img/s.jpg";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_nbxrr6f",
        "template_7qk1sj8",
        e.target,
        "6TQfLm90poJK5L3S1"
      )
      .then((res) => {
        console.log(res);
        e.target.reset();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div id="contact" style={{ background: "#191919" }}>
      <div className="hero py-20">
        <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between p-0">
          <img
            src={img}
            className="max-w-sm rounded-lg shadow-2xl hidden lg:block"
            alt=""
          />
          <div className="w-full px-3 lg:w-1/2">
            <h2 className="font text-3xl lg:text-5xl font-bold text center text-white my-5">
              Hire Me.
            </h2>
            <p className="text-gray-400 font">
              I am available for remote work. Connect with me via phone:{" "}
              <span className="text-white font-bold">+8801745880048</span> or
              email:{" "}
              <span className="text-white font-bold">
                saleh.ahmed.mahin@gmail.com
              </span>
            </p>
            <form onSubmit={handleSubmit} className="text-gray-300">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input input-bordered w-full bg-transparent my-4"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="input input-bordered w-full bg-transparent my-4"
              />
              <input
                type="text"
                placeholder="Write a subject"
                name="subject"
                className="input input-bordered w-full bg-transparent my-4"
              />
              <textarea
                className="textarea textarea-bordered bg-transparent w-full"
                name="message"
                placeholder="Your Message"
              ></textarea>
              <input
                className="btn btn-error bg-red-500 w-36 text-white my-4"
                type="submit"
                value="SUBMIT"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
