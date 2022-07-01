import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStudentAuth } from "../context/StudentAuthContext";
import Header from "../Header";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useStudentAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
      console.log(error);
    }
  };

  useEffect(() => {}, []);

  return (
    <Fragment>
      <Header />
      <div className="w-full h-screen p-4 flex flex-col justify-center items-center">
        <div className="w-auto py-4 px-4 md:px-5 shadow-md shadow-stone-400 flex flex-col justify-center items-center border border-r-emerald-200">
          <h2 className="mb-4 text-2xl">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
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
                Sign Up
              </button>
            </div>
          </form>
        </div>

        <div className="p-4 mt-3 text-center">
          Already have an account? <Link to="/" className="text-blue-600">Login</Link>
        </div>
      </div>
    </Fragment>
  );
};

export default SignUp;
