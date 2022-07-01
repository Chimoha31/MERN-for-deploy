import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStudentAuth } from "./context/StudentAuthContext";

const Header = () => {
  const [error, setError] = useState("");
  const {logOut} = useStudentAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    setError("")
    try{
      await logOut();
      navigate("/");
    }catch(err) {
      setError(err.message);
      console.log(error);
    }
  };

  return (
    <header className="flex justify-between px-4 py-4 bg-teal-500 text-white relative">
      <h2 className="text-2xl">Students Card</h2>
      <div className="flex gap-5">
        <button onClick={handleLogOut} className="text-lg">Logout </button>
      </div>
    </header>
  );
};

export default Header;
