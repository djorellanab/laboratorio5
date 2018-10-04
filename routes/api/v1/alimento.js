const express =  require('express');
let app = express();   
const  {create, read, update, _delete} = require('../../../content/content.js');

// ============================
// Mostrar todos los alimentos
// ============================
app.get('/alimento/:id?',  (req, res, next) => {
    let desde = req.query.desde || process.env.DESDE ;
    desde = Number(desde);
    let  limite = req.query.limite || process.env.LIMITE;
    limite = Number(limite);
    let id = req.params.id;
    if(id){
        let alimento = read(id);
        if (alimento === null){
            return res.status(404).json({
                ok: false,
                err: "Elemento no encontrado"
            });
        }
        else{
            return res.status(200).json({
                ok: true,
                alimento
            });
        }
    }
    else{
        let alimentos = read(undefined, desde, limite);
        return res.status(200).json({
            ok: true,
            alimentos
        });
    }
});

// ============================
// Crear una nuevo alimento
// ============================
app.post('/alimento', (req, res, next) => {
    let body = req.body;
    let alimento = create(body);
    return res.status(201).json({
        ok: true,
        alimento
    });
});

// ============================
// Actualizar un alimento
// ============================
app.put('/categoria/:id', (req, res, next) => {
    let id = req.params.id;
    let body = req.body;
    let alimento = update(body);
    if(alimento !== null){
        return res.status(204).json({
            ok: true,
            alimento
        });
    }
    else{
        return res.status(404).json({
            ok: false,
            err: "Elemento no encontrado"
        });
    }
});

// ============================
// Eliminar una alimento
// ============================
app.delete('/categoria/:id', [verificarToken, verificarAdmin_Role], (req, res) => {
    let id =  req.params.id;
    let alimento = _delete(id);
    if (alimento !== null){
        return res.status(204).json({
            ok: true,
            alimento
        });
    }
    else{
        return res.status(404).json({
            ok: false,
            err: "Elemento no encontrado"
        });
    }
});

module.exports = app;