/* ============================================
   FUNCIONES AUXILIARES PARA DIBUJAR GRAFOS
   ============================================ */

class GraphVisualizer {
    constructor(svgId, nodes, edges) {
        this.svg = document.getElementById(svgId);
        this.nodes = nodes;
        this.edges = edges;
        this.nodeRadius = 25;
        this.width = this.svg.clientWidth || 800;
        this.height = this.svg.clientHeight || 400;
        this.positions = {};
        this.colors = {};
        this.initializePositions();
    }

    initializePositions() {
        const centerX = this.width / 2;
        const centerY = this.height / 2;
        const radius = Math.min(this.width, this.height) / 3;

        this.nodes.forEach((node, index) => {
            const angle = (index / this.nodes.length) * Math.PI * 2;
            this.positions[node] = {
                x: centerX + radius * Math.cos(angle),
                y: centerY + radius * Math.sin(angle)
            };
            this.colors[node] = '#e5e7eb'; // color gris por defecto
        });
    }

    drawGraph() {
        this.svg.innerHTML = ''; // limpiar SVG

        // Dibujar aristas
        this.edges.forEach(([from, to]) => {
            const fromPos = this.positions[from];
            const toPos = this.positions[to];

            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', fromPos.x);
            line.setAttribute('y1', fromPos.y);
            line.setAttribute('x2', toPos.x);
            line.setAttribute('y2', toPos.y);
            line.setAttribute('stroke', '#9ca3af');
            line.setAttribute('stroke-width', '2');
            line.setAttribute('class', 'edge');
            this.svg.appendChild(line);
        });

        // Dibujar nodos
        this.nodes.forEach(node => {
            const pos = this.positions[node];

            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', pos.x);
            circle.setAttribute('cy', pos.y);
            circle.setAttribute('r', this.nodeRadius);
            circle.setAttribute('fill', this.colors[node]);
            circle.setAttribute('stroke', '#1f2937');
            circle.setAttribute('stroke-width', '2');
            circle.setAttribute('class', 'node');
            this.svg.appendChild(circle);

            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', pos.x);
            text.setAttribute('y', pos.y);
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('dominant-baseline', 'middle');
            text.setAttribute('font-weight', 'bold');
            text.setAttribute('font-size', '14');
            text.setAttribute('fill', '#1f2937');
            text.textContent = node;
            this.svg.appendChild(text);
        });
    }

    highlightNode(node, color) {
        this.colors[node] = color;
        this.drawGraph();
    }

    highlightEdge(from, to, color) {
        const fromPos = this.positions[from];
        const toPos = this.positions[to];

        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', fromPos.x);
        line.setAttribute('y1', fromPos.y);
        line.setAttribute('x2', toPos.x);
        line.setAttribute('y2', toPos.y);
        line.setAttribute('stroke', color);
        line.setAttribute('stroke-width', '3');
        line.setAttribute('class', 'edge-highlight');
        this.svg.appendChild(line);
    }

    setNodeColor(node, color) {
        this.colors[node] = color;
    }
}

/* ============================================
   VISUALIZACIÓN 1: GRAFO INTRODUCTORIO
   ============================================ */

