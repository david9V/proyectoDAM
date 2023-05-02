package com.vilches.proyectovilches.repository;

import com.vilches.proyectovilches.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductoRepository extends JpaRepository<Producto, Long> {
}
