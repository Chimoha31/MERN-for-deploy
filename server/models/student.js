const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  college: {
    type: String,
    require: true,
  }
});

const Student = mongoose.model("StudentSchema", StudentSchema);
module.exports = Student;