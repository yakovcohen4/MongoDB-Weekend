const express = require('express');
const router = express.Router();
const {
  listAllquestion,
  addNewQuestion,
  updateQuestion,
  deleteQuestion,
  listAllquestionByDifficulty,
} = require('../controller/question');
// middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//     console.log("Time: ", Date.now());
//     next();
// });

//
// define the home page route
router.get('/list/all/', listAllquestion);
router.post('/new', addNewQuestion);
router.put('/update/:id', updateQuestion);
router.delete('/remove/:id', deleteQuestion);
router.get('/read/by/difficulty/:difficulty', listAllquestionByDifficulty);

//

module.exports = router;