function drawIntroductoryGraph() {
    const svg = document.getElementById('grafo-ejemplo1');
    const width = svg.clientWidth || 800;
    const height = svg.clientHeight || 400;

    const nodes = ['1', '2', '3', '4', '5'];
    const edges = [
        [1, 2], [1, 3], [2, 3], [2, 4], [3, 4], [3, 5], [4, 5]
    ];

    // Posicionar nodos en forma circular
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 3;
    const positions = [];

    nodes.forEach((node, index) => {
        const angle = (index / nodes.length) * Math.PI * 2;
        positions.push({
            x: centerX + radius * Math.cos(angle),
            y: centerY + radius * Math.sin(angle)
        });
    });

    // Limpiar SVG
    svg.innerHTML = '';

    // Dibujar aristas
    edges.forEach(([from, to]) => {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', positions[from - 1].x);
        line.setAttribute('y1', positions[from - 1].y);
        line.setAttribute('x2', positions[to - 1].x);
        line.setAttribute('y2', positions[to - 1].y);
        line.setAttribute('stroke', '#6b7280');
        line.setAttribute('stroke-width', '2');
        svg.appendChild(line);
    });

    // Dibujar nodos
    nodes.forEach((node, index) => {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', positions[index].x);
        circle.setAttribute('cy', positions[index].y);
        circle.setAttribute('r', '25');
        circle.setAttribute('fill', '#2563eb');
        circle.setAttribute('stroke', '#1e40af');
        circle.setAttribute('stroke-width', '2');
        svg.appendChild(circle);

        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', positions[index].x);
        text.setAttribute('y', positions[index].y);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('dominant-baseline', 'middle');
        text.setAttribute('font-weight', 'bold');
        text.setAttribute('font-size', '16');
        text.setAttribute('fill', 'white');
        text.textContent = node;
        svg.appendChild(text);
    });
}

/* ============================================
   VISUALIZACIÓN 2: GRAFO PARA REPRESENTACIONES
   ============================================ */

function drawRepresentationGraph() {
    const svg = document.getElementById('grafo-ejemplo2');
    const width = svg.clientWidth || 800;
    const height = svg.clientHeight || 350;

    const nodes = [1, 2, 3, 4];
    const edges = [
        [1, 2], [1, 3], [2, 4], [3, 4]
    ];

    // Posiciones más simples
    const positions = [
        { x: width / 4, y: height / 3 },      // nodo 1
        { x: (width * 3) / 4, y: height / 3 }, // nodo 2
        { x: width / 4, y: (height * 2) / 3 },  // nodo 3
        { x: (width * 3) / 4, y: (height * 2) / 3 } // nodo 4
    ];

    svg.innerHTML = '';

    // Dibujar aristas
    edges.forEach(([from, to]) => {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', positions[from - 1].x);
        line.setAttribute('y1', positions[from - 1].y);
        line.setAttribute('x2', positions[to - 1].x);
        line.setAttribute('y2', positions[to - 1].y);
        line.setAttribute('stroke', '#6b7280');
        line.setAttribute('stroke-width', '2');
        svg.appendChild(line);
    });

    // Dibujar nodos
    nodes.forEach((node, index) => {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', positions[index].x);
        circle.setAttribute('cy', positions[index].y);
        circle.setAttribute('r', '25');
        circle.setAttribute('fill', '#f59e0b');
        circle.setAttribute('stroke', '#d97706');
        circle.setAttribute('stroke-width', '2');
        svg.appendChild(circle);

        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', positions[index].x);
        text.setAttribute('y', positions[index].y);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('dominant-baseline', 'middle');
        text.setAttribute('font-weight', 'bold');
        text.setAttribute('font-size', '16');
        text.setAttribute('fill', 'white');
        text.textContent = node;
        svg.appendChild(text);
    });
}

/* ============================================
   BFS - BÚSQUEDA EN AMPLITUD
   ============================================ */

class BFSVisualizer {
    constructor() {
        this.nodes = ['A', 'B', 'C', 'D', 'E'];
        this.edges = [
            ['A', 'B'], ['A', 'C'],
            ['B', 'D'],
            ['C', 'D'], ['C', 'E'],
            ['D', 'E']
        ];
        this.adjList = {
            'A': ['B', 'C'],
            'B': ['A', 'D'],
            'C': ['A', 'D', 'E'],
            'D': ['B', 'C', 'E'],
            'E': ['C', 'D']
        };
        this.visualizer = new GraphVisualizer('grafo-bfs', this.nodes, this.edges);
        this.visitOrder = [];
    }

