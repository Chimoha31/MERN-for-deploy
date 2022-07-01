import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StudentAuthContextProvider } from "./components/context/StudentAuthContext";
import Login from "./components/auth/Login";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import SignUp from "./components/auth/SignUp";
import StudentsCardList from "./components/StudentsCardList";

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="font-serif">
      <Router>
        <StudentAuthContextProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/students_list"
              element={
                <ProtectedRoute>
                  <StudentsCardList show={show} setShow={setShow} />
                </ProtectedRoute>
              }
            />
          </Routes>
        </StudentAuthContextProvider>
      </Router>
    </div>
  );
};

export default App;
