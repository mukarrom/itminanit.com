import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import PhoneInput, { isPossiblePhoneNumber } from 'react-phone-number-input';
import img from '../../assets/contact/hellopic.png';
import 'react-phone-number-input/style.css';

function Contact() {
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [value, setValue] = useState(null);
  const form = useRef();
  const handleOnChange = () => {
    setChecked(!checked);
    setDisabled(!disabled);
  };

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
          e.target.reset();
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
              required
              type="text"
              name="user_name"
              id=""
              placeholder="Full Name"
              className="input input-md shadow-sm shadow-stone-400"
            />
            <input
              type="email"
              name="user_email"
              required
              placeholder="Email Address"
              className="input input-md shadow-sm shadow-stone-400"
            />
            <PhoneInput
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}
              defaultCountry="BD"
              name="phoneInput"
              rules={{ required: true }}
							// country="BD"
              className="input input-md shadow-sm shadow-stone-400"
            />
            {/* <input
              // ref={phone}
              type="tel"
              name="phone"
              required
              placeholder="Contact Number"
              className="input input-md shadow-sm shadow-stone-400"
            /> */}
            <input
              type="text"
              name="subject"
              required
              placeholder="Subject"
              className="input input-md shadow-sm shadow-stone-400"
            />
            <textarea
              name="message"
              required
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
                  name="checkbox"
                  checked={checked}
                  onChange={handleOnChange}
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
              <button
                type="submit"
                disabled={disabled}
                className="btn border-0 w-full rounded-full bg-gradient-to-r from-[#ffb584] to-[#ff2d8d]"
              >
                Submit &gt;
              </button>
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
