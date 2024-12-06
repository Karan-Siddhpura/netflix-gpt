import React, { useRef, useState } from "react";
import Header from "./Header";
import validateForm from "../utils/validate";

const Login = () => {
  const [isSiginForm, setIsSiginForm] = useState(true);
  const [errMessage, setErrMessage] = useState("");

  const name = useRef();
  const email = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = validateForm(email.current.value, password.current.value);
    setErrMessage(message);
  };

  return (
    <div>
      <Header />
      <div className="absolute w-[100%] h-[100%]">
        <img
          className="w-[100%] h-[100%]"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ce449112-3294-449a-b8d3-c4e1fdd7cff5/web/IN-en-20241202-TRIFECTA-perspective_0acfb303-6291-4ad1-806f-dda785f6295a_medium.jpg"
          alt="background banner"
        />
      </div>

      <form className="absolute w-3/12 p-12 bg-black my-40 mx-auto right-0 left-0 text-white bg-opacity-85 rounded-sm">
        <h1 className="font-bold text-3xl mt-4 py-4">
          {isSiginForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSiginForm && (
          <input
            ref={name}
            className="p-2 mt-4 w-[100%] bg-gray-700 bg-opacity-85"
            type="text"
            placeholder="Name"
          />
        )}
        <input
          ref={email}
          className="p-2 mt-4 w-[100%] bg-gray-700 bg-opacity-85"
          type="text"
          placeholder="Email or Mobile Number"
        />
        <input
          ref={password}
          className="p-2 mt-4 w-[100%] bg-gray-700 bg-opacity-85"
          type="password"
          placeholder="Password"
        />
        <button
          className="p-2 mt-4 bg-red-700 w-[100%] border-red-800 rounded-sm"
          onClick={handleSubmit}
        >
          {isSiginForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="mt-4 cursor-pointer text-red-700">{errMessage}</p>
        <p
          className="mt-4 cursor-pointer"
          onClick={() => {
            setIsSiginForm(!isSiginForm);
          }}
        >
          {isSiginForm
            ? "New to Netflix? Sign up now."
            : "Already have account? Sign in now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
