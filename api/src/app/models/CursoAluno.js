import { Model, DataTypes } from 'sequelize';

class CursoAluno extends Model {
  //  TODO
  static init(sequelize) {
    super.init(
      {
        id_aluno: DataTypes.INTEGER,
        id_curso: DataTypes.INTEGER,
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'curso_pessoa', // A CLASSE É CURSOALUNO MAS NA TABELA É CURSO_PESSOA
      }
    );
    
    return this;
  }
}

export default CursoAluno;
