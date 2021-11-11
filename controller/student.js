const Student = require('../models/student.js');

exports.listAllStudents = async (req, res, next) => {
  try {
    console.log('studentslist');
    const studentlist = await Student.find({});
    console.log(studentlist, 'studentlist');
    res.status(200).json(studentlist);

    // this is what i assume you meant
    if (studentlist.length === 0) next(new Error('no students found in db'));
  } catch (error) {
    next(error);
  }
};
// exports.addNewStudent = async (req, res, next) => {
//   try {
//     let { name, surName, birth, phone, gender, courses } = req.body;
//     const newStudent = await User.create({
//       name: name,
//       surName: surName,
//       birth: birth,
//       phone: phone,
//       gender: gender,
//       courses: courses,
//     });
//     res.status(200).json(newStudent);
//   } catch (error) {
//     next(error);
//   }
// };
//put all your user functions here :
