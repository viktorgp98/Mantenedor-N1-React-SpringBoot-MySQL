import React,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { Container, Nav, Navbar, NavbarBrand,NavItem,NavLink } from 'reactstrap';
import AddTarea from "./components/add-tarea-component";
import Tarea from "./components/tarea-component";
import ListaTareas from "./components/lista-tareas";

class App extends Component {
  render(){
    return(
      <Router>
        <Navbar expand="md" color="danger" dark container="md">
          <NavbarBrand>Mantenedor N°1</NavbarBrand>
          <Nav>
          <NavItem>
            <NavLink href="/" className='light'>
              Lista de tareas
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/add" className='light'>
              Agregar tarea
            </NavLink>
          </NavItem>
          </Nav>
        </Navbar>
        <Container className="container">
          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/tareas"]} component={ListaTareas} />
              <Route exact path="/add" component={AddTarea} />
              <Route path="/tareas/:id" component={Tarea} />
            </Switch>
          </div>
        </Container>
      </Router>
    );
  };
};




export default App;

