import React from 'react';

function FormGroup(props){
    return(
        <div className={"form-group "+props.className}>
            <label htmlFor={props.htmlForm}>{props.label}</label>
            {props.children}
        </div>
    );
}

export default FormGroup;