import { format, parseISO, add } from 'date-fns';
import { Router, Request, Response } from 'express';
import { body, check } from 'express-validator';
import UserSigninController  from './controllers/UserSigninController';
import UserSignupController from './controllers/UserSignupController';


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

export default routes;
