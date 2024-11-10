import Aluno from '../../models/Aluno';
import Curso from '../../models/Curso';
import CursoAluno from '../../models/CursoAluno';

class AtribuirCursoAlunoService {
  async execute({ id_aluno, id_curso }) {
    // TODO
    try {
      const aluno = await Aluno.findByPk(id_aluno);
      const curso = await Curso.findByPk(id_curso);
      if (!aluno || !curso) {
        return false;
      }
      await CursoAluno.create({ id_aluno, id_curso });
    } catch (error) {
      return false;
    }
    return true;
  }

  async get_courses( id_aluno ) { 
    try {
      const cursos = await CursoAluno.findAll({
        where: { id_aluno },
        attributes: ['id_curso'],
        include: [
          {
            model: Curso,
            as: 'curso',
            attributes: ['nome']
          }
        ]
      });
      if (!cursos) {
        return false;
      }
      const cursos_aluno = cursos.reduce((acc, curr) => {
        acc[curr.id_curso] = curr.curso.nome;
        return acc;
      }, {});
      return cursos_aluno; /* vai retornar algo do genero { ID_DO_CURSO: NOME_DO_CURSO,
                                                            ID_DO_CURSO: NOME_DO_CURSO } */
    } catch (error) {
      return false;
    }
  }
}

export default new AtribuirCursoAlunoService();
