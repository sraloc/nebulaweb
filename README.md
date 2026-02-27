# Nébula Visión Studio 🎬

Sitio web oficial de Nébula Visión Studio - Productora audiovisual chilena especializada en videoclips musicales y contenido cinematográfico.

![Nébula Visión Studio](public/images/logo/logo.png)

## 🌐 Demo en vivo

[Ver sitio web](https://4wqr66qvilkj2.ok.kimi.link)

## 🚀 Despliegue en GitHub Pages

### Paso 1: Crear el repositorio

1. Ve a [GitHub](https://github.com) y crea un nuevo repositorio
2. Nombra el repositorio (ej: `nebula-vision-studio`)
3. No inicialices con README (ya lo incluimos)

### Paso 2: Subir los archivos

```bash
# Clona el repositorio
git clone https://github.com/TU_USUARIO/nombre-del-repo.git
cd nombre-del-repo

# Copia todos los archivos del proyecto aquí
# (src/, public/, index.html, package.json, etc.)

# Subir a GitHub
git add .
git commit -m "Initial commit"
git push origin main
```

### Paso 3: Configurar GitHub Pages

1. Ve a **Settings** > **Pages** en tu repositorio
2. En **Source**, selecciona **GitHub Actions**
3. El workflow ya está configurado en `.github/workflows/deploy.yml`

### Paso 4: Activar GitHub Actions

1. Ve a la pestaña **Actions** en tu repositorio
2. Verás el workflow "Deploy to GitHub Pages"
3. Haz clic en **Enable GitHub Actions**
4. El despliegue se ejecutará automáticamente

### Paso 5: Ver tu sitio

Una vez completado el workflow, tu sitio estará disponible en:
```
https://TU_USUARIO.github.io/nombre-del-repo/
```

## 🛠️ Desarrollo local

### Requisitos
- Node.js 20+
- npm

### Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build
```

## 📁 Estructura del proyecto

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # Configuración de GitHub Actions
├── public/
│   └── images/
│       ├── logo/               # Logo de Nébula
│       ├── projects/           # Imágenes de proyectos
│       └── team/               # Fotos del equipo
├── src/
│   ├── components/
│   │   └── Navigation.tsx      # Barra de navegación
│   ├── sections/
│   │   ├── Hero.tsx            # Sección principal
│   │   ├── About.tsx           # Sobre nosotros
│   │   ├── Portfolio.tsx       # Portafolio
│   │   ├── Team.tsx            # Equipo
│   │   ├── Contact.tsx         # Contacto
│   │   └── Footer.tsx          # Pie de página
│   ├── App.tsx                 # Componente principal
│   ├── App.css                 # Estilos de la app
│   ├── index.css               # Estilos globales
│   └── main.tsx                # Punto de entrada
├── index.html                  # HTML principal
├── package.json                # Dependencias
├── tailwind.config.js          # Configuración de Tailwind
├── tsconfig.json               # Configuración de TypeScript
└── vite.config.ts              # Configuración de Vite
```

## 🎨 Tecnologías utilizadas

- **React** + **TypeScript** - Framework y lenguaje
- **Vite** - Build tool
- **Tailwind CSS** - Estilos
- **shadcn/ui** - Componentes UI
- **Lucide React** - Iconos

## 📱 Características

- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Animaciones suaves al hacer scroll
- ✅ Efectos hover en imágenes del equipo
- ✅ Filtros en el portafolio
- ✅ Formulario de contacto funcional
- ✅ Navegación suave entre secciones
- ✅ Tema oscuro cinematográfico

## 🔗 Enlaces importantes

- **Portafolio completo**: [Canva](https://www.canva.com/design/DAGkYk5wqvg/OYdtOjPEcWpjavyymeMriA/edit?utm_content=DAGkYk5wqvg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

## 📄 Licencia

© 2025 Nébula Visión Studio. Todos los derechos reservados.

---

¿Preguntas? Contáctanos en contacto@nebulavision.cl
