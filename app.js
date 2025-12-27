// ===== КОНФИГУРАЦИЯ ИГРЫ =====
const CONFIG = {
    TOTAL_STAGES: 10,
    TICKET_PRICE: 500,
    MAX_HINTS: 3,
    MAX_SKIPS: 1,
    MAX_LIVES: 3,
    INITIAL_TIME: 90 * 60,
    DRAW_DATE: '15 января 2026',
    TELEGRAM_CONTACT: '@Koni_i_Lyudi',
    PRIZES: [
        'Абонемент на месяц (детский)',
        'Абонемент на месяц (взрослый)',
        'Индивидуальное занятие с инструктором',
        'Индивидуальная прогулка на лошади',
        'Фотосессия с лошадью 30 минут',
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
        description: "Дед Мороз торопился в усадьбу Марьино и потерял снежинки со своих саней. Помогите найти и посчитать все снежинки!",
        task: "🔍 Найди все снежинки на санях и посчитай их",
        hint: "💡 Снежинки приклеены к саням",
        joke: "🎅 Почему снежинки никогда не бывают одинокими? Потому что они всегда падают хлопьями!",
        fact: "❄️ Каждая снежинка уникальна, как отпечаток пальца!",
        answer: "12",
        location: "Каретный двор",
        nextLocation: "Манеж",
        points: 100
    },
    2: {
        title: "☯️ ЭТАП 2: ИНЬ ЯНЬ",
        description: "Снегурочка превратилась в птицу, чтобы наблюдать за праздником. Среди белого снега она выглядит необычно!",
        task: "🔍 Обойди вокруг манежа и найди 'тёмное среди светлого'. В кого же превратилась Снегурочка?",
        hint: "💡 Ищи необычную птицу возле манежа",
        joke: "🦢 Что сказала птица на новогоднем празднике? 'Хочу быть ёлочной игрушкой!'",
        fact: "🕊️ Многие птицы остаются зимовать и радуют нас своим видом даже в холодное время года!",
        answer: "ЧЕРНЫЙ ЛЕБЕДЬ",
        location: "Манеж",
        nextLocation: "Конюшня",
        points: 150
    },
    3: {
        title: "🎁 ЭТАП 3: НОВОГОДНЕЕ УГОЩЕНИЕ",
        description: "Лошадки ждут новогоднего угощения! Отнеси им самую вкусную морковку - это будет их праздничный подарок!",
        task: "🔍 Найди морковку и отнеси её лошадкам (обязательно кормить в присутствии персонала конюшни)",
        hint: "💡 Ищи морковку ближе к коням",
        joke: "🥕 Почему морковка не боится Нового года? Потому что она всегда 'под-снежком'!",
        fact: "🐎 Лошади могут спать стоя благодаря особому строению коленных суставов!",
        answer: "ПОНИ",
        location: "Конюшня",
        nextLocation: "Домик альпаки",
        points: 200
    },
    4: {
        title: "✨ ЭТАП 4: ТАЙНА АЛЬПАКИ ПЛЮШИ",
        description: "Альпака Плюша (он мальчик!) спрятал в своём домике волшебную подсказку. Только ультрафиолетовый фонарик поможет её найти!",
        task: "🔍 Найди фонарик, найди подсказку",
        hint: "💡 Фонарик привязан рядом с домиком альпаки",
        joke: "🦙 Что альпака попросил у Деда Мороза? 'Хочу, чтобы моя шерсть светилась в темноте!'",
        fact: "🦙 Шерсть альпаки в 7 раз теплее овечьей и не вызывает аллергии!",
        answer: "ЗВЕЗДА",
        location: "Домик альпаки",
        nextLocation: "Овчарня",
        points: 250
    },
    5: {
        title: "🐑 ЭТАП 5: ОВЕЧЬЕ ЦАРСТВО",
        description: "Овцы усадьбы Марьино ждут, когда их посчитают. Но будь внимателен - они любят прятаться!",
        task: "🔍 Посчитай количество овец в загоне",
        hint: "💡 Овец нужно посчитать точно, их количество варьируется от 25 до 50",
        joke: "🐏 Что овцы говорят под Новый год? 'Баа-баа, пора на стрижку!'",
        fact: "🐑 Овцы могут узнавать до 50 других овец и помнить человеческие лица годами!",
        answer: "40",
        location: "Овчарня",
        nextLocation: "Вольер страусов",
        points: 300
    },
    6: {
        title: "🎪 ЭТАП 6: АФРИКАНСКИЙ ГОСТЬ",
        description: "Даже в Африке празднуют Новый год! Страусы приготовили для тебя интересное задание.",
        task: "🔍 Собери буквы на заборе и составь слово",
        hint: "💡 Буквы висят на заборе у страусов",
        joke: "🐦 Что страус сказал на новогодней вечеринке? 'Я бы спрятал голову в песок, но тут снег!'",
        fact: "🌍 Страусы обитают в Африке, но прекрасно адаптируются к разным условиям, даже зимним!",
        answer: "ЭКЗОТИКА",
        location: "Вольер страусов",
        nextLocation: "Собачий вольер",
        points: 350
    },
    7: {
        title: "🐕 ЭТАП 7: БЫСТРЫЕ ДРУЗЬЯ",
        description: "Этих грациозных созданий ценят за скорость и изящество. Отгадай, про какую породу идет речь!",
        task: "🔍 Отгадай, про какую породу собак идет речь",
        hint: "💡 Эти собаки известны своей скоростью и используются на охоте",
        joke: "🏃 Что сказала собака-бегун под Новый год? 'Главное - не проспать старт!'",
        fact: "🐕 Эти собаки могут развивать скорость до 70 км/ч и были любимцами русской аристократии!",
        answer: "БОРЗЫЕ",
        location: "Собачий вольер",
        nextLocation: "Гусиная площадка",
        points: 400
    },
    8: {
        title: "🦢 ЭТАП 8: ДОБРЫЕ ГУСИ",
        description: "В усадьбе Марьино наши гуси очень добрые! Сделай селфи с нашими добрыми гусями.",
        task: "📸 Сделай селфи с гусями и отправь в Telegram @Koni_i_Lyudi чтобы узнать ответ",
        hint: "💡 После отправки селфи получи код для продолжения",
        joke: "🎆 Что гусь сказал под бой курантов? 'Новый год - время лететь к новым высотам!'",
        fact: "🦢 Гуси - одни из самых умных птиц, они образуют прочные семейные пары на всю жизнь!",
        answer: "СЕЛФИ",
        location: "Найди гусей",
        nextLocation: "Каретный двор",
        points: 450
    },
    9: {
        title: "🥚 ЭТАП 9: ТАЙНА ЯИЦ",
        description: "Пройдите в каретный двор. Отгадай, какое яйцо куриное?",
        task: "🔍 Найди куриное яйцо",
        hint: "💡 Яйца пронумерованы, нужно найти именно куриное",
        joke: "🐣 Что яйцо сказало под Новый год? 'Скоро я вылуплюсь в цыплёнка удачи!'",
        fact: "🥚 Куриное яйцо - один из самых совершенных продуктов природы, содержащий все необходимые питательные вещества!",
        answer: "3",
        location: "Каретный двор",
        nextLocation: "Тактильная зона",
        points: 500
    },
    10: {
        title: "🦙 ЭТАП 10: ТАКТИЛЬНЫЙ ДЕТЕКТИВ",
        description: "Альпаки славятся своей роскошной шерстью! Она ценится во всем мире. Проверьте свои чувства! На ощупь в коробке найди где шерсть альпаки.",
        task: "🔍 На ощупь определи, в какой коробке шерсть альпаки",
        hint: "💡 Шерсть альпаки очень мягкая и нежная, в отличие от грубой овечьей шерсти",
        joke: "🎄 Что шерсть альпаки сказала на новогоднем балу? 'Я такая мягкая, что даже Дед Мороз хочет из меня шубу!'",
        fact: "🌟 Шерсть альпаки не содержит ланолина, поэтому не вызывает аллергии и не требует частой стирки!",
        answer: "3",
        location: "Тактильная зона",
        nextLocation: "ФИНИШ 🏁",
        points: 600,
        maxWrongAttempts: 2
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
    startTime: null,
    stage10Attempts: 0
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
    gameState.stage10Attempts = 0;
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
    
    // Обновляем интерфейс с увеличенными шрифтами
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
    
    // Проверка для этапа 5 (овцы) - диапазон 25-50
    if (gameState.currentStage === 5) {
        const numberAnswer = parseInt(userAnswer);
        if (!isNaN(numberAnswer) && numberAnswer >= 25 && numberAnswer <= 50) {
            handleCorrectAnswer();
        } else {
            handleWrongAnswer();
        }
        return;
    }
    
    // Проверка для этапа 10 - с ограничением попыток
    if (gameState.currentStage === 10) {
        if (userAnswer === currentStage.answer) {
            handleCorrectAnswer();
            gameState.stage10Attempts = 0;
        } else {
            gameState.stage10Attempts++;
            
            if (gameState.stage10Attempts >= currentStage.maxWrongAttempts) {
                // Автоматический пропуск этапа после 2 ошибок
                showNotification('🔄 Этап пропущен после 2 ошибок!', 'warning');
                setTimeout(() => {
                    skipStage();
                    gameState.stage10Attempts = 0;
                }, 1500);
            } else {
                const attemptsLeft = currentStage.maxWrongAttempts - gameState.stage10Attempts;
                showNotification(`❌ Неправильно! Осталось попыток: ${attemptsLeft}`, 'error');
                document.getElementById('answer-input').value = '';
                document.getElementById('answer-input').focus();
            }
        }
        return;
    }
    
    // Стандартная проверка для остальных этапов
    if (userAnswer === currentStage.answer.toUpperCase()) {
        handleCorrectAnswer();
    } else {
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
            if (gameState.timeLeft === 300) {
                showNotification('⏰ Осталось 5 минут!', 'warning');
            } else if (gameState.timeLeft === 60) {
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
    const finalCode = document.getElementById('final-code').textContent;
    const shareText = `Я прошел Новогодний Квест на Ферме в усадьбе Марьино и набрал ${gameState.score} очков! 🎄\nМой код: ${finalCode}\nПриходи в усадьбу Марьино, участвуй в новогоднем квесте 2026 и выигрывай чудесные подарки от Конного клуба "Марьино"!\nНе забудь отправить скриншот в Telegram: ${CONFIG.TELEGRAM_CONTACT}`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Мой результат в Новогоднем Квесте 2026',
            text: shareText
        });
    } else if (tg?.share) {
        tg.share(shareText);
    } else {
        navigator.clipboard.writeText(shareText).then(() => {
            showNotification('📋 Результат скопирован в буфер обмена!', 'success');
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
        showNotification('🎯 Пройди все 10 этапов и положи карту в сундук!', 'info');
    });
    
    document.getElementById('rules')?.addEventListener('click', () => {
        showScreen('rules-screen');
    });
    
    document.getElementById('prizes')?.addEventListener('click', () => {
        showNotification(`🎁 Призы разыгрываются ${CONFIG.DRAW_DATE}!`, 'info');
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

