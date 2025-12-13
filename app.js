// CONFIGURACIÓN DE LA ENCUESTA DE ZAPATOS
const SURVEY_CONFIG = {
    questions: [
        // Pregunta 1 - 5 opciones
        {
            id: 1,
            title: "Pregunta 1",
            subtitle: "Selecciona tu modelo favorito",
            options: [
                { id: 1, name: "Modelo 1", image: "imagenes/model1.png" },
                { id: 2, name: "Modelo 2", image: "imagenes/model2.png" },
                { id: 3, name: "Modelo 3", image: "imagenes/model3.png" },
                { id: 4, name: "Modelo 4", image: "imagenes/model4.png" },
                { id: 5, name: "Modelo 5", image: "imagenes/model5.png" }
            ]
        },
        // Pregunta 2 - 5 opciones
        {
            id: 2,
            title: "Pregunta 2",
            subtitle: "Selecciona tu modelo favorito",
            options: [
                { id: 6, name: "Modelo 6", image: "imagenes/model6.png" },
                { id: 7, name: "Modelo 7", image: "imagenes/model7.png" },
                { id: 8, name: "Modelo 8", image: "imagenes/model8.png" },
                { id: 9, name: "Modelo 9", image: "imagenes/model9.png" },
                { id: 10, name: "Modelo 10", image: "imagenes/model10.png" }
            ]
        },
        // Pregunta 3 - 3 opciones
        {
            id: 3,
            title: "Pregunta 3",
            subtitle: "Selecciona tu modelo favorito",
            options: [
                { id: 11, name: "Modelo 11", image: "imagenes/model11.png" },
                { id: 12, name: "Modelo 12", image: "imagenes/model12.png" },
                { id: 13, name: "Modelo 13", image: "imagenes/model13.png" }
            ]
        },
        // Pregunta 4 - 2 opciones
        {
            id: 4,
            title: "Pregunta 4",
            subtitle: "Selecciona tu modelo favorito",
            options: [
                { id: 14, name: "Modelo 14", image: "imagenes/model14.png" },
                { id: 15, name: "Modelo 15", image: "imagenes/model15.png" }
            ]
        },
        // Pregunta 5 - 3 opciones
        {
            id: 5,
            title: "Pregunta 5",
            subtitle: "Selecciona tu modelo favorito",
            options: [
                { id: 16, name: "Modelo 16", image: "imagenes/model16.png" },
                { id: 17, name: "Modelo 17", image: "imagenes/model17.png" },
                { id: 18, name: "Modelo 18", image: "imagenes/model18.png" }
            ]
        },
        // Pregunta 6 - 6 opciones
        {
            id: 6,
            title: "Pregunta 6",
            subtitle: "Selecciona tu modelo favorito",
            options: [
                { id: 19, name: "Modelo 19", image: "imagenes/model19.png" },
                { id: 20, name: "Modelo 20", image: "imagenes/model20.png" },
                { id: 21, name: "Modelo 21", image: "imagenes/model21.png" },
                { id: 22, name: "Modelo 22", image: "imagenes/model22.png" },
                { id: 23, name: "Modelo 23", image: "imagenes/model23.png" },
                { id: 24, name: "Modelo 24", image: "imagenes/model24.png" }
            ]
        },
        // Pregunta 7 - 2 opciones
        {
            id: 7,
            title: "Pregunta 7",
            subtitle: "Selecciona tu modelo favorito",
            options: [
                { id: 25, name: "Modelo 25", image: "imagenes/model25.png" },
                { id: 26, name: "Modelo 26", image: "imagenes/model26.png" }
            ]
        },
        // Pregunta 8 - 2 opciones
        {
            id: 8,
            title: "Pregunta 8",
            subtitle: "Selecciona tu modelo favorito",
            options: [
                { id: 27, name: "Modelo 27", image: "imagenes/model27.png" },
                { id: 28, name: "Modelo 28", image: "imagenes/model28.png" }
            ]
        },
        // Pregunta 9 - 6 opciones
        {
            id: 9,
            title: "Pregunta 9",
            subtitle: "Selecciona tu modelo favorito",
            options: [
                { id: 29, name: "Modelo 29", image: "imagenes/model29.png" },
                { id: 30, name: "Modelo 30", image: "imagenes/model30.png" },
                { id: 31, name: "Modelo 31", image: "imagenes/model31.png" },
                { id: 32, name: "Modelo 32", image: "imagenes/model32.png" },
                { id: 33, name: "Modelo 33", image: "imagenes/model33.png" },
                { id: 34, name: "Modelo 34", image: "imagenes/model34.png" }
            ]
        }
    ]
};

