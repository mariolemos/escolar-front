import React from 'react';
import Select from 'react-select'


class Aluno extends React.Component{
    state = {
        turno:[
            {value:'1', label:"Matunito"},
            {value:'2', label:"Vespertino"}
        ]
    }
    render(){
        return(
            <>
            <div className="col-12">
                <div className="input-group input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Colegio</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                     value={this.props.aluno.colegio}
                     onChange={e => this.props.aluno.colegio = e.target.value}/>
                </div>
            </div>
            <div className="col-4">
                <div className="input-group input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Serie</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                     value={this.props.aluno.serie}
                     onChange={e => this.props.aluno.serie = e.target.value}/>
                </div>
            </div>
            <div className="col-4">
                <div className="input-group input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Turma</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                     value={this.props.aluno.turma}
                     onChange={e => this.props.aluno.turma = e.target.value}/>
                </div>
            </div>
            <div className="col-4">
                <div className="input-group input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Turno</span>
                    <Select className="col" options={this.state.turno} 
                    onChange={e => this.props.aluno.turno = e.value}/>
                </div>
            </div>
            <div className="col-4">
                <div className="input-group input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Mãe</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                    value={this.props.aluno.mae}
                    onChange={e => this.props.aluno.mae = e.target.value}/>
                </div>
            </div>
            <div className="col-4">
                <div className="input-group input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Pai</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                    value={this.props.aluno.pai}
                    onChange={e => this.props.aluno.pai = e.target.value}/>
                </div>
            </div>
            <div className="col-4">
                <div className="input-group input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Convênio Médico</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                    value={this.props.aluno.convMedico}
                    onChange={e => this.props.aluno.convMedico = e.target.value}/>
                </div>
            </div>
            </>
        );
    }
}

export default Aluno;