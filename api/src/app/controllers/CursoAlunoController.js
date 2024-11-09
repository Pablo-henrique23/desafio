import CursoAluno from '../models/CursoAluno';

class CursoAlunoController {
  async index(req, res) {
    const cursoaluno = await CursoAluno.findAll()
    res.json(cursoaluno);
  }
}
export default new CursoAlunoController();
