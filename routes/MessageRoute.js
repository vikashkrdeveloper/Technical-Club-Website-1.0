const express  = require('express');
const MessageController = require('../controllers/Chart/Message/MessageController');
const ProtectedRoute = require('../middleware/ChartMessage/ProtectRoute');
const GetMessagesController = require('../controllers/Chart/Message/GetMessagesController');
const MessageRoute =express.Router();

MessageRoute.get('/:id',ProtectedRoute,GetMessagesController);
MessageRoute.post('/send/:id',ProtectedRoute,MessageController);


module.exports=MessageRoute;