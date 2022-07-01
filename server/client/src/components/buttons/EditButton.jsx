import React from "react";

const EditButton = ({getStudent}) => {
  return (
    <>
      <p className="cursor-pointer" onClick={getStudent}>
        ✍🏼
      </p>
    </>
  );
};

export default EditButton;
