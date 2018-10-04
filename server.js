const  {argv, getComando} = require('./config/yargs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())

app.use(require('./routes/index.js'));

let getPort = () =>
{
    let comando = getComando();
    switch(comando)
    {
        case "serve":
        {
            return argv.puerto;
        }
        default:
        {
            throw {err:-1, message:"Comando no reconocido"}
            break;
        }
    }   
}

let getExpress = async() =>
{
    let port = await    getPort();
    app.listen( port, () => {
        console.log(`Escuchando en el puerto ${port}`);
    })
}

getExpress();