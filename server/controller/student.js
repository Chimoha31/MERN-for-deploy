const Student = require("../models/student");

// Get All students data
const getAllStudents = (req, res) => {
  Student.find()
    .then((data) => {
      return res.status(200).json({
        message: "Successfully found the students data",
        data: data,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        message: "Teare was an err to find students data",
        err: err,
      });
    });
};

// Get a specific student data
const getStudent = (req, res) => {
  const id = req.params.id;
  Student.findById(id)
    .then((data) => {
      return res.status(200).json({
        message: "Successfully found the students data",
        data: data,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        message: "Teare was an err to find students data",
        err: err,
      });
    });
};

// Create (post)
const createStudent = async (req, res) => {
  const newStudent = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    college: req.body.college,
  };
  const student = new Student(newStudent);

  try {
    const data = student.save();
    return res.status(201).json({
      message: "Successfully created a student data",
      data: data,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Teare was an err to create a student data",
      err: err,
    });
  }
};

// Update
const updateStudent = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Student.findOneAndUpdate({ _id: id }, body, { returnOriginal: false })
    .then((data) => {
      return res.status(200).json({
        message: "Succesfully updated the student data !",
        data: data,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        message: "There was an error to update..",
        err: err,
      });
    });
};

// Delete
const deleteStudent = (req, res) => {
  const id = req.params.id;
  Student.findByIdAndDelete({ _id: id })
    .then((data) => {
      return res.status(200).json({
        message: "Succesfully deleted the student data",
      });
    })
    .catch((err) => {
      return res.status(500).json({
        message: "There was an error to delete...",
        err: err,
      });
    });
};

module.exports = {
  getAllStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};
