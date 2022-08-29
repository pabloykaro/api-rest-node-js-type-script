import { Request, Response } from "express";
import { RowDataPacket } from "mysql2";
import con from "../database/connection.mysql"; 
import Variables from "../entity/res.variables";
import { useHookUserRunExists } from "../hook/useHookUserRunExists";


const userCreateRun = async (req: Request, res: Response) => {

  const { return_user } = await useHookUserRunExists(req);

  if(return_user === 1){
    res.status(200).json({create: "existente"});
  }else{
    const { 
      getPagamento, getValorCorrida, getNameCreate, 
      getOrigemName, getDestinoName, getLatitudePA, 
      getLatitudePB, getLongitutdePA, getLongitutdePB, 
      getDistanciaKM, getTempoCorrida, getTempoDePartida, 
      getEmailUserCreate, getIdUserCreate
          } = new Variables(req);
    if(getPagamento === '0' || getValorCorrida === '0' || getNameCreate === '0' ||
      getOrigemName === '0' || getDestinoName === '0'  || getLatitudePA === '0' ||
      getLatitudePB === '0' || getLongitutdePA === '0' || getLongitutdePB === '0' ||
      getDistanciaKM === '0' || getTempoCorrida === '0' || getTempoDePartida === '0' ||
      getEmailUserCreate === '0' || getIdUserCreate === '0'){
          res.status(400).json({create: false});
      }else{
          const query_insert = await con.connectData();
          const [rows] = await query_insert.execute("INSERT INTO speed_runs(pagamento,valor_corrida,name_create,origem_name,destino_name,latitude_pa,longitude_pa,latitude_pb,longitude_pb,distancia_km,tempo_min,tempo_de_partida,email_user_create,id_user_create) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
          [ getPagamento, 
            getValorCorrida, 
            getNameCreate, 
            getOrigemName, 
            getDestinoName, 
            getLatitudePA, 
            getLongitutdePA, 
            getLatitudePB, 
            getLongitutdePB, 
            getDistanciaKM, 
            getTempoCorrida, 
            getTempoDePartida, 
            getEmailUserCreate, 
            getIdUserCreate]) as RowDataPacket[];
            
            if(rows.affectedRows > 0){
              res.status(200).json({create: true});
            }else{
              res.status(400).json({create: false}); 
            }

        }
  }

};

export { userCreateRun };