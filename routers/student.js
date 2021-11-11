const express = require('express');
const router = express.Router();
const {
  listAllStudents,
  listStudentByName,
  listStudentByCourses,
  listStudentByCoursesAndGender,
  listStudentByBirth,
  listStudentByPhone,
} = require('../controller/student');
// middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//     console.log("Time: ", Date.now());
//     next();
// });

//
// define the home page route
router.get('/list/all', listAllStudents);
router.get('/list/all/:name', listStudentByName);
router.get('/list/course/:course', listStudentByCourses);
router.get('/list/course/gender/:course/:gender', listStudentByCoursesAndGender);
router.get('/list/birth', listStudentByBirth);
router.get('/list/phone/:phone', listStudentByPhone);
// router.post('/new', addNewStdudent);
//

module.exports = router;
