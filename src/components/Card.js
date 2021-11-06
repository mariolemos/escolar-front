import React from 'react';

class Card extends React.Component{

    render(){
        return(
            <div className={"card "+this.props.className}>
                <h3 className="card-header text-center">{this.props.title}</h3>
                <div className="card-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Card;