import React, { Fragment, useEffect } from "react";
import AddForm from "./inputForm/AddForm";
import UpdateForm from "./inputForm/UpdateForm";
import axios from 'axios';

const CreateStudentCard = ({
  setShow,
  add,
  getStudents,
  studentId,
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  college,
  setCollege,
}) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://stuentslist-management.herokuapp.com/students", {
        name,
        email,
        phone,
        college,
      })
      .then((res) => {
        alert(res.data.message);
        getStudents();
      })
      .catch((err) => {
        console.log(err);
      });
    setShow(false);
    setName("");
    setEmail("");
    setPhone("");
    setCollege("");
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setShow(false);
    const id = studentId;
    console.log("Clicked");
    await axios.put(`https://stuentslist-management.herokuapp.com/students/${id}`, {
        name,
        email,
        phone,
        college,
      })
      .then((res) => {
        alert(res.data.message);
        console.log("Edit button clicked");
        getStudents();
      })
      .catch((err) => {
        console.log(err);
      });
    setName("");
    setEmail("");
    setPhone("");
    setCollege("");
  };

  const handleHide = () => {
    setShow(false);
    setName("");
    setEmail("");
    setPhone("");
    setCollege("");
  };

  useEffect(() => {
    // eslint-disable-next-line
  }, [studentId]);

  return (
    <Fragment>
      <div
        className="bg-gray-900 w-full h-screen absolute opacity-90 cursor-pointer"
        onClick={handleHide}
      >
        {/* Modal bg */}
      </div>

      <div className="w-full h-auto flex flex-col justify-center items-center mb-5" >
        {add === "Add" ? (
          <AddForm name={name} setName={setName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} college={college} setCollege={setCollege} handleSubmit={handleSubmit} handleHide={handleHide} />
        ) : (
         <UpdateForm name={name} setName={setName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} college={college} setCollege={setCollege} handleEditSubmit={handleEditSubmit} handleHide={handleHide} />
        )}
      </div>
    </Fragment>
  );
};

export default CreateStudentCard;
