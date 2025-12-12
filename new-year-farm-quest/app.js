// ===== КОНФИГУРАЦИЯ ИГРЫ =====
const CONFIG = {
    TOTAL_STAGES: 6,
    TICKET_PRICE: 500,
    MAX_HINTS: 3,
    MAX_SKIPS: 1,
    MAX_LIVES: 3,
    INITIAL_TIME: 60 * 60, // 60 минут в секундах
    DRAW_DATE: '15 января 2024',
    PRIZES: [
        'Абонемент на месяц (взрослый)',
        'Абонемент на месяц (детский)',
        'Индивидуальное занятие',
        'Индивидуальная прогулка',
        'Фотосессия с лошадью 30 мин',
        'Счастливый приз 1',
        'Счастливый приз 2',
        'Счастливый приз 3',
        'Счастливый приз 4',
        'Счастливый приз 5'
    ]
};

// ===== ДАННЫЕ ЭТАПОВ =====
const STAGES = {
    1: {
        title: "❄️ ЭТАП 1: СНЕЖИНКИ ВОЛШЕБНЫХ САНЕЙ",
        description: "Дед Мороз торопился на ферму и потерял снежинки со своих саней. Помогите найти и посчитать все снежинки!",
        task: "🔍 Найди все снежинки на санях и посчитай их",
        hint: "💡 Снежинки приклеены к саням и к деревьям рядом",
        joke: "🎅 Почему снежинки никогда не бывают одинокими? Потому что они всегда падают хлопьями!",
        fact: "❄️ Каждая снежинка уникальна, как отпечаток пальца!",
        answer: "12",
        location: "Каретный двор",
        nextLocation: "Манеж",
        points: 100
    },
    2: {
        title: "🦢 ЭТАП 2: ЛЕБЕДЬ-СНЕГУРОЧКА",
        description: "Снегурочка превратилась в лебедя, чтобы наблюдать за праздником. Среди белого снега она выглядит необычно!",
        task: "🔍 Обойди вокруг манежа и найди 'чёрное среди белых'",
        hint: "💡 Ищи необычную птицу возле манежа",
        joke: "🤣 Что сказал лебедь на новогоднем балу? 'Я не танцую, я лебедюю!'",
        fact: "🦢 Лебеди образуют пары на всю жизнь, а свадебный сезон у них начинается зимой!",
        answer: "ЛЕБЕДЬ",
        location: "Манеж",
        nextLocation: "Сенник",
        points: 150
    },
    3: {
        title: "🎁 ЭТАП 3: СЕННИК-ПОДАРОК",
        description: "Лошадки ждут новогоднего угощения! Отвези им самую вкусную тачку сена - это будет их праздничный подарок!",
        task: "🔍 Отвези тачку сена в конюшню",
        hint: "💡 Тачка стоит у сенника, нужно отвезти её к лошадям",
        joke: "🎉 Почему лошадь так ждала Новый год? Потому что она слышала про 'лошадиные' подарки!",
        fact: "🐎 Лошади могут спать стоя благодаря особому строению коленных суставов!",
        answer: "ЛОШАДИ",
        location: "Сенник",
        nextLocation: "Альпаки",
        points: 200
    },
    4: {
        title: "✨ ЭТАП 4: ТАЙНА АЛЬПАКИ ПЛЮШИ",
        description: "Альпака Плюша спрятала в своём домике волшебный ребус. Только ультрафиолетовый фонарик поможет его разгадать!",
        task: "🔍 Собери пазл, найди фонарик, разгадай ребус",
        hint: "💡 Фонарик привязан рядом с домиком альпаки",
        joke: "😂 Что альпака сказала Деду Морозу? 'Я уже вся в плюше, можешь не дарить шубу!'",
        fact: "🦙 Шерсть альпаки в 7 раз теплее овечьей и не вызывает аллергии!",
        answer: "ОВЦА",
        location: "Домик альпаки",
        nextLocation: "Овчарня",
        points: 250
    },
    5: {
        title: "🐑 ЭТАП 5: ТАЙНА НОВОГОДНИХ ЯИЦ",
        description: "В новогоднюю ночь происходят чудеса! Даже овцы могут показать необычные таланты. Но для этого нужно знать их секрет...",
        task: "🔍 Посчитай овец и узнай их новогоднюю тайну",
        hint: "💡 Овец нужно посчитать точно, их количество - подсказка",
        joke: "😄 Почему овцы такие плохие певцы? Потому что у них только бле-бле-блеяние!",
        fact: "🐑 Овцы могут узнавать до 50 других овец и помнить человеческие лица годами!",
        answer: "СТРАУСЫ",
        location: "Овчарня",
        nextLocation: "Вольер страусов",
        points: 300
    },
    6: {
        title: "🎪 ЭТАП 6: АФРИКАНСКИЙ НОВЫЙ ГОД",
        description: "Даже в Африке празднуют Новый год! Страусы приготовили письмо, а загадка расскажет о самых быстрых друзьях человека.",
        task: "🔍 1. Собери буквы на заборе: 'Я АФРИКАНСКИЙ' 2. Разгадай загадку о породе собак",
        hint: "💡 Буквы висят на заборе у страусов, загадка написана рядом",
        joke: "🤪 Почему страусы не отмечают Новый год с фейерверками? Потому что боятся, что их примут за живые ракеты!",
        fact: "🐕 Борзые могут развивать скорость до 70 км/ч - быстрее, чем бежит Дед Мороз!",
        answer: "БОРЗЫЕ",
        location: "Вольер страусов",
        nextLocation: "ФИНИШ 🏁",
        points: 500
    }
};

