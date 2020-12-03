const ctrl= {};
const path = require('path');
const fs = require('fs-extra');
const Pregunta = require('../models/Pregunta');

function genName() {
    const posible = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let random = 0;

    for(let i=0; i < 6; i++){
        random += posible.charAt(Math.floor(Math.random()*posible.length));
    }

    return random;
}

ctrl.cv = (req,res) => {
    var ext = path.extname(req.file.originalname).toLowerCase(),
        name = genName(),
        tempath = req.file.path,
        finalpath = path.resolve(`src/public/cvs/${name}${ext}`);

    fs.rename(tempath,finalpath);
    req.flash('message','Tu curriculum se envio correctamente');
    res.redirect('/bolsaTrabajo');
}

ctrl.saveQuestion = async(req,res) => {
    let {Titulo, Descripcion} = req.body;
    console.log(Titulo, Descripcion);
    var pregunta = new Pregunta({
        Titulo,
        Descripcion
    }).save();

    req.flash('message','Pregunta añadida exitosamente');
    
    res.redirect('/foro')
}

ctrl.getPreguntas = async(req,res) => {
    const preguntas = await Pregunta.find();
    res.json(preguntas);
};

module.exports = ctrl;