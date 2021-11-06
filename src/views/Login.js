import React from 'react';
import Card from '../components/Card';
import FormGroup from '../components/FormGroup';
import { withRouter } from 'react-router-dom';
// import UsuarioSerice from '../app/service/usuarioService';
// import ValidarUsuario from '../app/service/ValidarUsuario';
// import { mensagemErro } from '../components/toastr';

import {MDBInput } from 'mdbreact';



class Login extends React.Component{

    state = {
        email: '',
        senha:'',
    }

    constructor(){
        super();
        // this.service = new UsuarioSerice;
    }
    
    entrar = () => {
        this.service.autenticar({
            email: this.state.email,
            senha: this.state.senha
        }).then(response => {
            // ValidarUsuario.login(response.data);
        }).catch(erro => {
            try {            
                // mensagemErro(erro.response.data);
            } catch (error) {
                // mensagemErro("Sistema Indisponível");
            }
        });
    }

    render(){
        return(            
            <div className="row mt-5">
                
                <div className="col-md-6" style={ {position:'relative', left: '300px'}}>
                    <div className="bs-docs-section">
                        <Card className="mt-5" title="Login">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                                            <FormGroup label="" htmlFor="inputEmail">
                                                <label className="mt-4 mb-2">Email: </label>
                                            <MDBInput label="" icon="envelope" group type="email" validate error="wrong"
                                                    success="right"
                                                    id="inputEmail"
                                                    value={this.state.email}
                                                    onChange={e => this.setState({email: e.target.value})}
                                                />                   
                                                <label className="mt-4 mb-2">Password: </label>               
                                            <MDBInput label="" icon="lock" group type="password"
                                                value={this.state.senha}
                                                onChange={e => this.setState({senha: e.target.value})}
                                                id="inputPassword"
                                                validate />
                                            </FormGroup>
                                            <center>
                                                <button onClick={this.entrar} type="button" className="btn btn-primary col-12 mt-4">Login</button>                                        
                                            </center>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Login); 