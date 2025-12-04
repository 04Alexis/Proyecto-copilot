@echo off
REM ==========================================
REM  Script para iniciar el Blog de Grafos
REM  Sistema Operativo: Windows
REM ==========================================

echo.
echo ====================================================
echo      BLOG TECNICO DE GRAFOS - SERVIDOR
echo ====================================================
echo.

REM Cambiar al directorio del blog
cd /d "%~dp0blog"

REM Obtener el puerto (por defecto 8000)
set PORT=8000

echo [*] Iniciando servidor web...
echo [*] Puerto: %PORT%
echo [*] Carpeta: %cd%
echo.
echo ====================================================
echo   SERVIDOR INICIADO: http://localhost:%PORT%
echo ====================================================
echo.
echo [+] Abre tu navegador y ve a: http://localhost:%PORT%
echo [+] Presiona Ctrl+C para detener el servidor
echo.

python -m http.server %PORT%

pause
