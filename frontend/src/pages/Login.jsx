import React, { useState } from 'react';
import logo from "../assets/logo.png";
import googleLogo from "../assets/google.png";

const Login = () => {
  // State to track if the user is mentee or mentor
  const [isMentee, setIsMentee] = useState(true);

  // Function to toggle between mentee and mentor
  const toggleUserType = (type) => {
    setIsMentee(type === 'mentee');
  };

  return (
    <div className="flex h-screen">
      {/* Left Side - Blue section */}
      <div className="w-2/5 bg-black flex justify-center items-center">
        <img src={logo} alt="Logo" className="h-32" />
      </div>

      {/* Right Side - Login form */}
      <div className="w-1/2 flex justify-center items-center">
        <div className="w-96 p-8">
          <h2 className="text-3xl font-semibold mb-8">Log in</h2>

          {/* Toggle between Mentee and Mentor */}
          <div className="flex mb-4">
            <button
              onClick={() => toggleUserType('mentee')}
              className={`px-4 py-2 ${
                isMentee ? 'bg-teal-600 text-white' : 'text-teal-600'
              }`}
            >
              I'm a mentee
            </button>
            <button
              onClick={() => toggleUserType('mentor')}
              className={`px-4 py-2 ${
                !isMentee ? 'bg-teal-600 text-white' : 'text-teal-600'
              }`}
            >
              I'm a mentor
            </button>
          </div>

          {/* Email/Password Form */}
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">
                {isMentee ? 'Mentee Email or Username' : 'Mentor Email or Username'}
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder={isMentee ? 'Mentee Email or Username' : 'Mentor Email or Username'}
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Password"
              />
            </div>

            {/* Submit Button with border effect */}
            <button className="w-full bg-teal-600 text-white py-2 rounded-lg border-b-4 border-teal-700">
              Log in as {isMentee ? 'Mentee' : 'Mentor'}
            </button>
          </form>

          {/* "OR" Divider */}
          <div className="flex items-center my-4">
            <hr className="w-full border-gray-300" />
            <span className="mx-2 text-gray-500">Or</span>
            <hr className="w-full border-gray-300" />
          </div>

          {/* Other Options */}
          <button className="w-full bg-white text-gray-700 border py-2 rounded-lg flex justify-center items-center">
            <img src={googleLogo} alt="Google" className="h-5 mr-2" />
            Log in with Google
          </button>

          <p className="mt-4 text-center">
            <a href="#" className="text-teal-600">Forgot password?</a>
          </p>
          <p className="mt-2 text-center">
            Don't have an account? <a href="#" className="text-teal-600">Sign up as a mentee</a> or <a href="#" className="text-teal-600">apply to be a mentor</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
