const express = require('express');
const router = express.Router();
const livroDao = require('../Modelo/livro-dao');

// Rota GET para obter todos os livros
router.get('/', async (req, res) => {
  try {
    const livros = await livroDao.obterLivros();
    res.json(livros); // Retorna todos os livros em formato JSON
  } catch (error) {
    res.status(500).json({ message: "Erro ao obter livros", error: error.message });
  }
});

// Rota POST para incluir um novo livro
router.post('/', async (req, res) => {
  const livro = req.body; // O livro é passado no corpo da requisição
  try {
    await livroDao.incluir(livro);
    res.status(201).json({ message: 'Livro incluído com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao incluir livro', error: error.message });
  }
});

// Rota DELETE para excluir um livro pelo ID
router.delete('/:codigo', async (req, res) => {
  const codigo = req.params.codigo; // Extrai o código (ID) da URL
  try {
    const resultado = await livroDao.excluir(codigo);
    if (resultado.deletedCount > 0) {
      res.json({ message: 'Livro excluído com sucesso!' });
    } else {
      res.status(404).json({ message: 'Livro não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir livro', error: error.message });
  }
});

module.exports = router;

const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const livrosRouter = require('../routes/users'); // Importando as rotas de livros

const app = express();

// Configuração do middleware
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Usando as rotas de livros
app.use('/livros', livrosRouter);

module.exports = app;

