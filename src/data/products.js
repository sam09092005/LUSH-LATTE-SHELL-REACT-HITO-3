export const products = [
      // 1-6: Cafés Clásicos (6 productos)
      { id: 'c1', name: "Espresso", category: 'clasicos', price: 10, img: "images/product-07.jpg", alt: "Espresso", desc: "Doble extracción pura, crema densa y notas achocolatadas." },
      { id: 'c2', name: "Americano", category: 'clasicos', price: 12, img: "images/product-08.jpg", alt: "Americano", desc: "Doble shot estirado con agua caliente a 92°C." },
      { id: 'c3', name: "Cortado", category: 'clasicos', price: 15, img: "images/product-09.jpg", alt: "Cortado", desc: "Partes iguales de café intenso y leche vaporizada sedosa." },
      { id: 'c4', name: "Capuccino", category: 'clasicos', price: 18, img: "images/product-10.jpg", alt: "Capuccino", desc: "Microespuma cremosa con espolvoreado opcional de canela." },
      { id: 'c5', name: "Latte", category: 'clasicos', price: 20, img: "images/product-11.jpg", alt: "Latte", desc: "Textura láctea suave y espresso balanceado de altura." },
      { id: 'c6', name: "Mocha", category: 'clasicos', price: 24, img: "images/product-12.jpg", alt: "Mocha", desc: "Cacao orgánico boliviano con espresso y leche aterciopelada." },

      // 7-12: Cafés Especiales (6 productos)
      { id: 'e1', name: "Flat White", category: 'especiales', price: 22, img: "images/product-13.jpg", alt: "Flat White", desc: "Ristretto doble con microespuma fina y densa." },
      { id: 'e2', name: "Vainilla Latte", category: 'especiales', price: 25, img: "images/product-14.jpg", alt: "Vainilla Latte", desc: "Con infusión natural de vainas de vainilla seleccionadas." },
      { id: 'e3', name: "Caramel Macchiato", category: 'especiales', price: 28, img: "images/product-15.jpg", alt: "Caramel Macchiato", desc: "Vainilla, leche espumada, espresso vertido y toffee." },
      { id: 'e4', name: "Cinnamon Latte", category: 'especiales', price: 28, img: "images/product-16.jpg", alt: "Cinnamon Latte", desc: "Espresso con reducción de canela ceilán y nuez moscada." },
      { id: 'e5', name: "Lush Latte Signature", category: 'especiales', price: 32, img: "images/product-03.jpg", alt: "Lush Latte Signature", desc: "Nuestra creación emblema con caramelo salado y vainilla." },
      { id: 'e6', name: "Café Filtrado V60", category: 'especiales', price: 30, img: "images/product-01.jpg", alt: "Café Filtrado V60", desc: "Extracción lenta por goteo que exalta notas a jazmín y frutas." },

      // 13-17: Cafés Fríos & Matchas (5 productos)
      { id: 'f1', name: "Iced Strawberry Matcha", category: 'frios', price: 32, img: "images/product-04.jpg", alt: "Iced Strawberry Matcha", desc: "Coulis fresco de frutillas de Cochabamba y té verde puro." },
      { id: 'f2', name: "Matcha Latte Ceremonial", category: 'frios', price: 28, img: "images/product-17.jpg", alt: "Matcha Latte Ceremonial", desc: "Matcha japonés batido a mano con chasen de bambú." },
      { id: 'f3', name: "Cold Brew Caranavi", category: 'frios', price: 25, img: "images/product-18.jpg", alt: "Cold Brew Caranavi", desc: "Infusión en frío durante 18 horas, refrescante y bajo en acidez." },
      { id: 'f4', name: "Iced Americano", category: 'frios', price: 15, img: "images/product-19.jpg", alt: "Iced Americano", desc: "Espresso doble sobre cubos de hielo transparentes." },
      { id: 'f5', name: "Iced Latte Fresco", category: 'frios', price: 22, img: "images/product-11.jpg", alt: "Iced Latte Fresco", desc: "Doble espresso vertido sobre leche bien helada." },

      // 18-20: Frappés (3 productos)
      { id: 'fr1', name: "Frappé de Caramelo", category: 'frappes', price: 35, img: "images/product-06.jpg", alt: "Frappé de Caramelo", desc: "Toffee casero, espresso batido y copete de crema." },
      { id: 'fr2', name: "Frappé de Mocha", category: 'frappes', price: 38, img: "images/product-20.jpg", alt: "Frappé de Mocha", desc: "Cacao artesanal y doble shot granizado." },
      { id: 'fr3', name: "Frappé de Pistacho", category: 'frappes', price: 42, img: "images/product-21.jpg", alt: "Frappé de Pistacho", desc: "Pasta pura de pistacho tostado, leche y café de autor." },

      // 21-28: Desayunos & Repostería (8 productos)
      { id: 'd1', name: "Tostada de Palta y Huevo", category: 'desayunos', price: 28, img: "images/product-05.jpg", alt: "Tostada de Palta y Huevo", desc: "Masa madre de fermentación natural con huevo de granja." },
      { id: 'd2', name: "Croissant de Mantequilla", category: 'desayunos', price: 15, img: "images/product-22.jpg", alt: "Croissant de Mantequilla", desc: "Hojaldre francés crujiente horneado cada mañana." },
      { id: 'd3', name: "Cookie Artesanal", category: 'desayunos', price: 10, img: "images/product-23.jpg", alt: "Cookie Artesanal", desc: "Trozos fundidos de chocolate amargo al 70%." },
      { id: 'd4', name: "Bowl de Yogur y Granola", category: 'desayunos', price: 25, img: "images/product-24.jpg", alt: "Bowl de Yogur y Granola", desc: "Yogur griego, miel silvestre de valle y frutos rojos." },
      { id: 'd5', name: "Sándwich de Desayuno", category: 'desayunos', price: 30, img: "images/product-25.jpg", alt: "Sándwich de Desayuno", desc: "Pan brioche, huevos revueltos, queso andino y panceta." },
      { id: 'd6', name: "Pancakes con Fruta", category: 'desayunos', price: 32, img: "images/product-26.jpg", alt: "Pancakes con Fruta", desc: "Tres esponjosos hotcakes con miel de maple y arándanos." },
      { id: 'd7', name: "Desayuno Lush Completo", category: 'desayunos', price: 45, img: "images/product-02.jpg", alt: "Desayuno Lush Completo", desc: "Capuccino, jugo de naranja, tostada y porción de fruta." },
      { id: 'd8', name: "Brunch para Compartir", category: 'desayunos', price: 60, img: "images/product-27.jpg", alt: "Brunch para Compartir", desc: "Selección completa para 2 personas con dos cafés incluidos." }
    ];
