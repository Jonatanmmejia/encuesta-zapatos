# 👟 Encuesta de Zapatos - Instrucciones Completas

## ✅ ¿Qué tienes ahora?

Una encuesta interactiva con:
- ✅ 10 preguntas con opciones personalizables
- ✅ Captura del nombre del votante
- ✅ Almacenamiento de todos los votos en el navegador (LocalStorage)
- ✅ Estadísticas completas de votación
- ✅ Exportación a Excel con 2 hojas:
  - Hoja 1: Votos individuales con nombres
  - Hoja 2: Estadísticas por pregunta
- ✅ Panel de administración para ver todos los votos

## 🚀 Cómo usar (Paso a Paso)

### 1. Abrir la encuesta
- Abre el archivo `index.html` en tu navegador
- Verás la pantalla de bienvenida con el ícono de zapato 👟

### 2. Configurar tus productos (IMPORTANTE)
Antes de compartir con clientes, debes personalizar las 10 preguntas:

1. Abre el archivo `app.js`
2. Busca la sección `SURVEY_CONFIG` (líneas 1-103)
3. Modifica cada pregunta con tus productos reales:

```javascript
{
    id: 1,
    title: "Pregunta 1",  // ← Cambia esto por tu pregunta
    subtitle: "Selecciona tu modelo favorito",  // ← Descripción
    options: [
        { id: 1, name: "Nike Air Max", emoji: "👟" },  // ← Tus productos reales
        { id: 2, name: "Adidas Superstar", emoji: "👞" },
        // ... 5 opciones en total para esta pregunta
    ]
}
```

### 3. Agregar imágenes a los productos

**Opción A: Usar emojis (fácil)**
- Ya están configurados por defecto
- Los emojis se ven bien y son rápidos

**Opción B: Usar fotos reales (recomendado para mejor experiencia)**
1. Prepara las fotos de tus zapatos (formato JPG o PNG)
2. Modifica cada opción agregando la ruta de la imagen:

```javascript
{
    id: 1,
    name: "Nike Air Max",
    emoji: "👟",
    image: "imagenes/nike-air-max.jpg"  // ← Agrega esta línea
}
```

3. Crea una carpeta `imagenes` dentro de `encuesta-piramide`
4. Coloca todas las fotos ahí con nombres descriptivos

## 📋 Estructura actual de las 10 preguntas

Según tu solicitud original:
1. **Pregunta 1**: 5 opciones (Modelos)
2. **Pregunta 2**: 5 opciones (Estilos)
3. **Pregunta 3**: 3 opciones (Colores)
4. **Pregunta 4**: 2 opciones (Tallas)
5. **Pregunta 5**: 3 opciones (Materiales)
6. **Pregunta 6**: 6 opciones (Marcas)
7. **Pregunta 7**: 2 opciones (Tipo de suela)
8. **Pregunta 8**: 2 opciones (Uso - Casual/Deportivo)
9. **Pregunta 9**: 4 opciones (Diseños)
10. **Pregunta 10**: 2 opciones (Precio - Económico/Premium)

**Total: 34 opciones**

## 👥 Cómo lo usan tus clientes

1. El cliente abre el link de la encuesta
2. Ingresa su nombre (obligatorio)
3. Responde las 10 preguntas una por una
4. Al final ve un resumen de sus respuestas
5. Puede ver las estadísticas generales de todos los votos

## 📊 Panel de Administración (para ti)

1. Haz clic en el ícono ⚙️ en la esquina inferior derecha
2. Verás:
   - **Todos los votos**: Lista completa con nombre y fecha
   - **Estadísticas generales**: Conteo por cada opción

## 📥 Exportar a Excel

### Contenido del Excel:

**Hoja 1: Votos Individuales**
| Fecha | Nombre | Pregunta 1 | Pregunta 2 | ... | Pregunta 10 |
|-------|--------|------------|------------|-----|-------------|
| 12/12/2025 | Juan | Nike Air | Color Rojo | ... | Premium |
| 12/12/2025 | María | Adidas | Color Azul | ... | Económico |

**Hoja 2: Estadísticas**
| Pregunta | Opción | Total Votos | Porcentaje |
|----------|--------|-------------|------------|
| Pregunta 1 | Nike Air | 15 | 60% |
| Pregunta 1 | Adidas | 10 | 40% |

## 🔧 Personalización Avanzada

### Cambiar colores
Edita `styles.css` líneas 12-15:
```css
--primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
```

### Cambiar el ícono principal
Edita `index.html` línea 20:
```html
<div class="logo-icon">👟</div>  <!-- Cambia el emoji aquí -->
```

## 💾 Almacenamiento de datos

- **LocalStorage**: Los votos se guardan en el navegador del administrador
- **Ventaja**: No necesitas servidor ni base de datos
- **Desventaja**: Si borras el caché del navegador, pierdes los votos
- **Solución**: Exporta a Excel regularmente para respaldo

## 📱 Compartir con clientes

**Opción 1: Local (misma red)**
1. En Windows, abre CMD
2. Ve a la carpeta: `cd C:\Users\1011393535\.gemini\antigravity\scratch\encuesta-piramide`
3. Ejecuta: `python -m http.server 8000`
4. Comparte: `http://TU-IP-LOCAL:8000`

**Opción 2: OneDrive/Google Drive**
1. Sube toda la carpeta a tu nube
2. Comparte el link del archivo `index.html`
(Nota: Algunos servicios de nube no ejecutan JavaScript)

**Opción 3: Hosting gratuito (RECOMENDADO)**
1. Sube a GitHub Pages, Netlify o Vercel
2. Obtienes un link permanente tipo: `https://tu-encuesta.netlify.app`

## ⚠️ Importante

1. **Haz backup del Excel regularmente** - Los votos se guardan en el navegador
2. **Prueba antes de compartir** - Completa una encuesta de prueba
3. **Revisa las imágenes** - Asegúrate que las fotos cargan correctamente
4. **Personaliza los nombres** - Cambia "Modelo A", "Estilo B" por nombres reales

## 🎯 Próximos pasos sugeridos

1. **Ahora**: Personaliza los nombres de productos en `app.js`
2. **Después**: Agrega las fotos reales de los zapatos
3. **Prueba**: Completa 2-3 encuestas de prueba
4. **Exporta**: Verifica que el Excel se genera correctamente
5. **Comparte**: Envía el link a tus clientes

## 📧 Ejemplo de mensaje para tus clientes

```
¡Hola! 👟

Queremos conocer tus preferencias de calzado.
Por favor completa esta breve encuesta (10 preguntas):

[LINK DE TU ENCUESTA]

Solo te tomará 2-3 minutos y nos ayudará 
a ofrecerte exactamente lo que buscas.

¡Gracias por tu colaboración!
```

---

**¿Necesitas ayuda?** Abre el panel de administración (⚙️) para ver todos los votos en tiempo real.
