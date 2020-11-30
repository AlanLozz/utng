const {model,Schema} = require('mongoose');

let preguntaSchema = new Schema({
    Titulo: {
        type: String,
        required: true,
    },
    Descripcion: {
        type: String,
        required: true
    },
    solucionada: {
        type: Boolean,
        default: false
    },
},{timestamps: true});

module.exports = model('Pregunta',preguntaSchema);