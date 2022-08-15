import { Request } from 'express';
import con from '../database/connection.mysql';
import Variables from '../entity/res.variables';

 

const UseHookLoginExists = async (req: Request) => {
       const { getEmail, getCpf } = new Variables(req);

       if(getEmail !== '0' && getCpf !== ""){
        const query_login = await con.connectData();
        const [rows]: any = await query_login.execute("SELECT status_da_conta FROM speed_users WHERE (cpf=? OR email=?)",[getCpf,getEmail]);
        if(rows.length > 0 ){
          const return_user = 1;
          return {return_user};
        }else{
          const return_user = 0;
          return {return_user};
        }
       }
     
         
      
};

export { UseHookLoginExists };