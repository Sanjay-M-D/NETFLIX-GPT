import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute flex  w-screen px-8 py-2 bg-gradient-to-b from-black z-40  justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      {user && (
        <div className="flex p-2 ">
          <img
            className="w-11 h-11 my-2 "
            alt="profileIcon"
            src={user?.photoUrl}
          />
          <button onClick={handleSignOut} className="font-bold text-white p-2 ">
            (sign out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
