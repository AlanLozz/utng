const {model,Schema} = require('mongoose');

let respuestaSchema = new Schema({
    pregunta: {
        type: Schema.Types.ObjectId,
        ref: 'Pregunta',
        required: true
    },
    respuesta: {
        type: String,
        required: true
    }
});

module.exports = model('Respuesta',respuestaSchema);