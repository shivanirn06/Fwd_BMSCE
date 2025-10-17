const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const path = require('path');



router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/welcome.html'));

});

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname,'/../public/login.html'));
});

router.post('/login', userController.loginUser);

router.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname,'/../public/signup.html'));
});

router.post('/signup', userController.registerUser);

router.get("/main_page", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/main_page.html"));
});




module.exports = router;