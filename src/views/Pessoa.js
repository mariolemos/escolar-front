import React from 'react';
import { withRouter } from 'react-router-dom';
import Card from '../components/Card';
import FormGroup from '../components/FormGroup';
import Responsavel from '../components/pessoa/Responsavel';
import Aluno from '../components/pessoa/Aluno';
import Condutor from '../components/pessoa/Condutor';
import AlunoService from '../app/service/AlunoService';
import LocalStorageService from '../app/service/LocalStorageService';

class Pessoa extends React.Component{

    constructor(){
        super();
        this.service = new AlunoService;
    }
   
    state = {
        perfil:null,
        titulo:"Cadastro",
        pessoa:{
            nome:"",
            cpf:"",
            rg:"",
            dtNascimento:"",
            enderecos:[],
        },
        endereco:{
            cep:"",
            uf:"",
            cidade:"",
            bairro:"" ,
            rua:"" ,
            numero:"", 
            complemento:"" 
        },aluno:{

        },
        contatos:[]
    }

    componentDidMount(){
        const usuarioEdit = LocalStorageService.obterItem("_usuario_edit");
        if(usuarioEdit){
            this.setState({
                pessoa:usuarioEdit.pessoa,
                endereco:usuarioEdit.endereco,
                celular:usuarioEdit.celular,
                email:usuarioEdit.email,
                titulo:usuarioEdit.titulo,
                idCelular:usuarioEdit.idCelular,
                idEmail:usuarioEdit.idEmail
            });
            if(usuarioEdit.pessoa.serie){
                this.setState({
                    perfil:"3",
                });
                this.setState({aluno:{
                    ...this.state.aluno,
                    mae:usuarioEdit.pessoa.mae,
                    pai:usuarioEdit.pessoa.pai,
                    convMedico:usuarioEdit.pessoa.convMedico,
                    serie:usuarioEdit.pessoa.serie,
                    turma:usuarioEdit.pessoa.turma,
                    turno:usuarioEdit.pessoa.turno
                }});
            }
            console.log(usuarioEdit);
        } 
    }

    salvar = () => {
        this.state.pessoa.enderecos.push(this.state.endereco);
        const pessoa = this.state.pessoa;
        Object.assign(pessoa,this.state.aluno);
        
        this.service.salvar(pessoa).then(response =>{            
            this.props.history.push('/pessoa');
        }).catch(erro =>{
            console.log(erro);
        })
    }

    render(){
        return(            
            <Card className="mt-5" title={this.state.titulo}>
            <form>
                <FormGroup label="Dados Pessois">
                    <div className="row mt-3">
                        <div className="col-12">
                            <div className="input-group input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-sm">Nome</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                                   value={this.state.pessoa.nome}
                                   onChange={e => this.setState({pessoa:{
                                        ...this.state.pessoa,
                                        nome: e.target.value
                                    }})}
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="input-group input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-sm">CPF</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" 
                               value={this.state.pessoa.cpf}
                               onChange={e => this.setState({pessoa:{
                                ...this.state.pessoa,
                                cpf: e.target.value
                            }})}
                        />
                            </div>
                        </div>
                        <div className="col">
                            <div className="input-group input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-sm">RG</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" 
                               value={this.state.pessoa.rg}
                               onChange={e => this.setState({pessoa:{
                                ...this.state.pessoa,
                                rg: e.target.value
                            }})}
                        />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="input-group input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-sm">Nascimento</span>
                                <input type="date" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" 
                               value={this.state.pessoa.dtNascimento}
                               onChange={e => this.setState({pessoa:{
                                ...this.state.pessoa,
                                dtNascimento: e.target.value
                            }})}
                        />
                            </div>
                        </div>
                        <div className="col">
                            <div className="input-group input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-sm">Perfil</span>
                                <select className="form-select form-select" aria-label=".form-select-sm example" onChange={e => this.setState({perfil:e.target.value})}>
                                    <option disabled selected >Selecione tipo de Pessoa</option>
                                    <option value="1">Responsável</option>
                                    <option value="2">Condutor</option>
                                    <option value="3">Aluno</option>
                                </select>
                            </div>
                        </div>
                        {this.state.perfil == 1?
                            <Responsavel />
                            :this.state.perfil == 2?
                            <Condutor />
                            :this.state.perfil == 3?
                            <Aluno aluno={this.state.aluno}/>
                            :false
                        }
                    </div>
                </FormGroup>
                {/* <FormGroup label="Endereço">
                    <div className="row mt-3">
                        <div className="col-4">
                            <div className="input-group input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-sm">CEP</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                                onChange={e => this.setState({endereco:{
                                    ...this.state.endereco,
                                    cep:e.target.value
                                    }})}/>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="input-group input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-sm">UF</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                                onChange={e => this.setState({endereco:{
                                    ...this.state.endereco,
                                    uf:e.target.value}})}/>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="input-group input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-sm">Cidade</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                                onChange={e => this.setState({endereco:{
                                    ...this.state.endereco,
                                    cidade:e.target.value}})}/>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="input-group input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-sm">Bairro</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                                onChange={e => this.setState({endereco:{
                                    ...this.state.endereco,
                                    bairro:e.target.value}})}/>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="input-group input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-sm">Rua</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                                onChange={e => this.setState({endereco:{
                                    ...this.state.endereco,
                                    rua:e.target.value
                                    }})}/>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="input-group input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-sm">Numero</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                                onChange={e => this.setState({endereco:{
                                    ...this.state.endereco,
                                    numero:e.target.value
                                    }})}/>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="input-group input-group mb-3">
                                <span className="input-group-text" id="inputGroup-sizing-sm">Complemento</span>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                                onChange={e => this.setState({endereco:{
                                    ...this.state.endereco,
                                    complemento:e.target.value
                                    }})}/>
                            </div>
                        </div>
                    </div>
                </FormGroup> */}
                <div>
                    <button type="button" className="btn btn-primary" onClick={this.salvar}>Salvar</button>
                </div>
            </form>
        </Card>
        );
    }
}

export default withRouter(Pessoa); 