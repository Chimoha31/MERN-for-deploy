import React, { useState } from "react";
import { Fragment } from "react";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import { useStudentAuth } from "../context/StudentAuthContext";
import Header from "../Header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useStudentAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/students_list");
    } catch (err) {
      setError(err.message);
      console.log(error);
      alert("Check email or password again");
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      console.log("Click");
      await googleSignIn();
      navigate("/students_list");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Fragment>
      <Header />
      <div className="w-full h-screen p-3 flex flex-col justify-center items-center">
        <div className="w-auto py-4 px-4 md:px-5 shadow-md shadow-stone-400 flex flex-col justify-center items-center border border-r-emerald-200">
          <h2 className="mb-4 text-2xl"> Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              autocomplete="username"
              placeholder="Email address"
              className="block w-72 border border-stone-700 px-3 py-2 rounded-md mb-3"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="block w-72 border border-stone-700 px-3 py-2 rounded-md mb-3"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="w-full text-center">
              <button
                className="bg-blue-500 w-72 px-3 py-2 rounded-md text-white"
                variant="primary"
                type="Submit"
              >
                Log In
              </button>
            </div>
          </form>

          <hr className="border border-stone-300 w-72 my-3" />

          <div>
            <GoogleButton
              className="!w-72"
              type="dark"
              onClick={handleGoogleSignIn}
            />
          </div>
        </div>

        <div className="p-4 mt-3 text-center">
          Don't have an account? <Link to="/signup" className="text-blue-600">Sign up</Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
