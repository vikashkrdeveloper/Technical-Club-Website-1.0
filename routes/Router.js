const express = require('express');
const router = express.Router();

const HomeControllers = require('../controllers/HomeControllers');
const ErrorControllers = require('../controllers/ErrorControllers');
const QuizLoginControllers = require('../controllers/Club/Technical/Quiz/QuizLoginControllers');
const RegistrationControllers = require('../controllers/Forms/RegistrationControllers');
const UserdataControllers = require('../controllers/UserdataControllers');
const forgetpasswordcontrollers = require('../controllers/forgetpasswordcontrollers');
const QuestionAnswerControllers = require('../controllers/Question/QuestionAnswerControllers');
const QuestionAnswerApiControllers = require('../controllers/Question/QuestionAnswerApiControllers');
const QuestionmcqControllers = require('../controllers/Question/QuestionmcqControllers');
const McqQuestionApiControllers = require('../controllers/Question/McqQuestionApiControllers');
const QuestionnumbericalControllers = require('../controllers/Question/QuestionnumbericalControllers');
const NumericalQuestionApiControllers = require('../controllers/Question/NumericalQuestionApiControllers');
const QuestiontatalcountAnswerApiControllers = require('../controllers/Question/QuestiontatalcountAnswerApiControllers');
const totalteam_member = require('../controllers/totalteam_member');
const LogOutControllers = require('../controllers/LogOutControllers');
const questiondatadeletedControlers = require('../controllers/Question/questiondatadeletedControlers');
const questiondatamcqdeletedControlers = require('../controllers/Question/questiondatamcqdeletedControlers');
const answerdatadeletedControlers = require('../controllers/Club/Technical/Answer/answerdatadeletedControlers');
const QuestiontatalAttamptAnswerApiControllers = require('../controllers/Question/QuestiontatalAttamptAnswerApiControllers');
const Totalparticipantdatadeletecontrollers = require('../controllers/Totalparticipantdatadeletecontrollers');
const AdminRegistrationControllers = require('../controllers/Admin/AdminRegistrationControllers');
const { AdminLoginControllers, AdminOtpVerification } = require('../controllers/Admin/AdminLoginControllers');
const admindatacontroler = require('../controllers/Admin/admindatacontroler');
const Authadmindatacontroler = require('../controllers/Admin/Authadmindatacontroler');
const ClubCreateControllers = require('../controllers/Club/ClubCreateControllers');
const Adminforgetpasswordcontrollers = require('../controllers/Admin/Adminforgetpasswordcontrollers');
const ParticipantMemberRegistration = require('../controllers/Forms/ParticipantMemberRegistration');
const ClubDataApiControllers = require('../controllers/Club/ClubDataApiControllers');
const ParticipantmemberList = require('../controllers/ParticipantmemberList');
const techFormcontroller = require('../controllers/Forms/techFormcontroller');
const HackathonRegistrationController = require('../controllers/Club/Technical/Hackathon/HackathonRegistrationController');
const HackathonFormdatacontroller = require('../controllers/Club/Technical/Hackathon/HackathonFormdatacontroller');
const CodingFormdatacontroller = require('../controllers/Club/Technical/Coding/CodingFormdatacontroller');
const CodingRegistrationController = require('../controllers/Club/Technical/Coding/CodingRegistrationController');
const Codingparticipantdatadeletecontrollers = require('../controllers/Club/Technical/Coding/Codingparticipantdatadeletecontrollers');
const Quizparticipantdatadeletecontrollers = require('../controllers/Club/Technical/Quiz/Quizparticipantdatadeletecontrollers');
const techFormdatacontroller = require('../controllers/Forms/techFormdatacontroller');
const UserdataMiddleware = require('../middleware/UserdataMiddleware');
const AuthadmindataMiddleware = require('../middleware/AuthadmindataMiddleware');
const ClubDataFindController = require('../controllers/Club/ClubDataFindController');
const mailSend = require('../Mailmessage/mailSend');

