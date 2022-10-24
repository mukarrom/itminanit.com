import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import img from '../../assets/contact/hellopic.png';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_cky6slu',
        'template_z8qwfth',
        form.current,
        'XzX_rQN-6hwHi1mYR',
      )
      .then(
        (result) => {
          alert('message sent succesfull');
          console.log(result.text);
          form.reset();
        },
        (error) => {
          alert('Fail to send');
          console.log(error.text);
        },
      );
  };
  return (
    <div className="bg-contact py-36">
      <div className="font-[Poppins]  mx-auto py-24 xl:max-w-6xl bg-[#effefd] grid grid-cols-1 lg:grid-cols-2 p-10">
        <div className="right" data-aos="zoom-out" data-aos-duration="1000">
          <div className="heading">
            <p className="text-[#e63cba] text-base uppercase">Contact Now</p>
            <h1 className="h1 text-[#050748] font-bold">
              Have Question? Write a Message
            </h1>
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="form grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <input
              type="text"
              name="name"
              id=""
              placeholder="Full Name"
              className="input input-md shadow-sm shadow-stone-400"
            />
            <input
              type="text"
              name="email"
              id=""
              placeholder="Email Address"
              className="input input-md shadow-sm shadow-stone-400"
            />
            <input
              type="tel"
              name="phone"
              id=""
              placeholder="Contact Number"
              className="input input-md shadow-sm shadow-stone-400"
            />
            <input
              type="text"
              name="subject"
              id=""
              placeholder="Subject"
              className="input input-md shadow-sm shadow-stone-400"
            />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="5"
              placeholder="Message"
              className="sm:col-span-2 textarea shadow-sm shadow-stone-400"
            />
            {/* checkbox */}
            <div className="form-control sm:col-span-2">
              <label className="cursor-pointer label justify-start">
                <input
                  type="checkbox"
                  className="checkbox checkbox-secondary mr-3"
                />
                <span className="label-text">
                  I agree to the
                  {' '}
                  <a href=" " className="font-bold">
                    Terms & Conditions
                  </a>
                  {' '}
                  of Business Name.
                </span>
              </label>
            </div>
            <div className="sm:col-span-2">
              <input
                type="submit"
                className="btn border-0 w-full rounded-full bg-gradient-to-r from-[#ffb584] to-[#ff2d8d]"
                value="Submit &gt"
              />
            </div>
          </form>
        </div>
        <div
          className="img flex items-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
