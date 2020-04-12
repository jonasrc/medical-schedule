import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"

import MainPage from './components/pages/Main';
import InsurancePlansPage from './components/pages/InsurancePlans';
import AppointmentsPage from './components/pages/Appointments';

export default function App() {
    return (
        <main>
            <Switch>
                <Route path="/" component={MainPage} />
                <Route path="/convenios" component={InsurancePlansPage} />
                <Route path="/consultas" component={AppointmentsPage} />
            </Switch>
        </main>
    )
}