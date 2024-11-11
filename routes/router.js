const  express = require('express')
const userController = require('../controllers/userController')
const projectController = require('../controllers/projectController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const multerMiddleware = require('../middlewares/multerMiddleware')

const router = new express.Router()

// register : http://localhost:3000/register
router.post('/register',userController.registerController)

//  login : http://localhost:3000/login
router.post('/login',userController.loginController)

// add project :  http://localhost:3000/add projects
router.post('/add-project',jwtMiddleware,multerMiddleware.single('projectImg'),projectController.addProjectsController) 

//home-project : http://localhost:3000/home-project
router.get('/home-project',projectController.homePageProjectController)

//all-project : http://localhost:3000/all-project
router.get('/all-projects',jwtMiddleware,projectController.allProjectController)

//user-project : http://localhost:3000/user-project
router.get('/user-project',jwtMiddleware,projectController.userProjectController)

//project/id/edit : http://localhost:3000/project/id/edit
router.put('/project/:id/edit',jwtMiddleware,multerMiddleware.single('projectImg'),projectController.editProjectController)


//project/id/remove : http://localhost:3000/project/id/remove
router.delete('/project/:id/remove',jwtMiddleware,projectController.removeProjectController)


// edit-user : http://localhost:3000/edit-user
router.put('/edit-user',jwtMiddleware,multerMiddleware.single('profilepic'),userController.editUserController)



module.exports = router
   