import React from 'react'

const DeleteButton = ({handleDelete}) => {
  return (
    <>
     <p className="cursor-pointer" onClick={handleDelete}> 🗑</p> 
    </>
  )
}

export default DeleteButton
