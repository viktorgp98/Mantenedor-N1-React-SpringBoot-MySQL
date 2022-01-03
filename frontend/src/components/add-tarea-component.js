import React, { Component } from "react";
import { connect } from "react-redux";
import { crearTarea } from "../redux/actions/tareas-actions";

class AddTarea extends Component {
  constructor(props) {
    super(props);
    this.onChangeDescripcion = this.onChangeDescripcion.bind(this);
    this.onChangeFechaCreacion = this.onChangeFechaCreacion.bind(this);
    this.onChangeVigente = this.onChangeVigente.bind(this);
    this.agregarTarea = this.agregarTarea.bind(this);
    this.nuevaTarea = this.nuevaTarea.bind(this);

    this.state = {
      id: null,
      descripcion: "",
      fechaCreacion: "",
      vigente: false,

      enviado: false,
    };
  }

  onChangeDescripcion(e) {
    this.setState({
      descripcion: e.target.value,
    });
  }

  onChangeFechaCreacion(e) {
    this.setState({
        fechaCreacion: e.target.value,
    });
  }
  onChangeVigente(e) {
    this.setState({
        vigente: true,
    });
  }

  agregarTarea() {
    const { descripcion,fechaCreacion} = this.state;

    this.props
      .crearTarea(descripcion,fechaCreacion)
      .then((data) => {
        this.setState({
          id: data.id,
          descripcion: data.descripcion,
          fechaCreacion: data.fechaCreacion,
          vigente: data.vigente,

          enviado: true,
        });
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  nuevaTarea() {
    this.setState({
      id: null,
      descripcion: "",
      fechaCreacion: "",
      vigente: false,

      enviado: false,
    });
  }

  render() {
    return (
        <div className="submit-form col-md-6 mt-4">
        {this.state.enviado ? (
          <div>
            <h4>Agregado correctamente!</h4>
            <button className="btn btn-success" onClick={this.nuevaTarea}>
              Nueva tarea
            </button>
          </div>
        ) : (
          <div className="row g-3"> 
            <div className="form-group col-md-6 ">
              <label htmlFor="descripcion">Descripcion</label>
              <input
                type="text"
                className="form-control"
                id="descripcion"
                required
                value={this.state.descripcion}
                onChange={this.onChangeDescripcion}
                name="descripcion"
              />
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="fechaCreacion">Fecha Actual</label>
              <input
                type="datetime-local"
                className="form-control"
                id="fechaCreacion"
                required
                value={this.state.fechaCreacion}
                onChange={this.onChangeFechaCreacion}
                name="fechaDescripcion"
              />
            </div>

            <button onClick={this.agregarTarea} className="btn btn-danger">
              Agregar tarea
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { crearTarea })(AddTarea);