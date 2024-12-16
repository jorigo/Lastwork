# Gestión de Preguntas con Angular

Este proyecto es un componente en Angular para gestionar una lista de PREGUNTAS, ENCUESTAS y TIPO DE PREGUNTAS, asegurando que cada registro tenga un ID único. Utiliza servicios HTTP para interactuar con un backend y mantiene una lista local sincronizada.

## **Funcionamiento General**

### **1. Inicialización (`ngOnInit`)**
- **Propósito**: Cargar los datos iniciales desde el backend y configurar el próximo ID único.
- **Proceso**:
  - Llama al método `getpreguntas()` del servicio para recuperar las preguntas existentes.
  - Utiliza el método `reduce` para encontrar el ID más alto de las preguntas recuperadas.
  - Calcula el próximo ID único como `maxId + 1`.

### **2. Guardar Nueva Pregunta (`onGuardar`)**
- **Propósito**: Añadir una nueva pregunta con un ID único a la lista.
- **Proceso**:
  - Asigna el próximo ID único (`this.nextId`) al nuevo registro.
  - Llama al método `postPreguntas()` del servicio para guardar la pregunta en el backend.
  - Agrega la respuesta del backend a la lista local (`this.preguntasList`).
  - Recalcula el próximo ID único (`maxId + 1`) después de añadir el nuevo registro.
  - Limpia el formulario (`this.newpregunta`) para la próxima entrada.

## **Métodos y Funciones Utilizadas**

### **1. Servicios HTTP**
- **`getpreguntas()`**:
  - Recupera las preguntas existentes desde el backend.
- **`postPreguntas()`**:
  - Envía los datos de la nueva pregunta al backend.

### **2. Reducción (`reduce`)**
- Encuentra el ID más alto en la lista de preguntas.
- Proporciona un cálculo robusto para casos donde los IDs no sean consecutivos.
- Ejemplo:
  ```typescript
  const maxId = this.preguntasList.reduce((max: number, pregunta: any) => 
    Math.max(max, parseInt(pregunta.id, 10)), 0);

## **Conclusión**
El código garantiza la gestión eficiente de IDs únicos y la sincronización entre la lista local y la simulacion con la base de datos json. Esto se logra mediante:

Interacciones HTTP para datos en tiempo real.
Cálculo dinámico de IDs únicos con reduce.
Actualización automática de la lista local y el próximo ID disponible.