const multer = require('multer');
const QuizRegistrationController = require('../controllers/Club/Technical/Quiz/QuizRegistrationController');
const QuizFormdatacontroller = require('../controllers/Club/Technical/Quiz/QuizFormdatacontroller');
const QuizParticipantUseIdDataControllers = require('../controllers/Club/Technical/Quiz/QuizParticipantUseIdDataControllers');
const QuizCreatUserIdControllers = require('../controllers/Club/Technical/Quiz/QuizCreatUserIdControllers');
const QuizAuthdataController = require('../controllers/Club/Technical/Quiz/QuizAuthdataController');
const QuizAuthdataMiddleware = require('../middleware/QuizAuthdataMiddleware');
const filterQuizDataRegistrationControllers = require('../controllers/FilterData/filterQuizDataRegistrationControllers');
const CodingCreatUserIdControllers = require('../controllers/Club/Technical/Coding/CodingCreatUserIdControllers');
const filterCodingDataRegistrationControllers = require('../controllers/FilterData/filterCodingDataRegistrationControllers');
const CodingAuthdataController = require('../controllers/Club/Technical/Coding/CodingAuthdataController');
const CodingAuthdataMiddleware = require('../middleware/CodingAuthdataMiddleware');
const CodingLoginControllers = require('../controllers/Club/Technical/Coding/CodingLoginControllers');
const QuizQuestionAnswerControllers = require('../controllers/Club/Technical/Quiz/QuizQuestionAnswerControllers');
const NumericalQuestionAnswerApiControllers = require('../controllers/Club/Technical/Answer/NumericalQuestionAnswerApiControllers');
const AllowAndDenyController = require('../controllers/Permissions/AllowAndDenyController');
const PermissionChangeController = require('../controllers/Permissions/PermissionChangeController');
const permissionupdates = require('../controllers/Permissions/permissionupdates');
const LiveStreamController = require('../controllers/LiveStream/LiveStreamController');
const LiveStreamControllerApi = require('../controllers/LiveStream/LiveStreamControllerApi');
const GalleryImagesControllers = require('../controllers/Gallery/GalleryImagesControllers');
const GalleryDataApiControllers = require('../controllers/Gallery/GalleryDataApiControllers');
const HallOffameController = require('../controllers/HallOfFame/HallOffameController');
const HallOfFameDataAddController = require('../controllers/HallOfFame/HallOfFameDataAddController');
const ChartUserCreateControllerApi = require('../controllers/Chart/ChartUserCreateControllerApi');
const ChartUserCreateController = require('../controllers/Chart/ChartUserCreateController');
const ChartAuthUserMiddleware = require('../middleware/ChartAuthUserMiddleware');
const ChartUserAuthDataController = require('../controllers/Chart/ChartUserAuthDataController');
const ChartUserLoginController = require('../controllers/Chart/ChartUserLoginDataController');
const ChartAi = require('../ai/ChartAi');
const SetCompiler = require('../controllers/Compiler/SetCompiler');
const AllQuizParticipantData = require('../controllers/Club/Technical/Quiz/AllQuizParticipantData');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/', HomeControllers);
router.get('/api/users/data', UserdataMiddleware, UserdataControllers)
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
router.get('/api/gallery/images/data/', GalleryDataApiControllers)
router.get('/api/team/register/data', techFormdatacontroller);
router.get('/api/team/hackathon/register/data', HackathonFormdatacontroller);
router.get('/api/participant/coding/register/data', CodingFormdatacontroller);
router.get('/api/participant/quiz/register/data', QuizFormdatacontroller);
router.get('/api/quiz/user-id/register/data', QuizParticipantUseIdDataControllers);
router.get('/api/coding/user-id/register/data', QuizParticipantUseIdDataControllers);
router.get('/api/participant/quiz/auth/data', QuizAuthdataMiddleware, QuizAuthdataController)
router.get('/api/participant/coding/auth/data', CodingAuthdataMiddleware, CodingAuthdataController)
router.get('/api/live-stream/data', LiveStreamControllerApi)
router.get('/api/club/data/url', ClubDataFindController)
router.get('/api/government-engineering-college-siwan/hall-of-fame/club/data', HallOffameController)
router.get('/api/v1/government-engineering-college-siwan/community/chart/user/data', ChartUserCreateControllerApi)
router.get('/api/v1/government-engineering-college-siwan/community/chart/auth/data/', ChartAuthUserMiddleware, ChartUserAuthDataController)
router.get('/api/v1/all/quiz/participant/data',AllQuizParticipantData)

