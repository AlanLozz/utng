const express = require('express');
const engine = require('ejs-mate');
const morgan = require('morgan');

const app = express();

//Engine and Views Configurations
app.engine('ejs',engine);
app.set('views',__dirname+'/views');
app.set('view engine','ejs');

//Server Configurations
app.set('port',process.env.PORT||5000);
app.use(express.static(__dirname+'/public'));

//Middlewares
app.use(morgan('dev'));

//Rutas
app.use(require('./router/router'));

app.listen(app.get('port'),()=>{
    console.log('Server on port: ',app.get('port'));
});