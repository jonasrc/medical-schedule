const mongoose = require('mongoose');
const Patient = mongoose.model('patients');

module.exports = (app) => {

    app.get(`/api/patients`, async (req, res) => {
        let patientList = await Patient.find();
        return res.status(200).send(patientList);
    });

    app.get(`/api/patients/:id`, async (req, res) => {
        const {id} = req.params;
        let patientList = await Patient.findById(id);
        return res.status(200).send(patientList);
    });

    app.post(`/api/patients`, async (req, res) => {
        let newPatient = await Patient.create(req.body);

        return res.status(201).send({
            error: false,
            newPatient
        })
    });

    app.put(`/api/patients/:id`, async (req, res) => {
        const {id} = req.params;
        let modifiedPatient = await Patient.findByIdAndUpdate(id, req.body);

        return res.status(202).send({
            error: false,
            modifiedPatient
        })

    });

    app.delete(`/api/patients/:id`, async (req, res) => {
        const {id} = req.params;
        let product = await Patient.findByIdAndDelete(id);

        return res.status(202).send({
            error: false,
            product
        })

    })

};