const express = require('express')
const {createUSer,getUser,updateUser,deleteUser}= require('../controllers/user.controller')

const router = express.Router()

router.post("/create",createUSer)
router.get("/get",getUser)
router.put("/update/:id",updateUser)
router.delete("/delete/:id",deleteUser)


module.exports = router