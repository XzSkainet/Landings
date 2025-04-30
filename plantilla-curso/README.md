# 🎓 Plantilla Web "E-Learning"

**E-Learning** es una landing page moderna y funcional ideal para plataformas educativas online, academias virtuales, cursos en línea y todo tipo de proyectos relacionados con la educación digital.

![Vista previa](assets/img/preview.jpg)

## 🚀 Características

- ✅ Diseño moderno y profesional con HTML, CSS y JS puros
- ✅ Totalmente responsiva para todos los dispositivos
- ✅ Catálogo de cursos con sistema de filtrado
- ✅ Perfiles de instructores destacados
- ✅ Sistema de registro y login mediante modales
- ✅ Secciones para planes de suscripción y FAQ
- ✅ Botón flotante de WhatsApp
- ✅ Animaciones suaves y efectos visuales
- ✅ Formulario de contacto integrado
- ✅ Código optimizado para rendimiento SEO

## 📁 Archivos incluidos

```
plantilla-elearning/
├── index.html             # Página principal
├── style.css              # Estilos del sitio
├── script.js              # JavaScript funcional
├── assets/
│   ├── img/               # Imágenes (logotipo, banners, cursos, etc.)
│   │   ├── hero-bg.jpg    # Imagen de fondo principal
│   │   ├── about-elearning.jpg  # Imagen de sección Nosotros
│   │   ├── courses/       # Imágenes de los cursos
│   │   ├── instructors/   # Fotos de los instructores
│   │   ├── testimonials/  # Fotos para testimonios
│   │   └── ...
│   ├── video/             # Videos para previsualizaciones de cursos
│   └── fonts/             # (opcional) Fuentes personalizadas
├── README.md              # Instrucciones de uso
└── LICENSE.txt            # Licencia de uso
```

## 🛠️ Guía para personalizar

### 1. Modificar textos y contenido

Abre el archivo index.html con tu editor de código favorito y reemplaza:

- Nombre y eslogan de la plataforma
- Textos descriptivos de cada sección
- Información de los cursos (títulos, descripciones, precios)
- Perfiles de los instructores
- Planes de suscripción y precios
- Preguntas frecuentes (FAQ)
- Información de contacto
- Enlaces a redes sociales

### 2. Cambiar imágenes

Reemplaza las imágenes en la carpeta assets/img/ manteniendo los mismos nombres de archivo o actualizando las referencias en index.html:

- **hero-bg.jpg**: Imagen de fondo de la sección principal
- **about-elearning.jpg**: Imagen de la sección "Acerca de nosotros"
- **courses/...**: Imágenes de los cursos (course-1.jpg, course-2.jpg, etc.)
- **instructors/...**: Fotos de los instructores (instructor-1.jpg, instructor-2.jpg, etc.)
- **testimonials/...**: Fotos para los testimonios (testimonial-1.jpg, testimonial-2.jpg, etc.)

Para mejores resultados, utiliza imágenes de alta calidad con las siguientes dimensiones recomendadas:
- Hero background: 1920 x 1080px
- Cursos: 600 x 400px
- Instructores: 800 x 800px (cuadrada o recortada)
- Testimonios: 200 x 200px (formato circular)

### 3. Personalizar colores

Los colores principales se pueden modificar fácilmente editando las variables CSS en la parte superior del archivo style.css:

```css
:root {
    --color-primary: #5364FF;      /* Azul brillante - Color principal */
    --color-secondary: #FF7A59;    /* Naranja - Color de acento/llamada a la acción */
    --color-text: #333;            /* Color texto principal */
    --color-text-light: #666;      /* Color texto secundario */
    --color-light: #f8f9fa;        /* Fondo claro */
    --color-white: #fff;           /* Blanco */
    --color-dark: #212529;         /* Negro para fondos */
    --color-grey: #f5f5f5;         /* Gris claro */
    --color-border: #dee2e6;       /* Color bordes */
}
```

### 4. Configurar los cursos

Los cursos están organizados en una estructura con sistema de filtrado. Para cada curso, actualiza:

```html
<div class="course-item filter-programming">
    <div class="course-img">
        <img src="assets/img/courses/course-1.jpg" alt="Nombre del curso">
        <div class="course-category">Categoría</div>
    </div>
    <div class="course-content">
        <div class="instructor">
            <img src="assets/img/instructors/instructor-1.jpg" alt="Nombre del instructor">
            <span>Nombre del instructor</span>
        </div>
        <h3><a href="#">Título del curso</a></h3>
        <div class="rating">
            <!-- Estrellas y valoración -->
        </div>
        <div class="course-footer">
            <div class="price">
                <span class="old-price">€XXX</span>
                <span class="current-price">€XX</span>
            </div>
            <a href="#" class="btn-add-cart">Añadir al Carrito</a>
        </div>
    </div>
</div>
```

Para configurar el sistema de filtrado, define las categorías en la sección "courses-filter" y luego asigna la clase correspondiente a cada curso:

