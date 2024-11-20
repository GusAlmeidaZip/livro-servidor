var express = require('express');
const { default: mongoose } = require('mongoose');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


mongoose.connect("mongodb+srv://gusalmeida11:<L6Wgx1YkuaKnBQBl>@cluster0.9t66i.mongodb.net/")
.then(() => console.log ("Deu boa"))
.catch(() => console.log("ruim"))
//tem 2 conexão nn sei oq funciona mas pqp q trablho desgraçado vou apagar uma das conexão nn perdão prof mas meu deus to enloquecendo fazendo isso juro acho que virei umas 2 noites fazendo isso
//vou coringar aqui kkkkkkk eu nn aguento mais e nem me formei 
//materia desolada por deus espero nunca mais mexer com isso programo joguinho faz 2 anos e meu deus cara kkkkkkk graça a deus que nunca toquei nessa linguagem maldita junto com esse servidor lixo de banco de dados
//novamente perdão sei que nn é sua culpa so queria desabafar msm <3 

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://gusalmeida11:<L6Wgx1YkuaKnBQBl>@cluster0.9t66i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