export const heroSlides = [
      {
        title: "Lush Latte Signature",
        price: 32,
        desc: "Doble espresso de altura boliviana emulsionado con leche sedosa, notas a caramelo salado y un toque aromático de vainilla andina.",
        img: "images/product-03.jpg",
        tag: "Especial de la Casa",
        ingredients: ["Doble Shot 100% Arábica", "Leche Texturizada", "Sal Rosada"]
      },
      {
        title: "Iced Strawberry Matcha",
        price: 32,
        desc: "Matcha ceremonial japonés grado A vertido sobre leche fría y coulis artesanal de frutillas frescas cochabambinas.",
        img: "images/product-04.jpg",
        tag: "Favorito Refrescante",
        ingredients: ["Matcha Ceremonial Uji", "Coulis de Frutilla", "Leche Fría"]
      },
      {
        title: "Tostada de Palta y Huevo",
        price: 28,
        desc: "Hogaza de masa madre artesanal con palta hass machacada, huevo pochado de granja, hojuelas de chile y brotes frescos.",
        img: "images/product-05.jpg",
        tag: "Desayuno Estrella",
        ingredients: ["Masa Madre", "Palta Hass", "Huevo Poché"]
      },
      {
        title: "Frappé de Caramelo",
        price: 35,
        desc: "Café espresso batido con hielo frappé, toffee casero de mantequilla y copete de crema chantilly recién montada.",
        img: "images/product-06.jpg",
        tag: "Gourmet Dulce",
        ingredients: ["Espresso Batido", "Toffee Casero", "Chantilly"]
      }
    ];