router.post('/api/v1//government-engineering-college-siwan/code-compiler', SetCompiler)
router.post('/api/v1/government-engineering-college-siwan/genrated-ai', ChartAi);
router.post('/api/v1/government-engineering-college-siwan/community/chart/user/data/create', ChartUserCreateController)
router.post('/api/v1/government-engineering-college-siwan/community/chart/auth/login/', ChartUserLoginController)
router.post('/api/permission/create', PermissionChangeController);
router.post('/api/participant/bgmi/tech/form', techFormcontroller);
router.post('/api/participant/hackathon/tech/form', HackathonRegistrationController);
router.post('/api/participant/coding/tech/form', upload.single('file'), CodingRegistrationController);
router.post('/api/participant/quiz/tech/form', upload.single('file'), QuizRegistrationController);
router.post('/api/participant/quiz/user-id/tech/form', upload.single('file'), QuizCreatUserIdControllers);
router.post('/api/participant/coding/user-id/tech/form', upload.single('file'), CodingCreatUserIdControllers);

router.post('/api/livestream/schema', LiveStreamController);
router.post('/api/participant/quiz/register/data/filter', filterQuizDataRegistrationControllers);
router.post('/api/participant/coding/register/data/filter', filterCodingDataRegistrationControllers);
router.post('/api/participants/registration', RegistrationControllers);
router.post('/api/participants/member/registration', ParticipantMemberRegistration);
router.post('/api/admin/registration', AdminRegistrationControllers);
router.post('/api/coding/login', CodingLoginControllers);
router.post('/api/quiz/login', QuizLoginControllers);
router.post('/api/admin/otp/verification/login', AdminOtpVerification);
router.post('/api/admin/login', AdminLoginControllers);
router.post('/api/coding-contest/api/answer/participant', QuestionAnswerControllers)
router.post('/api/quiz-contest/api/answer/participant', QuizQuestionAnswerControllers)
router.post('/api/coding-contest/api/question-mcq/', QuestionmcqControllers)
router.post('/api/contest/api/question-numerical/', QuestionnumbericalControllers)
router.post('/api/club/create/api/data/', upload.single('contest_poster'), ClubCreateControllers)
router.post('/api/gallery/images/add/data/', upload.single('contest_poster'), GalleryImagesControllers)
router.post('/api/government-engineering-college-siwan/hall-of-fame/club/Create', upload.single('contest_poster'), HallOfFameDataAddController)


router.put('/api/forget/password/', forgetpasswordcontrollers)
router.put('/api/permission/updates/:id', permissionupdates)
router.put('/api/admin/forget/password/', Adminforgetpasswordcontrollers)


router.delete('/api/answer/delete/id/:id', answerdatadeletedControlers)
router.delete('/api/question/type/numerical/delete/id/:id', questiondatadeletedControlers)
router.delete('/api/question/type/mcq/delete/id/:id', questiondatamcqdeletedControlers)
router.delete('/api/total/participant/delete/id/:id', Totalparticipantdatadeletecontrollers)
router.delete('/api/coding/participant/delete/id/:id', Codingparticipantdatadeletecontrollers)
router.delete('/api/quiz/participant/delete/id/:id', Quizparticipantdatadeletecontrollers)

router.all('*', ErrorControllers);

module.exports = router


