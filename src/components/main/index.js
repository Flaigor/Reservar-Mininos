import React, {Component} from 'react';
import './styles.css';
import Descricao from './descricao';
import Imagem from './imagem';

export default class Main extends Component {

    render(){
        return (
            <div className="product-square">
                <Imagem />
                <Descricao />
            </div>
        );
    }
}