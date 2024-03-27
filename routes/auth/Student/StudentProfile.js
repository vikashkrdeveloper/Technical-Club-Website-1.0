const express = require('express');
const StudentProfileData = require('../../../controllers/Auth/Student/StudentProfileData');
const StudentProfileRoute = express.Router();


StudentProfileRoute.get('/data', StudentProfileData);


module.exports = StudentProfileRoute;