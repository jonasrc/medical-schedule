const mongoose = require('mongoose');
const {Schema} = mongoose;

const patientSchema = new Schema({
    name: String,
    description: String,
    birthdate: Date
});

mongoose.model('patients', patientSchema);