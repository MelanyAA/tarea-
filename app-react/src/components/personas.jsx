import React, { Component } from "react";
//imrc importa los componentes de react

import { Listadopersonas } from "./../services/personasService";

//cc para crear clases

class Personas extends Component {
  state = {
    datos: Listadopersonas()
    
    
    // Personas:[
    //
    //     {id:2, nombres:"Maria", Apellidos:"Sanchez", Deporte:"futbol", Municipio:"Jijijiji", estado: false},
    //     {id:3, nombres:"Pedro", Apellidos:"Sanchez", Deporte:"futbol", Municipio:"Jijijiji", estado: false},
    //     {id:4, nombres:"Karla", Apellidos:"Sanchez", Deporte:"futbol", Municipio:"Jijijiji", estado: true},
    //     {id:5, nombres:"Alejandro", Apellidos:"Sanchez", Deporte:"futbol", Municipio:"Jijijiji", estado: false}

    // ]
  };



  handlerEliminar= Personas => {
    
    const datos=this.state.datos.filter(c => c.id !== Personas.id);
    this.setState({ datos });
    
  };

  handlerAgregar = () => {
    const nuevo = {
      id: Math.random() * 1000,
      nombres: "Juan",
      Apellidos: "Sanchez",
      Deporte: "footbul",
      Municipio: "San Marco",
      estado: true
    };
    const datos = this.state.datos;
    datos.push(nuevo);
    this.setState({ datos });
  };

  render() {
    return (
<main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
      <table className="table table-striped table-sm">
        <div>
        <h1>Lista de Personas={this.state.datos.length}</h1>
          <button onClick={this.handlerAgregar} className="btn btn-info">Agregar Persona
          </button>
        </div>
        <tr>
          <td scope="col">ID</td>
          <td scope="col">Nombres</td>
          <td scope="col">Apellidos</td>
          <td scope="col">deportes</td>
          <td scope="col">Municipio</td>
          <td scope="col">Opciones</td>
        </tr>
      
        <tbody>
        
          {this.state.datos.map(Personas => (
            <tr key={Personas.id}>
              <td> {Personas.id}</td>
              <td>{Personas.nombres}</td>
              <td>{Personas.Apellidos}</td>
              <td>{Personas.Deporte}</td>
              <td>{Personas.Municipio}</td>
              <td>
                <span>
                  <button onClick={()=>this.handlerEliminar(Personas)} className="btn btn-danger">
                    Borrar
                  </button>
                </span>
              </td>
            </tr>
          ))}
 
          {/* </th> */}
        </tbody>
      </table>
      </main>
    );
  }
  // definiractivos(estado) {
  //   return estado === true ? "list-group-item active" : "list-group-item";
  // }
}
export default Personas;
