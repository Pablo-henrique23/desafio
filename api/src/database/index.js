import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import Aluno from '../app/models/Aluno';
import Curso from '../app/models/Curso';
import CursoAluno from '../app/models/CursoAluno';

const models = [Aluno, Curso, CursoAluno];

class Database {
  constructor() {
    this.init();
  }

  init() {
	  //console.log(databaseConfig);
	  // alterei umas coisas aqui porque o Sequelize nao aceita objeto, entao precisei 'hardcodar' um pouco ali. Deixei o loggin por precaução
	  this.connection = new Sequelize(
	    databaseConfig.database,
	    databaseConfig.username,
	    databaseConfig.password,
	    {
		    host: databaseConfig.host,
		    dialect: databaseConfig.dialect,
		    port: databaseConfig.port, 
		    logging: console.log,
	    }
	  );
	  models
		  .map(model => model.init(this.connection))
		  .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
