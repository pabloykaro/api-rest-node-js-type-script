import mysql from 'mysql2/promise';

interface ConfigProps{
  host: string;
  user: string;
  password: string;
  database: string;

}

 class Connection{

  config_mysql = {
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'db_speedmoto',
  } as ConfigProps ;

  async connectData(){
   
    const connection = await mysql.createConnection(this.config_mysql);
    return connection; 
    
  }
}
const con = new Connection;
export default con;
