import React from 'react';
import NavBar from '../components/NavBar';
import Rotas from "./Rotas";
class App extends React.Component {

  
  render(){

    return (
      <>
        <NavBar />
      <div className="container">
            <Rotas />
        </div>
      </>
    );
  }
}

export default App;