// ===== ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ =====
let gameState = {
    currentStage: 1,
    score: 0,
    timeLeft: CONFIG.INITIAL_TIME,
    timerInterval: null,
    isGameActive: false,
    hintsUsed: 0,
    skipsUsed: 0,
    lives: CONFIG.MAX_LIVES,
    hasTicket: false,
    ticketNumber: null,
    playerName: 'Игрок',
    playerId: null,
    completedStages: [],
    startTime: null
};

let tg = window.Telegram?.WebApp;

// ===== ИНИЦИАЛИЗАЦИЯ =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎮 Игра загружается...');
    
    // Инициализация Telegram
    if (tg) {
        initTelegram();
    } else {
        console.log('🌐 Режим браузера');
        initBrowserMode();
    }
    
    // Загрузка сохраненного прогресса
    loadGameProgress();
    
    // Настройка обработчиков событий
    setupEventListeners();
    
    // Запуск анимации загрузки
    startLoadingAnimation();
});

// ===== TELEGRAM ИНИЦИАЛИЗАЦИЯ =====
function initTelegram() {
    try {
        tg.ready();
        tg.expand();
        tg.enableClosingConfirmation();
        
        // Настройка цветов
        tg.setHeaderColor('#2E7D32');
        tg.setBackgroundColor('#1B5E20');
        
        // Получение данных пользователя
        if (tg.initDataUnsafe?.user) {
            const user = tg.initDataUnsafe.user;
            gameState.playerName = user.first_name || 'Игрок';
            gameState.playerId = user.id;
            
            // Обновляем имя в интерфейсе
            document.getElementById('player-name').textContent = gameState.playerName;
            
            console.log(`👤 Пользователь: ${gameState.playerName} (ID: ${gameState.playerId})`);
        }
        
        console.log('✅ Telegram Web App инициализирован');
        
    } catch (error) {
        console.error('❌ Ошибка Telegram:', error);
    }
}

// ===== АНИМАЦИЯ ЗАГРУЗКИ =====
function startLoadingAnimation() {
    let progress = 0;
    const progressBar = document.getElementById('loading-progress');
    const loadingTip = document.getElementById('loading-tip');
    
    const tips = [
        "Готовим оленей и подарки...",
        "Загружаем новогоднее настроение...",
        "Развешиваем гирлянды...",
        "Упаковываем призы...",
        "Почти готово...",
        "Начинаем новогоднее приключение! 🎄"
    ];
    
    const interval = setInterval(() => {
        progress += Math.random() * 20;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            // Переход к главному меню
            setTimeout(() => {
                showScreen('main-menu');
                updatePlayerStats();
            }, 500);
        }
        
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }
        
        if (loadingTip) {
            const tipIndex = Math.floor(progress / 20);
            if (tipIndex < tips.length) {
                loadingTip.textContent = tips[tipIndex];
            }
        }
    }, 200);
}

