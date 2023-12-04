import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMeassage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Validate the Form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMeassage(message);

    // Sign / Sign up
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-img"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="text-3xl text-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="p-2 my-4 w-full bg-gray-700"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="p-2 my-4 w-full bg-gray-700"
          type="text"
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="p-2 my-4 w-full  bg-gray-700"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-500 font-bold text-lg py-1">{errorMessage}</p>
        <button
          className="p-2 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix ? Sign Up now"
            : "Already Registered ? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
