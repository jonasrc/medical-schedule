
import React, { useState, useEffect } from "react";

// SERVICES
import patientService from './services/patientService';

function App() {
    const [patientList, setPatients] = useState(null);

    useEffect(() => {
        if(!patientList) {
            getPatients();
        }
    });

    const getPatients = async () => {
        let res = await patientService.getAll();
        console.log(res);
        setPatients(res);
    };

    const renderPatient = patient => {
        return (
            <li key={patient._id} className="list__item patient">
                <h3 className="patient__name">{patient.name}</h3>
                <p className="patient__description">{patient.description}</p>
            </li>
        );
    };

    return (
        <div className="App">
            <ul className="list">
                {(patientList && patientList.length > 0) ? (
                    patientList.map(patient => renderPatient(patient))
                ) : (
                    <p>No patients found</p>
                )}
            </ul>
        </div>
    );
}

export default App;
