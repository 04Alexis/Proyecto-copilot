#!/usr/bin/env python3
"""
Script para iniciar un servidor web local del Blog de Grafos
Uso: python run_server.py
Luego abre: http://localhost:8000
"""

import http.server
import socketserver
import os
from pathlib import Path

# Cambiar al directorio del blog
blog_dir = Path(__file__).parent / "blog"
os.chdir(blog_dir)

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        print(f"[{self.log_date_time_string()}] {format % args}")

try:
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print(f"""
╔════════════════════════════════════════════════╗
║      Blog Técnico de Grafos - Servidor        ║
╠════════════════════════════════════════════════╣
║  Servidor iniciado en: http://localhost:{PORT}    ║
║  Carpeta servida: {blog_dir}        ║
║                                                ║
║  Abre tu navegador y ve a:                   ║
║  → http://localhost:{PORT}                      ║
║                                                ║
║  Presiona Ctrl+C para detener el servidor    ║
╚════════════════════════════════════════════════╝
        """)
        httpd.serve_forever()

except KeyboardInterrupt:
    print("\n✓ Servidor detenido correctamente")
except OSError as e:
    print(f"✗ Error: {e}")
    print("Posiblemente el puerto 8000 ya está en uso.")
    print("Intenta: netstat -ano | findstr :8000")
