# 📋 Guía Rápida: Agregar tus Zapatos con Fotos

## Paso 1: Preparar las fotos de tus zapatos

### 1.1 Copia tus fotos a la carpeta `imagenes`
Ya creé la carpeta `imagenes` dentro de `encuesta-piramide`.

**IMPORTANTE**: 
- Copia TODAS las fotos de tus zapatos a la carpeta: `C:\Users\1011393535\.gemini\antigravity\scratch\encuesta-piramide\imagenes\`
- Usa nombres simples para las fotos (sin espacios, sin tildes)
- Ejemplos buenos: `nike-air-max.jpg`, `adidas-superstar.png`, `zapato1.jpg`
- Ejemplos malos: `Nike Air Max 2024 (nuevo).jpg`, `zapato ñoño.jpg`

### 1.2 Renombra tus fotos (IMPORTANTE)
Idealmente nombra tus fotos de forma descriptiva:
- `pregunta1-opcion1.jpg`
- `pregunta1-opcion2.jpg`
- `pregunta2-opcion1.jpg`
- etc.

O usa los nombres de los zapatos:
- `nike-jordan.jpg`
- `adidas-gazelle.jpg`
- etc.

## Paso 2: Editar app.js con tus productos

### 2.1 Abre el archivo `app.js`
Está en: `C:\Users\1011393535\.gemini\antigravity\scratch\encuesta-piramide\app.js`

### 2.2 Encuentra la sección SURVEY_CONFIG (línea 2)
Verás algo así:

```javascript
const SURVEY_CONFIG = {
    questions: [
        {
            id: 1,
            title: "Pregunta 1",
            subtitle: "Selecciona tu modelo favorito",
            options: [
                { id: 1, name: "Modelo A", emoji: "👟" },
                { id: 2, name: "Modelo B", emoji: "👞" },
                // ...
            ]
        },
        // ... más preguntas
    ]
};
```

### 2.3 Cambia los nombres y agrega las imágenes

**EJEMPLO ANTES (como está ahora):**
```javascript
{
    id: 1,
    title: "Pregunta 1",
    subtitle: "Selecciona tu modelo favorito",
    options: [
        { id: 1, name: "Modelo A", emoji: "👟" },
        { id: 2, name: "Modelo B", emoji: "👞" },
        { id: 3, name: "Modelo C", emoji: "👠" },
        { id: 4, name: "Modelo D", emoji: "🥾" },
        { id: 5, name: "Modelo E", emoji: "👢" }
    ]
}
```

**EJEMPLO DESPUÉS (con tus zapatos y fotos):**
```javascript
{
    id: 1,
    title: "¿Cuál de estos modelos te gusta más?",
    subtitle: "Selecciona tu favorito",
    options: [
        { id: 1, name: "Nike Air Jordan Retro", emoji: "👟", image: "imagenes/nike-jordan.jpg" },
        { id: 2, name: "Adidas Gazelle Classic", emoji: "👞", image: "imagenes/adidas-gazelle.jpg" },
        { id: 3, name: "Puma Suede Urban", emoji: "👠", image: "imagenes/puma-suede.jpg" },
        { id: 4, name: "Reebok Classic Leather", emoji: "🥾", image: "imagenes/reebok-classic.jpg" },
        { id: 5, name: "New Balance 574", emoji: "👢", image: "imagenes/newbalance-574.jpg" }
    ]
}
```

### 2.4 Lo que debes cambiar:

1. **`title`**: Cambia el texto de la pregunta
2. **`subtitle`**: Cambia la descripción
3. **`name`**: Cambia "Modelo A" por el nombre REAL de tu zapato
4. **`image`**: Agrega esta línea con la ruta de la foto

**IMPORTANTE**: La ruta de la imagen SIEMPRE empieza con `imagenes/` y luego el nombre del archivo.

## Paso 3: Plantilla para copiar y pegar

Aquí te dejo una plantilla lista para que copies y pegues en `app.js`:

### Para Pregunta 1 (5 opciones):
```javascript
{
    id: 1,
    title: "ESCRIBE TU PREGUNTA AQUÍ",
    subtitle: "Selecciona tu favorito",
    options: [
        { id: 1, name: "NOMBRE ZAPATO 1", emoji: "👟", image: "imagenes/zapato1.jpg" },
        { id: 2, name: "NOMBRE ZAPATO 2", emoji: "👟", image: "imagenes/zapato2.jpg" },
        { id: 3, name: "NOMBRE ZAPATO 3", emoji: "👟", image: "imagenes/zapato3.jpg" },
        { id: 4, name: "NOMBRE ZAPATO 4", emoji: "👟", image: "imagenes/zapato4.jpg" },
        { id: 5, name: "NOMBRE ZAPATO 5", emoji: "👟", image: "imagenes/zapato5.jpg" }
    ]
}
```

### Para Pregunta 2 (5 opciones):
```javascript
{
    id: 2,
    title: "ESCRIBE TU PREGUNTA AQUÍ",
    subtitle: "Selecciona tu favorito",
    options: [
        { id: 6, name: "NOMBRE ZAPATO 6", emoji: "👟", image: "imagenes/zapato6.jpg" },
        { id: 7, name: "NOMBRE ZAPATO 7", emoji: "👟", image: "imagenes/zapato7.jpg" },
        { id: 8, name: "NOMBRE ZAPATO 8", emoji: "👟", image: "imagenes/zapato8.jpg" },
        { id: 9, name: "NOMBRE ZAPATO 9", emoji: "👟", image: "imagenes/zapato9.jpg" },
        { id: 10, name: "NOMBRE ZAPATO 10", emoji: "👟", image: "imagenes/zapato10.jpg" }
    ]
}
```

### Para Pregunta 3 (3 opciones):
```javascript
{
    id: 3,
    title: "ESCRIBE TU PREGUNTA AQUÍ",
    subtitle: "Selecciona tu favorito",
    options: [
        { id: 11, name: "NOMBRE ZAPATO 11", emoji: "👟", image: "imagenes/zapato11.jpg" },
        { id: 12, name: "NOMBRE ZAPATO 12", emoji: "👟", image: "imagenes/zapato12.jpg" },
        { id: 13, name: "NOMBRE ZAPATO 13", emoji: "👟", image: "imagenes/zapato13.jpg" }
    ]
}
```

**Y así sucesivamente para las 10 preguntas...**

## Paso 4: Verificar que funcione

1. Guarda el archivo `app.js`
2. Abre `index.html` en el navegador
3. Verifica que las fotos carguen correctamente
4. Si NO carga una foto:
   - Verifica que el nombre del archivo sea EXACTAMENTE igual
   - Verifica que la foto esté en la carpeta `imagenes/`
   - Las mayúsculas/minúsculas importan: `Zapato1.jpg` ≠ `zapato1.jpg`

## 📝 Lista de verificación

- [ ] Copié todas las fotos a la carpeta `imagenes/`
- [ ] Renombré las fotos con nombres simples (sin espacios)
- [ ] Abrí el archivo `app.js`
- [ ] Cambié los títulos de las preguntas
- [ ] Cambié los nombres de "Modelo A" a nombres reales
- [ ] Agregué `image: "imagenes/nombre-foto.jpg"` a cada opción
- [ ] Guardé el archivo `app.js`
- [ ] Probé que funcione abriendo `index.html`

## ⚠️ Errores comunes

**Error**: "La imagen no carga"
- **Solución**: Verifica el nombre exacto del archivo (mayúsculas/minúsculas)

**Error**: "No veo mi carpeta imagenes"
- **Solución**: Debe estar en `C:\Users\1011393535\.gemini\antigravity\scratch\encuesta-piramide\imagenes\`

**Error**: "Se ve el emoji pero no la foto"
- **Solución**: Verifica que escribiste bien: `image: "imagenes/nombre.jpg"` (con comillas)

## 🎯 ¿Necesitas ayuda?

Si tienes problemas, dime:
1. ¿Cuántas fotos tienes?
2. ¿Cómo se llaman tus fotos?
3. ¿Cuáles son los nombres reales de tus zapatos?

Y te ayudo a crear la configuración completa.