// Estado de la aplicación
const state = {
    voterName: '',
    currentQuestionIndex: 0,
    answers: [],
    allVotes: [] // Almacenará todos los votos de todos los usuarios
};

// Elementos del DOM
const el = {
    welcomeScreen: document.getElementById('welcomeScreen'),
    surveyScreen: document.getElementById('surveyScreen'),
    resultsScreen: document.getElementById('resultsScreen'),
    startSurvey: document.getElementById('startSurvey'),
    voterName: document.getElementById('voterName'),
    productsGrid: document.getElementById('productsGrid'),
    nextButton: document.getElementById('nextButton'),
    prevButton: document.getElementById('prevButton'),
    exportExcel: document.getElementById('exportExcel'),
    restartSurvey: document.getElementById('restartSurvey'),
    currentQuestion: document.getElementById('currentQuestion'),
    progressFill: document.getElementById('progressFill'),
    questionTitle: document.getElementById('questionTitle'),
    questionSubtitle: document.getElementById('questionSubtitle'),
    resultsSummary: document.getElementById('resultsSummary'),
    voterNameDisplay: document.getElementById('voterNameDisplay'),
    totalVotes: document.getElementById('totalVotes'),
    adminToggle: document.getElementById('adminToggle'),
    adminPanel: document.getElementById('adminPanel'),
    closeAdmin: document.getElementById('closeAdmin'),
    allVotesContainer: document.getElementById('allVotesContainer'),
    generalStats: document.getElementById('generalStats')
};

// Inicialización
function init() {
    // loadVotesFromStorage(); // Desactivado
    // updateTotalVotes();     // Desactivado
    setupEventListeners();
}

function setupEventListeners() {
    el.startSurvey.addEventListener('click', startSurvey);
    el.nextButton.addEventListener('click', nextQuestion);
    el.prevButton.addEventListener('click', previousQuestion);
    // el.exportExcel.addEventListener('click', exportToExcel);
    el.restartSurvey.addEventListener('click', restartSurvey);
    el.adminToggle.addEventListener('click', () => {
        el.adminPanel.classList.toggle('hidden');
        if (!el.adminPanel.classList.contains('hidden')) {
            renderAdminPanel();
        }
    });
    el.closeAdmin.addEventListener('click', () => el.adminPanel.classList.add('hidden'));
    el.voterName.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') startSurvey();
    });
}

// Local Storage
function loadVotesFromStorage() {
    const stored = localStorage.getItem('shoeSurveyVotes');
    if (stored) {
        state.allVotes = JSON.parse(stored);
    }
}

function saveVotesToStorage() {
    localStorage.setItem('shoeSurveyVotes', JSON.stringify(state.allVotes));
}

function updateTotalVotes() {
    el.totalVotes.textContent = state.allVotes.length;
}

// Survey Logic
function startSurvey() {
    const name = el.voterName.value.trim();
    if (!name) {
        alert('Por favor, ingresa tu nombre para continuar');
        el.voterName.focus();
        return;
    }

    state.voterName = name;
    state.currentQuestionIndex = 0;
    state.answers = [];

    showScreen('survey');
    renderCurrentQuestion();
}

