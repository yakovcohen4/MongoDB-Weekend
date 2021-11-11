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
exports.listStudentByName = async (req, res, next) => {
  try {
    console.log('listStudentByName');
    const { name } = req.params;
    console.log(name);
    const studentlistByName = await Student.find({ name: name });
    console.log(studentlistByName, 'listStudentByName');
    res.status(200).json(studentlistByName);

    // this is what i assume you meant
    if (studentlistByName.length === 0) next(new Error('no students found in db'));
  } catch (error) {
    next(error);
  }
};
exports.listStudentByCourses = async (req, res, next) => {
  try {
    console.log('listStudentByCourses');
    const { course } = req.params;
    console.log(course);
    const studentlistByCourses = await Student.find({ courses: course });
    console.log(studentlistByCourses, 'listStudentByCourses');
    res.status(200).json(studentlistByCourses);

    // this is what i assume you meant
    if (studentlistByCourses.length === 0) next(new Error('no students found in db'));
  } catch (error) {
    next(error);
  }
};
exports.listStudentByCoursesAndGender = async (req, res, next) => {
  try {
    console.log('listStudentByCoursesAndGender');
    const { course, gender } = req.params;
    const studentlistByCoursesAndGender = await Student.find({ courses: course, gender: gender });
    console.log(studentlistByCoursesAndGender, 'listStudentByCoursesAndGender');
    res.status(200).json(studentlistByCoursesAndGender);

    // this is what i assume you meant
    if (studentlistByCoursesAndGender.length === 0) next(new Error('no students found in db'));
  } catch (error) {
    next(error);
  }
};
exports.listStudentByBirth = async (req, res, next) => {
  try {
    console.log('listStudentByBirth');
    const { birth } = req.query;
    const studentlistByBirth = await Student.find({ birth: { $gt: birth } });
    console.log(studentlistByBirth, 'listStudentByBirth');
    res.status(200).json(studentlistByBirth);

    // this is what i assume you meant
    if (studentlistByBirth.length === 0) next(new Error('no students found in db'));
  } catch (error) {
    next(error);
  }
};
exports.listStudentByPhone = async (req, res, next) => {
  try {
    console.log('listStudentByPhone');
    const { phone } = req.params;
    const studentlistByPhone = await Student.find({ phone: { $regex: '^' + phone } });
    console.log(studentlistByPhone, 'listStudentByPhone');
    res.status(200).json(studentlistByPhone);

    // this is what i assume you meant
    if (studentlistByPhone.length === 0) next(new Error('no students found in db'));
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
