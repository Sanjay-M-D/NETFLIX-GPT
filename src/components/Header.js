import React, { useEffect } from "react";
import { NETFLIX_LOGO, SUPPORTES_LANGUAGES } from "../utils/contants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
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

  const handleGptSearch = () => {
    // Toggle GPT Search button
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChanage = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute flex  w-screen px-8 py-2 bg-gradient-to-b from-black z-40  justify-between">
      <img className="w-44" alt="logo" src={NETFLIX_LOGO} />

      {user && (
        <div className="flex p-2 ">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white rounded-lg hover:bg-blue-400"
              onChange={handleLanguageChanage}
            >
              {SUPPORTES_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-full hover:bg-red-700"
            onClick={handleGptSearch}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
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
