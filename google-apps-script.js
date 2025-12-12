// ========================================
// CÓDIGO PARA APPS SCRIPT (Google Sheets)
// ========================================
// INSTRUCCIONES:
// 1. Ve a sheets.google.com y crea una hoja nueva
// 2. Extensions → Apps Script
// 3. Borra todo el código que aparece
// 4. Copia y pega TODO este código
// 5. Click en "Deploy" → "New deployment" → "Web app"
// 6. Execute as: "Me"
// 7. Who has access: "Anyone"
// 8. Click "Deploy"
// 9. COPIA LA URL que te da (la necesitarás para app.js)
// ========================================

function doPost(e) {
    try {
        const data = JSON.parse(e.postData.contents);
        const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Respuestas') ||
            SpreadsheetApp.getActiveSpreadsheet().insertSheet('Respuestas');

        // Si es la primera fila, agregar encabezados
        if (sheet.getLastRow() === 0) {
            const headers = [
                'Fecha/Hora',
                'Nombre',
                'Pregunta 1',
                'Pregunta 2',
                'Pregunta 3',
                'Pregunta 4',
                'Pregunta 5',
                'Pregunta 6',
                'Pregunta 7',
                'Pregunta 8',
                'Pregunta 9',
                '🏆 GANADOR'
            ];

            sheet.appendRow(headers);

            // Formatear encabezados
            const headerRange = sheet.getRange(1, 1, 1, headers.length);
            headerRange.setFontWeight('bold');
            headerRange.setBackground('#667eea');
            headerRange.setFontColor('#ffffff');
            sheet.setFrozenRows(1);
        }

        // Preparar fila de datos
        const rowData = [
            new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' }),
            data.voterName,
            data.answers[0] ? data.answers[0].selectedOption.name : 'N/A',
            data.answers[1] ? data.answers[1].selectedOption.name : 'N/A',
            data.answers[2] ? data.answers[2].selectedOption.name : 'N/A',
            data.answers[3] ? data.answers[3].selectedOption.name : 'N/A',
            data.answers[4] ? data.answers[4].selectedOption.name : 'N/A',
            data.answers[5] ? data.answers[5].selectedOption.name : 'N/A',
            data.answers[6] ? data.answers[6].selectedOption.name : 'N/A',
            data.answers[7] ? data.answers[7].selectedOption.name : 'N/A',
            data.answers[8] ? data.answers[8].selectedOption.name : 'N/A',
            data.winner ? data.winner.name : 'N/A'
        ];

        // Agregar fila
        sheet.appendRow(rowData);

        // Auto-ajustar columnas
        sheet.autoResizeColumns(1, headers.length);

        // Responder con éxito
        return ContentService.createTextOutput(JSON.stringify({
            success: true,
            message: 'Respuesta guardada correctamente'
        })).setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        // Responder con error
        return ContentService.createTextOutput(JSON.stringify({
            success: false,
            error: error.toString()
        })).setMimeType(ContentService.MimeType.JSON);
    }
}

// Función para probar (opcional)
function doGet() {
    return ContentService.createTextOutput('Apps Script funcionando correctamente. Usa POST para enviar datos.');
}
