# H3 — Shell React, componentes y rutas

Repositorio: **coloca aquí el enlace real de tu repositorio de GitHub**.

Para ejecutar: instalar Node.js, abrir la carpeta del proyecto y ejecutar `npm install` y `npm run dev`. Abrir la dirección indicada por Vite.

Mi proyecto Lush Latte tiene un shell React con un encabezado y un pie compartidos. Conecté las vistas Inicio, Menú y Pedido mediante React Router, y también añadí Nosotros, Locaciones y Contacto. El encabezado permite navegar entre ellas y señala la vista seleccionada.

`App` organiza las rutas y el estado compartido; `Header` controla la navegación; `Menu` combina búsqueda y categoría; `ProductCard` presenta cada producto; `OrderForm` permite personalizar el pedido; y `CartDrawer` muestra cantidades y total.

Decidí separar los 28 productos en un archivo de datos y reutilizar `ProductCard`. Así evito repetir tarjetas y puedo modificar el catálogo desde un solo lugar. Los filtros y el carrito conservan su estado al cambiar de vista.

La compilación de producción y las seis pruebas automatizadas de catálogo, filtros y carrito se ejecutaron correctamente. Consulta `VERIFICACION.md` para las comprobaciones de navegador y los pendientes. Añade las capturas de Inicio, Menú y Pedido y verifica que tu enlace de GitHub abra el repositorio antes de entregar.
