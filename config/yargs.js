const puerto ={
    alias:  'p',
    demand: true,
    desc: "puerto"
};

const argv = require('yargs')
    .command('serve', 'puerto para correr app express',{puerto} )
    .help()
    .argv;

 let getComando = () => argv._[0];

 module.exports = {argv, getComando}