# Lush Latte — React + Vite

Proyecto académico convertido desde la exportación HTML de Stitch. Conserva los 28 productos, sus nombres, precios, descripciones e imágenes y la paleta y tipografía originales. Las secciones se organizan en vistas; el configurador y el encabezado se adaptaron a React.

## Ejecutar

Instala Node.js (20.19+ o 22.12+; tu Node 26 también sirve). Abre esta carpeta, la que contiene `package.json`, en Visual Studio Code. Ejecuta en su terminal:

```bash
npm install
npm run dev
```

Abre la dirección que indique Vite. Deja la terminal abierta mientras revisas la página.

## Comprobar y compilar

```bash
npm test
npm run build
npm run preview
```

`dist` contiene la compilación para publicar. `localhost` solo es accesible en la computadora donde ejecutas el proyecto.

## Vistas y navegación

Se usa `HashRouter` para que las rutas funcionen en alojamiento estático sin reglas de redirección del servidor.

| Vista | Ruta |
|---|---|
| Inicio | `/#/` |
| Menú | `/#/menu` |
| Pedido | `/#/pedido` |
| Nosotros | `/#/nosotros` |
| Locaciones | `/#/locaciones` |
| Contacto | `/#/contacto` |

El encabezado mantiene la navegación disponible en celular y computadora. Personalizar un producto abre Pedido con ese producto seleccionado. Ordenar desde una sucursal conserva la sucursal elegida.

## Responsabilidades de componentes

- `App`: shell, rutas, estado compartido del carrito y filtros, avisos.
- `Header`: navegación y acceso al carrito; marca la ruta activa.
- `Hero`: presentación y carrusel de productos destacados.
- `Menu`: búsqueda y categoría combinadas.
- `ProductCard`: tarjeta reutilizada para cada uno de los 28 productos.
- `OrderForm`: personalización, costos adicionales, retiro y confirmación de demostración.
- `CartDrawer`: lista del carrito, cantidades, eliminación y total; diálogo con navegación de teclado.
- `About`, `Locations`, `Contact`: contenido de sus respectivas vistas.
- `Footer`: pie compartido por todas las vistas.

## Organización y reutilización

El catálogo vive en `src/data/products.js`, separado de los componentes. `ProductCard` evita escribir 28 tarjetas individuales. La búsqueda y categoría comparten un estado en `App` y una función pura en `src/logic.js`; permanecen seleccionadas al navegar a otra vista y regresar. El carrito también se comparte entre rutas. Las preferencias no se guardan tras recargar la página.

Tailwind se compila localmente; no se depende del script CDN de Tailwind del HTML original. Las imágenes originales se incluyen en `public/images` y las fuentes en `public/fonts`, para que la página no dependa de su carga externa. Las URL originales se conservan en `src/data/image-sources.json`.

## Entrega en GitHub

Sube todo el contenido de esta carpeta excepto `node_modules`. `.gitignore` también excluye `dist`. No subas solo `index.html`: React necesita `src`, `package.json` y las configuraciones. Comparte la URL real de tu repositorio. No hay un repositorio creado por este ZIP.

La carpeta `evidencia` incluye capturas reales de Inicio, Menú, Pedido y Menú móvil. Puedes añadir tus propias capturas con la dirección visible al ejecutar el proyecto. Las pruebas realizadas y límites figuran en `VERIFICACION.md`.

## Límites del prototipo

Los formularios son una demostración académica: no envían correos, no guardan pedidos en un servidor y no cobran pagos. Conservamos los recursos originales. `Latte` e `Iced Latte Fresco` comparten exactamente la misma imagen: es una corrección pendiente del catálogo original. No se ha certificado la correspondencia visual de todas las fotografías.
