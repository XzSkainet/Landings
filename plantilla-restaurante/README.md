# 🍽️ Plantilla Web "Restaurant Deluxe"

**Restaurant Deluxe** es una landing page elegante y sofisticada ideal para restaurantes, cafeterías, bares y negocios gastronómicos que buscan una presencia online de alta calidad.

![Vista previa](assets/img/preview.jpg)

## 🚀 Características

- ✅ Diseño elegante con HTML, CSS y JS puros
- ✅ Totalmente responsiva para todos los dispositivos
- ✅ Secciones para menú, chef, galería y reservas
- ✅ Formulario de reserva integrado
- ✅ Botón flotante de WhatsApp
- ✅ Animaciones suaves y efectos visuales
- ✅ Código optimizado para rendimiento SEO

## 📁 Archivos incluidos

```
plantilla-restaurant/
├── index.html             # Página principal
├── style.css              # Estilos del sitio
├── script.js              # JavaScript funcional
├── assets/
│   ├── img/               # Imágenes (logotipo, banners, platos, etc.)
│   │   ├── hero-bg.jpg    # Imagen de fondo principal
│   │   ├── about-restaurant.jpg  # Imagen de sección Nosotros
│   │   ├── chef.jpg       # Foto del chef
│   │   ├── menu/          # Imágenes de los platos del menú
│   │   ├── gallery/       # Imágenes para la galería
│   │   └── ...
│   └── fonts/             # (opcional) Fuentes personalizadas
├── README.md              # Instrucciones de uso
└── LICENSE.txt            # Licencia de uso
```

## 🛠️ Guía para personalizar

### 1. Modificar textos y contenido

Abre el archivo index.html con tu editor de código favorito y reemplaza:

- Nombre y eslogan del restaurante
- Textos descriptivos de cada sección
- Platos del menú y precios
- Información del chef
- Horarios de reserva
- Información de contacto
- Enlaces a redes sociales

### 2. Cambiar imágenes

Reemplaza las imágenes en la carpeta assets/img/ manteniendo los mismos nombres de archivo o actualizando las referencias en index.html:

- **hero-bg.jpg**: Imagen de fondo de la sección principal
- **about-restaurant.jpg**: Imagen de la sección "Acerca de nosotros"
- **chef.jpg**: Fotografía del chef
- **menu/...**: Imágenes de los platos (starter-1.jpg, main-1.jpg, etc.)
- **gallery/...**: Imágenes para la galería (gallery-1.jpg, gallery-2.jpg, etc.)

Para mejores resultados, utiliza imágenes de alta calidad con las siguientes dimensiones recomendadas:
- Hero background: 1920 x 1080px
- Platos del menú: 600 x 400px (proporciones 3:2)
- Galería: 800 x 600px
- Foto del chef: 800 x 1000px

### 3. Personalizar colores

Los colores principales se pueden modificar fácilmente editando las variables CSS en la parte superior del archivo style.css:

```css
:root {
    --color-primary: #D4AF37;      /* Dorado elegante - Color principal */
    --color-secondary: #222;       /* Negro suave - Color secundario */
    --color-text: #444;            /* Color texto principal */
    --color-text-light: #777;      /* Color texto secundario */
    --color-light: #f8f8f8;        /* Fondo claro */
    --color-white: #fff;           /* Blanco */
    --color-dark: #111;            /* Negro para fondos */
    --color-grey: #f5f5f5;         /* Gris claro */
    --color-border: #e1e1e1;       /* Color bordes */
}
```

### 4. Actualizar el menú

El menú está organizado en pestañas (Entrantes, Platos Principales, Postres, Bebidas). Para cada elemento del menú, actualiza:

```html
<div class="menu-item">
    <div class="menu-img">
        <img src="assets/img/menu/starter-1.jpg" alt="Nombre del plato">
    </div>
    <div class="menu-info">
        <h4>Nombre del plato <span class="price">€XX</span></h4>
        <p>Descripción del plato con ingredientes principales</p>
    </div>
</div>
```

### 5. Configurar el formulario de reserva

En un entorno real, necesitarás conectar el formulario a un servicio de procesamiento. Modifica el archivo script.js para integrar el envío de formularios:

```javascript
bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reemplaza esto con tu código para enviar los datos a tu servidor o servicio
    // Por ejemplo, usando fetch() para enviar a un endpoint:
    
    /*
    fetch('https://tu-servidor.com/reservas', {
        method: 'POST',
        body: new FormData(bookingForm)
    })
    .then(response => response.json())
    .then(data => {
        alert('¡Reserva realizada con éxito!');
        bookingForm.reset();
    })
    .catch(error => {
        alert('Ha ocurrido un error. Por favor intente nuevamente.');
    });
    */
});
```

### 6. Cambiar el enlace de WhatsApp

En el archivo index.html, busca la etiqueta con clase whatsapp-float y reemplaza el número de teléfono en el atributo href:

```html
<a href="https://wa.me/TUNUMERODETELEFONO" class="whatsapp-float" target="_blank">
```

Reemplaza TUNUMERODETELEFONO con tu número completo incluyendo el código de país (sin el símbolo +).

## 📱 Compatibilidad

Esta plantilla es totalmente responsive y compatible con:

- Google Chrome
- Mozilla Firefox
- Safari
- Microsoft Edge
- Opera
- Dispositivos móviles y tablets

## 🔍 SEO y Rendimiento

Para mejorar el SEO de tu sitio, considera:

1. Completar las etiquetas meta en el `<head>` del archivo index.html:
   ```html
   <meta name="description" content="Descripción de tu restaurante">
   <meta name="keywords" content="restaurante, gastronomía, palabras clave relevantes">
   ```

2. Optimizar las imágenes para una carga más rápida:
    - Comprime las imágenes manteniendo buena calidad
    - Añade atributos `alt` descriptivos a todas las imágenes

3. Utiliza herramientas como Google Lighthouse para analizar y mejorar el rendimiento

## 📂 Estructura del proyecto en detalle

- **Header y Navegación**: Menú responsivo que se vuelve sticky al hacer scroll
- **Hero Section**: Sección principal con imagen de fondo y llamado a la acción
- **Acerca de**: Historia y características del restaurante
- **Características**: Puntos clave del restaurante
- **Menú**: Secciones con tabs para diferentes categorías de platos
- **Chef**: Perfil destacado del chef principal
- **Galería**: Showcase visual de platos e instalaciones
- **Testimonios**: Opiniones de clientes en un carrusel
- **Reservas**: Formulario para realizar reservas
- **Contacto**: Información y mapa de ubicación
- **Footer**: Enlaces rápidos, datos de contacto y newsletter

## 📧 Soporte

Si tienes alguna pregunta o necesitas ayuda para personalizar esta plantilla, no dudes en contactarme:

Autor: Say  
Contacto: xzstewie@gmail.com

## 📄 Licencia

Esta plantilla está bajo una licencia de uso personal y comercial limitada. Para más detalles, consulta el archivo LICENSE.txt.

---

¡Gracias por usar la plantilla Restaurant Deluxe! Espero que te sea de gran utilidad para tu negocio gastronómico.