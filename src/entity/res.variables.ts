import { Request } from 'express';
import Joi from 'joi';


export default class Variables {

  input;
  schema: any;
  
  constructor(req: Request){
    this.input = req.body;
  }
  get getEmail(): string{
    this.schema = Joi.object({
       email: Joi.string().email({minDomainSegments: 2, tlds: {allow: true} }).required()
    });
    const {value, error} =  this.schema.validate({email: this.input.email });
    if(error){
     return '0';
    }else{
     return value.email;
    }
  }

  get getCpf(): string{
   this.schema = Joi.object({
    cpf: Joi.string().length(11).required()
    });
    const {value, error} =  this.schema.validate({cpf: this.input.cpf });
    if(error){
     return '0';
    }else{
     return value.cpf;
    }
  }

  get getCnh(): string{
    this.schema = Joi.object({
      cnh: Joi.string().length(10).required()
     });
     const {value, error} =  this.schema.validate({cnh: this.input.cnh });
     if(error){
      return '0';
     }else{
      return value.cnh;
     }
   }

   get getRg(): string{
    this.schema = Joi.object({
      rg: Joi.string().length(11).required()
     });
     const {value, error} =  this.schema.validate({rg: this.input.rg });
     if(error){
      return '0';
     }else{
      return value.rg;
     }
   }

