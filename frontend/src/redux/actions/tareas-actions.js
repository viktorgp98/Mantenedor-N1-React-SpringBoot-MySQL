import {
    AGREGAR_TAREA,
    BUSCAR_TAREA,
    MODIFICAR_TAREA,
    BORRAR_TAREA,
    BORRAR_TODAS_TAREAS,
  } from "./tipos";
  
  import TareaDataService from "../services/tareas-service";
  
  export const crearTarea = (descripcion,fechaCreacion) => async (dispatch) => {
    try {
      const res = await TareaDataService.create({ descripcion, fechaCreacion});
  
      dispatch({
        type: AGREGAR_TAREA,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const buscarTareas = () => async (dispatch) => {
    try {
      const res = await TareaDataService.getAll();
  
      dispatch({
        type: BUSCAR_TAREA,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  export const modificarTarea = (id, data) => async (dispatch) => {
    try {
      const res = await TareaDataService.update(id, data);
  
      dispatch({
        type: MODIFICAR_TAREA,
        payload: data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const eliminarTarea = (id) => async (dispatch) => {
    try {
      await TareaDataService.delete(id);
  
      dispatch({
        type: BORRAR_TAREA,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  export const borrarTodasTareas = () => async (dispatch) => {
    try {
      const res = await TareaDataService.deleteAll();
  
      dispatch({
        type: BORRAR_TODAS_TAREAS,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };