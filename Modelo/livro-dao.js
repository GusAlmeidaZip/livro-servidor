const Livro = require('./livro-schema');

// Função para obter todos os livros
const obterLivros = async () => {
  return await Livro.find();
};

// Função para incluir um novo livro
const incluir = async (livro) => {
  return await Livro.create(livro);
};

// Função para excluir um livro pelo código (ID)
const excluir = async (codigo) => {
  return await Livro.deleteOne({ _id: codigo });
};

// Exportar as funções no padrão de módulo do JavaScript
module.exports = {
  obterLivros,
  incluir,
  excluir
};
