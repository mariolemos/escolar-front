import React from 'react';
import Login from '../views/Login';

import { Route, Switch, HashRouter} from 'react-router-dom';
import ListaPessoa from '../views/ListaPessoas';
import Pessoa from '../views/Pessoa';


function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/pessoa" component={ListaPessoa} />
                <Route path="/cadastro-pessoa" component={Pessoa} />
            </Switch>
        </HashRouter>
    );
}

export default Rotas;