function renderCurrentQuestion() {
    let question;

    // Si es la pregunta 10 (índice 9), crear pregunta dinámica con las respuestas anteriores
    if (state.currentQuestionIndex === 9) {
        question = {
            id: 10,
            title: "¿Cuál es tu modelo FAVORITO?",
            subtitle: "De los 9 modelos que elegiste, selecciona tu favorito absoluto",
            options: state.answers.slice(0, 9) // Las 9 respuestas anteriores
        };
    } else {
        question = SURVEY_CONFIG.questions[state.currentQuestionIndex];
    }

    el.currentQuestion.textContent = state.currentQuestionIndex + 1;
    el.questionTitle.textContent = question.title;
    el.questionSubtitle.textContent = question.subtitle;

    updateProgressBar();

    // Renderizar las tarjetas de productos
    el.productsGrid.innerHTML = question.options.map(option => `
        <div class="product-card" data-option-id="${option.id}" onclick='selectOption(${JSON.stringify(option)})'>
            <div class="product-image-container">
                ${option.image ?
            `<img src="${option.image}" class="product-image" alt="${option.name}">` :
            `<div class="product-placeholder">👟</div>`
        }
            </div>
            <div class="product-name">${option.name}</div>
        </div>
    `).join('');

    // Restore selection if going back
    const currentAnswer = state.answers[state.currentQuestionIndex];
    if (currentAnswer) {
        setTimeout(() => {
            const card = el.productsGrid.querySelector(`[data-option-id="${currentAnswer.id}"]`);
            if (card) {
                card.classList.add('selected');
                card.insertAdjacentHTML('beforeend', '<div class="selected-badge"><span>✓</span><span>Seleccionado</span></div>');
                el.nextButton.disabled = false;
            }
        }, 50);
    } else {
        el.nextButton.disabled = true;
    }

    el.prevButton.disabled = state.currentQuestionIndex === 0;
}

function selectOption(option) {
    const cards = el.productsGrid.querySelectorAll('.product-card');
    cards.forEach(card => {
        card.classList.remove('selected');
        const badge = card.querySelector('.selected-badge');
        if (badge) badge.remove();
    });

    const selectedCard = el.productsGrid.querySelector(`[data-option-id="${option.id}"]`);
    selectedCard.classList.add('selected');
    selectedCard.insertAdjacentHTML('beforeend', '<div class="selected-badge"><span>✓</span><span>Seleccionado</span></div>');

    state.answers[state.currentQuestionIndex] = option;
    el.nextButton.disabled = false;
}

function updateProgressBar() {
    const totalQuestions = 10; // Ahora son 10 preguntas
    const progress = ((state.currentQuestionIndex + 1) / totalQuestions) * 100;
    el.progressFill.style.width = `${progress}%`;
}

function nextQuestion() {
    if (!state.answers[state.currentQuestionIndex]) {
        alert('Por favor, selecciona una opción');
        return;
    }

    const totalQuestions = 10; // Ahora son 10 preguntas
    if (state.currentQuestionIndex < totalQuestions - 1) {
        state.currentQuestionIndex++;
        renderCurrentQuestion();
    } else {
        completeSurvey();
    }
}

function previousQuestion() {
    if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex--;
        renderCurrentQuestion();
    }
}

