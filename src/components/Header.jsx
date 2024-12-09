import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGptSearch } from "../utils/gptSlice";
import { updateLanguageOption } from "../utils/configSlice";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const gptSearchFlag = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearch());
  };

  const handleLanguageOption = (e) => {
    dispatch(updateLanguageOption(e.target.value));
  };

  return (
    <>
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-44 cursor-pointer" src={LOGO} alt="netflix logo" />
        {user && (
          <div className="flex p-2 justify-center items-center gap-4">
            {gptSearchFlag && (
              <select
                className="p-2 m-2 bg-gray-900 text-white"
                onChange={handleLanguageOption}
              >
                {SUPPORTED_LANGUAGES.map((langOption) => (
                  <option
                    key={langOption.identifier}
                    value={langOption.identifier}
                  >
                    {langOption.name}
                  </option>
                ))}
              </select>
            )}

            <button
              onClick={handleGptSearch}
              className="py-2 px-4 my-2 bg-purple-800 text-white rounded-lg"
            >
              {gptSearchFlag ? "Home Page >" : "GPT Search >"}
            </button>

            <h1 className="font-bold text-xl text-white px-2">
              Welcome {user.displayName}
            </h1>
            <button className="font-bold text-white" onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
