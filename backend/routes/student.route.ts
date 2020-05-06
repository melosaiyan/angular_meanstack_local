const expressRoute = require('express');
const appRoute = expressRoute();
const studentRoutes = expressRoute.Router();

// Student model
const StudentModel = require('../model/Student.ts');

// Add Student
studentRoutes.route('/add-student').post((req, res, next) => {
  StudentModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get all student
studentRoutes.route('/').get((req, res, next) => {
  StudentModel.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single student
studentRoutes.route('/read-student/:id').get((req, res, next) => {
  StudentModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update student
studentRoutes.route('/update-student/:id').put((req, res, next) => {
  StudentModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Student successfully updated!')
    }
  })
})

// Delete student
studentRoutes.route('/delete-student/:id').delete((req, res, next) => {
  StudentModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = studentRoutes;