function completeSurvey() {
    // El ganador es la respuesta de la pregunta 10 (índice 9)
    const winner = state.answers[9];

    // Save complete vote
    const vote = {
        timestamp: new Date().toISOString(),
        voterName: state.voterName,
        answers: state.answers.slice(0, 9).map((answer, index) => ({
            questionId: SURVEY_CONFIG.questions[index].id,
            questionTitle: SURVEY_CONFIG.questions[index].title,
            selectedOption: answer
        })),
        winner: winner // Guardar el ganador
    };

    // state.allVotes.push(vote); // Desactivado para no guardar localmente toda la historia
    // saveVotesToStorage();      // Desactivado
    // updateTotalVotes();        // Desactivado visualmente

    showResults(true); // Pasar 'true' para indicar que se está cargando/enviando

    // ========================================
    // ENVIAR A GOOGLE SHEETS
    // ========================================
    // IMPORTANTE: Reemplaza 'TU_URL_DE_APPS_SCRIPT_AQUI' con la URL que obtienes
    // al publicar tu Apps Script como Web App
    const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbzOAhxo7hdoMZVIN7rIH8sIf1zD6n5ZDfQyxsfwoUBoU9WhPxaC-UDBhi0UNNfcPk7YAQ/exec';

    // Solo enviar si la URL está configurada
    if (GOOGLE_SHEETS_URL.includes('script.google.com')) {
        sendToGoogleSheets(vote, GOOGLE_SHEETS_URL);
    } else {
        showSubmissionStatus('⚠️ URL no configurada', 'error');
    }
    // ========================================
}

// Función para enviar datos a Google Sheets
async function sendToGoogleSheets(vote, url) {
    showSubmissionStatus('⏳ Enviando respuesta a la nube...', 'loading');

    try {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'no-cors', // Importante para Apps Script
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(vote)
        });

        console.log('✅ Respuesta enviada a Google Sheets correctamente');
        showSubmissionStatus('✅ ¡Tu respuesta se ha enviado correctamente!', 'success');

    } catch (error) {
        console.error('❌ Error al enviar a Google Sheets:', error);
        showSubmissionStatus('❌ Error al enviar. Revisa tu conexión.', 'error');
    }
}

function showSubmissionStatus(message, type) {
    const statusEl = document.getElementById('submissionStatus');
    if (statusEl) {
        statusEl.textContent = message;
        statusEl.className = `submission-status ${type}`; // loading, success, error
        statusEl.style.display = 'block';
    }
}

// Results
function showResults() {
    showScreen('results');

    el.voterNameDisplay.textContent = `¡Gracias ${state.voterName} por tu participación!`;

    let html = '';

    // Mostrar el ganador de forma destacada
    const winner = state.answers[9];
    if (winner) {
        html += `
            <div class="winner-section">
                <h3 class="winner-title">🏆 Tu Modelo Favorito</h3>
                <div class="winner-card">
                    <div class="winner-image-container">
                        ${winner.image ?
                `<img src="${winner.image}" class="winner-image" alt="${winner.name}">` :
                `<div class="winner-placeholder">👟</div>`
            }
                    </div>
                    <div class="winner-name">${winner.name}</div>
                    <div class="winner-badge">⭐ GANADOR ⭐</div>
                </div>
            </div>
        `;
    }

    // Show user's answers (collapsible)
    html += `
        <details>
            <summary>Ver mis respuestas (Preguntas 1-9)</summary>
            <div class="user-answers">
    `;

    state.answers.slice(0, 9).forEach((answer, index) => {
        const question = SURVEY_CONFIG.questions[index];
        html += `
            <div class="answer-item">
                <div class="answer-question">${question.title}</div>
                <div class="answer-value">${answer.name}</div>
            </div>
        `;
    });

    html += `
            </div>
        </details>
    `;

    // General Stats REMOVED as requested

    el.resultsSummary.innerHTML = html;
}

