const express = require('express');
const { userRegisterController, userAndCompanyLoginController, companyRegisterController, getUserController, userUpdateController, companyUpdateController, getSingleDataController, getNameDataController, searchController, mobileUpdateController, passwordUpdateController } = require('../Controller/authController');
const requireSignIn = require('../MiddleWare/authMiddleWare');

const authRoute = express.Router();

// ________|AUTH ROUTE MEAN LOGIN SIGNUP|_________
authRoute.post('/user/register',userRegisterController);
authRoute.put('/user/update',requireSignIn,userUpdateController);
authRoute.post('/user/and/company/login',userAndCompanyLoginController);
authRoute.put('/company/update',requireSignIn,companyUpdateController);
authRoute.post('/company/register',companyRegisterController);
authRoute.get('/user/getData',getUserController);
authRoute.get('/getsingle/data',requireSignIn,getSingleDataController);
authRoute.get('/search/:keyword',searchController);
authRoute.get('/getname/:id',getNameDataController);
authRoute.put('/edit/mobile',requireSignIn,mobileUpdateController);
authRoute.put('/edit/password',requireSignIn,passwordUpdateController);

// ________|AUTH ROUTE MEAN LOGIN SIGNUP|_________

module.exports = authRoute;
