# Verificación realizada

## Comprobaciones ejecutadas

- Instalación de dependencias completada.
- `npm run build`: compilación de producción completada.
- `npm test`: seis pruebas aprobadas (catálogo, filtros y operaciones del carrito).
- Renderizado de los nueve componentes principales con React: sin errores.
- Chromium de escritorio (1366 × 900): navegación mediante el encabezado entre Inicio, Menú, Pedido, Nosotros, Locaciones y Contacto; sin errores de JavaScript.
- Menú: 28 tarjetas renderizadas; búsqueda y categoría combinadas; borrar búsqueda conserva categoría; cambiar a Todos conserva texto; texto sin coincidencias muestra el mensaje correspondiente.
- Imágenes: las 28 tarjetas cargaron su imagen local correctamente. Hay 27 recursos independientes porque Latte e Iced Latte Fresco comparten el original.
- Carrito: agregar, aumentar cantidad y recalcular total (dos Espresso = Bs 20).
- Personalización: abrir Lush Latte Signature desde su tarjeta, cambiar a leche de avena y agregar la configuración.
- Formulario: completar nombre y teléfono de prueba y confirmar el pedido de demostración.
- Celular (390 × 844): menú y navegación visibles, sin desbordamiento horizontal.

## Evidencia incluida

`evidencia/01-inicio.png`, `02-menu.png` y `03-pedido.png` muestran las tres vistas principales conectadas mediante el encabezado. `04-menu-movil.png` muestra la vista móvil. Son capturas reales del proyecto ejecutándose localmente durante la comprobación.

## Pendientes y límites

- Latte e Iced Latte Fresco conservan la misma fotografía del HTML original. Hace falta sustituir una por una imagen correcta e independiente.
- No se certificó la correspondencia visual con ingredientes y presentación de todos los productos.
- No hay backend, cobros, correo ni pedidos reales; la confirmación es una demostración local.
- El proyecto no se ha subido a tu cuenta de GitHub ni publicado en hosting. Debes agregar el enlace real del repositorio a la entrega y probar que abre.
- No se realizó una auditoría completa de accesibilidad; se añadieron navegación accesible, categorías con aria-pressed, etiquetas en el configurador, avisos con role=status y un diálogo nativo para el carrito.
