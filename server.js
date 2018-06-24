// framework  web simples js
const express =  require('express');

// objeto que representa nossa aplicação
const app = express();

// servir os arquivos estáticos
app.use(express.static(__dirname + '/dist/money-ui'));

app.get('/*', function(req, res){
  res.sendFile(__dirname + '/dist/money-ui/index.html')
})

app.listen(4200);
