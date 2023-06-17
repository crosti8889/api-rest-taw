const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const app = express();

//setting app
app.set('port',3001)

//middlewares
app.use(express.json());
app.use(express.urlencoded({entended: false}));

//routes
app.get('/user',(req,res)=>{
    res.json({ "id": "0001",
                "name": "Juan Perez",
                "fono": "912059385",
                "edad": "25"});
});

//levantando el servicio HTTP
//app.listen(app.get('port'),()=>{
//    console.log(`Servidor iniciado! ${app.get('port')}`);
//} );

const sslServer = https.createServer(
    {
        key: fs.readFileSync(path.join(__dirname,'cert','key.pem')),
        cert: fs.readFileSync(path.join(__dirname,'cert','cert.pem'))
    },
    app
);

sslServer.listen(app.get('port'),()=> 
console.log(`Servidor iniciado! ${app.get('port')}`));