# 🚀 Portafolio Personal - Sebastian Tejeda

Portafolio web profesional desarrollado con **Angular 18**, utilizando las últimas características del framework: Standalone Components, Signals y Control Flow.

## 👨‍💻 Sobre Mí

Soy **Sebastián Isaías Tejeda Flores**, estudiante de 9no ciclo de Ingeniería de Sistemas de Información en la Universidad Peruana de Ciencias Aplicadas (UPC), Lima, Perú. 

Me apasiona el desarrollo web fullstack con enfoque en crear interfaces intuitivas y sistemas eficientes. Especializado en Angular, TypeScript, Python y bases de datos relacionales/no relacionales.

## ✨ Características Técnicas

- ✅ **Angular 18** - Última versión con todas las mejoras de rendimiento
- ✅ **Standalone Components** - 100% sin NgModules
- ✅ **Signals** - Sistema de reactividad moderno
- ✅ **Control Flow** - Sintaxis nueva (`@if`, `@for`, `@empty`)
- ✅ **Nueva API Input/Output** - `input()` y `output()` signal-based
- ✅ **TypeScript** - Tipado estricto
- ✅ **SCSS** - Estilos con Sass moderno (`@use`)
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Path Aliases** - Imports limpios con `@core`, `@shared`, `@features`

## 🏗️ Arquitectura

```
src/app/
├── core/                    # Servicios singleton y modelos
│   ├── models/             # Interfaces TypeScript
│   └── services/           # Services con Signals
│
├── shared/                 # Componentes reutilizables (Dumb)
│   └── components/
│       ├── button/
│       ├── skill-badge/
│       ├── project-card/
│       └── navbar/
│
└── features/               # Componentes principales (Smart)
    ├── home/              # Orquestador
    ├── hero/              # Landing section
    ├── about/             # Sobre mí
    ├── skills/            # Tech stack
    ├── projects/          # Proyectos
    └── contact/           # Contacto
```

## 🎨 Tecnologías del Stack

### Frontend
- Angular 18
- TypeScript
- HTML5 / SCSS
- RxJS

### Backend (en proyectos)
- Node.js
- Express.js
- NestJS

### Bases de Datos
- PostgreSQL
- MongoDB
- MySQL

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js (v18 o superior)
- npm o yarn

### Pasos

1. **Clonar el repositorio**
```bash
git clone https://github.com/sebastiantejeda/portfolio-angular.git
cd portfolio-angular
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en desarrollo**
```bash
npm start
```

La aplicación estará disponible en `http://localhost:4200`

4. **Build para producción**
```bash
npm run build
```

Los archivos optimizados se generarán en `dist/`

## 📁 Estructura de Carpetas Completa

```
portfolio-angular/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── models/
│   │   │   │   ├── project.interface.ts
│   │   │   │   ├── skill.interface.ts
│   │   │   │   └── contact.interface.ts
│   │   │   └── services/
│   │   │       ├── projects.service.ts
│   │   │       ├── skills.service.ts
│   │   │       └── contact.service.ts
│   │   │
│   │   ├── shared/
│   │   │   └── components/
│   │   │       ├── button/
│   │   │       ├── skill-badge/
│   │   │       ├── project-card/
│   │   │       └── navbar/
│   │   │
│   │   ├── features/
│   │   │   ├── home/
│   │   │   ├── hero/
│   │   │   ├── about/
│   │   │   ├── skills/
│   │   │   ├── projects/
│   │   │   └── contact/
│   │   │
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   │
│   ├── assets/
│   │   └── images/
│   │       └── projects/
│   │
│   ├── styles/
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   └── styles.scss
│   │
│   ├── index.html
│   └── main.ts
│
├── angular.json
├── tsconfig.json
├── package.json
└── README.md
```

## 🎯 Patrones de Diseño Implementados

### Smart/Dumb Components
- **Smart (Container)**: `ProjectsListComponent`, `SkillsComponent`
  - Inyectan servicios
  - Gestionan estado con Signals
  - Manejan lógica de negocio

- **Dumb (Presentational)**: `ProjectCardComponent`, `SkillBadgeComponent`
  - Solo reciben `input()` y emiten `output()`
  - Sin lógica de negocio
  - Completamente reutilizables

### Dependency Injection
Servicios singleton en `core/services/` usando `providedIn: 'root'`

## 🔧 Configuración de Path Aliases

Los imports utilizan aliases configurados en `tsconfig.json`:

```typescript
import { ProjectsService } from '@core/services/projects.service';
import { ButtonComponent } from '@shared/components/button/button.component';
import { HeroComponent } from '@features/hero/hero.component';
```

## 📝 Scripts Disponibles

```bash
npm start          # Desarrollo
npm run build      # Build producción
npm run watch      # Build con watch mode
npm test           # Tests unitarios
npm run lint       # Linter
```

## 🌐 Despliegue

El proyecto está listo para desplegarse en:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

## 📧 Contacto

- **Email**: sebastian.tejeda@uni.pe
- **GitHub**: [github.com/sebastiantejeda](https://github.com/sebastiantejeda)
- **LinkedIn**: [linkedin.com/in/sebastiantejeda](https://linkedin.com/in/sebastiantejeda)

## 📄 Licencia

MIT License - Libre para usar como referencia o template

---

**Desarrollado con 💙 por Sebastian Tejeda**
*Angular 18 • Standalone Components • Signals • TypeScript*