    async execute() {
        this.visualizer.drawGraph();
        const queue = ['A'];
        const visited = new Set(['A']);
        this.visitOrder = [];

        this.visualizer.setNodeColor('A', '#3b82f6');
        this.visualizer.drawGraph();

        while (queue.length > 0) {
            const node = queue.shift();
            this.visitOrder.push(node);
            this.visualizer.setNodeColor(node, '#10b981');
            this.visualizer.drawGraph();

            await new Promise(resolve => setTimeout(resolve, 500));

            for (const neighbor of this.adjList[node]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                    this.visualizer.setNodeColor(neighbor, '#3b82f6');
                    this.visualizer.drawGraph();
                    await new Promise(resolve => setTimeout(resolve, 300));
                }
            }
        }

        document.getElementById('bfs-order').textContent = this.visitOrder.join(' → ');
    }

    reset() {
        this.visualizer.drawGraph();
        this.visitOrder = [];
        document.getElementById('bfs-order').textContent = '-';
    }
}

let bfsViz = new BFSVisualizer();

function initBFS() {
    bfsViz.reset();
    bfsViz.execute();
}

function resetBFS() {
    bfsViz.reset();
}

/* ============================================
   DFS - BÚSQUEDA EN PROFUNDIDAD
   ============================================ */

class DFSVisualizer {
    constructor() {
        this.nodes = ['A', 'B', 'C', 'D', 'E'];
        this.edges = [
            ['A', 'B'], ['A', 'C'],
            ['B', 'D'],
            ['C', 'D'], ['C', 'E'],
            ['D', 'E']
        ];
        this.adjList = {
            'A': ['B', 'C'],
            'B': ['A', 'D'],
            'C': ['A', 'D', 'E'],
            'D': ['B', 'C', 'E'],
            'E': ['C', 'D']
        };
        this.visualizer = new GraphVisualizer('grafo-dfs', this.nodes, this.edges);
        this.visitOrder = [];
    }

    async execute() {
        this.visualizer.drawGraph();
        const visited = new Set();
        this.visitOrder = [];

        const dfsHelper = async (node) => {
            visited.add(node);
            this.visitOrder.push(node);
            this.visualizer.setNodeColor(node, '#10b981');
            this.visualizer.drawGraph();

            await new Promise(resolve => setTimeout(resolve, 500));

            for (const neighbor of this.adjList[node]) {
                if (!visited.has(neighbor)) {
                    this.visualizer.setNodeColor(neighbor, '#3b82f6');
                    this.visualizer.drawGraph();
                    await new Promise(resolve => setTimeout(resolve, 300));
                    await dfsHelper(neighbor);
                }
            }
        };

        this.visualizer.setNodeColor('A', '#3b82f6');
        this.visualizer.drawGraph();
        await new Promise(resolve => setTimeout(resolve, 300));

        await dfsHelper('A');

        document.getElementById('dfs-order').textContent = this.visitOrder.join(' → ');
    }

    reset() {
        this.visualizer.drawGraph();
        this.visitOrder = [];
        document.getElementById('dfs-order').textContent = '-';
    }
}

let dfsViz = new DFSVisualizer();

function initDFS() {
    dfsViz.reset();
    dfsViz.execute();
}

function resetDFS() {
    dfsViz.reset();
}

/* ============================================
   INICIALIZACIÓN AL CARGAR EL DOCUMENTO
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
    console.log('Inicializando visualizaciones de grafos...');

    // Dibujar los gráfos estáticos
    setTimeout(drawIntroductoryGraph, 100);
    setTimeout(drawRepresentationGraph, 100);

    // Hacer que los links de navegación sean funcionales
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    console.log('Visualizaciones de grafos inicializadas correctamente');
});

/* ============================================
   REDIMENSIONAMIENTO DE VENTANA
   ============================================ */

window.addEventListener('resize', function () {
    drawIntroductoryGraph();
    drawRepresentationGraph();
    bfsViz.reset();
    dfsViz.reset();
});