// Admin Panel
function renderAdminPanel() {
    // Show all votes
    if (state.allVotes.length === 0) {
        el.allVotesContainer.innerHTML = '<p class="admin-help">No hay votos registrados aún</p>';
    } else {
        let html = `<div class="votes-list">`;
        state.allVotes.forEach((vote, index) => {
            const date = new Date(vote.timestamp).toLocaleString('es-CO');
            html += `
                <div class="vote-card">
                    <div class="vote-header">
                        <strong>${vote.voterName}</strong>
                        <span class="vote-date">${date}</span>
                    </div>
                    <div class="vote-answers">
                        ${vote.answers.map(a => `
                            <div class="vote-answer">${a.questionTitle}: <strong>${a.selectedOption.name}</strong></div>
                        `).join('')}
                    </div>
                </div>
            `;
        });
        html += '</div>';
        el.allVotesContainer.innerHTML = html;
    }

    // Show general statistics
    let statsHtml = `<p><strong>Total de participantes:</strong> ${state.allVotes.length}</p>`;

    SURVEY_CONFIG.questions.forEach(question => {
        const votes = {};
        state.allVotes.forEach(vote => {
            const answer = vote.answers.find(a => a.questionId === question.id);
            if (answer) {
                const optId = answer.selectedOption.id;
                const optName = answer.selectedOption.name;
                if (!votes[optId]) {
                    votes[optId] = { name: optName, count: 0 };
                }
                votes[optId].count++;
            }
        });

        statsHtml += `<div class="stat-question"><strong>${question.title}:</strong><ul>`;
        Object.values(votes).forEach(v => {
            statsHtml += `<li>${v.name}: ${v.count} voto(s)</li>`;
        });
        statsHtml += '</ul></div>';
    });

    el.generalStats.innerHTML = statsHtml;
}

// Excel Export
function exportToExcel() {
    const wb = XLSX.utils.book_new();

    // Sheet 1: Individual Votes
    const votesData = [['Fecha', 'Nombre', ...SURVEY_CONFIG.questions.map(q => q.title), 'GANADOR']];

    state.allVotes.forEach(vote => {
        const row = [
            new Date(vote.timestamp).toLocaleString('es-CO'),
            vote.voterName,
            ...vote.answers.map(a => a.selectedOption.name),
            vote.winner ? vote.winner.name : 'N/A' // Agregar el ganador
        ];
        votesData.push(row);
    });

    const ws1 = XLSX.utils.aoa_to_sheet(votesData);
    ws1['!cols'] = [
        { wch: 20 },
        { wch: 20 },
        ...SURVEY_CONFIG.questions.map(() => ({ wch: 20 })),
        { wch: 25 } // Columna del ganador
    ];
    XLSX.utils.book_append_sheet(wb, ws1, "Votos Individuales");

    // Sheet 2: Statistics Summary
    const statsData = [['Pregunta', 'Opción', 'Total Votos', 'Porcentaje']];

    SURVEY_CONFIG.questions.forEach(question => {
        const votes = {};
        let totalForQuestion = 0;

        state.allVotes.forEach(vote => {
            const answer = vote.answers.find(a => a.questionId === question.id);
            if (answer) {
                const optId = answer.selectedOption.id;
                const optName = answer.selectedOption.name;
                if (!votes[optId]) {
                    votes[optId] = { name: optName, count: 0 };
                }
                votes[optId].count++;
                totalForQuestion++;
            }
        });

        Object.values(votes).sort((a, b) => b.count - a.count).forEach(v => {
            const percentage = ((v.count / totalForQuestion) * 100).toFixed(1) + '%';
            statsData.push([question.title, v.name, v.count, percentage]);
        });

        statsData.push(['', '', '', '']); // Empty row
    });

    const ws2 = XLSX.utils.aoa_to_sheet(statsData);
    ws2['!cols'] = [{ wch: 15 }, { wch: 25 }, { wch: 12 }, { wch: 12 }];
    XLSX.utils.book_append_sheet(wb, ws2, "Estadísticas");

    // Download
    const timestamp = new Date().toISOString().slice(0, 10);
    XLSX.writeFile(wb, `Encuesta_Zapatos_${timestamp}.xlsx`);
}

// Utility
function showScreen(screen) {
    el.welcomeScreen.classList.add('hidden');
    el.surveyScreen.classList.add('hidden');
    el.resultsScreen.classList.add('hidden');
    el[screen + 'Screen'].classList.remove('hidden');
}

function restartSurvey() {
    el.voterName.value = '';
    showScreen('welcome');
    state.currentQuestionIndex = 0;
    state.answers = [];
    state.voterName = '';
}

init();
