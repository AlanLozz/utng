const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const cv = multer({
    dest: path.join(__dirname,'../public/temp')
});
const ctrl = require('../controller/index');

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

var bolsa = [
    {
        imagen : 'https://altaglatam.com/wp-content/uploads/2015/03/COCA-COLA-LOGO.jpg',
        titulo: 'Practicante RH',
        descripcion: 'Se solicita a un practicante del area de recursos humanos, apoyo economico a tratar, de preferencia estudiante cursando su septimo cuatrimestre.',
        empresa: 'Coca - Cola'
    },
    {
        imagen : 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Pepsi_logo_2014.svg',
        titulo: 'Diseñador Grafico',
        descripcion: 'Se solicita practicante del area de diseño grafico, apoyo economico fijo, solo estudiantes de sexto cuatrimestre en adelante',
        empresa: 'Pepsi'
    },
]

router.get('/',(req,res)=>{
    res.render('index',{noticias});
});

//Docentes
    router.get('/cuerposac', (req,res)=> {
        res.render('cuerposAcademicos');
    });

    router.get('/investigaciones',(req,res)=> {
        res.render('investigaciones');
    });

    router.get('/academiaS',(req,res) =>{
        res.render('academias');
    });

//Egresados
    router.get('/bolsaTrabajo',(req,res)=>{
        res.render('bolsaTrabajo',{bolsa});
    });

    router.get('/seguimientoE',(req,res)=>{
        res.render('seguimientoEgresados');
    });

    router.get('/capacitacion',(req,res)=>{
        res.render('capacitacion');
    });

    router.post('/subircv',cv.single('file'),ctrl.cv);

//Foro
    router.get('/foro',(req,res) => {
        res.render('foro');
    });

    router.post('/saveQuestion',ctrl.saveQuestion);

    router.get('/getPreguntas', ctrl.getPreguntas);

//Aspirantes
    router.get('/aspirantes',(req,res)=>{
        res.render('aspirantes');
    });

    router.get('/aspirantes1',(req,res)=>{
        res.render('aspirantes1');
    });

module.exports = router;