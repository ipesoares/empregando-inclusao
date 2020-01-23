var express = require('express');
var router = express.Router();
var pessoas = [];
var BANCO_ARQUIVO = "c:/tmp/bancoArquivo.js";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { pessoas: pessoas});
});

router.get('/cadastrados', function(req, res, next) {
// ------------------------------------
  var fs = require('fs');
  fs.readFile(BANCO_ARQUIVO, function read(err, data){
    if (err){
      throw err;
    }
    pessoas = JSON.parse(data);
    res.render('cadastrados', { pessoas: pessoas});
  });
// ----------------------------------------------
});

router.post('/', function(req, res, next) {
var nome = req.body.nome;
  hash = {
    nome: req.body.nome,
    enquadramento: req.body.enquadramento
  }
  pessoas.push(hash);

//escrevendo dados do form em arquivo para não
var fs = require('fs');
  fs.writeFile(BANCO_ARQUIVO, JSON.stringify(pessoas), function(err){
    if(err){
      return console.log(err)
    }

    console.log("o arquivo foi salvo");
  });
  res.render('index', { pessoas: pessoas });
});
module.exports = router;
