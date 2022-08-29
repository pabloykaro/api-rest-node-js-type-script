import { Request, Response } from 'express';
import { userCreateRun } from '../useCases/userCreateRun'; 



export default class UserCreateRunController{
   
   createRun(req: Request, res: Response){
    const { id_user_create } = req.body;

    if(id_user_create){
      userCreateRun(req, res);
    }else{
      res.status(400).json({create: false});
    }

   } 

}