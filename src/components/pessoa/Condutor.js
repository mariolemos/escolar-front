import React from 'react';
import Select from 'react-select';

class Condutor extends React.Component{
    state = {
        categoria:[
            {value:'1', label:"A"},
            {value:'2', label:"B"},
            {value:'3', label:"C"},
            {value:'4', label:"D"},
            {value:'5', label:"E"},
            {value:'6', label:"AB"},
            {value:'7', label:"AC"},
            {value:'8', label:"AD"},
            {value:'9', label:"AE"},
        ]
    }
    render(){
        return(
            <>
             <div className="col-10">
                <div className="input-group input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">CNH</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                </div>
            </div>
            <div className="col-2">
                <div className="input-group input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Categoria</span>
                    <Select className="col" options={this.state.categoria} />
                </div>
            </div>
            </>
        );
    }
}

export default Condutor;