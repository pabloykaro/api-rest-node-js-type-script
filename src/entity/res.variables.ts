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
}
