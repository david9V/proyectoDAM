package com.vilches.proyectovilches.service;

import com.vilches.proyectovilches.controller.model.Producto;

import java.util.List;

public interface ProductoService {
    List<Producto> listarProductos();
    Producto guardarProducto(Producto producto);
    void eliminarProducto(Long id);
    Producto obtenerProducto(Long id);
}
