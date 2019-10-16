import React, {Component} from 'react';
import './styles.css';
import Formulario from "./formulario"; 

export default class End extends Component {    
    render(){
        return (
            <div className="formulario-square">
                <div className="formulario-logo">
                    <h2>Cadastre-se: </h2>
                </div>
                <Formulario />
            </div>
        );
    }
}