# 🌐 Guía: Publicar tu Encuesta en Internet

## ¿Qué opciones tienes?

Hay 3 formas principales de compartir tu encuesta para que otras personas puedan responderla:

---

## ✅ OPCIÓN 1: **GitHub Pages** (MEJOR OPCIÓN - GRATIS Y PERMANENTE)

### Ventajas
- ✅ **100% GRATIS**
- ✅ URL permanente (`https://tu-usuario.github.io/encuesta-zapatos`)
- ✅ Funciona 24/7
- ✅ No necesita instalación
- ✅ Fácil de actualizar

### Pasos

#### 1. Crear cuenta en GitHub
- Ve a [github.com](https://github.com) y crea una cuenta gratuita

#### 2. Crear repositorio
- Click en "New repository"
- Nombre: `encuesta-zapatos`
- Público ✓
- Click "Create repository"

#### 3. Subir archivos
Opción A - Por web (más fácil):
1. Click en "uploading an existing file"
2. Arrastra TODA la carpeta `encuesta-piramide`:
   - `index.html`
   - `app.js`
   - `styles.css`
   - Carpeta completa `imagenes/` con todas las fotos
3. Click "Commit changes"

Opción B - Git (si sabes usarlo):
```bash
cd C:\Users\1011393535\.gemini\antigravity\scratch\encuesta-piramide
git init
git add .
git commit -m "Primera versión de encuesta"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/encuesta-zapatos.git
git push -u origin main
```

#### 4. Activar GitHub Pages
1. Ve a Settings del repositorio
2. En la barra lateral, click "Pages"
3. En "Source", selecciona "main" branch
4. Click "Save"
5. Espera 1-2 minutos

#### 5. ¡Listo!
Tu encuesta estará en: `https://TU-USUARIO.github.io/encuesta-zapatos`

### ⚠️ IMPORTANTE: Privacidad de Datos
- Las respuestas se guardan en el navegador de cada persona (localStorage)
- **NO se sincronizan automáticamente contigo**
- Para ver las respuestas de otras personas, necesitas una base de datos (ver Opción 3)

---

## 🔄 OPCIÓN 2: **Ngrok o Cloudflared** (TEMPORAL - SOLO PARA PRUEBAS)

### Ventajas
- Rápido para probar
- No necesita subir archivos

### Desventajas
- ⚠️ **URL temporal** - cambia cada vez que lo inicias
- ⚠️ Tu PC debe estar encendida
- ⚠️ No es para producción

### Con Ngrok

#### Instalar
```powershell
# Descarga e instala desde https://ngrok.com/download
# O usa chocolatey:
choco install ngrok
```

#### Usar
```powershell
cd C:\Users\1011393535\.gemini\antigravity\scratch\encuesta-piramide
python -m http.server 8000

# En otra terminal:
ngrok http 8000
```

Obtienes URL temporal como: `https://abc123.ngrok.io`

### Con Cloudflared

#### Instalar
```powershell
# Descarga de https://github.com/cloudflare/cloudflared/releases
# O instala con:
winget install --id Cloudflare.cloudflared
```

#### Usar
```powershell
cd C:\Users\1011393535\.gemini\antigravity\scratch\encuesta-piramide
cloudflared tunnel --url http://localhost:8000

# En otra terminal:
python -m http.server 8000
```

---

## 🔥 OPCIÓN 3: **GitHub Pages + Google Sheets** (MEJOR PARA TU CASO)

### ¿Por qué esta opción?

Entiendo tu lógica: quieres que las personas respondan por un URL, pero **SOLO TÚ puedas ver las respuestas**.

Con GitHub Pages solo, cada persona ve sus propias respuestas en su navegador. **Necesitas una base de datos compartida**.

### Solución: Google Sheets como base de datos

#### Ventajas
- ✅ URL permanente en GitHub Pages
- ✅ Todas las respuestas se guardan en TU Google Sheet
- ✅ Solo tú tienes acceso al Sheet
- ✅ Exportas a Excel cuando quieras
- ✅ 100% Gratis

### Implementación

1. **Crear Google Sheet**
   - Ve a [sheets.google.com](https://sheets.google.com)
   - Crea hoja "Encuesta Zapatos Respuestas"

2. **Crear Apps Script**
   - En el Sheet: Extensions → Apps Script
   - Pega este código:

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Si es la primera fila, agregar encabezados
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Fecha', 'Nombre', 'Pregunta 1', 'Pregunta 2', 'Pregunta 3', 
                      'Pregunta 4', 'Pregunta 5', 'Pregunta 6', 'Pregunta 7', 
                      'Pregunta 8', 'Pregunta 9', 'GANADOR']);
    }
    
    // Agregar los datos
    sheet.appendRow([
      new Date(),
      data.voterName,
      ...data.answers.map(a => a.name),
      data.winner.name
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. **Publicar como Web App**
   - Click "Deploy" → "New deployment"
   - Type: "Web app"
   - Execute as: "Me"
   - Who has access: **"Anyone"** (necesario para recibir datos)
   - Click "Deploy"
   - **Copia la URL** que te da

4. **Modificar app.js**
   - Te crearé un archivo `app-con-sheets.js` listo para usar

---

## 📊 ¿Cuál elegir?

| Opción | Ideal para | Dificultad |
|--------|-----------|------------|
| **GitHub Pages** | Compartir encuesta + exportar Excel localmente | ⭐ Fácil |
| **Ngrok/Cloudflared** | Pruebas rápidas temporales | ⭐⭐ Media |
| **GitHub + Sheets** | Ver respuestas de todos en tiempo real | ⭐⭐⭐ Media-Alta |

## 🎯 Mi Recomendación

Para tu caso específico (**"que las respuestas las pueda visualizar yo y no las personas"**):

**OPCIÓN 3: GitHub Pages + Google Sheets**

¿Por qué?
- ✅ Las personas responden por URL permanente
- ✅ Todas las respuestas van a TU Google Sheet privado
- ✅ Nadie más ve las respuestas
- ✅ Tú ves todo en tiempo real
- ✅ 100% gratis

---

## 🚀 ¿Quieres que implemente la Opción 3?

Si me confirmas, puedo:
1. Crear el archivo `app-con-sheets.js` modificado
2. Darte instrucciones paso a paso
3. Crear el código de Apps Script listo para copiar

Dime cuál opción prefieres y te ayudo a configurarla 👍