```html
<div class="courses-filter">
    <ul>
        <li data-filter="*" class="filter-active">Todos</li>
        <li data-filter=".filter-programming">Programación</li>
        <li data-filter=".filter-design">Diseño</li>
        <li data-filter=".filter-marketing">Marketing</li>
        <li data-filter=".filter-business">Negocios</li>
    </ul>
</div>
```

### 5. Configurar formularios

En un entorno real, necesitarás conectar los formularios a un servicio de procesamiento. Modifica el archivo script.js para integrar los envíos:

```javascript
// Ejemplo para el formulario de contacto
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reemplaza esto con tu código para enviar los datos a tu servidor o servicio
    fetch('https://tu-servidor.com/contacto', {
        method: 'POST',
        body: new FormData(contactForm)
    })
    .then(response => response.json())
    .then(data => {
        // Mostrar mensaje de éxito
        contactForm.innerHTML = `
            <div class="form-success">
                <i class="fas fa-check-circle"></i>
                <h3>¡Mensaje enviado correctamente!</h3>
                <p>Gracias por contactarnos. Recibirás una respuesta muy pronto.</p>
            </div>
        `;
    })
    .catch(error => {
        // Mostrar mensaje de error
        alert('Ha ocurrido un error. Por favor intente nuevamente.');
    });
});
```

De manera similar, actualiza la funcionalidad para el formulario de newsletter, login y registro.

### 6. Configurar funcionalidad de login y registro

Los modales de login y registro están preconfigurados en el HTML. Para conectarlos a tu sistema de autenticación, modifica las funciones correspondientes en script.js:

```javascript
// Ejemplo para el formulario de login
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Reemplaza con tu lógica de autenticación
    fetch('https://tu-servidor.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Redireccionar al panel de usuario o recargar la página
            window.location.href = "dashboard.html";
        } else {
            // Mostrar mensaje de error
            alert(data.message || 'Credenciales inválidas');
        }
    })
    .catch(error => {
        alert('Error de conexión. Inténtelo de nuevo.');
    });
});
```

### 7. Cambiar el enlace de WhatsApp

En el archivo index.html, busca la etiqueta con clase whatsapp-float y reemplaza el número de teléfono en el atributo href:

```html
<a href="https://wa.me/TUNUMERODETELEFONO" class="whatsapp-float" target="_blank">
```

Reemplaza TUNUMERODETELEFONO con tu número completo incluyendo el código de país (sin el símbolo +).

### 8. Configurar las preguntas frecuentes (FAQ)

El sistema de FAQ utiliza un acordeón simple. Personaliza las preguntas y respuestas en la sección correspondiente:

```html
<div class="faq-item">
    <div class="faq-question">
        <h3>¿Tu pregunta aquí?</h3>
        <i class="fas fa-chevron-down"></i>
    </div>
    <div class="faq-answer">
        <p>Tu respuesta detallada aquí.</p>
    </div>
</div>
```

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
   <meta name="description" content="Descripción de tu plataforma de cursos">
   <meta name="keywords" content="e-learning, cursos online, educación virtual, palabras clave relevantes">
   ```

2. Optimizar las imágenes para una carga más rápida:
    - Comprime las imágenes manteniendo buena calidad
    - Añade atributos `alt` descriptivos a todas las imágenes
    - Considera cargar las imágenes de forma lazy con el atributo `loading="lazy"`

3. Utiliza herramientas como Google Lighthouse para analizar y mejorar el rendimiento

## 📂 Estructura del proyecto en detalle

- **Header y Navegación**: Menú responsivo con opciones de login/registro
- **Hero Section**: Sección principal con imagen de fondo y llamado a la acción
- **Stats Counter**: Contador de estadísticas con animación
- **Acerca de**: Historia y características de la plataforma
- **Categorías**: Tarjetas de categorías con iconos y enlaces
- **Cursos Destacados**: Listado de cursos con filtrado por categorías
- **Características**: Ventajas y funcionalidades de la plataforma
- **Cómo Funciona**: Proceso paso a paso para comenzar a aprender
- **Instructores**: Perfiles destacados de los profesores
- **Testimonios**: Opiniones de estudiantes en un carrusel
- **Planes de Precios**: Tablas comparativas de suscripciones
- **FAQ**: Preguntas frecuentes en formato acordeón
- **Colaboradores**: Logotipos de empresas asociadas
- **Contacto**: Formulario e información de contacto
- **Newsletter**: Suscripción al boletín informativo
- **Footer**: Enlaces rápidos, datos de contacto y redes sociales
- **Modales**: Ventanas emergentes para login, registro y vista previa de cursos

## 📧 Soporte

Si tienes alguna pregunta o necesitas ayuda para personalizar esta plantilla, no dudes en contactarme:

Autor: Say  
Contacto: xzstewie@gmail.com

## 📄 Licencia

Esta plantilla está bajo una licencia de uso personal y comercial limitada. Para más detalles, consulta el archivo LICENSE.txt.

---

¡Gracias por usar la plantilla E-Learning! Espero que te sea de gran utilidad para tu proyecto educativo online.