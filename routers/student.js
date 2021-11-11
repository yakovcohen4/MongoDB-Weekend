const express = require('express');
const router = express.Router();
const { listAllStudents, addNewStudent } = require('../controller/student');
// middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//     console.log("Time: ", Date.now());
//     next();
// });

//
// define the home page route
router.get('/list/all', listAllStudents);
// router.post('/new', addNewStdudent);
//

module.exports = router;
