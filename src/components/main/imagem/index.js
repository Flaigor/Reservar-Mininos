import React, {Component} from 'react';
import './styles.css';

export default class Imagem extends Component{
    constructor(props){
        super(props);
        this.state = {
            clicks: 0,
            imagens: [
                'https://a-static.mlcdn.com.br/618x463/painel-festa-lona-minions-150x100cm-x4adesivos/x4adesivos-tray/10476/47f583b821aed15ed0a2695a4d806a94.jpg',
                'https://i.uai.com.br/lRtkC6XJAnGyeUQEgFFcIHzy7Ps=/750x0/imgsapp2.uai.com.br/app/noticia_133890394703/2019/05/22/246356/20190522155004857485e.JPEG',
                'https://ogimg.infoglobo.com.br/in/14450642-9a6-a0b/FT1086A/652/xstyuart-kevin-i-bob-na-plakat-za-minions.jpg.pagespeed.ic.S4QgzJhGHK.jpg',
                'https://i.ytimg.com/vi/vLbNsPD_pm8/maxresdefault.jpg',
            ],
            esquerda: '<',
            direita: '>',
        }
        this.esquerda = this.esquerda.bind(this);
        this.direita = this.direita.bind(this);
    }

    esquerda = () =>{
        if(this.state.clicks !== 0)
            this.setState({ clicks: this.state.clicks - 1 });
    }

    direita = () =>{
        if(this.state.clicks !== 3)
            this.setState({ clicks: this.state.clicks + 1 });
    }


    render(){
        return(
            <div className="product-imagem" >
                    <button className="button-imagem" onClick={this.esquerda}>{this.state.esquerda}</button>
                    <img src={this.state.imagens[this.state.clicks]} />
                    <button className="button-imagem" onClick={this.direita}>{this.state.direita}</button>
            </div>
        );
    }
}