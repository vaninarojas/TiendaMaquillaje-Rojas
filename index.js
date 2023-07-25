
const nombreInput = document.getElementById("nombre");
const categoriaInput = document.getElementById("categoria");
const precioInput = document.getElementById("precio");
const stockInput = document.getElementById("stock");
const agregarBtn = document.getElementById("agregar");
const categoriaFiltradaInput = document.getElementById("categoriaFiltrada");
const filtrarBtn = document.getElementById("filtrar");
const calcularTotalBtn = document.getElementById("calcularTotal");
const listaProductosDiv = document.getElementById("listaProductos");
const productosFiltradosDiv = document.getElementById("productosFiltrados");
const totalPreciosDiv = document.getElementById("totalPrecios");

let productos = obtenerProductosGuardados() || [];

// Función para obtener los productos almacenados en localStorage
function obtenerProductosGuardados() {
  const productosGuardados = localStorage.getItem("productos");
  return productosGuardados ? JSON.parse(productosGuardados) : null;
}

// Función para guardar los productos en localStorage
function guardarProductosEnStorage() {
  localStorage.setItem("productos", JSON.stringify(productos));
}

// Función para agregar un producto a la lista
const agregarProducto = () => {
  const nombre = nombreInput.value;
  const categoria = categoriaInput.value;
  const precio = parseFloat(precioInput.value);
  const stock = Number(stockInput.value);

  const producto = { nombre, categoria, precio, stock };
  productos.push(producto);

  // Guardar los productos en localStorage
  guardarProductosEnStorage();

  // Actualizar la lista de productos en el DOM
  listaProductosDiv.innerHTML = "Lista de productos: " + JSON.stringify(productos);
};

// Función para filtrar productos por categoría
const filtrarProductos = () => {
  const categoriaFiltrada = categoriaFiltradaInput.value;
  const productosFiltrados = productos.filter((producto) => {
    return producto.categoria === categoriaFiltrada;
  });

  // Actualizar los productos filtrados en el DOM
  productosFiltradosDiv.innerHTML = `Productos de la categoría "${categoriaFiltrada}": ${JSON.stringify(productosFiltrados)}`;
};

// Función para calcular el total de precios de todos los productos
const calcularTotalPrecios = () => {
  const totalPrecios = productos.reduce((total, producto) => total + producto.precio, 0);

  // Actualizar el total de precios en el DOM
  totalPreciosDiv.innerHTML = "Total de precios: " + totalPrecios;
};

// Agregar event listeners a los botones
agregarBtn.addEventListener("click", agregarProducto);
filtrarBtn.addEventListener("click", filtrarProductos);
calcularTotalBtn.addEventListener("click", calcularTotalPrecios);