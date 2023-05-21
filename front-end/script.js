 // Llama a la función crearProducto cuando se envíe el formulario
 document.getElementById('crearForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente
    crearProducto();
  });
  

function crearProducto() {
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById('nombre').value;
    var precio = parseFloat(document.getElementById('precio').value);
    var cantidad = parseInt(document.getElementById('cantidad').value);
  
    // Crear el objeto del producto
    var producto = {
      nombre: nombre,
      precio: precio,
      cantidad: cantidad
    };
  
    // Realizar la solicitud POST al backend para crear el producto
    fetch('http://172.30.130.241:30829/api/productos/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(producto)
    })
      .then(function(response) {
        if (response.ok) {
          // El producto se creó correctamente
          alert('Producto creado exitosamente');
          // Redirigir de vuelta a la página principal
          window.location.href = 'index.html';
        } else {
          // Ocurrió un error al crear el producto
          alert('Error al crear el producto');
        }
      })
      .catch(function(error) {
        console.log('Error:', error);
        alert('Error al crear el producto');
      });
  }
  

  function listarProductos() {
    fetch('http://172.30.130.241:30829/api/productos/')
        .then(function(response) {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error al obtener los productos');
            }
        })
        .then(function(data) {
            var productosBody = document.getElementById('productosBody');
            productosBody.innerHTML = ''; // Limpiar el contenido actual de la tabla

            data.forEach(function(producto) {
                var row = document.createElement('tr');
                row.innerHTML = '<td>' + producto.id + '</td>' +
                                 '<td>' + producto.nombre + '</td>' +
                                 '<td>' + producto.precio + '</td>' +
                                 '<td>' + producto.cantidad + '</td>';
                productosBody.appendChild(row);
            });
        })
        .catch(function(error) {
            console.log('Error:', error);
            alert('Error al obtener los productos');
        });
}


function listarProducto() {
  var productId = document.getElementById('productId').value;

  fetch('http://172.30.130.241:30829/api/productos/' + productId)
    .then(function(response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error al obtener el producto');
      }
    })
    .then(function(data) {
      var productoData = document.getElementById('productoData');
      productoData.innerHTML = ''; // Limpiar contenido anterior

      // Crear una nueva fila en la tabla para mostrar los datos del producto
      var row = document.createElement('tr');
      row.innerHTML = '<td>' + data.id + '</td>' +
                      '<td>' + data.nombre + '</td>' +
                      '<td>' + data.precio + '</td>' +
                      '<td>' + data.cantidad + '</td>';
      productoData.appendChild(row);
    })
    .catch(function(error) {
      console.log('Error:', error);
      alert('Error al obtener el producto');
    });
}


function borrarProducto() {
  var id = document.getElementById('idInput').value;

  // Realizar la solicitud DELETE al backend para borrar el producto
  fetch('http://172.30.130.241:30829/api/productos/' + id, {
      method: 'DELETE'
  })
      .then(function(response) {
          if (response.ok) {
              // El producto se borró correctamente
              alert('Producto borrado exitosamente');
              // Redirigir de vuelta a la página principal
              window.location.href = 'index.html';
          } else {
              // Ocurrió un error al borrar el producto
              alert('Error al borrar el producto');
          }
      })
      .catch(function(error) {
          console.log('Error:', error);
          alert('Error al borrar el producto');
      });
}
