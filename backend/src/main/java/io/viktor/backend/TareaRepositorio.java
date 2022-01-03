package io.viktor.backend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TareaRepositorio extends JpaRepository<Tarea,Integer>{
    
}