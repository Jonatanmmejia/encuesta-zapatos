# 🚀 GUÍA PASO A PASO: GitHub Pages + Google Sheets

## 📋 Resumen

Al final tendrás:
- ✅ URL permanente para compartir: `https://tu-usuario.github.io/encuesta-zapatos`
- ✅ Todas las respuestas en TU Google Sheet privado
- ✅ Solo tú puedes ver las respuestas
- ✅ 100% Gratis

---

## PARTE 1: Configurar Google Sheets

### Paso 1: Crear Google Sheet

1. Ve a [sheets.google.com](https://sheets.google.com)
2. Click en **"+ Blank"** (hoja en blanco)
3. Nombra la hoja: **"Encuesta Zapatos - Respuestas"**
4. La hoja se creará automáticamente con el nombre "Respuestas"

### Paso 2: Abrir Apps Script

1. En el menú superior, click en **Extensions**
2. Click en **Apps Script**
3. Se abrirá una nueva pestaña con el editor de código

### Paso 3: Pegar el código

1. **BORRA TODO** el código que aparece por defecto
2. Abre el archivo `google-apps-script.js` que creé
3. **Copia TODO el código** de ese archivo
4. **Pega** en el editor de Apps Script
5. Click en el ícono 💾 (Guardar) o Ctrl+S

### Paso 4: Publicar como Web App

1. Click en **Deploy** (arriba a la derecha, botón azul)
2. Click en **New deployment**
3. Click en el ícono de ⚙️ junto a "Select type"
4. Selecciona **"Web app"**
5. Configura así:
   - **Description**: "Encuesta Zapatos API"
   - **Execute as**: **"Me (tu email)"** ← IMPORTANTE
   - **Who has access**: **"Anyone"** ← IMPORTANTE (necesario para que funcione)
6. Click **Deploy**
7. **Autoriza** la aplicación:
   - Click "Authorize access"
   - Selecciona tu cuenta de Google
   - Click "Advanced" → "Go to Encuesta Zapatos API (unsafe)"
   - Click "Allow"
8. **COPIA LA URL** que te aparece (algo como: `https://script.google.com/macros/s/ABC123.../exec`)
   - ⚠️ **MUY IMPORTANTE**: Guarda esta URL, la necesitarás en el siguiente paso

---

## PARTE 2: Configurar app.js

### Paso 5: Pegar la URL en app.js

1. Abre el archivo `app.js` en un editor de texto
2. Busca la línea **324** (aproximadamente)
3. Encontrarás esto:
```javascript
const GOOGLE_SHEETS_URL = 'TU_URL_DE_APPS_SCRIPT_AQUI';
```
4. **Reemplaza** `TU_URL_DE_APPS_SCRIPT_AQUI` con la URL que copiaste
5. Debe quedar así:
```javascript
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/ABC123.../exec';
```
6. **Guarda** el archivo (Ctrl+S)

✅ **¡Listo!** Ahora las respuestas se enviarán a tu Google Sheet

---

## PARTE 3: Subir a GitHub Pages

### Paso 6: Crear cuenta en GitHub (si no tienes)

1. Ve a [github.com](https://github.com)
2. Click en **Sign up**
3. Crea tu cuenta con email y contraseña
4. Verifica tu email

### Paso 7: Crear repositorio

1. Click en el **+** (arriba a la derecha) → **New repository**
2. Configuración:
   - **Repository name**: `encuesta-zapatos`
   - **Description**: "Encuesta de preferencias de calzado"
   - **Public** ✓ (debe ser público para GitHub Pages)
   - **NO** marques "Add a README file"
3. Click **Create repository**

### Paso 8: Subir archivos por web

1. En la página del repositorio que acabas de crear, click en **"uploading an existing file"**
2. Arrastra TODOS estos archivos y carpetas:
   - ✅ `index.html`
   - ✅ `app.js` (el que modificaste con la URL)
   - ✅ `styles.css`
   - ✅ Carpeta `imagenes/` completa (con todas las fotos PNG)
   
   **NO subas estos archivos** (no son necesarios):
   - ❌ `google-apps-script.js` (solo era para copiar y pegar)
   - ❌ `*.md` (archivos de documentación)
   - ❌ `PLANTILLA_PRODUCTOS.js`

3. Espera a que todos los archivos se carguen (puede tardar unos minutos por las imágenes)
4. En "Commit changes":
   - Escribe: "Primera versión de encuesta"
5. Click **Commit changes**

### Paso 9: Activar GitHub Pages

1. En tu repositorio, click en **Settings** (configuración)
2. En el menú lateral izquierdo, busca y click en **Pages**
3. En **Source** (Branch):
   - Selecciona **"main"** (o "master")
   - Deja la carpeta en **"/ (root)"**
4. Click **Save**
5. Espera 1-2 minutos
6. Refresca la página
7. Verás un mensaje verde:
   ```
   Your site is live at https://TU-USUARIO.github.io/encuesta-zapatos/
   ```

✅ **¡LISTO!** Tu encuesta ya está en línea

---

## PARTE 4: Probar que funciona

### Paso 10: Hacer prueba

1. Abre la URL de tu encuesta: `https://TU-USUARIO.github.io/encuesta-zapatos/`
2. Completa la encuesta con un nombre de prueba
3. Responde todas las 10 preguntas
4. Click "Finalizar"
5. Ve a tu Google Sheet
6. **Deberías ver la respuesta** en la hoja "Respuestas"

✅ Si aparece la fila con los datos → **¡FUNCIONA!**

---

## 🎯 Compartir con otras personas

Simplemente comparte esta URL:
```
https://TU-USUARIO.github.io/encuesta-zapatos/
```

- Cada persona que entre podrá responder
- Todas las respuestas llegarán a TU Google Sheet
- Nadie más puede ver el Sheet (solo tú)

---

## 🔧 Solución de Problemas

### ❌ "No aparecen las respuestas en el Sheet"

**Posibles causas**:
1. La URL en `app.js` está mal copiada
   - Verifica que copiaste la URL completa del Apps Script
   - Debe terminar en `/exec`
2. No autorizaste el Apps Script
   - Ve a Apps Script → Deploy → Manage deployments → Redeploy
3. La configuración de privacidad está mal
   - En Apps Script → Deploy, verifica que "Who has access" sea "Anyone"

### ❌ "Las imágenes no se ven"

**Solución**:
1. Verifica que subiste la carpeta `imagenes/` completa
2. Verifica que las fotos estén en formato `.png`
3. Los nombres deben ser exactamente: `model1.png`, `model2.png`, etc.

### ❌ "Error 404 en GitHub Pages"

**Solución**:
1. Espera 5 minutos (a veces tarda en activarse)
2. Verifica que el repositorio sea **Público**
3. Verifica que activaste Pages en Settings

---

## 📊 Ver las respuestas

### En Google Sheets (Tiempo real)

1. Ve a tu Google Sheet
2. Todas las respuestas aparecerán automáticamente
3. Cada fila = 1 persona
4. La última columna muestra el **GANADOR** 🏆

### Descargar Excel

Desde Google Sheets:
1. File → Download → Microsoft Excel (.xlsx)

---

## 🔒 Privacidad y Seguridad

### ¿Quién puede ver qué?

| Elemento | Quién lo ve |
|----------|-------------|
| **Encuesta** (responder) | ✅ Cualquiera con el link |
| **Respuestas guardadas** | ❌ Solo TÚ (en tu Google Sheet) |
| **Código fuente** | ✅ Público en GitHub (pero no incluye datos) |
| **URL de Apps Script** | ⚠️ Está en el código, pero sin acceso al Sheet no sirve |

### Recomendaciones:
- ✅ Solo comparte el link de la encuesta con personas de confianza
- ✅ El Google Sheet solo está en TU cuenta (nadie más puede verlo)
- ✅ Puedes desactivar la encuesta borrando el repositorio de GitHub

---

## 🔄 Actualizar la encuesta

Si quieres cambiar algo (fotos, textos, etc.):

1. Modifica los archivos localmente
2. En GitHub: 
   - Ve al archivo que quieres cambiar
   - Click en el ícono de lápiz ✏️ (Edit)
   - Pega el nuevo contenido
   - Click "Commit changes"
3. Los cambios se reflejan en 1-2 minutos

---

## ❓ Preguntas Frecuentes

**P: ¿Cuántas respuestas puedo recibir?**  
R: Ilimitadas (dentro de los límites de Google Sheets: ~10 millones de celdas)

**P: ¿Puedo cambiar el diseño después?**  
R: Sí, solo actualiza los archivos en GitHub

**P: ¿Funciona en celular?**  
R: Sí, es 100% responsive

**P: ¿Necesito dejar mi PC encendida?**  
R: NO. Una vez subido a GitHub, funciona 24/7

**P: ¿Cuánto cuesta?**  
R: 100% GRATIS (GitHub Pages + Google Sheets son gratuitos)

---

## 📧 Soporte

Si tienes problemas, verifica:
1. ✅ URL de Apps Script correcta en `app.js`
2. ✅ Apps Script publicado como "Anyone"
3. ✅ Carpeta `imagenes/` subida correctamente
4. ✅ GitHub Pages activado

---

## ✅ Checklist Final

- [ ] Google Sheet creado
- [ ] Apps Script configurado y publicado
- [ ] URL de Apps Script copiada en `app.js`
- [ ] Repositorio GitHub creado
- [ ] Archivos subidos (index.html, app.js, styles.css, imagenes/)
- [ ] GitHub Pages activado
- [ ] Prueba completada exitosamente
- [ ] URL compartida con otras personas

¡Listo! 🎉