// ===== УПРАВЛЕНИЕ ЭКРАНАМИ =====
function showScreen(screenId) {
    // Скрыть все экраны
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Показать нужный экран
    const screen = document.getElementById(screenId);
    if (screen) {
        screen.classList.add('active');
        
        // Обновить контент экрана при необходимости
        switch(screenId) {
            case 'main-menu':
                updatePlayerStats();
                break;
            case 'game-screen':
                updateGameUI();
                break;
            case 'chest-screen':
                showFinalResults();
                break;
        }
    }
    
    // Обновить кнопку в Telegram
    updateTelegramButton(screenId);
}

function updateTelegramButton(screenId) {
    if (!tg?.MainButton) return;
    
    tg.MainButton.hide();
    
    switch(screenId) {
        case 'main-menu':
            if (!gameState.hasTicket) {
                tg.MainButton.setText('🎫 Купить карту за 500₽');
                tg.MainButton.onClick(() => {
                    purchaseTicket();
                });
                tg.MainButton.show();
            }
            break;
            
        case 'chest-screen':
            tg.MainButton.setText('📤 Поделиться результатом');
            tg.MainButton.onClick(() => {
                shareResults();
            });
            tg.MainButton.show();
            break;
    }
}

// ===== ИГРОВАЯ ЛОГИКА =====
function startGame() {
    if (!gameState.hasTicket) {
        showNotification('❌ Для игры нужна карта!', 'error');
        showScreen('ticket-screen');
        return;
    }
    
    gameState.isGameActive = true;
    gameState.currentStage = 1;
    gameState.completedStages = [];
    gameState.startTime = new Date();
    
    loadStage(gameState.currentStage);
    startTimer();
    showScreen('game-screen');
}

function loadStage(stageNumber) {
    const stage = STAGES[stageNumber];
    if (!stage) {
        endGame();
        return;
    }
    
    // Обновляем интерфейс
    document.getElementById('stage-title').textContent = stage.title;
    document.getElementById('stage-description').textContent = stage.description;
    document.getElementById('stage-task').textContent = stage.task;
    document.getElementById('stage-joke').textContent = stage.joke;
    document.getElementById('stage-fact').textContent = stage.fact;
    document.getElementById('stage-location').textContent = stage.location;
    document.getElementById('next-location').textContent = stage.nextLocation;
    
    // Обновляем прогресс
    document.getElementById('current-stage').textContent = `${stageNumber}/${CONFIG.TOTAL_STAGES}`;
    
    // Обновляем прогресс-бар
    const progressPercent = ((stageNumber - 1) / CONFIG.TOTAL_STAGES) * 100;
    document.getElementById('stage-progress').style.width = `${progressPercent}%`;
    
    // Очищаем поле ввода
    document.getElementById('answer-input').value = '';
    
    // Фокусируемся на поле ввода
    setTimeout(() => {
        document.getElementById('answer-input').focus();
    }, 100);
}

function checkAnswer() {
    const input = document.getElementById('answer-input');
    const userAnswer = input.value.trim().toUpperCase();
    const currentStage = STAGES[gameState.currentStage];
    
    if (!userAnswer) {
        showNotification('✍️ Введите ответ!', 'warning');
        return;
    }
    
    if (userAnswer === currentStage.answer.toUpperCase()) {
        // Правильный ответ
        handleCorrectAnswer();
    } else {
        // Неправильный ответ
        handleWrongAnswer();
    }
}

function handleCorrectAnswer() {
    const stage = STAGES[gameState.currentStage];
    
    // Начисляем очки
    gameState.score += stage.points;
    gameState.completedStages.push(gameState.currentStage);
    
    showNotification(`✅ Правильно! +${stage.points} очков`, 'success');
    
    // Переход к следующему этапу
    setTimeout(() => {
        gameState.currentStage++;
        
        if (gameState.currentStage <= CONFIG.TOTAL_STAGES) {
            loadStage(gameState.currentStage);
        } else {
            endGame(true);
        }
        
        updateGameUI();
        saveGameProgress();
        
    }, 1500);
}

