import { Request, Response } from "express";
import con from '../database/connection.mysql';
import { RowDataPacket } from "mysql2";
import { format, parseISO } from "date-fns";


const findByRunOpen = async (req: Request, res: Response) => {
     const queryGetFilterRuns = await con.connectData();
     const { id_run }  = req.params;
     const status_run = "find";
     if(!id_run){
        const [rows] = await queryGetFilterRuns.execute("SELECT * FROM speed_runs WHERE status=?",[status_run]) as RowDataPacket[];
        if(rows.length === 0){
         res.status(400).json({message: 'not_found_run'});
        }else{
         const dados_all = rows.map((dados: any) => { 
            const create_at = format(dados.create_at,'d/MM/y H:m:s');
            const date_arrived = format(dados.date_arrived,'d/MM/y H:m:s');
            const date_finish_run = format(dados.date_finish_run,'d/MM/y H:m:s');
            const tempo_de_partida = `${format(dados.create_at,'d/MM/y')} ${dados.tempo_de_partida}`;
            const nameAndLastName = `${dados.name_create.split(' ',2)[0]} ${dados.name_create.split(' ',2)[1]}`;

            return {...dados,create_at,date_arrived,date_finish_run,tempo_de_partida,nameAndLastName};
         });
         res.status(200).json(dados_all);
        }
     }else{
        const [rows] = await queryGetFilterRuns.execute("SELECT * FROM speed_runs WHERE id_run= ? AND status=?",[id_run,status_run]) as RowDataPacket[];
        if(rows.length === 0){
         res.status(400).json({message: 'not_found_run'});
        }else{
        res.status(200).json(rows);
        }
     }
 };
 

export { findByRunOpen };