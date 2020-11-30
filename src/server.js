const express = require('express');
const engine = require('ejs-mate');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { json } = require('express');

const app = express();

//Engine and Views Configurations
app.engine('ejs',engine);
app.set('views',__dirname+'/views');
app.set('view engine','ejs');

//Server Configurations
app.set('port',process.env.PORT||5000);
app.use(express.static(__dirname+'/public'));

//Middlewares
const uri = 'mongodb+srv://admin:1234@clusteruno.ikprp.mongodb.net/utng?retryWrites=true&w=majority'
app.use(morgan('dev'));
app.use(express.urlencoded({
    extended: true,
    type: json
}));
app.use(json());
mongoose.createConnection(uri, {useUnifiedTopology : true, useNewUrlParser: true})
    .then(() => console.log('Conexión exitosa'))
    .catch(err => console.log(err));

//Rutas
app.use(require('./router/router'));

app.listen(app.get('port'),()=>{
    console.log('Server on port: ',app.get('port'));
});