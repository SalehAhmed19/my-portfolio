import React from "react";
import img from "../../../Assets/Img/s.jpg";

const Contact = () => {
  return (
    <div style={{ background: "#191919" }}>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse w-full justify-between">
          <img src={img} class="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div className="w-1/2">
            <h2 className="font text-5xl font-bold text center text-white my-5">
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
            <form>
              <input
                type="text"
                placeholder="Your Name"
                class="input input-bordered w-full bg-transparent my-4"
              />
              <input
                type="email"
                placeholder="Your Email"
                class="input input-bordered w-full bg-transparent my-4"
              />
              <input
                type="text"
                placeholder="Write a subject"
                class="input input-bordered w-full bg-transparent my-4"
              />
              <textarea
                class="textarea textarea-bordered bg-transparent w-full"
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
