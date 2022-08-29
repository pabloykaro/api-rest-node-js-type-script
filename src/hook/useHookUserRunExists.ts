import { Request } from 'express';
import { RowDataPacket } from 'mysql2/promise';
import con from '../database/connection.mysql';
import Variables from '../entity/res.variables';


type UsePropsLoginExists = Promise<{return_user: number}>;

const useHookUserRunExists = async (req: Request): UsePropsLoginExists => {
       const { getIdUserCreate } = new Variables(req);

       if(getIdUserCreate !== '0'){
        const query_login = await con.connectData();
        const [rows] = await query_login.execute("SELECT * FROM speed_runs WHERE id_user_create = ? AND status IN(?,?)",[getIdUserCreate,"find","in_route"]) as RowDataPacket[];
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

export { useHookUserRunExists };