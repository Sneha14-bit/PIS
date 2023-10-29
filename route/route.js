//
const express = require('express');

const { getdepartment, adddepartment, deletedepartment } = require('../controller/department');
const { getreports, addreports } = require('../controller/reports');
const { getuser_appointment, adduser_appointement } = require('../controller/user_appointment');
const { getappointment, addappointment, deleteappointment } = require('../controller/appointment');
const { getusers, adduser, getuser_byid, deleteuser, updateuser } = require('../controller/users');
const { home, login } = require('../controller/view_controller');
const router = express.Router()
router.get('/', home)
router.get('/login', login)
// ('/contact')
// ('/login')
router.get('/users', getusers)
router.post('/adduser', adduser)
router.get('/getuser', getuser_byid)
router.delete('/deleteuser', deleteuser)
router.patch('/updateuser', updateuser)
router.get('/department', getdepartment)
router.post('/adddepartment', adddepartment)
router.delete('/deletedepartment', deletedepartment)
router.get('/reports', getreports)
router.post('/addreports', addreports)
router.get('/user_appointment', getuser_appointment)
router.post('/adduser_appointment', adduser_appointement)
router.get('/appointment', getappointment)
router.post('/addappointment', addappointment)
router.delete('/deleteappointment', deleteappointment)

module.exports = router