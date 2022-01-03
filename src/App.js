import React,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { Container, Nav, Navbar, NavbarBrand,NavItem,NavLink } from 'reactstrap';
import AddTarea from "./components/add-tarea-component";
import Tarea from "./components/tarea-component";
import ListaTareas from "./components/lista-tareas";

class App extends Component {
  render(){
    return(
      <Router>
        <Navbar expand="md" color="danger" dark>
          <NavbarBrand>Mantenedor N°1</NavbarBrand>
          <Nav>
          <NavItem>
            <NavLink href="/" className='navbar-light'>
              Lista de tareas
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/add" className='navbar-light'>
              Agregar tarea
            </NavLink>
          </NavItem>
          </Nav>
        </Navbar>
        <Container className="container">
          <div className="container mt-3">
            <Routes>
              <Route exact path="/" element={<ListaTareas/>} />
              <Route exact path="/add" element={<AddTarea/>} />
              <Route path='/tareas/:id' render={
                <Tarea
                  {...this.props}
                />
              }
              />
              {/* <Route 
                path="/tareas/:id" 
                element={<Tarea/>}
                computedMatch="this.props.computedMatch.params.id"
              /> */}
            </Routes>
          </div>
        </Container>
      </Router>
    );
  };
};



export default App;

