const mongooseStudent = require('mongoose');
const Schema = mongooseStudent.Schema;

// Define collection and schema
const Student = new Schema({
  student_name: {
    type: String
  },
  student_email: {
    type: String
  },
  section: {
    type: String
  },
  subjects: {
    type: Array
  },
  gender: {
    type: String
  },
  dob: {
    type: Date
  }
}, {
  collection: 'students'
})

module.exports = mongooseStudent.model('Student', Student)
