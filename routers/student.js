const express = require('express');
const router = express.Router();
const {
  listAllStudents,
  listStudentByName,
  listStudentByCourses,
  listStudentByCoursesAndGender,
  listStudentByBirth,
  listStudentByPhone,
  updateCourse,
  updateBirth,
  listAllStudentsNameByLetter,
  listAllStudentssurNameByLetterOr,
  deleteStudentByName,
  deleteStudentByBirth,
} = require('../controller/student');
// middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//     console.log("Time: ", Date.now());
//     next();
// });

//
// define the home page route

// Get
router.get('/list/all', listAllStudents);
router.get('/list/all/:name', listStudentByName);
router.get('/list/course/:course', listStudentByCourses);
router.get('/list/course/gender/:course/:gender', listStudentByCoursesAndGender);
router.get('/list/birth', listStudentByBirth);
router.get('/list/phone/:phone', listStudentByPhone);
// Put Update Documents
router.put('/update/course', updateCourse);
router.put('/update/birth', updateBirth);
// Get Text Search
router.get('/list/all/letter/include/:letter', listAllStudentsNameByLetter);
router.get('/list/all/letter1/letter2/:letter1/:letter2', listAllStudentssurNameByLetterOr);
// Delete Documents
router.delete('/delete/name/:name', deleteStudentByName);
router.delete('/delete/birth/:birth', deleteStudentByBirth);

module.exports = router;
