# 🏆 Encuesta Pirámide

Sistema de votación tipo torneo para seleccionar productos ganadores mediante eliminación progresiva.

## 🎯 Características

- **Sistema de Torneo**: Los productos compiten en rondas eliminatorias (5 productos → 1 ganador por grupo)
- **Interfaz Visual Premium**: Diseño moderno con gradientes, animaciones y efectos glassmorphism
- **Gestión de Productos**: Panel de administración para agregar productos e imágenes
- **Exportación a Excel**: Descarga resultados completos con resumen de ganadores
- **Responsive**: Funciona perfectamente en desktop, tablet y móvil
- **Resultados con Podio**: Visualización tipo medalla olímpica (🥇🥈🥉)

## 🚀 Cómo Usar

### 1. Abrir la Aplicación
Abre `index.html` en tu navegador web preferido.

### 2. Configurar Productos
1. Haz clic en el botón de configuración (⚙️) en la esquina inferior derecha
2. Ingresa los nombres de tus productos (uno por línea)
3. Haz clic en "Cargar Productos"
4. Opcionalmente, agrega imágenes a cada producto usando el botón 📷

### 3. Realizar la Encuesta
1. Haz clic en "Comenzar Encuesta"
2. En cada ronda, selecciona tu producto favorito
3. Los ganadores avanzan automáticamente a la siguiente ronda
4. Continúa hasta llegar al podio final

### 4. Exportar Resultados
1. Al finalizar, haz clic en "📊 Exportar a Excel"
2. Se descargará un archivo Excel con:
   - Todos los resultados por ronda
   - Resumen final con podio
   - Estadísticas de selección

## 📊 Cómo Funciona el Sistema de Pirámide

```
Ejemplo con 10 productos:

Ronda 1: [P1,P2,P3,P4,P5] [P6,P7,P8,P9,P10]
         Selecciona 1      Selecciona 1
              ↓                  ↓
Ronda 2:    [Ganador1, Ganador2]
                     ↓
            🥇 Campeón Final 🥇
```

- Cada grupo tiene máximo 5 productos
- De cada grupo sale 1 ganador
- Los ganadores forman la siguiente ronda
- El proceso continúa hasta tener un podio (top 3)

## 🎨 Personalización

### Cambiar Productos Predeterminados
Edita el array `sampleProducts` en `app.js`:

```javascript
const sampleProducts = [
    { id: 1, name: 'Tu Producto', image: null, emoji: '📱' },
    // ...más productos
];
```

### Ajustar Colores
Modifica las variables CSS en `styles.css`:

```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    /* ...más variables */
}
```

## 📁 Estructura de Archivos

```
encuesta-piramide/
├── index.html      # Estructura HTML principal
├── styles.css      # Estilos y diseño
├── app.js          # Lógica de la aplicación
└── README.md       # Esta documentación
```

## 🔧 Requisitos

- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Conexión a internet (para fuentes de Google y librería XLSX)

## 💡 Consejos

1. **Mínimo 2 productos**: Necesitas al menos 2 productos para realizar una encuesta
2. **Ideal 5-25 productos**: El sistema funciona mejor con este rango
3. **Imágenes opcionales**: Puedes usar solo nombres o agregar imágenes para mejor experiencia
4. **Múltiples tandas**: Puedes usar el mismo sistema varias veces con diferentes clientes

## 📧 Exportación de Datos

El archivo Excel incluye:
- **Hoja 1 - Resultados Encuesta**:
  - Todas las selecciones por ronda
  - Resumen final con ranking
  - Conteo de veces que cada producto fue seleccionado

## 🎯 Casos de Uso

- Selección de productos para inventario
- Votaciones de preferencias de clientes
- Torneos de popularidad de productos
- Estudios de mercado
- Priorización de artículos para pedidos

---

**¡Disfruta tu encuesta pirámide!** 🏆✨
