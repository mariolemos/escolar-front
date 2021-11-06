import React from 'react';
import NavBarItem from './NavBarItem';
// import ValidarUsuario from '../app/service/ValidarUsuario';
// import LocalStorageService from '../app/service/localStorageService';




class NavBar extends React.Component{

    
    loggff = () => {
        // ValidarUsuario.logoff();
    }
    
    
    render(){

        return(
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div className="container">
               
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <NavBarItem href="#/login" label="home"/>
                        <NavBarItem href="#/pessoa" label="Pessoas"/>
                        <li className="nav-item" >
                            <a className="nav-link" onClick={this.loggff}>Sair</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        );
    }
}

export default NavBar;