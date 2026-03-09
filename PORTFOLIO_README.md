# 📱 Portafolio React con react-kino

Portafolio personal de Erick Ramírez convertido de HTML a React con animaciones usando **react-kino**.

## ✨ Características

- ✅ Convertido de HTML puro a componentes React
- ✅ Integración con **react-kino** para animaciones suaves
- ✅ Navegación fluida entre secciones
- ✅ Diseño responsivo (mobile-friendly)
- ✅ Menú hamburguesa para dispositivos móviles
- ✅ Sección de desplazamiento automático de habilidades
- ✅ Timeline de experiencia interactiva
- ✅ Galería de proyectos con tarjetas animadas

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Header.tsx          # Navegación principal
│   ├── Header.css
│   ├── Footer.tsx          # Pie de página
│   ├── Footer.css
│   └── sections/
│       ├── Hero.tsx        # Sección principal (home)
│       ├── Hero.css
│       ├── About.tsx       # Sobre mí + Cursos + Conocimientos
│       ├── About.css
│       ├── Habilities.tsx  # Habilidades
│       ├── Habilities.css
│       ├── Experience.tsx  # Experiencia laboral (Timeline)
│       ├── Experience.css
│       ├── Projects.tsx    # Proyectos + Contenido
│       ├── Projects.css
│       ├── Contact.tsx     # Contacto + Redes sociales
│       └── Contact.css
├── App.tsx                 # Componente principal
├── App.css                 # Estilos principales
├── main.tsx                # Punto de entrada
└── index.css               # Estilos globales
```

## 🚀 Cómo ejecutar

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173/`

### Compilar para producción

```bash
npm run build
```

### Preview de producción

```bash
npm run preview
```

## 🎨 Tecnologías Utilizadas

- **React 19** - Librería UI moderna
- **Vite** - Build tool ultrarrápido
- **TypeScript** - Tipado estático en JavaScript
- **react-kino** - Animaciones y efectos cinemáticos
- **Tailwind-like CSS** - Estilos personalizados
- **Font Awesome 5** - Iconos de redes sociales

## 📊 Secciones del Portafolio

### 1. **Header | Navegación**

- Barra de navegación fija
- Links a todas las secciones
- Menú hamburguesa responsivo

### 2. **Hero | Inicio**

- Presentación personal
- Foto de perfil con efecto hover
- Enlaces a redes sociales
- Fondo con imagen de fondo

### 3. **About | Sobre mí**

- Descripción personal
- Grid de cursos completados (11 cursos)
- Carrusel de conocimientos técnicos con animación
- Efecto parallax en el fondo

### 4. **Habilities | Habilidades**

- Listado de habilidades profesionales
- Efectos hover con animaciones
- Gradiente de colores

### 5. **Experience | Experiencia**

- Timeline vertical interactivo
- 5 experiencias laborales documentadas
- Diseño alternado izquierda-derecha
- Línea vertical con marcadores

### 6. **Projects | Proyectos**

- Dos secciones: Desarrollo Web + Contenido digital
- Tarjetas de proyecto con colores personalizados
- Efectos hover y elevación
- Sombras brillantes del color decorativo

### 7. **Contact | Contacto**

- Cuadro de contacto
- Botones de redes sociales circulares
- Efectos hover con escala y sombra
- Enlaces directos: GitHub, Instagram, LinkedIn, Email

### 8. **Footer**

- Copyright con año dinámico
- Diseño minimalista

## 🎯 Uso de react-kino

Se utiliza `react-kino` en los componentes Hero, About y Habilities para:

- Animaciones de entrada suave
- Transiciones de opacidad
- Movimientos de transformación

Ejemplo de uso:

```typescript
const { spring } = useKino();

<div style={spring({ opacity: 1, transform: 'translateY(0px)' })}>
  Contenido animado
</div>
```

## 🎨 Colores Principales

- **Fondo**: `#0b0c0f` (Negro profundo)
- **Texto**: `#fff` (Blanco)
- **Decorativo**: `#00a9e2` (Azul cyan)
- **Header**: `#21252e` (Gris oscuro)

## 📱 Responsividad

El proyecto es completamente responsivo con breakpoints en:

- Desktop: 1000px+
- Tablet: 500px - 999px
- Mobile: < 500px

## 🔧 Customización

### Cambiar colores

Edita las variables CSS en `src/index.css`:

```css
:root {
  --main-background: #0b0c0f;
  --main-fonts-color: #fff;
  --main-decor-color: #00a9e2;
  --main-header-background: #21252e;
}
```

### Agregar nuevas secciones

1. Crea un nuevo componente en `src/components/sections/`
2. Crea su archivo CSS correspondiente
3. Importa en `App.tsx` y agrega a la lista de secciones
4. Actualiza el Header con el nuevo link

## 📝 Notas

- Las imágenes de proyectos se cargan desde la carpeta `public/img/`
- Los iconos de conocimientos están en `public/icons_programming/`
- Font Awesome se carga desde CDN
- El carrusel de conocimientos está actualizando su posición con CSS animations

## 🚢 Deploy

Para desplegar la aplicación:

1. **Vercel** (recomendado):

```bash
npm install -g vercel
vercel
```

2. **Netlify**:

```bash
npm run build
# Sube la carpeta 'dist' a Netlify
```

3. **GitHub Pages**:

```bash
npm run build
# Configura el repositorio para servir desde 'dist'
```

## 📞 Contacto

Para más información o colaboraciones:

- GitHub: [Erickwi](https://github.com/Erickwi)
- Instagram: [@erick\_.ramirez](https://www.instagram.com/erick_.ramirez/)
- LinkedIn: [Erick Ramírez Ortiz](https://www.linkedin.com/in/erick-ram%C3%ADrez-ortiz-8b02001b0/)
- Email: electrictiesto@gmail.com

---

Hecho con ❤️ por Erick Ramírez | 2024-2026
