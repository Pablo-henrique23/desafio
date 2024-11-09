import Curso from '../models/Curso';

class CursoController {
  async index(req, res) {
    const cursos = await Curso.findAll()
    res.json(cursos);
  }
  
  async create(req, res) { // é uma req POST
    const { nome } = req.body; // pega o nome do body
    try {
      if (await Curso.findOne({ where: { nome } })) {
        return res.status(400).json({ sucesso:false, message: 'Curso já cadastrado!' });
      }
      const curso = await Curso.create({ nome });
      return res.json({ sucesso:true, curso});
    } catch (error) {
      return res.status(400).json({ sucesso:false, message: 'Erro ao cadastrar curso.' });
    }
  }

  async read(req, res) {
    const { id } = req.params;
    const curso = await Curso.findByPk(id);
    if (!curso) {
      return res.status(404).json({ sucesso:false, message: 'Curso não encontrado' });
    }
    return res.json({ sucesso:true, curso });
  }

  async update(req, res) {
    const { id } = req.params; // o id vem no url e o nome no body
    const { nome } = req.body;
    const curso = await Curso.findByPk(id);
    if (!curso) {
      return res.status(404).json({ sucesso:false, message: 'Curso não encontrado' });
    }
    try {
      await curso.update({ nome });
      return res.json({ sucesso:true, curso });
    } catch (error) {
      return res.status(400).json({ sucesso:false, message: 'Erro ao atualizar curso' });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    const curso = await Curso.findByPk(id);
    if (!curso) {
      return res.status(404).json({ sucesso: false, message: 'Curso não encontrado' });
    }
    try {
      await curso.destroy();
      return res.json({ sucesso: true, message: 'Curso deletado com sucesso' });
    } catch (error) {
      return res.status(400).json({ sucesso: false, message: 'Erro ao deletar curso' });
    }
  }
}
export default new CursoController();