function handleWrongAnswer() {
    gameState.lives--;
    
    if (gameState.lives <= 0) {
        showNotification('💀 Закончились жизни! Игра окончена.', 'error');
        setTimeout(() => {
            endGame(false);
        }, 2000);
    } else {
        showNotification(`❌ Неправильно! Осталось жизней: ${gameState.lives}`, 'error');
        document.getElementById('answer-input').value = '';
        document.getElementById('answer-input').focus();
    }
    
    updateGameUI();
    saveGameProgress();
}

function useHint() {
    if (gameState.hintsUsed >= CONFIG.MAX_HINTS) {
        showNotification('ℹ️ Подсказки закончились!', 'warning');
        return;
    }
    
    const currentStage = STAGES[gameState.currentStage];
    gameState.hintsUsed++;
    
    // Показываем модальное окно с подсказкой
    document.getElementById('hint-text').textContent = currentStage.hint;
    document.getElementById('hint-modal').classList.add('active');
    
    showNotification(`💡 Использована подсказка! Осталось: ${CONFIG.MAX_HINTS - gameState.hintsUsed}`, 'success');
    updateGameUI();
}

function skipStage() {
    if (gameState.skipsUsed >= CONFIG.MAX_SKIPS) {
        showNotification('ℹ️ Пропуски закончились!', 'warning');
        return;
    }
    
    gameState.skipsUsed++;
    gameState.currentStage++;
    
    showNotification(`⏩ Этап пропущен! Осталось пропусков: ${CONFIG.MAX_SKIPS - gameState.skipsUsed}`, 'success');
    
    if (gameState.currentStage <= CONFIG.TOTAL_STAGES) {
        loadStage(gameState.currentStage);
    } else {
        endGame(true);
    }
    
    updateGameUI();
    saveGameProgress();
}

function endGame(isVictory) {
    gameState.isGameActive = false;
    clearInterval(gameState.timerInterval);
    
    if (isVictory) {
        // Дополнительные очки за победу
        const timeBonus = Math.floor(gameState.timeLeft * 0.5);
        gameState.score += timeBonus;
        
        showNotification(`🎉 Победа! Бонус за время: +${timeBonus} очков`, 'success');
        
        // Переход к экрану сундука
        setTimeout(() => {
            showScreen('chest-screen');
        }, 2000);
    } else {
        showNotification('😢 Игра окончена', 'error');
        setTimeout(() => {
            showScreen('main-menu');
        }, 2000);
    }
    
    saveGameProgress();
}

// ===== ТАЙМЕР =====
function startTimer() {
    clearInterval(gameState.timerInterval);
    
    // Сразу обновляем отображение
    updateTimerDisplay();
    
    gameState.timerInterval = setInterval(() => {
        if (gameState.isGameActive && gameState.timeLeft > 0) {
            gameState.timeLeft--;
            updateTimerDisplay();
            
            // Предупреждения при малом времени
            if (gameState.timeLeft === 300) { // 5 минут
                showNotification('⏰ Осталось 5 минут!', 'warning');
            } else if (gameState.timeLeft === 60) { // 1 минута
                showNotification('🚨 Осталась 1 минута!', 'error');
            }
        } else if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timerInterval);
            showNotification('⏰ Время вышло!', 'error');
            endGame(false);
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(gameState.timeLeft / 60);
    const seconds = gameState.timeLeft % 60;
    document.getElementById('timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Меняем цвет при малом времени
    const timerElement = document.getElementById('timer');
    if (gameState.timeLeft < 300) {
        timerElement.style.color = '#D32F2F';
    } else if (gameState.timeLeft < 600) {
        timerElement.style.color = '#FF9800';
    } else {
        timerElement.style.color = 'inherit';
    }
}

// ===== ОБНОВЛЕНИЕ ИНТЕРФЕЙСА =====
function updateGameUI() {
    // Обновляем статистику
    document.getElementById('score').textContent = gameState.score;
    document.getElementById('lives').textContent = gameState.lives;
    document.getElementById('hints-left').textContent = CONFIG.MAX_HINTS - gameState.hintsUsed;
    document.getElementById('skips-left').textContent = CONFIG.MAX_SKIPS - gameState.skipsUsed;
}

function updatePlayerStats() {
    const bestScore = localStorage.getItem('bestScore') || 0;
    document.getElementById('player-best-score').textContent = bestScore;
    
    // Рассчитываем уровень игрока
    const level = Math.floor(bestScore / 1000) + 1;
    document.getElementById('player-level').textContent = level;
}

// ===== ЭКРАН СУНДУКА =====
function showFinalResults() {
    const completedStages = gameState.completedStages.length;
    const completionPercent = Math.round((completedStages / CONFIG.TOTAL_STAGES) * 100);
    
    // Обновляем статистику
    document.getElementById('final-stages').textContent = `${completedStages}/${CONFIG.TOTAL_STAGES}`;
    document.getElementById('final-score').textContent = gameState.score;
    
    // Генерируем финальный код
    const finalCode = generateFinalCode();
    document.getElementById('final-code').textContent = finalCode;
    document.getElementById('display-code').textContent = finalCode;
    
    // Сохраняем результат
    saveFinalResult(finalCode);
}

function generateFinalCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 8; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
        if (i === 3) code += '-';
    }
    return code;
}

