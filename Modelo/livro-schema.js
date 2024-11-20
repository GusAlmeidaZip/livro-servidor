const mongoose = require('mongoose');
require('./conexao');

const LivroSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  anoPublicacao: { type: Number, required: true },
  preco: { type: Number, required: true }
});

const Livro = mongoose.model('Livro', LivroSchema, 'livros'); // Associando à coleção 'livros'
module.exports = Livro;