  get getPassword(): string{
    this.schema = Joi.object({
        password: Joi.string().length(8).pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/).required()
     });
     const {value, error} =  this.schema.validate({password: this.input.password });
     if(error){
      return '0';
     }else{
      return value.password;
     }
   }

   get getNome(): string{
    this.schema = Joi.object({
        nome: Joi.string().min(8).required()
     });
     const {value, error} =  this.schema.validate({nome: this.input.nome });
     if(error){
      return '0';
     }else{
      return value.nome;
     }
   }

   get getTelefone(): string{
    this.schema = Joi.object({
        telefone: Joi.string().pattern(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/).length(15).required()
     });
     const {value, error} =  this.schema.validate({telefone: this.input.telefone });
     if(error){
      return '0';
     }else{
      return value.telefone;
     }
   }

   get getCargo(): string{
    this.schema = Joi.object({
        cargo: Joi.string().min(4).required()
     });
     const {value, error} =  this.schema.validate({cargo: this.input.cargo });
     if(error){
      return '0';
     }else{
      return value.cargo;
     }
   }

   get getPlaca(): string{
    this.schema = Joi.object({
        placa: Joi.string().length(7).required()
     });
     const {value, error} =  this.schema.validate({placa: this.input.placa });
     if(error){
      return '0';
     }else{
      return value.placa;
     }
   }

   get getNascimento(): string{
    this.schema = Joi.object({
        data_de_nascimento: Joi.date().required()
     });
     const {value, error} =  this.schema.validate({data_de_nascimento: this.input.data_de_nascimento });
     if(error){
      return '0';
     }else{
      return value.data_de_nascimento;
     }
   }

   get getModeloMoto(): string{
    this.schema = Joi.object({
        modelo_moto: Joi.string().required()
     });
     const {value, error} =  this.schema.validate({modelo_moto: this.input.modelo_moto });
     if(error){
      return '0';
     }else{
      return value.modelo_moto;
     }
   }

   get getAnoMoto(): string{
    this.schema = Joi.object({
        ano_moto: Joi.string().length(4).required()
     });
     const {value, error} =  this.schema.validate({ano_moto: this.input.ano_moto });
     if(error){
      return '0';
     }else{
      return value.ano_moto;
     }
   }

   get getFoto(): string{
    this.schema = Joi.object({
        foto: Joi.string().min(3).required()
     });
     const {value, error} =  this.schema.validate({foto: this.input.foto });
     if(error){
      return '0';
     }else{
      return value.foto;
     }
   }

   get getPagamento(): string{
    this.schema = Joi.object({
        pagamento: Joi.string().min(2).required()
     });
     const {value, error} =  this.schema.validate({pagamento: this.input.pagamento });
     if(error){
      return '0';
     }else{
      return value.pagamento;
     }
   }
   
   get getValorCorrida(): string{
    this.schema = Joi.object({
        valor_corrida: Joi.string().required()
     });
     const {value, error} =  this.schema.validate({valor_corrida: this.input.valor_corrida });
     if(error){
      return '0';
     }else{
      return value.valor_corrida;
     }
   }

   get getNameCreate(): string{
    this.schema = Joi.object({
      name_create: Joi.string().min(8).required()
     });
     const {value, error} =  this.schema.validate({name_create: this.input.name_create });
     if(error){
      return '0';
     }else{
      return value.name_create;
     }
   }

   get getOrigemName(): string{
    this.schema = Joi.object({
      origem_name: Joi.string().min(8).required()
     });
     const {value, error} =  this.schema.validate({origem_name: this.input.origem_name });
     if(error){
      return '0';
     }else{
      return value.origem_name;
     }
   }

   get getDestinoName(): string{
    this.schema = Joi.object({
      destino_name: Joi.string().min(8).required()
     });
     const {value, error} =  this.schema.validate({destino_name: this.input.destino_name });
     if(error){
      return '0';
     }else{
      return value.destino_name;
     }
   }

   get getLatitudePA(): string{
    this.schema = Joi.object({
      latitude_pa: Joi.string().required()
     });
     const {value, error} =  this.schema.validate({latitude_pa: this.input.latitude_pa });
     if(error){
      return '0';
     }else{
      return value.latitude_pa;
     }
   }

   get getLatitudePB(): string{
    this.schema = Joi.object({
      latitude_pb: Joi.string().required()
     });
     const {value, error} =  this.schema.validate({latitude_pb: this.input.latitude_pb });
     if(error){
      return '0';
     }else{
      return value.latitude_pb;
     }
   }

   get getLongitutdePA(): string{
    this.schema = Joi.object({
      longitude_pa: Joi.string().required()
     });
     const {value, error} =  this.schema.validate({longitude_pa: this.input.longitude_pa });
     if(error){
      return '0';
     }else{
      return value.longitude_pa;
     }
   }

   get getLongitutdePB(): string{
    this.schema = Joi.object({
      longitude_pb: Joi.string().required()
     });
     const {value, error} =  this.schema.validate({longitude_pb: this.input.longitude_pb });
     if(error){
      return '0';
     }else{
      return value.longitude_pb;
     }
   }

   get getDistanciaKM(): string{
    this.schema = Joi.object({
      distancia_km: Joi.string().required()
     });
     const {value, error} =  this.schema.validate({distancia_km: this.input.distancia_km });
     if(error){
      return '0';
     }else{
      return value.distancia_km;
     }
   }

   get getTempoCorrida(): string{
    this.schema = Joi.object({
      tempo_min: Joi.string().required()
     });
     const {value, error} =  this.schema.validate({tempo_min: this.input.tempo_min });
     if(error){
      return '0';
     }else{
      return value.tempo_min;
     }
   }

   get getTempoDePartida(): string{
    this.schema = Joi.object({
      tempo_de_partida: Joi.date().required()
     });
     const {value, error} =  this.schema.validate({tempo_de_partida: this.input.tempo_de_partida });
     if(error){
      return '0';
     }else{
      return value.tempo_de_partida;
     }
   }

   get getEmailUserCreate(): string{
    this.schema = Joi.object({
      email_user_create: Joi.string().email({minDomainSegments: 2, tlds: {allow: true} }).required()
     });
     const {value, error} =  this.schema.validate({tempo_de_partida: this.input.email_user_create });
     if(error){
      return '0';
     }else{
      return value.email_user_create;
     }
   }

   get getIdUserCreate(): string{
    this.schema = Joi.object({
      id_user_create: Joi.number().required()
     });
     const {value, error} =  this.schema.validate({id_user_create: this.input.id_user_create });
     if(error){
      return '0';
     }else{
      return value.id_user_create;
     }
   }

   get getIdRun(): string{
    this.schema = Joi.object({
      id_run: Joi.number().required()
     });
     const {value, error} =  this.schema.validate({id_user_create: this.input.id_run });
     if(error){
      return '0';
     }else{
      return value.id_run;
     }
   }

   get getStatusRun(): string{
    this.schema = Joi.object({
      status: Joi.string().required()
     });
     const {value, error} =  this.schema.validate({status: this.input.status });
     if(error){
      return '0';
     }else{
      return value.status;
     }
   }

   get getReturnMoto(): string{
    this.schema = Joi.object({
      return_moto: Joi.number().required()
     });
     const {value, error} =  this.schema.validate({status: this.input.return_moto });
     if(error){
      return '0';
     }else{
      return value.return_moto;
     }
   }

   get getDateCreateAt(): string{
    this.schema = Joi.object({
      create_at: Joi.date()
     });
     const {value, error} =  this.schema.validate({status: this.input.create_at });
     if(error){
      return '0';
     }else{
      return value.create_at;
     }
   }

   get getDateArrivedRun(): string{
    this.schema = Joi.object({
      date_arrived: Joi.date()
     });
     const {value, error} =  this.schema.validate({status: this.input.date_arrived });
     if(error){
      return '0';
     }else{
      return value.date_arrived;
     }
   }

   get getDateFinishRun(): string{
    this.schema = Joi.object({
      date_finish_run: Joi.date()
     });
     const {value, error} =  this.schema.validate({status: this.input.date_finish_run });
     if(error){
      return '0';
     }else{
      return value.date_finish_run;
     }
   }

   get getArrivedRun(): string{
    this.schema = Joi.object({
      arrived_run: Joi.number().required()
     });
     const {value, error} =  this.schema.validate({status: this.input.arrived_run });
     if(error){
      return '0';
     }else{
      return value.arrived_run;
     }
   }
}
