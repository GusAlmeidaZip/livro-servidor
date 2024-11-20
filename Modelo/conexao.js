const mongoose = require('mongoose');

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

const banco = mongoose.connect('mongodb://localhost:27017/livraria', options)
  .then(() => console.log("Conexão com MongoDB realizada com sucesso"))
  .catch((err) => console.error("Erro ao conectar ao MongoDB:", err));

module.exports = banco;
