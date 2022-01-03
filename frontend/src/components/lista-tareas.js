import React, { Component } from "react";
import { connect } from "react-redux";
import { buscarTareas, borrarTodasTareas } from "../redux/actions/tareas-actions";
import { Link } from "react-router-dom";



class ListaTareas extends Component {
  constructor(props) {
    super(props);
    this.actualizarDatos = this.actualizarDatos.bind(this);
    this.tareaActiva = this.tareaActiva.bind(this);
    this.eliminarTareas = this.eliminarTareas.bind(this);

    this.state = {
      tareaActual: null,
      idActual: -1,
    };
  }

  componentDidMount() {
    this.props.buscarTareas();
  }

  actualizarDatos() {
    this.setState({
      tareaActual: null,
      idActual: -1,
    });
  }

  tareaActiva(tarea, index) {
    this.setState({
      tareaActual: tarea,
      idActual: index,
    });
  }

  eliminarTareas() {
    this.props
      .borrarTodasTareas()
      .then((response) => {
        console.log(response);
        this.actualizarDatos();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const {tareaActual, idActual } = this.state;
    const { tareas } = this.props;

    return (
        <div className="list row">
        <div className="col-md-6 mt-4">
          <h4>Lista de Tareas</h4>

          <ul className="list-group">
            {tareas &&
              tareas.map((tarea, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === idActual ? "active" : "")
                  }
                  onClick={() => this.tareaActiva(tarea, index)}
                  key={index}
                >
                  {tarea.descripcion}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.eliminarTareas}
          >
            Borrar todas las tareas
          </button>
        </div>
        <div className="col-md-6 mt-4">
          {tareaActual ? (
            <div>
              <h4>Tarea</h4>
              <div>
                <label>
                  <strong>Descripción:</strong>
                </label>{" "}
                {tareaActual.descripcion}
              </div>
              <div>
                <label>
                  <strong>Fecha Creación:</strong>
                </label>{" "}
                {tareaActual.fechaCreacion}
              </div>
              <div>
                <label>
                  <strong>Vigencia:</strong>
                </label>{" "}
                {tareaActual.vigente ? "Terminada" : "Pendiente"}
              </div>

              <Link
                to={"/tareas/" + tareaActual.id}
                className="badge btn-warning mt-2"
              >
                Editar
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Selecciona un tarea...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tareas: state.tareas,
  };
};


export default connect(mapStateToProps, { buscarTareas, borrarTodasTareas })(ListaTareas);