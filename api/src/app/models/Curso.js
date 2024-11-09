import { Model, DataTypes } from 'sequelize';

class Curso extends Model {
  //  TODO
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'curso',
      }
    );

    return this;
  }
}

export default Curso;
