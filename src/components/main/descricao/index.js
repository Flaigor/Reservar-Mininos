import React, {Component} from 'react';
import './styles.css';

export default class Descricao extends Component {
    constructor(props) {
        super(props);
        this.state = {
          clicks:1,
          show:true
        };
    }

    menos = () => {
        if(this.state.clicks !== 1)
            this.setState({ clicks: this.state.clicks - 1 });
    }

    mais = () => {
        if(this.state.clicks !== 100)
            this.setState({ clicks: this.state.clicks + 1 });
    }

    render(){
        return(
            <div>
                <div className="product-text">
                    <h2>Boneco Minion:</h2>
                    <p>Miniatura do personagem mais famoso do filme "Meu malvado favorito"!</p>
                    <p>Venha se divertir com Minions, criaturinhas simpáticas que estão a serviço mau.</p>
                    <p>São diversos modelos de minions, um mais divertido que o outro!</p>
                    <p>Reserve já seu minion preferido:</p>
                    <br />
                    <br />
                    <h4>Quantidade:</h4>
                    <button className="button-product" onClick={this.menos.bind(this)}> - </button>
                    <input className="input-product" value={ this.state.clicks } />
                    <button className="button-product" onClick={this.mais.bind(this)}> + </button>
                </div>
                
            </div>
        );
    }
}