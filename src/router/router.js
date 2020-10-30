const router = require('express').Router();

var noticias = [
    {
        imagen: '/img/ingles.png',
        titulo: 'Clases de inglés en linea',
        subtitulo: '¡Aprende ingles en la UTNG!'
    },
    {
        imagen: '/img/mexprotect.jpg',
        titulo: 'Alumna Becaria MEXPROTEC 2020',
        subtitulo: ''
    },
    {
        imagen: '/img/unnamed.jpg',
        titulo: 'Beneficiarios Beca Permanencia',
        subtitulo: 'Primer corte Mayo - Agosto del 2020 Campus Dolores y Victoria'
    },
    {
        imagen: '/img/ambiental.png',
        titulo: '4a semana ambiental UTNG',
        subtitulo: 'Celebramos la Biodiversidad'
    },
    {
        imagen: '/img/heroes.jpg',
        titulo: '210 Aniversario del inicio del movimiento independista',
        subtitulo: 'Discurso de celebración'
    },

    
];

router.get('/',(req,res)=>{
    res.render('index',{noticias});
});

router.get('/egresados/:valor*?',(req,res)=>{
    if(req.params.valor == 1){
        res.render('egresados',{pagina : 1});
    } else {
        res.render('egresados',{pagina : 2});
    }
});

module.exports = router;