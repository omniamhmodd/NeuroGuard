// eslint-disable-next-line no-unused-vars
import React from "react";
import signup from '../images/signup.svg'

function SignUpForm() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section - Image */}
      <div className="flex-1  flex items-center justify-center">
        <div className="text-center px-4">
          {/* Image */}
          <h2 className="text-2xl font-bold text-gray-700 mt-6">
            Examine & shows Test Results
          </h2>
          <p className="text-gray-500 mt-2">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <img
            src={signup} 
            width={1255}
            height={1255}  
            className="mx-auto"
          />
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
      <div
        className="bg-white rounded-lg shadow-lg p-8 "
        style={{ width: '660px' }}
      >
          <h1 className="text-4xl font-bold mb-6 text-black text-center	">Sign Up</h1>
          <p className="text-base text-center mb-7 text-gray-600"> Begin your journey with just a few clicks</p>
          <form>
            {/* First Name */}
            <div className="mb-4">
              <label className="block font-medium text-gray-600 text-left">
                First Name<span className="text-[#FF4D4F]">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0C7489] text-gray-700"
              />
            </div>

            {/* Last Name */}
            <div className="mb-4">
              <label className="block font-medium text-gray-600 text-left">
                Last Name<span className="text-[#FF4D4F]">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0C7489] text-gray-700"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block font-medium text-gray-600 text-left">
                Email<span className="text-[#FF4D4F]">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0C7489] text-gray-700"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block font-medium text-gray-600 text-left">
                Password<span className="text-[#FF4D4F]">*</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0C7489] text-gray-700"
              />
            </div>
            {/* Date of Birth */}
            <div className="mb-4">
            <label className="block font-medium text-gray-600 text-left">
              Date of Birth<span className="text-[#FF4D4F]">*</span>
              </label>
            <input
            type="date"
            placeholder="select date"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2  focus:ring-[#0C7489] text-gray-700 "   />
            </div>

            {/* select your gender */}
            <div className="mb-4">
            <label className="block font-medium text-gray-700 text-left ">
              Gender<span className="text-[#FF4D4F]">*</span>
              </label>
            <select className="w-full border border-gray-300 rounded p-2  text-gray-700" placeholder="Choose your gender">
            <option>         </option>
            <option>Male</option>
            <option>Female</option>
            </select>
            </div>

            {/* phone number */}
            <div className="mb-4">
            <label className="block  font-medium text-gray-700 text-left  ">
              Mobile Phone<span className="text-[#FF4D4F]">*</span>
              </label>
            <input
            type="tel"
            placeholder="Mobile Phone"
              className="w-full border border-gray-300 rounded p-2  text-gray-700"  />
            </div>

            {/* country  */}
            <div className="mb-4">
              <label className="block font-medium text-gray-700 text-left  ">
              your country<span className="text-[#FF4D4F]">*</span>
              </label>
            <input
              type="text"
              placeholder="Your Country"
              className="w-full border border-gray-300 rounded p-2" />
            </div>
            {/* Submit Button */}
            <div className="mb-4" >
            <label className="block  font-medium text-gray-700 text-left  ">
              Address<span className="text-[#FF4D4F]">*</span>
              </label>
              <input
              type="text"
              placeholder="Your Address"
              className="w-full border border-gray-300 rounded p-2" />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#0C7489] text-white py-2 rounded-md hover:bg-[#0C7489]"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
