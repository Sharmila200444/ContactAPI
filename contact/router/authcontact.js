const express=require('express');

const {createuser,getuser,singleuser,updateuser,deleteuser}=require('../controllers/contactfunctions');
const router=express.Router();

router.route('/cuser').post(createuser);
router.route('/guser').get(getuser);
router.route('/suser/:id').get(singleuser);
router.route('/upuser/:id').put(updateuser);
router.route('/duser/:id').delete(deleteuser);

module.exports=router;
