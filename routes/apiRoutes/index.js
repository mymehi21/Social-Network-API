//creating router instance
const router = require('express').Router();
//importing user route and thought route

const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

//defining end-points
router.use('/user',userRoutes);
router.use('/thought',thoughtRoutes);

//export router
module.exports = router;