import { Request } from 'express';
import {RowDataPacket} from 'mysql2/promise';
import con from '../database/connection.mysql';
import Variables from '../entity/res.variables';


type UsePropsLoginExists = Promise<{return_user: number}>;

const UseHookLoginExists = async (req: Request): UsePropsLoginExists => {
       const { getEmail, getCpf } = new Variables(req);

       if(getEmail !== '0' && getCpf !== ""){
        const query_login = await con.connectData();
        const [rows] = await query_login.execute("SELECT status_da_conta FROM speed_users WHERE (cpf=? OR email=?)",[getCpf,getEmail]) as RowDataPacket[];
        if(rows.length > 0 ){
          const return_user = 1;
          return {return_user};
        }else{
          const return_user = 0;
          return {return_user};
        }
       }
       const return_user = 1;
       return {return_user};
      
     
         
      
};

export { UseHookLoginExists };