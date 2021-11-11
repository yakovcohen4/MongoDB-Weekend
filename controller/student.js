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
// ********* update *********
// ********* update *********
exports.updateCourse = async (req, res, next) => {
  try {
    console.log('updateCourse');
    const { name, course } = req.body;
    const updateStudentCourse = await Student.findOneAndUpdate({ name: name }, { $push: { courses: course } });
    console.log(updateStudentCourse, 'updateCourse');
    res.status(200).json(updateStudentCourse);

    // this is what i assume you meant
    if (updateStudentCourse.length === 0) next(new Error('no students found in db'));
  } catch (error) {
    next(error);
  }
};
exports.updateBirth = async (req, res, next) => {
  try {
    console.log('updateBirth');
    const { name, birth } = req.body;
    const updateStudentBirth = await Student.findOneAndUpdate({ name: name }, { birth: birth });
    console.log(updateStudentBirth, 'updateBirth');
    res.status(200).json(updateStudentBirth);

    // this is what i assume you meant
    if (updateStudentBirth.length === 0) next(new Error('no students found in db'));
  } catch (error) {
    next(error);
  }
};

// Text Search
exports.listAllStudentsNameByLetter = async (req, res, next) => {
  try {
    console.log('listAllStudentsNameByLetter');
    const { letter } = req.params;
    const StudentListNameByLetter = await Student.find({ name: { $regex: letter } });
    console.log(StudentListNameByLetter, 'listAllStudentsNameByLetter');
    res.status(200).json(StudentListNameByLetter);

    // this is what i assume you meant
    if (StudentListNameByLetter.length === 0) next(new Error('no students found in db'));
  } catch (error) {
    next(error);
  }
};
exports.listAllStudentssurNameByLetterOr = async (req, res, next) => {
  try {
    console.log('listAllStudentssurNameByLetterOr');
    const { letter1, letter2 } = req.params;
    const listStudentByTwoLetters = await Student.find({
      $or: [{ surName: { $regex: letter1 } }, { surName: { $regex: letter2 } }],
    });
    console.log(listStudentByTwoLetters, 'listAllStudentssurNameByLetterOr');
    res.status(200).json(listStudentByTwoLetters);

    // this is what i assume you meant
    if (listStudentByTwoLetters.length === 0) next(new Error('no students found in db'));
  } catch (error) {
    next(error);
  }
};

// Delete Documents
exports.deleteStudentByName = async (req, res, next) => {
  try {
    console.log('deleteStudentByName');
    const { name } = req.params;
    const deleteStudentByName = await Student.deleteOne({ name: name });
    console.log(deleteStudentByName, 'deleteStudentByName');
    res.status(200).json(deleteStudentByName);

    // this is what i assume you meant
    if (deleteStudentByName.length === 0) next(new Error('no students found in db'));
  } catch (error) {
    next(error);
  }
};
exports.deleteStudentByBirth = async (req, res, next) => {
  try {
    console.log('deleteStudentByBirth');
    const { birth } = req.params;
    const deleteStudentByBirth = await Student.deleteOne({ birth: birth });
    console.log(deleteStudentByBirth, 'deleteStudentByBirth');
    res.status(200).json(deleteStudentByBirth);

    // this is what i assume you meant
    if (deleteStudentByBirth.length === 0) next(new Error('no students found in db'));
  } catch (error) {
    next(error);
  }
};
