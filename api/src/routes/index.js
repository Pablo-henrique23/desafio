import { Router } from 'express';

import AlunosController from '../app/controllers/AlunoController';
import CursoController from '../app/controllers/CursoController';
import LogicTestController from '../app/services/LogicTestService';
// import CursoAlunoController  from '../app/controllers/CursoAlunoController';

const routes = new Router();

// Aluno
routes.get('/alunos', AlunosController.index); // pag inicial
routes.post('/alunos/create', AlunosController.create);              // C
routes.get('/alunos/:id', AlunosController.read);                    // R
routes.put('/alunos/:id', AlunosController.update);                  // U
routes.delete('/alunos/:id', AlunosController.delete);               // D

// Curso
routes.get('/cursos', CursoController.index); // pag inicial
routes.post('/cursos/create', CursoController.create);               // C
routes.get('/cursos/:id', CursoController.read);                     // R
routes.put('/cursos/:id', CursoController.update);                   // U
routes.delete('/cursos/:id', CursoController.delete);                // D


// Curso Aluno
// routes.get('/cursosalunos', CursoAlunoController.index); // pag inicial
// routes.post('/cursosalunos/create', CursoAlunoController.create);    // C
// routes.get('/cursosalunos/:id', CursoAlunoController.read);          // R
// routes.put('/cursosalunos/:id', CursoAlunoController.update);        // U
// routes.delete('/cursosalunos/:id', CursoAlunoController.delete);     // D

export default routes;
