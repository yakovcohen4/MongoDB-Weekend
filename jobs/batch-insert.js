const Students = require('../models/student');
const mongoose = require('mongoose');
mongoose
  .connect(`mongodb+srv://********:********@cluster.ck0tp.mongodb.net/mongo_practice?retryWrites=true&w=majority`)
  .then(result => {
    console.log('connected to MongoDB job');
  })
  .catch(error => {
    console.log('error connecting to MongoDB:', error.message);
  });
//
const studentsCollection = [
  {
    name: 'Ido',
    surName: 'Arbel',
    birth: new Date(26 / 01 / 1998),
    phone: '0526305421',
    gender: 'Male',
    courses: ['Java', 'Math'],
  },
  {
    name: 'Chen',
    surName: 'Halevi',
    birth: new Date(11 / 03 / 1997),
    phone: '0526323421',
    gender: 'Male',
    courses: ['Math', 'Law'],
  },
  {
    name: 'Koren',
    surName: 'Gan-or',
    birth: new Date(19 / 01 / 1997),
    phone: '0526305321',
    gender: 'Male',
    courses: ['JavaScript', 'Finance', 'Law'],
  },
  {
    name: 'Oryan',
    surName: 'Levy',
    birth: new Date(02 / 04 / 1998),
    phone: '0542305321',
    gender: 'Male',
    courses: ['JavaScript', 'Law'],
  },
  {
    name: 'Yahalom',
    surName: 'Cohen',
    birth: new Date(03 / 11 / 1993),
    phone: '0542305392',
    gender: 'Female',
    courses: ['Java', 'Law'],
  },
];

Students.insertMany(studentsCollection)
  .then(function () {
    console.log('Data inserted'); // Success
  })
  .catch(function (error) {
    console.log(error); // Failure
  });
