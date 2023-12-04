import React, { useEffect } from "react";
import { NETFLIX_LOGO } from "../utils/contants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in,
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute flex  w-screen px-8 py-2 bg-gradient-to-b from-black z-40  justify-between">
      <img className="w-44" alt="logo" src={NETFLIX_LOGO} />

      {user && (
        <div className="flex p-2 ">
          <img
            className="w-11 h-11 my-2 rounded-lg "
            alt="profileIcon"
            src={user?.photoURL}
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
