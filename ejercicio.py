"""
Ejercicio de Estructura de Datos: Cola (Queue)
Autor: Alumno
Fecha: 2 de diciembre de 2025
"""

from collections import deque


class Cola:
    """Clase que implementa una Cola (Queue) manual"""
    
    def __init__(self):
        """Inicializa una cola vacía"""
        self.elementos = []
    
    def enqueue(self, elemento):
        """
        Agrega un elemento al final de la cola (al final)
        
        Args:
            elemento: El elemento a agregar
        """
        self.elementos.append(elemento)
    
    def dequeue(self):
        """
        Elimina y retorna el primer elemento de la cola (FIFO)
        
        Returns:
            El elemento eliminado o None si la cola está vacía
        """
        if not self.esta_vacia():
            return self.elementos.pop(0)
        return None
    
    def peek(self):
        """
        Retorna el primer elemento sin eliminarlo
        
        Returns:
            El primer elemento o None si la cola está vacía
        """
        if not self.esta_vacia():
            return self.elementos[0]
        return None
    
    def esta_vacia(self):
        """
        Verifica si la cola está vacía
        
        Returns:
            True si está vacía, False en caso contrario
        """
        return len(self.elementos) == 0
    
    def tamaño(self):
        """
        Retorna el tamaño de la cola
        
        Returns:
            Número de elementos en la cola
        """
        return len(self.elementos)
    
    def __str__(self):
        """Representación en string de la cola"""
        return f"Cola({self.elementos})"


def ejercicio_1_cola_basica():
    """Ejercicio 1: Operaciones básicas de cola"""
    print("\n" + "="*60)
    print("EJERCICIO 1: Operaciones Básicas de Cola")
    print("="*60)
    
    cola = Cola()
    
    # Agregar elementos
    print("\n1. Agregando elementos: 10, 20, 30, 40, 50")
    for num in [10, 20, 30, 40, 50]:
        cola.enqueue(num)
        print(f"   Enqueue({num}) -> {cola}")
    
    # Ver el primer elemento
    print(f"\n2. Peek (ver el primero): {cola.peek()}")
    print(f"   Cola actual: {cola}")
    
    # Eliminar elementos
    print("\n3. Eliminando elementos (Dequeue)")
    while not cola.esta_vacia():
        elemento = cola.dequeue()
        print(f"   Dequeue() -> {elemento}, Cola restante: {cola}")


def ejercicio_2_simular_fila_banco():
    """Ejercicio 2: Simular una fila en un banco"""
    print("\n" + "="*60)
    print("EJERCICIO 2: Simulación de Fila en Banco")
    print("="*60)
    
    fila_banco = Cola()
    clientes = [
        ("Juan", 5),
        ("María", 10),
        ("Pedro", 3),
        ("Ana", 7),
        ("Luis", 2)
    ]
    
    print("\nClientes llegando al banco:")
    for nombre, minutos in clientes:
        fila_banco.enqueue((nombre, minutos))
        print(f"  {nombre} llegó (se atiende en {minutos} min)")
        print(f"  Fila actual (tamaño: {fila_banco.tamaño()}): {fila_banco}")
    
    print("\n--- Atendiendo Clientes ---")
    tiempo_total = 0
    while not fila_banco.esta_vacia():
        cliente, minutos = fila_banco.dequeue()
        tiempo_total += minutos
        print(f"✓ Atendiendo a {cliente} ({minutos} min) - Tiempo acumulado: {tiempo_total} min")


def ejercicio_3_verificar_parentesis():
    """Ejercicio 3: Verificar secuencia válida usando cola"""
    print("\n" + "="*60)
    print("EJERCICIO 3: Procesar Tareas con Cola")
    print("="*60)
    
    cola_tareas = Cola()
    tareas = ["Tarea A", "Tarea B", "Tarea C", "Tarea D", "Tarea E"]
    
    print("\nTareas en la cola:")
    for tarea in tareas:
        cola_tareas.enqueue(tarea)
    
    print(f"Total de tareas: {cola_tareas.tamaño()}")
    print(f"Cola: {cola_tareas}")
    
    print("\n--- Procesando Tareas (FIFO) ---")
    tarea_num = 1
    while not cola_tareas.esta_vacia():
        tarea = cola_tareas.dequeue()
        print(f"{tarea_num}. Procesando: {tarea} ✓")
        tarea_num += 1


def ejercicio_4_comparar_implementaciones():
    """Ejercicio 4: Comparar Cola manual vs deque de Python"""
    print("\n" + "="*60)
    print("EJERCICIO 4: Comparación - Cola Manual vs deque")
    print("="*60)
    
    print("\n--- Usando nuestra Cola implementada ---")
    cola_manual = Cola()
    for i in range(1, 6):
        cola_manual.enqueue(f"Dato{i}")
    
    print(f"Cola manual: {cola_manual}")
    print(f"Dequeue: {cola_manual.dequeue()}")
    print(f"Después de dequeue: {cola_manual}")
    
    print("\n--- Usando deque de Python (módulo collections) ---")
    cola_deque = deque()
    for i in range(1, 6):
        cola_deque.append(f"Dato{i}")
    
    print(f"Cola deque: {list(cola_deque)}")
    print(f"Popleft: {cola_deque.popleft()}")
    print(f"Después de popleft: {list(cola_deque)}")


def ejercicio_5_cola_con_prioridad():
    """Ejercicio 5: Simular una cola con prioridad"""
    print("\n" + "="*60)
    print("EJERCICIO 5: Simulación de Cola con Prioridad")
    print("="*60)
    
    cola = Cola()
    
    pacientes = [
        ("Carlos", "Normal"),
        ("Sofia", "Urgente"),
        ("Marco", "Normal"),
        ("Laura", "Urgente"),
        ("Diego", "Normal")
    ]
    
    print("\nPacientes llegando a la clínica:")
    for nombre, prioridad in pacientes:
        cola.enqueue((nombre, prioridad))
        print(f"  {nombre} ({prioridad})")
    
    print(f"\nCola de espera (tamaño: {cola.tamaño()}): {cola}")
    
    # Separar por prioridad
    urgentes = []
    normales = []
    
    while not cola.esta_vacia():
        nombre, prioridad = cola.dequeue()
        if prioridad == "Urgente":
            urgentes.append(nombre)
        else:
            normales.append(nombre)
    
    print("\n--- Orden de atención ---")
    print("Urgentes:")
    for i, nombre in enumerate(urgentes, 1):
        print(f"  {i}. {nombre}")
    
    print("Normales:")
    for i, nombre in enumerate(normales, 1):
        print(f"  {i}. {nombre}")


def main():
    """Función principal que ejecuta todos los ejercicios"""
    print("\n")
    print("#" * 60)
    print("# EJERCICIOS DE ESTRUCTURA DE DATOS: COLA (QUEUE)")
    print("#" * 60)
    
    # Ejecutar todos los ejercicios
    ejercicio_1_cola_basica()
    ejercicio_2_simular_fila_banco()
    ejercicio_3_verificar_parentesis()
    ejercicio_4_comparar_implementaciones()
    ejercicio_5_cola_con_prioridad()
    
    print("\n" + "#" * 60)
    print("# FIN DE LOS EJERCICIOS")
    print("#" * 60 + "\n")


if __name__ == "__main__":
    main()
