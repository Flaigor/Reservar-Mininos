import React, {Component} from 'react';
import './styles.css';
import Cep from './cep';

export default class Formulario extends Component {
    constructor(props){
        super(props);
        this.cadastro = this.cadastro.bind(this);
        this.email = document.getElementById('email');
    }

    cadastro = () => {
        if( document.getElementById('email').value != '' )
            alert("Seu pedido foi cadastrado. Parabéns!!!");
        else
            alert("Precisamos do seu E-mail.");
    }

    render(){
        return(
            <div className="formulario-itens">
                <strong>
                    <Cep />
                </strong>
                <strong>
                    <p>Complemento: </p>
                    <input name="complemento" type="text" id="complemento" />
                    <p>Numero: </p>
                    <input name="numero" type="text" id="numero" />
                    <p>Nome: </p>
                    <input name="nome" type="text" id="nome" />
                    <p>Telefone: </p>
                    <input name="telefone" type="text" id="telefone" />
                    <p>Email: </p>
                    <input name="email" type="text" id="email" />
                    <br />
                    <button onClick={this.cadastro}>Reservar!</button>
                </strong>
                <strong>
                    <div className="formulario-contato">
                        <p>Algum problema?</p>
                        <p> duvida? Entre em cotato conosco:</p>
                        <br />
                        <img src='https://www.aner.org.br/v2/wp-content/uploads/2018/10/telefone.png' />(XX)XXXXX-XXXX
                        <br />
                        <img src='https://cdn.pixabay.com/photo/2016/06/13/17/30/mail-1454735_960_720.png'/>email@email.com.br
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <p>Feito por Igor Huayck Gonçalves</p>
                    </div> 
                </strong>
            </div>
        );
    }
}