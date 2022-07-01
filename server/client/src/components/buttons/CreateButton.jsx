import React from "react";

const CreateButton = ({ setShow, setAdd }) => {
  const handleShow = () => {
    setShow(true);
    setAdd("Add");
  };

  return (
    <div className="w-full p-4">
      <button
        className="border-2 px-3 py-1 rounded-md bg-neutral-200 shadow-md shadow-stone-400 mr-4"
        onClick={handleShow}
      >
        Add Student<i className="fas fa-user-plus pl-2"></i>
      </button>
    </div>
  );
};

export default CreateButton;
