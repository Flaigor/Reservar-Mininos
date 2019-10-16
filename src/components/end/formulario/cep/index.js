import React, {Component} from 'react';
import ViaCep from 'react-via-cep';

export default class Cep extends Component {
    constructor(props){
        super(props);
        this.state = {
            cep: ''
        };
        this.handleChangeCep = this.handleChangeCep.bind(this);
        this.handleSuccess = this.handleSuccess.bind(this);
    }

    handleChangeCep = (evt) => {
        this.setState({ cep: evt.target.value })
    }
    
    handleSuccess = (cepData) => {
        console.log(cepData);
    }

    render(){
        return(
            <div>
                <p>CEP:</p>
                <ViaCep cep={this.state.cep} onSuccess={this.handleSuccess} lazy>
                { ({ data, loading, error, fetch }) => {
                    if (loading) {
                    return <p>loading...</p>
                    }
                    if (error) {
                    return <div>
                        <input onChange={this.handleChangeCep} value={this.state.cep} placeholder="CEP" type="text" onBlur={fetch} />
                    </div>
                    }
                    if (data) {
                    return <div> 
                            <input name="cep" type="text" id="cep" value={data.cep} />
                            <p>Rua: </p>
                            <input name="rua" type="text" id="rua" value={data.logradouro} />
                            <p>Cidade: </p>
                            <input name="cidade" type="text" id="cidade" value={data.localidade} />
                            <p>Estado: </p>
                            <input name="uf" type="text" id="uf" value={data.uf} />
                            <p>Bairro: </p>
                            <input name="bairro" type="text" id="bairro" value={data.bairro} />
                        </div>
                    }
                    return <div>
                        <input onChange={this.handleChangeCep} value={this.state.cep} placeholder="CEP" type="text" onBlur={fetch} />
                    </div>
                }}
                </ViaCep>
            </div>
        );
    }
}