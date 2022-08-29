import { Request, Response } from "express";
import con from "../database/connection.mysql"; 
import Variables from "../entity/res.variables";




const userLoginWithEmail = async(req: Request, res: Response) => {
    const select = await con.connectData();
  
    const { getEmail, getPassword } = new Variables(req);

    if(getEmail !== '0' && getPassword !== '0'){

      const [rows]: any = await select.execute("SELECT * FROM speed_users WHERE senha = ? AND email = ? ",[getPassword,getEmail]);
      //console.log(rows[0]);
      const return_length: any = rows;

    if(return_length.length > 0){

      return res.status(200).json(rows);  
    }else{
      res.status(400).json({message: "account_wrong"}); 
    }}else{
      res.status(400).json({message: "account_wrong"}); 
    }
    
  
}

const userLoginWithCpf = async(req: Request, res: Response) => {
  const select = await con.connectData();
  const { getCpf, getPassword } = new Variables(req);
  if(getCpf !== '0' && getPassword !== '0'){
    const [rows] = await select.execute("SELECT * FROM speed_users WHERE senha = ? AND email = ? ",[getPassword,getCpf]);
    const return_length: any = rows;

  if(return_length.length > 0){
    return res.status(200).json(rows);  
  }else{
    res.status(400).json({message: "account_wrong"}); 
  }}else{
    res.status(400).json({message: "account_wrong"}); 
  }

}

export {userLoginWithEmail, userLoginWithCpf };