const express = require('express');
const app = express();
const PORT = 3010;

const router = require('./app/router');
app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');
app.use(express.static(__dirname + '/public'));
app.use(router);

//TODO: mettre en place le middleware 404 avec un errorController

app.listen(PORT, () => {
  console.log('server available on http://localhost:3010');
});
