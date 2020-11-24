const ctrl= {};
const path = require('path');
const fs = require('fs-extra');

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
    res.redirect('/bolsaTrabajo');
}

module.exports = ctrl;