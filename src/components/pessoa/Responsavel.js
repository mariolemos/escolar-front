import React from 'react';
import Select from 'react-select'

class Responsavel extends React.Component{


    state = {
        parentesco:[
            { value: '1', label: 'PAI' },
            { value: '2', label: 'MÃE' },
            { value: '3', label: 'TIO(a)' },
            { value: '4', label: 'AVÔ(a)' }
        ]
    }

    
    render(){
        const element = <div>Hello World</div>;
        return(
            <>
                <div className="col">
                    <div className="input-group input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-sm">parentesco</span>
                        <Select options={this.state.parentesco} />
                    </div>
                </div>
                <div className="col-12">
                    <div className="col">
                        <div className="input-group input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Nome do Aluno</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                            <i className="bi bi-plus-circle mx-2" onClick={e => alert()} style={{color: "blue",fontSize: "1.2rem"}}></i>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}


export default Responsavel;