function saveFinalResult(code) {
    const result = {
        ticketNumber: gameState.ticketNumber,
        playerName: gameState.playerName,
        score: gameState.score,
        finalCode: code,
        timestamp: new Date().toISOString(),
        completedStages: gameState.completedStages.length
    };
    
    // Сохраняем в localStorage
    const results = JSON.parse(localStorage.getItem('gameResults') || '[]');
    results.push(result);
    localStorage.setItem('gameResults', JSON.stringify(results));
    
    // Отправляем в Telegram бота (если есть)
    if (tg?.sendData) {
        tg.sendData(JSON.stringify({
            action: 'final_result',
            result: result
        }));
    }
}

// ===== СИСТЕМА КАРТ =====
function purchaseTicket() {
    if (gameState.hasTicket) {
        showNotification('🎫 У вас уже есть карта!', 'info');
        return;
    }
    
    // В реальном приложении здесь будет интеграция с платежной системой
    // Для демо просто создаем карту
    
    const ticketNumber = 'NYF-' + Date.now().toString().slice(-6);
    
    gameState.hasTicket = true;
    gameState.ticketNumber = ticketNumber;
    
    // Обновляем отображение номера карты
    document.getElementById('ticket-number').textContent = ticketNumber;
    
    showNotification('🎫 Карта успешно приобретена!', 'success');
    saveGameProgress();
    
    // Показываем экран с картой
    showScreen('ticket-screen');
}

// ===== СОХРАНЕНИЕ ПРОГРЕССА =====
function saveGameProgress() {
    try {
        const saveData = {
            ...gameState,
            saveTime: new Date().getTime()
        };
        
        localStorage.setItem('farmQuestProgress', JSON.stringify(saveData));
        
        // Сохраняем лучший счет отдельно
        const bestScore = localStorage.getItem('bestScore') || 0;
        if (gameState.score > bestScore) {
            localStorage.setItem('bestScore', gameState.score);
        }
        
    } catch (error) {
        console.error('❌ Ошибка сохранения:', error);
    }
}

function loadGameProgress() {
    try {
        const saved = localStorage.getItem('farmQuestProgress');
        if (saved) {
            const data = JSON.parse(saved);
            
            // Проверяем, не устарели ли данные (больше 7 дней)
            const weekAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
            if (data.saveTime > weekAgo) {
                Object.assign(gameState, data);
                return true;
            }
        }
    } catch (error) {
        console.error('❌ Ошибка загрузки:', error);
    }
    return false;
}

// ===== УВЕДОМЛЕНИЯ =====
function showNotification(message, type = 'info') {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notification-text');
    
    if (!notification || !notificationText) return;
    
    notificationText.textContent = message;
    notification.className = `notification ${type} show`;
    
    // Автоматическое скрытие
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
    
    console.log(`💬 ${type}: ${message}`);
}

