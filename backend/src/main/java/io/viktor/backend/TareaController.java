package io.viktor.backend;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class TareaController {
    @Autowired
    private TareaRepositorio  tareaRepositorio;


    @GetMapping("/tareas")
    public ResponseEntity<List<Tarea>> mostrarTareas() {
    try {
      
      return new ResponseEntity<>(tareaRepositorio.findAll(), HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

    @GetMapping("/tareas/{id}")
    public ResponseEntity<Tarea> encontrarTarea(@PathVariable Integer id) {
        Tarea TareaData = tareaRepositorio.findById(id).orElse(null);

        if (TareaData !=null) {
        return new ResponseEntity<>( TareaData,HttpStatus.OK);
        } else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/tareas")
    public ResponseEntity<Tarea> agregarTarea(@RequestBody Tarea tarea) {
        try {
        Tarea _Tarea = tareaRepositorio.save(tarea);
        return new ResponseEntity<>(_Tarea, HttpStatus.CREATED);
        } catch (Exception e) {
        return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/tareas/{id}")
    public ResponseEntity<Tarea> modificarTarea(@PathVariable("id") int id, @RequestBody Tarea tarea){
      try{
        Tarea tareaAntigua = tareaRepositorio.findById(id).orElse(null);
        tareaAntigua.setDescripcion(tarea.getDescripcion());
        tareaAntigua.setFechaCreacion(tarea.getFechaCreacion());
        tareaAntigua.setVigente(tarea.getVigente());
        return new ResponseEntity<>( tareaRepositorio.save(tareaAntigua),HttpStatus.OK);
       }catch(Exception e){
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
       }
       
       
    }

    @DeleteMapping("/tareas/{id}")
    public ResponseEntity<HttpStatus> borrarTarea(@PathVariable("id") Integer id) {
        try {
        tareaRepositorio.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/tareas")
    public ResponseEntity<HttpStatus> borrarTareas() {
        try {
        tareaRepositorio.deleteAll();
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
  }


    // @GetMapping("/tareas")
    // public List <Tarea> obtenerTareas(){
    //     return tareaRepositorio.findAll();
    // }

    // @GetMapping("/tareas/{id}")
    // public Tarea buscarTarea(@PathVariable Integer id){
    //    return tareaRepositorio.findById(id).orElse(null);
    // }

    // @PostMapping("/tareas")
    // public Tarea agregarTarea(@RequestBody Tarea tarea){
    //     return tareaRepositorio.save(tarea);
    // }

    // @PutMapping("/tareas")
    // public Tarea modificarTarea(@RequestBody Tarea tarea){
    //    Tarea tareaAntigua = tareaRepositorio.findById(tarea.getId()).orElse(null);
    //    tareaAntigua.setDescripcion(tarea.getDescripcion());
    //    tareaAntigua.setFechaCreacion(tarea.getFechaCreacion());
    //    tareaAntigua.setVigente(tarea.getVigente());
    //    return tareaRepositorio.save(tareaAntigua);
    // }

    // @DeleteMapping("/tareas/{id}")
    // public Integer borrarTarea(@PathVariable Integer id){
    //     tareaRepositorio.deleteById(id);
    //     return id ;
    // }
// }
