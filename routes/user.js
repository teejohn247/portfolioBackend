import express from 'express';
import about from '../controller/about';
import admin from '../controller/admin';
// import adminAuth from '../middleware/adminAuth';
// import userRegister from '../controller/userRegister';
import adminLogin from '../controller/adminLogin';
// import login from '../controller/signin';
// import clockOut from '../controller/updateClockOut';
// import records from '../controller/adminRecords';
// import updateAdminRecords from '../controller/updateAdminRecords';
// import adminView from '../controller/adminView';
// import userHistory from '../controller/userHistory';
// import filterDate from '../controller/filterDate';
// import filterContact from '../controller/filterContacts';
// import editProfile from '../controller/editProfile';
// import userClockIn from '../controller/userClockIn';
// import changePassword from '../controller/changePassword';
// import csv from '../controller/downloadCsv';
// import adminHistory from '../controller/adminHistory';
// import adminEdit from '../controller/adminEdit';


import adminPassword from '../controller/adminPassword';
import blog from '../controller/Blog';
import category from '../controller/category';
import contact from '../controller/contact';
import deletePortfolio from '../controller/delPortfolio';

import deleteContact from '../controller/deleteContact';
import deleteCategory from '../controller/delCategory';

import services from '../controller/services';
import viewBlog from '../controller/viewBlog';
import viewCategory from '../controller/viewCategory';
import viewContact from '../controller/viewContact';
import viewServices from '../controller/viewServices';
import viewAbout from '../controller/viewAbout';

// import adminFilter from '../controller/adminFilter';
// import admins from '../controller/totalAdmins';
// import users from '../controller/totalUsers';
// import bookings from '../controller/bookings';
// import contact from '../controller/contact';





// import exp from '../controller/addExperience';
// import edu from '../controller/addEducation';
// import delEdu from '../controller/deleteEducation';
// import delExp from '../controller/deleteExperience';
// import post from '../controller/post';
// import getPosts from '../controller/getPosts';
// import getPost from '../controller/getPost';
// import like from '../controller/likes';
// import unlike from '../controller/unlike';
// import comment from '../controller/comment';
// import delComment from '../controller/delComment';

import auth from '../middleware/auth';
import editServices from '../controller/editServices';
import editBlog from '../controller/editBlog';
import editCategory from '../controller/editCategory';
import portfolio from '../controller/Portfolio';
import viewPortfolio from '../controller/viewPortfolio';
import deleteService from '../controller/delService';
import education from '../controller/education';
import viewEducation from '../controller/ViewEducation';
import delEducation from '../controller/delEducation';
import experience from '../controller/experience';
import viewExperience from '../controller/viewExperience';
import delExperience from '../controller/delExperience';
import editExperience from '../controller/editExperience';
import editEducation from '../controller/editEducation';
import editContact from '../controller/editContact';
// import adminBookings from '../controller/adminBookings';
// import delAdmin from '../controller/delAdmin';
// import userPassword from '../controller/userPassword';

// import delUser from '../controller/delUser';

// import delBookings from '../controller/delBookings';
// import delContact from '../controller/delContact';
// import updateAdminRecord from '../controller/updateAdminRecord';
// import filterBookings from '../controller/filterBookings';

// import viewAdmin from '../controller/viewAdmin';
// import {Donor} from '../model/donor';
// import request from 'request';
// import notification from '../controller/notification';

const _ = require('lodash');
// import pug from 'pug';

// const {Donor} = require('../models/donor');
// const {initializePayment, verifyPayment} = require('../config/paystack')(request);
const router = express.Router();

router.post('/admin/signup', admin);
router.post('/admin', adminLogin);
router.post('/about', auth, about);
router.post('/contact', auth, contact);
router.patch('/edit/contact', auth, editContact);

router.post('/services', auth, services);
router.post('/education', auth, education);
router.post('/portfolio', auth, portfolio);
router.post('/experience', auth, experience);
router.post('/category', auth, category);
router.post('/blog', auth, blog);
router.get('/view/about', auth, viewAbout);
router.get('/view/contacts', auth, viewContact);
router.get('/view/category', auth, viewCategory);
router.get('/view/education', auth, viewEducation);
router.get('/view/services', auth, viewServices);
router.get('/view/experience', auth, viewExperience);
router.get('/view/portfolio', auth, viewPortfolio);
router.get('/view/blog', auth, viewBlog);
router.delete('/delete/portfolio/:id', auth, deletePortfolio);
router.delete('/delete/contact/:id', auth, deleteContact);
router.delete('/delete/category/:id', auth, deleteCategory);
router.delete('/delete/service/:id', auth, deleteService);
router.delete('/delete/education/:id', auth, delEducation);
router.delete('/delete/experience/:id', auth, delExperience);
router.patch('/edit/services/:id', auth, editServices);
router.patch('/edit/blog', auth, editBlog);
router.patch('/edit/category/:id', auth, editCategory);
router.patch('/edit/experience/:id', auth, editExperience);
router.patch('/edit/education/:id', auth, editEducation);










 







// router.post('/changePassword',auth, adminPassword);

// router.post('/register', userRegister);
// router.post('/bookings', bookings);
// router.post('/contact', contact);
// router.get('/view/contact/:page/:limit',auth, adminView);
// router.get('/view/bookings/:page/:limit',auth, adminBookings);
// router.delete('/del/admin/',auth, delAdmin);
// router.patch('/user/change-password',auth, userPassword);
// router.delete('/del/user/:id',auth, delUser);
// router.get('/filter-contact',auth, filterContact);
// router.get('/filter-bookings',auth, filterBookings);
// router.delete('/del/booking/:id',auth, delBookings);
// router.delete('/del/contact/:id',auth, delContact);
// router.patch('/update/admin',auth, updateAdminRecord);
// router.get('/view/admin/:page/:limit',auth, viewAdmin);
// router.get('/notifications',auth, notification);

export default router;