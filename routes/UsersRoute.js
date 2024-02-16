const express = require('express');
const ProtectedRoute = require('../middleware/ChartMessage/ProtectRoute');
const GetUserForSidebar = require('../controllers/Chart/GetUserForSidebar');
const UserRoute = express.Router();

UserRoute.get('/', ProtectedRoute, GetUserForSidebar);


module.exports = UserRoute;