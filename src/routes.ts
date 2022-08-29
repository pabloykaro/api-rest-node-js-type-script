import { Router, Request, Response } from 'express';
import UserCreateRunController from './controllers/UserCreateRunController';
import UserSigninController  from './controllers/UserSigninController';
import UserSignupController from './controllers/UserSignupController';
import { findByRunOpen } from './useCases/findByRunOpen';


const routes = Router();

// SignIn Api
const userSigninController = new UserSigninController();
routes.post(
  "/signin",
(req: Request, res: Response) => userSigninController.selectLogin(req,res));
// SignIn Api Finish

// SignUp Api
const userSignupController = new UserSignupController();
routes.post(
  "/signup",
(req: Request, res: Response) => userSignupController.returnCreateAccount(req,res) );
// SignUp Api Finish

// CreateRun Api
const userCreateRunController = new UserCreateRunController();
routes.post(
  "/createrun",
(req: Request, res: Response) => userCreateRunController.createRun(req,res) );
// CreateRun Api Finish

// findByRun Api
//const getFindRuns = new UserCreateRunController();
routes.get(
  "/runsopen/:id_run?",
(req: Request, res: Response) => findByRunOpen(req,res) );
// findByRun Api Finish

export default routes;
