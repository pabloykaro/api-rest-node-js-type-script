import { Request , Response } from 'express';
import con from '../database/connection.mysql';
import Variables from '../entity/res.variables'; 
import { UseHookLoginExists } from '../hook/useHookLoginExists';




const createSignUpFromUser = async ( req: Request, res: Response) => {
    
    const { getNascimento, getPassword, getNome, getEmail, getTelefone, getCargo, getCpf } = new Variables(req);
    const { return_user }: boolean | any  = await UseHookLoginExists(req);
    if(getNascimento === '0' || getPassword === '0' 
      || getNome === '0' || getEmail === '0' 
      || getTelefone === '0' || getCargo === '0' 
      || getCpf === '0'){
        res.status(400).json({create: false}); 
    }else{
      if(return_user === 0){

      const insert = await con.connectData();
      const [rows]: any = await insert.execute(
        "INSERT INTO speed_users (nascimento,senha,nome,email,telefone,cargo,cpf) VALUES (?,?,?,?,?,?,?)",
        [
          getNascimento,
          getPassword,
          getNome,
          getEmail,
          getTelefone,
          getCargo,
          getCpf
        ]);
        console.log(rows);
        if(rows.affectedRows > 0){
          return res.status(200).json({create: true});
        }else{
          res.status(400).json({create: false}); 
        }
      }else{
        res.status(400).json({create: false}); 
      }
    }
}

const createSignUpFromOther = async ( req: Request, res: Response) => {
 
  const { 
    getPlaca, getCnh, getModeloMoto, getRg,  
    getAnoMoto, getNascimento, getPassword, 
    getNome, getEmail, getTelefone, getCargo, getCpf 
  } = new Variables(req);
  const { return_user }: boolean | any  = await UseHookLoginExists(req);
  if(getNascimento === '0' || getPassword === '0' 
    || getNome === '0' || getEmail === '0' 
    || getTelefone === '0' || getCargo === '0' 
    || getCpf === '0' || getPlaca === '0' || getCnh === '0' 
    || getModeloMoto === '0' || getRg === '0' 
    || getAnoMoto === '0' ){
      res.status(400).json({create: false}); 
  }else{
    if(return_user === 0){
    const insert = await con.connectData();
    const [rows]: any = await insert.execute(
      "INSERT INTO speed_users (ano,nascimento,rg,modelo,senha,nome,email,telefone,cargo,cnh,placa,cpf) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        getAnoMoto,
        getNascimento,
        getRg,
        getModeloMoto,
        getPassword,
        getNome,
        getEmail,
        getTelefone,
        getCargo,
        getCnh,
        getPlaca,
        getCpf
      ]);
      console.log(rows);
      if(rows.affectedRows > 0){
        return res.status(200).json({create: true});
      }else{
        res.status(400).json({create: false}); 
      }
    }else{
      res.status(400).json({create: false}); 
    }
  }
   
  
}

export { createSignUpFromUser, createSignUpFromOther };