import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { USER_AVATAR, NETFLIX_BG_IMG } from "../utils/contants";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMeassage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Validate the Form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMeassage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          // Updating the userProfile with "name" and "photoUrl"
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMeassage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMeassage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMeassage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img alt="background-img" src={NETFLIX_BG_IMG} />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-75"
      >
        <h1 className="text-3xl text-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
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
