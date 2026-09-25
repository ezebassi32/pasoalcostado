# Paso al Costado — Portal Periodístico Digital

> **“Sacar el pie del acelerador: no solo qué pasó, sino por qué importa”**  
> Medio periodístico multimedial creado por estudiantes universitarios de Periodismo.

---

## 1. Identidad y Propuesta Editorial

* **Nombre del medio**: Paso al Costado
* **Línea editorial**: Periodismo de actualidad explicativo, contextualizado, cercano y crítico. Busca aportar antecedentes, consecuencias y diversas perspectivas frente a la sobreinformación inmediata y fragmentada de las redes sociales.
* **Audiencia**: Jóvenes y adultos jóvenes interesados en actualidad, sociedad, deportes y cultura que buscan información rigurosa en formatos ágiles y comprensibles.
* **Plataformas oficiales**:
  * **YouTube (Podcasts y Audiovisual)**: [youtube.com/@pasoalcostado](https://www.youtube.com/@pasoalcostado)
  * **Instagram**: [@pasoalcostado_](https://www.instagram.com/pasoalcostado_/)
  * **TikTok**: [@pasoalcostado_](https://www.tiktok.com/@pasoalcostado_)
* **Identidad visual**:
  * **Fondo Crema base**: `#F7F2E8` (papel editorial cálido)
  * **Bordó institucional**: `#5B1426` (color extraído del logotipo oficial)
  * **Negro carbón**: `#1A1718` (color de la silueta del logo, máxima legibilidad)
  * **Tipografía de títulos**: *Playfair Display* (serif condensada de alto impacto)
  * **Tipografía de lectura**: *Plus Jakarta Sans* (sans-serif contemporánea pensada para lectura descansada en pantallas)

---

## 2. Estructura de Archivos del Proyecto

El sitio está desarrollado con estándares abiertos web (**HTML5 semántico, CSS3 modular y JavaScript nativo**) sin necesidad de instalar programas adicionales, frameworks ni dependencias. Puede abrirse localmente con un doble clic en cualquier computadora.

```text
DESARROLLO WEB/
├── index.html                   # Portada principal del medio
├── quienes-somos.html           # Manifiesto, principios y equipo de redacción
├── README.md                    # Manual de uso y publicación del equipo
├── .gitignore                   # Exclusiones de control de versiones
│
├── css/
│   ├── styles.css               # Variables de color, tipografía fluida, reset y accesibilidad
│   ├── components.css           # Header, navegación, tarjetas, banners y pie de página
│   └── article.css              # Tipografía especializada para la lectura de notas y secciones
│
├── js/
│   └── main.js                  # Menú accesible para celulares y fecha automática en español
│
├── img/
│   ├── logo/
│   │   └── logo-paso-al-costado.jpg  # Logotipo oficial del medio
│   ├── notas/                   # Carpeta para colocar fotografías de las notas
│   ├── multimedia/              # Miniaturas de videos y carátulas de podcasts
│   └── equipo/                  # Retratos fotográficos del equipo de redacción
│
├── notas/
│   └── plantilla-nota.html      # PLANTILLA MAESTRA para redactar y publicar nuevas notas
│
├── secciones/
│   ├── actualidad.html          # Territorio editorial: Actualidad
│   ├── sociedad.html            # Territorio editorial: Sociedad
│   ├── deportes.html            # Territorio editorial: Deportes
│   ├── politica.html            # Territorio editorial: Política
│   └── cultura.html             # Territorio editorial: Cultura (Música, Cine, Espectáculos)
│
└── multimedia/
    └── index.html               # Hub con el podcast en YouTube y formato vertical (TikTok/IG)
```

---

## 3. Guía de Redacción: ¿Cómo Publicar una Nueva Nota?

Cualquier estudiante del equipo puede crear y publicar un artículo siguiendo estos 4 pasos simples:

### Paso 1: Duplicar la plantilla
1. Andá a la carpeta `notas/`.
2. Hacé una copia del archivo `plantilla-nota.html`.
3. Cambiale el nombre por un texto breve en minúsculas y separado por guiones (slug), por ejemplo:  
   `crisis-del-transporte-claves.html`

### Paso 2: Completar la información periodística
Abrí el nuevo archivo con cualquier editor de texto (VS Code, Notepad, etc.) y buscá las etiquetas indicadas con `<!-- EDITAR AQUÍ -->`:
* **Título de la pestaña (`<title>`)**: Escribí el titular de la nota.
* **Volanta (`.badge-volanta`)**: Ej. `ACTUALIDAD · EN PROFUNDIDAD` o `SOCIEDAD · CRÓNICA`.
* **Titular (`<h1 class="article-title">`)**: El título principal de la nota.
* **Bajada (`.article-lead`)**: Resumen de 2 a 3 líneas con el contexto y por qué importa.
* **Firma y fecha**: Tu nombre, rol en el medio y fecha de publicación.
* **Fotografía**:
  * Guardá tu foto en la carpeta `img/notas/` (ej. `transporte.jpg`).
  * En la plantilla, reemplazá el `<div class="placeholder-media">` por:
    ```html
    <img src="../img/notas/transporte.jpg" alt="Descripción de la imagen" itemprop="image">
    ```
  * Completá el epígrafe informativo y el crédito del autor/agencia fotográfica.
* **Cuerpo de la nota**: Redactá los párrafos, colocá intertítulos `<h2>` para subdividir la lectura y utilizá el bloque `<blockquote class="pull-quote">` si querés resaltar un testimonio clave.
* **Fuentes consultadas**: En la caja inferior, listá los informes, documentos o entrevistas consultadas.

### Paso 3: Enlazar la nota en la portada o en su sección
Para que los lectores encuentren tu nota:
1. Abrí `index.html` (para portada) o la página de sección correspondiente en `secciones/` (ej. `secciones/actualidad.html`).
2. En la tarjeta donde quieras ubicarla, cambiá el enlace `href="notas/plantilla-nota.html"` por la ruta a tu nueva nota: `href="notas/crisis-del-transporte-claves.html"`.
3. Actualizá el título, bajada y autor en esa tarjeta.

---

## 4. ¿Cómo Editar el Equipo en "Quiénes Somos"?

En el archivo `quienes-somos.html`, el apartado **Equipo de Redacción** (`#equipo`) está organizado con tarjetas independientes (`<article class="team-card">`).

* **Para QUITAR a una persona**: Simplemente eliminá el bloque `<article class="team-card">...</article>` correspondiente.
* **Para AGREGAR a una persona**: Copiá uno de los bloques existentes, pegalo debajo dentro de `<div class="team-grid">` y completá el nombre, iniciales, rol y reseña biográfica.
* **Para usar foto real**: Guardá la foto del redactor en `img/equipo/nombre.jpg` y reemplazá el `<div class="team-card__avatar">` por:
  ```html
  <img src="img/equipo/nombre.jpg" alt="Nombre y Apellido" style="width: 76px; height: 76px; border-radius: 50%; object-fit: cover; border: 2px solid var(--color-brand-primary); margin-bottom: var(--space-md);">
  ```
* **Ajuste automático**: La cuadrícula (CSS Grid) se reacomoda de manera automática según la cantidad de integrantes (3 columnas en PC, 2 en tablets y 1 en móviles).

---

## 5. Guía de Publicación Gratuita en Internet

Cuando el equipo esté listo para publicar el sitio web online para que cualquier persona pueda leerlo desde su celular o computadora, pueden utilizar cualquiera de estas dos soluciones 100% gratuitas:

### Opción A: GitHub Pages (Recomendada para proyectos académicos)
1. **Crear una cuenta**: Ingresen a [GitHub.com](https://github.com) y creen una cuenta gratuita para el medio (por ejemplo: `pasoalcostado`).
2. **Crear un repositorio**:
   * Hagan clic en **New repository** (Nuevo repositorio).
   * Nombre del repositorio: `pasoalcostado` (o `sitio-web`).
   * Seleccionen que sea **Public** (Público).
   * Hagan clic en **Create repository**.
3. **Subir los archivos**:
   * Pueden subir los archivos directamente desde el navegador haciendo clic en **Upload an existing file** y arrastrando todos los archivos y carpetas de `DESARROLLO WEB`.
   * Hagan clic en **Commit changes**.
4. **Activar la web**:
   * En el repositorio, vayan a la pestaña **Settings** (Configuración) > Menú lateral izquierdo **Pages**.
   * En la sección **Branch**, seleccionen `main` (o `master`) y carpeta `/(root)`.
   * Hagan clic en **Save** (Guardar).
5. **¡Listo!**: En aproximadamente 1 o 2 minutos, GitHub les brindará la dirección web pública de su medio (por ejemplo: `https://pasoalcostado.github.io/pasoalcostado/`).

### Opción B: Vercel (Publicación instantánea con arrastrar y soltar)
1. Ingresen a [Vercel.com](https://vercel.com) e inicien sesión con su cuenta de GitHub o correo electrónico.
2. Hagan clic en **Add New...** > **Project**.
3. Si vincularon su GitHub, seleccionen el repositorio y hagan clic en **Deploy**. También pueden usar la herramienta de arrastrar y soltar la carpeta completa.
4. Vercel detectará automáticamente que es un sitio web estático y lo publicará en segundos con certificado de seguridad gratuito (HTTPS) en una dirección como `https://pasoalcostado.vercel.app`.

---

## 6. Mantenimiento y Buenas Prácticas Periodísticas

1. **Nunca publicar noticias falsas ni inventar fuentes**: Conservar siempre los criterios de verificación y rigor editorial.
2. **Optimizar las fotografías antes de subirlas**: Intentar que las imágenes de notas no pesen más de 300KB a 500KB para que el sitio cargue con rapidez en teléfonos con datos móviles.
3. **Mantener siempre accesible el enlace de redes**: Recordar que muchos lectores provendrán desde TikTok e Instagram; mantener siempre actualizadas las piezas destacadas en el Hub Multimedia.