// ===== ШЕРИНГ =====
function shareResults() {
    const shareText = `Я прошел Новогодний Квест на Ферме и набрал ${gameState.score} очков! 🎄\nМой код: ${document.getElementById('final-code').textContent}\nПрисоединяйся!`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Мой результат в Новогоднем Квесте',
            text: shareText
        });
    } else if (tg?.share) {
        tg.share(shareText);
    } else {
        // Копируем в буфер обмена
        navigator.clipboard.writeText(shareText).then(() => {
            showNotification('📋 Результат скопирован!', 'success');
        });
    }
}

// ===== ОБРАБОТЧИКИ СОБЫТИЙ =====
function setupEventListeners() {
    console.log('🔗 Настраиваем обработчики событий...');
    
    // Главное меню
    document.getElementById('start-game')?.addEventListener('click', () => {
        startGame();
    });
    
    document.getElementById('continue-game')?.addEventListener('click', () => {
        if (gameState.currentStage > 1) {
            showScreen('game-screen');
        } else {
            showNotification('ℹ️ Начните новую игру!', 'info');
        }
    });
    
    document.getElementById('buy-ticket')?.addEventListener('click', () => {
        showScreen('ticket-screen');
    });
    
    document.getElementById('how-to-play')?.addEventListener('click', () => {
        showNotification('🎯 Пройди все этапы и положи карту в сундук!', 'info');
    });
    
    document.getElementById('rules')?.addEventListener('click', () => {
        showScreen('rules-screen');
    });
    
    document.getElementById('prizes')?.addEventListener('click', () => {
        showNotification('🎁 Призы разыгрываются 15 января!', 'info');
    });
    
    // Игровой экран
    document.getElementById('pause-btn')?.addEventListener('click', () => {
        gameState.isGameActive = !gameState.isGameActive;
        if (gameState.isGameActive) {
            startTimer();
            document.getElementById('pause-btn').textContent = '⏸️';
        } else {
            clearInterval(gameState.timerInterval);
            document.getElementById('pause-btn').textContent = '▶️';
            showNotification('⏸️ Игра на паузе', 'info');
        }
    });
    
    document.getElementById('submit-answer')?.addEventListener('click', checkAnswer);
    
    document.getElementById('answer-input')?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkAnswer();
    });
    
    document.getElementById('hint-btn')?.addEventListener('click', useHint);
    document.getElementById('skip-btn')?.addEventListener('click', skipStage);
    
    // Модальное окно подсказки
    document.querySelector('.modal-close')?.addEventListener('click', () => {
        document.getElementById('hint-modal').classList.remove('active');
    });
    
    document.getElementById('use-hint-btn')?.addEventListener('click', () => {
        document.getElementById('hint-modal').classList.remove('active');
    });
    
    // Экран карты
    document.getElementById('buy-ticket-confirm')?.addEventListener('click', purchaseTicket);
    document.getElementById('back-from-ticket')?.addEventListener('click', () => {
        showScreen('main-menu');
    });
    
    // Экран сундука
    document.getElementById('share-result')?.addEventListener('click', shareResults);
    
    document.getElementById('save-code')?.addEventListener('click', () => {
        const code = document.getElementById('final-code').textContent;
        navigator.clipboard.writeText(code).then(() => {
            showNotification('📋 Код скопирован в буфер обмена!', 'success');
        });
    });
    
    document.getElementById('back-to-menu-from-chest')?.addEventListener('click', () => {
        showScreen('main-menu');
    });
    
    // Экран правил
    document.getElementById('back-from-rules')?.addEventListener('click', () => {
        showScreen('main-menu');
    });
    
    // Закрытие модальных окон по клику вне
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('active');
        }
    });
    
    console.log('✅ Обработчики настроены');
}

// ===== РЕЖИМ БРАУЗЕРА =====
function initBrowserMode() {
    console.log('🌐 Запуск в браузере');
    
    // Для тестирования в браузере создаем демо-карту
    if (!gameState.hasTicket) {
        gameState.hasTicket = true;
        gameState.ticketNumber = 'NYF-DEMO123';
    }
}

// Экспортируем функции для отладки
window.showScreen = showScreen;
window.startGame = startGame;
window.purchaseTicket = purchaseTicket;

console.log('🎮 Игра готова к работе!');