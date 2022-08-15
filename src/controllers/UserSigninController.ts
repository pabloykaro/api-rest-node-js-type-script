import { Request, Response } from 'express';
import {userLoginWithEmail , userLoginWithCpf} from '../useCases/userSignin';

export default class UserSigninController{

  selectLogin(req: Request, res: Response){
    const { email, cpf} = req.body;

     if(email && !cpf){
      return userLoginWithEmail(req,res);
     }
     if(!email && cpf){
      return userLoginWithCpf(req,res);
     }

     res.status(400).json({message: "define_parameters"});
   
  }
}