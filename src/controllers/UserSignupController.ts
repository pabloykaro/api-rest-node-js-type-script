import { Request , Response } from 'express';
import { createSignUpFromUser, createSignUpFromOther } from '../useCases/userSignup';


export default class UserSignUpController{
  
  returnCreateAccount(req: Request, res: Response){
        const { cargo }  = req.body;

        if(cargo === 'usuario'){
          return createSignUpFromUser(req,res);
        }
        if(cargo === 'mototaxi' || cargo === 'entregador' ){
          return createSignUpFromOther(req,res);
        }
  }
}

