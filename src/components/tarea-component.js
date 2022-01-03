import React, { Component } from "react";
import { connect } from "react-redux";
import { modificarTarea, eliminarTarea } from "../redux/actions/tareas-actions";
import TareaDataService from "../redux/services/tareas-service";

class Tarea extends Component {
  constructor(props) {
    super(props);
    this.onChangeDescripcion = this.onChangeDescripcion.bind(this);
    this.onChangeFechaCreacion = this.onChangeFechaCreacion.bind(this);
    this.getTarea = this.getTarea.bind(this);
    this.modificarEstado = this.modificarEstado.bind(this);
    this.modificarContenido = this.modificarContenido.bind(this);
    this.borrarTarea = this.borrarTarea.bind(this);

    this.state = {
      tareaActual: {
        id: null,
        fechaCreacion: "",
        descripcion: "",
        vigente: false,
      },
      mensaje: "",
    };
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    // this.getTarea(this.props.match.params.id);
  }

  onChangeFechaCreacion(e) {
    const fechaCreacion = e.target.value;

    this.setState(function (prevState) {
      return {
        tareaActual: {
          ...prevState.tareaActual,
          fechaCreacion: fechaCreacion,
        },
      };
    });
  }

  onChangeDescripcion(e) {
    const descripcion = e.target.value;

    this.setState((prevState) => ({
      tareaActual: {
        ...prevState.tareaActual,
        descripcion: descripcion,
      },
    }));
  }

  getTarea(id) {
    TareaDataService.get(id)
      .then((response) => {
        this.setState({
          tareaActual: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  modificarEstado(status) {
    var data = {
      id: this.state.tareaActual.id,
      fechaCreacion: this.state.tareaActual.fechaCreacion,
      descripcion: this.state.tareaActual.descripcion,
      vigente: status,
    };

    this.props
      .modificarTarea(this.state.tareaActual.id, data)
      .then((reponse) => {
        console.log(reponse);

        this.setState((prevState) => ({
          tareaActual: {
            ...prevState.tareaActual,
            vigente: status,
          },
        }));

        this.setState({ mensaje: "Estado de la tarea actualizado!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  modificarContenido() {
    this.props
      .modificarTarea(this.state.tareaActual.id, this.state.tareaActual)
      .then((reponse) => {
        console.log(reponse);
        
        this.setState({ mensaje: "La tarea fue modificada correctamente!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  borrarTarea() {
    this.props
      .eliminarTarea(this.state.tareaActual.id)
      .then(() => {
        this.props.history.push("/tareas");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { tareaActual } = this.state;

    return (
        <div>
        {tareaActual ? (
          <div className="edit-form">
            <h4>Tarea</h4>
            <form>
              <div className="form-group">
                <label htmlFor="descripcion">Descripcion</label>
                <input
                  type="text"
                  className="form-control"
                  id="descripcion"
                  value={tareaActual.descripcion}
                  onChange={this.onChangeDescripcion}
                />
              </div>
              <div className="form-group">
                <label htmlFor="fechaCreacion">Fecha Creación</label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="fechaCreacion"
                  value={tareaActual.fechaCreacion}
                  onChange={this.onChangeFechaCreacion}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Vigente:</strong>
                </label>
                {tareaActual.vigente ? "Terminada" : "Pendiente"}
              </div>
            </form>

            {tareaActual.vigente ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.modificarEstado(false)}
              >
                Pendiente
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.modificarEstado(true)}
              >
                Terminada
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={this.borrarTarea}
            >
              Eliminar
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.modificarContenido}
            >
              Guardar cambios
            </button>
            <p>{this.state.mensaje}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Tarea...</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { modificarTarea, eliminarTarea })(Tarea);