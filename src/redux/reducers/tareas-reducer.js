import {
    AGREGAR_TAREA,
    BUSCAR_TAREA,
    MODIFICAR_TAREA,
    BORRAR_TAREA,
    BORRAR_TODAS_TAREAS,
  } from "../actions/tipos";
  
  const initialState = [];
  
  function tareaReducer(tarea = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case AGREGAR_TAREA:
        return [...tarea, payload];
  
      case BUSCAR_TAREA:
        return payload;
  
      case MODIFICAR_TAREA:
        return tarea.map((tarea) => {
          if (tarea.id === payload.id) {
            return {
              ...tarea,
              ...payload,
            };
          } else {
            return tarea;
          }
        });
  
      case BORRAR_TAREA:
        return tarea.filter(({ id }) => id !== payload.id);
  
      case BORRAR_TODAS_TAREAS:
        return [];
  
      default:
        return tarea;
    }
  };
  
  export default tareaReducer;