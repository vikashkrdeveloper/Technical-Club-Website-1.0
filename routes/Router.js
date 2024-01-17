const express = require('express');
const router = express.Router();
const HomeControllers = require('../controllers/HomeControllers');
const ErrorControllers = require('../controllers/ErrorControllers');
const QuizLoginControllers = require('../controllers/QuizLoginControllers');
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
const CodingFormdatacontroller = require('../controllers/CodingFormdatacontroller');
const CodingRegistrationController = require('../controllers/CodingRegistrationController');
const Codingparticipantdatadeletecontrollers = require('../controllers/Codingparticipantdatadeletecontrollers');
const Quizparticipantdatadeletecontrollers = require('../controllers/Quizparticipantdatadeletecontrollers');
const techFormdatacontroller = require('../controllers/techFormdatacontroller');
const UserdataMiddleware = require('../middleware/UserdataMiddleware');
const AuthadmindataMiddleware = require('../middleware/AuthadmindataMiddleware');
const mailSend = require('../Mailmessage/mailSend');

const multer = require('multer');
const QuizRegistrationController = require('../controllers/QuizRegistrationController');
const QuizFormdatacontroller = require('../controllers/QuizFormdatacontroller');
const QuizParticipantUseIdDataControllers = require('../controllers/QuizParticipantUseIdDataControllers');
const QuizCreatUserIdControllers = require('../controllers/QuizCreatUserIdControllers');
const QuizAuthdataController = require('../controllers/QuizAuthdataController');
const QuizAuthdataMiddleware = require('../middleware/QuizAuthdataMiddleware');
const filterQuizDataRegistrationControllers = require('../controllers/filterQuizDataRegistrationControllers');
const CodingCreatUserIdControllers = require('../controllers/CodingCreatUserIdControllers');
const filterCodingDataRegistrationControllers = require('../controllers/filterCodingDataRegistrationControllers');
const CodingAuthdataController = require('../controllers/CodingAuthdataController');
const CodingAuthdataMiddleware = require('../middleware/CodingAuthdataMiddleware');
const CodingLoginControllers = require('../controllers/CodingLoginControllers');
const QuizQuestionAnswerControllers = require('../controllers/QuizQuestionAnswerControllers');
const NumericalQuestionAnswerApiControllers = require('../controllers/NumericalQuestionAnswerApiControllers');
const AllowAndDenyController = require('../controllers/AllowAndDenyController');
const PermissionChangeController = require('../controllers/PermissionChangeController');
const permissionupdates = require('../controllers/permissionupdates');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/', mailSend);
router.get('/users/data', UserdataMiddleware, UserdataControllers)
router.get('/api/participant/member/list', ParticipantmemberList)
router.get('/api/participant/question/answer', QuestionAnswerApiControllers)
router.get('/api/participant/numerical/question/answer', NumericalQuestionAnswerApiControllers)
router.get('/api/participant/data/total/count', QuestiontatalcountAnswerApiControllers)
router.get('/api/participant/question/answer/total/userid/:userid', QuestiontatalAttamptAnswerApiControllers)
router.get('/api/contest/question-mcq', McqQuestionApiControllers)
router.get('/api/contest/question-numerical/', NumericalQuestionApiControllers)
router.get('/api/logout', LogOutControllers)
router.get('/api/permission', AllowAndDenyController)
router.get('/api/total-teams/members/', totalteam_member)
router.get('/api/admin/data', admindatacontroler)
router.get('/api/auth/admin/data', AuthadmindataMiddleware, Authadmindatacontroler)
router.get('/api/club/created/data/', ClubDataApiControllers)
router.get('/api/team/register/data', techFormdatacontroller);
router.get('/api/team/hackathon/register/data', HackathonFormdatacontroller);
router.get('/api/participant/coding/register/data', CodingFormdatacontroller);
router.get('/api/participant/quiz/register/data', QuizFormdatacontroller);
router.get('/api/quiz/user-id/register/data', QuizParticipantUseIdDataControllers);
router.get('/api/coding/user-id/register/data', QuizParticipantUseIdDataControllers);
router.get('/participant/quiz/auth/data', QuizAuthdataMiddleware, QuizAuthdataController)
router.get('/participant/coding/auth/data', CodingAuthdataMiddleware, CodingAuthdataController)


router.post('/permission/change', PermissionChangeController);
router.post('/participant/bgmi/tech/form', techFormcontroller);
router.post('/participant/hackathon/tech/form', HackathonRegistrationController);
router.post('/participant/coding/tech/form', upload.single('file'), CodingRegistrationController);
router.post('/participant/quiz/tech/form', upload.single('file'), QuizRegistrationController);
router.post('/participant/quiz/user-id/tech/form', upload.single('file'), QuizCreatUserIdControllers);
router.post('/participant/coding/user-id/tech/form', upload.single('file'), CodingCreatUserIdControllers);

router.post('/api/participant/quiz/register/data/filter', filterQuizDataRegistrationControllers);
router.post('/api/participant/coding/register/data/filter', filterCodingDataRegistrationControllers);
router.post('/participants/registration', RegistrationControllers);
router.post('/participants/member/registration', ParticipantMemberRegistration);
router.post('/admin/registration', AdminRegistrationControllers);
router.post('/coding/login', CodingLoginControllers);
router.post('/quiz/login', QuizLoginControllers);
router.post('/admin/login', AdminLoginControllers);
router.post('/coding-contest/api/answer/participant', QuestionAnswerControllers)
router.post('/quiz-contest/api/answer/participant', QuizQuestionAnswerControllers)
router.post('/coding-contest/api/question-mcq/', QuestionmcqControllers)
router.post('/contest/api/question-numerical/', QuestionnumbericalControllers)
router.post('/club/create/api/data/', upload.single('contest_poster'), ClubCreateControllers)


router.put('/forget/password/', forgetpasswordcontrollers)
router.put('/permission/updates/:id', permissionupdates)
router.put('/admin/forget/password/', Adminforgetpasswordcontrollers)


router.delete('/api/answer/delete/id/:id', answerdatadeletedControlers)
router.delete('/api/question/type/numerical/delete/id/:id', questiondatadeletedControlers)
router.delete('/api/question/type/mcq/delete/id/:id', questiondatamcqdeletedControlers)
router.delete('/api/total/participant/delete/id/:id', Totalparticipantdatadeletecontrollers)
router.delete('/api/coding/participant/delete/id/:id', Codingparticipantdatadeletecontrollers)
router.delete('/api/quiz/participant/delete/id/:id', Quizparticipantdatadeletecontrollers)

router.all('*', ErrorControllers);

module.exports = router


