import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll()
    res.json(alunos);
  }

  async create(req, res) { // cria um novo usuario com os parametros de dentro de uma req POST
    // TODO
    try {
      const { nome, email, cep, cidade, estado } = req.body;
      const aluno = await Aluno.create({ nome, email, cep, cidade, estado });
      return res.json({ success: true, aluno});
    } catch (error) {
      return res.status(400).json({ message: "Erro", success:false });
    }
  }
  
  async read(req, res) { // le o usuario que vier nos parametros da req (um ID nos parametros)
    // TODO
    try {
      const { id } = req.params;
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(404).json({ message: 'Aluno inválido!',success:false });
      }
      return res.json({ success: true, aluno });
    } catch (error) {
      return res.status(400).json({ message: "Erro", success:false });
    }
  }

  async update(req, res) {
    // TODO
    const { id } = req.params; // o ID vai vir no URL
    const { nome, email, cep, cidade, estado } = req.body; // o resto vem no body

    try {
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(404).json({ error: 'Aluno inválido!', success:false });
      }

      // so troca se tiver o valor especificado no body 
      aluno.nome = nome || aluno.nome;
      aluno.email = email || aluno.email;
      aluno.cep = cep || aluno.cep;
      aluno.cidade = cidade || aluno.cidade;
      aluno.estado = estado || aluno.estado;

      await aluno.save();

      return res.status(200).json({ success:true, aluno });
    } catch (err) {
      return res.status(500).json({ error: 'Erro ao atualizar aluno', success:false, details: err });
    }
  }

  async delete(req, res) {
    // TODO
    const { id } = req.params;
    try {
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(404).json({ success:false, error: 'Aluno inválido!' });
      }
      await aluno.destroy();
      return res.status(204).send({ message: 'Aluno apagado com sucesso!' , success: true });
    } catch (err) {
      return res.status(500).json({ error: 'Erro ao apagar aluno', success:false, details: err});
    }
  }
}

export default new AlunoController();
