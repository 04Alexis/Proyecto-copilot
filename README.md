# Blog Técnico: Estructura de Datos - Grafos

## 📋 Descripción del Proyecto

Este proyecto es un **Blog Técnico dedicado a la Estructura de Datos Grafos**. Combina desarrollo de contenido educativo de alta calidad con herramientas de desarrollo web modernas (HTML, CSS, JavaScript) y control de versiones (Git/GitHub).

## 🎯 Objetivos

- ✅ Crear contenido educativo sobre Grafos
- ✅ Implementar visualizaciones interactivas
- ✅ Usar tecnologías web estándar (HTML/CSS/JS)
- ✅ Controlar versiones con Git/GitHub

## 📁 Estructura del Proyecto

```
Proyecto-copilot/
├── README.md              # Este archivo
├── ejercicio.py           # Script de ejemplo (estructura de datos)
└── blog/
    ├── index.html         # Página principal del blog
    ├── styles.css         # Estilos CSS profesionales
    └── script.js          # Visualizaciones y animaciones
```

## 📖 Contenido del Blog

### Post #1: Introducción a los Grafos
- **Contenido**: Definición de un Grafo, conceptos clave (Vértices, Aristas)
- **Tipos de Grafos**: Dirigidos, No Dirigidos, Ponderados
- **Visualización**: Diagrama interactivo de un grafo no dirigido con 5 nodos

### Post #2: Representación de Grafos
- **Lista de Adyacencia**: Implementación y ventajas (eficiencia de espacio)
- **Matriz de Adyacencia**: Implementación y ventajas (eficiencia de tiempo)
- **Comparación**: Tabla de ventajas/desventajas
- **Ejemplos visuales**: Ambas representaciones del mismo grafo

### Post #3: Algoritmos Fundamentales de Recorrido
- **BFS (Breadth-First Search)**: Búsqueda en amplitud
  - Pseudocódigo
  - Complejidad: O(V + E)
  - Visualización interactiva con animación paso a paso
- **DFS (Depth-First Search)**: Búsqueda en profundidad
  - Pseudocódigo (Iterativo y Recursivo)
  - Complejidad: O(V + E)
  - Visualización interactiva con animación paso a paso

## 🚀 Cómo Usar

### Opción 1: Abrir directamente en el navegador
1. Navega a la carpeta `blog/`
2. Abre `index.html` con tu navegador (Firefox, Chrome, Edge, Safari)

### Opción 2: Usar un servidor local (Recomendado)
```powershell
# Con Python 3
cd blog
python -m http.server 8000

# Luego abre: http://localhost:8000
```

### Opción 3: Usar Live Server (VS Code)
1. Instala la extensión "Live Server" en VS Code
2. Click derecho en `index.html` → "Open with Live Server"

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica del contenido
- **CSS3**: Diseño responsivo y moderno
  - Variables CSS para temas
  - Grid y Flexbox para layouts
  - Animaciones y transiciones
- **JavaScript (Vanilla)**: Sin dependencias externas
  - Visualizaciones de grafos con SVG
  - Animaciones paso a paso
  - Interactividad del sitio

## 📊 Características Principales

✨ **Diseño Responsivo**
- Se adapta a desktop, tablet y móvil
- Navegación sticky en la parte superior

✨ **Visualizaciones Interactivas**
- Diagramas de grafos renderizados con SVG
- Botones para ejecutar BFS y DFS en tiempo real
- Animaciones suave de transiciones de nodos

✨ **Contenido de Calidad**
- Explicaciones claras y detalladas
- Pseudocódigo bien formateado
- Ejemplos prácticos y visuales
- Tablas comparativas

✨ **Interfaz Moderna**
- Paleta de colores profesional
- Tipografía clara y legible
- Espaciado y diseño limpio
- Efectos hover y animaciones sutiles

## 🎨 Paleta de Colores

- **Primario**: #2563eb (Azul)
- **Secundario**: #1e40af (Azul oscuro)
- **Acento**: #f59e0b (Ámbar)
- **Éxito**: #10b981 (Verde)
- **Peligro**: #ef4444 (Rojo)

## 📱 Puntos de Quiebre Responsivos

- Desktop: ≥ 1024px
- Tablet: 768px - 1023px
- Móvil: ≤ 480px

## 📚 Requisitos de Navegador

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🔗 Estructura del Código

### index.html
- Header con navegación sticky
- Hero section con estadísticas
- Tres artículos independientes
- Footer con información

### styles.css
- Variables CSS para fácil personalización
- Grid system flexible
- Componentes reutilizables
- Media queries para responsividad

### script.js
- Clase `GraphVisualizer` para dibujar grafos
- Clase `BFSVisualizer` para animación BFS
- Clase `DFSVisualizer` para animación DFS
- Funciones de inicialización y evento listeners

## 📝 Créditos

Proyecto desarrollado como parte de **Estructura de Datos II**
- Autor: Grupo de Desarrollo
- Universidad: [Tu Universidad]
- Fecha: 2 de diciembre de 2025

## 🤝 Contribuciones

Este es un proyecto educativo. Para contribuciones, mejoras o reportar errores, 
por favor crea un issue o pull request en el repositorio.

## 📄 Licencia

Este proyecto se distribuye bajo licencia libre para uso educativo.

---

**¡Disfruta aprendiendo sobre Grafos!** 📊✨
