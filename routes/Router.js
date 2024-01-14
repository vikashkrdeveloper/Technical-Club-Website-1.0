const express = require('express');
const router = express.Router();
const HomeControllers = require('../controllers/HomeControllers');
const ErrorControllers = require('../controllers/ErrorControllers');
const LoginControllers = require('../controllers/LoginControllers');
const RegistrationControllers = require('../controllers/RegistrationControllers');
const UserdataControllers = require('../controllers/UserdataControllers');
const forgetpasswordcontrollers = require('../controllers/forgetpasswordcontrollers');
const QuestionAnswerControllers = require('../controllers/QuestionAnswerControllers');
const QuestionAnswerApiControllers = require('../controllers/QuestionAnswerApiControllers');
const QuestionmcqControllers = require('../controllers/QuestionmcqControllers');
const McqQuestionApiControllers = require('../controllers/McqQuestionApiControllers');
const QuestionnumbericalControllers = require('../controllers/QuestionnumbericalControllers');
const NumericalQuestionApiControllers = require('../controllers/NumericalQuestionApiControllers');
const QuestiontatalcountAnswerApiControllers = require('../controllers/QuestiontatalcountAnswerApiControllers');
const totalteam_member = require('../controllers/totalteam_member');
const LogOutControllers = require('../controllers/LogOutControllers');
const questiondatadeletedControlers = require('../controllers/questiondatadeletedControlers');
const questiondatamcqdeletedControlers = require('../controllers/questiondatamcqdeletedControlers');
const answerdatadeletedControlers = require('../controllers/answerdatadeletedControlers');
const QuestiontatalAttamptAnswerApiControllers = require('../controllers/QuestiontatalAttamptAnswerApiControllers');
const Totalparticipantdatadeletecontrollers = require('../controllers/Totalparticipantdatadeletecontrollers');
const AdminRegistrationControllers = require('../controllers/AdminRegistrationControllers');
const AdminLoginControllers = require('../controllers/AdminLoginControllers');
const admindatacontroler = require('../controllers/admindatacontroler');
const Authadmindatacontroler = require('../controllers/Authadmindatacontroler');
const ClubCreateControllers = require('../controllers/ClubCreateControllers');
const Adminforgetpasswordcontrollers = require('../controllers/Adminforgetpasswordcontrollers');
const ParticipantMemberRegistration = require('../controllers/ParticipantMemberRegistration');
const ClubDataApiControllers = require('../controllers/ClubDataApiControllers');
const ParticipantmemberList = require('../controllers/ParticipantmemberList');
const techFormcontroller = require('../controllers/techFormcontroller');
const HackathonRegistrationController = require('../controllers/HackathonRegistrationController');
const HackathonFormdatacontroller = require('../controllers/HackathonFormdatacontroller');
const techFormdatacontroller = require('../controllers/techFormdatacontroller');
const UserdataMiddleware = require('../middleware/UserdataMiddleware');
const AuthadmindataMiddleware = require('../middleware/AuthadmindataMiddleware');
const mailSend = require('../Mailmessage/mailSend');

const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/', mailSend);
router.get('/users/data', UserdataMiddleware, UserdataControllers)
router.get('/api/participant/member/list', ParticipantmemberList)
router.get('/api/participant/question/answer', QuestionAnswerApiControllers)
router.get('/api/participant/question/answer/total/count', QuestiontatalcountAnswerApiControllers)
router.get('/api/participant/question/answer/total/userid/:userid', QuestiontatalAttamptAnswerApiControllers)
router.get('/api/contest/question-mcq', McqQuestionApiControllers)
router.get('/api/contest/question-numerical/', NumericalQuestionApiControllers)
router.get('/api/logout', LogOutControllers)
router.get('/api/total-teams/members/', totalteam_member)
router.get('/api/admin/data', admindatacontroler)
router.get('/api/auth/admin/data', AuthadmindataMiddleware, Authadmindatacontroler)
router.get('/api/club/created/data/', ClubDataApiControllers)

router.get('/api/team/register/data', techFormdatacontroller);
router.get('/api/team/hackathon/register/data', HackathonFormdatacontroller);
router.post('/participant/bgmi/tech/form', techFormcontroller);
router.post('/participant/hackathon/tech/form', HackathonRegistrationController);

router.post('/participants/registration', RegistrationControllers);
router.post('/participants/member/registration', ParticipantMemberRegistration);
router.post('/admin/registration', AdminRegistrationControllers);
router.post('/login', LoginControllers);
router.post('/admin/login', AdminLoginControllers);
router.post('/coding-contest/api/answer/participant', QuestionAnswerControllers)
router.post('/coding-contest/api/question-mcq/', QuestionmcqControllers)
router.post('/coding-contest/api/question-numerical/', QuestionnumbericalControllers)
router.post('/club/create/api/data/', upload.single('contest_poster'), ClubCreateControllers)
router.put('/forget/password/', forgetpasswordcontrollers)
router.put('/admin/forget/password/', Adminforgetpasswordcontrollers)
router.delete('/api/answer/delete/id/:id', answerdatadeletedControlers)
router.delete('/api/question/type/numerical/delete/id/:id', questiondatadeletedControlers)
router.delete('/api/question/type/mcq/delete/id/:id', questiondatamcqdeletedControlers)
router.delete('/api/total/participant/delete/id/:id', Totalparticipantdatadeletecontrollers)
router.all('*', ErrorControllers);

module.exports = router


