import React, {Component} from "react";
import Personas from "./components/personas";
import "bootstrap/dist/css/bootstrap.css";
import MenuVar from "./components/menuVar";
import NavBar from "./components/navBar";
import './estilo.css';



class App extends Component {
  render() {
    return ( 

    
    <React.Fragment >
     
    
       
      <NavBar/>
      <MenuVar/>
        <Personas/>
    
    
        </React.Fragment>
    );
  }
}

export default App;