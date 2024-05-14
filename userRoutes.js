const express = require('express');


const {home,createUser,getUsers, deleteUser} = require("./controller.js");
const router = express.Router();

router.get('/',home);
router.post('/createUser',createUser)
router.get('/getUsers',getUsers)
router.delete('/deleteUser/:userId',deleteUser)
module.exports =router
