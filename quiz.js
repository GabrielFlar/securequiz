// quiz.js - Quiz functionality and logic with enhanced randomization

class QuizManager {
    constructor() {
        this.allQuestions = [];
        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;
        this.userName = '';
        this.userPhone = '';
        this.questionCount = 10;

        this.init();
    }

    init() {
        // Load questions data
        if (typeof questionsBank !== 'undefined') {
            this.allQuestions = questionsBank;
        }

        // Setup event listeners
        this.setupEventListeners();
    }

    setupEventListeners() {
        const startQuizBtn = document.getElementById('startQuizBtn');
        const nextQuestionBtn = document.getElementById('nextQuestionBtn');
        const retakeQuizBtn = document.getElementById('retakeQuizBtn');

        if (startQuizBtn) {
            startQuizBtn.addEventListener('click', () => this.startQuiz());
        }

        if (nextQuestionBtn) {
            nextQuestionBtn.addEventListener('click', () => this.nextQuestion());
        }

        if (retakeQuizBtn) {
            retakeQuizBtn.addEventListener('click', () => this.resetQuiz());
        }
    }

    startQuiz() {
        // Get user data
        const nameInput = document.getElementById('userName');
        const phoneInput = document.getElementById('userPhone');
        const questionCountSelect = document.getElementById('questionCount');

        this.userName = nameInput.value.trim();
        this.userPhone = phoneInput.value.trim();
        this.questionCount = parseInt(questionCountSelect.value);

        // Validate inputs
        if (!this.userName) {
            alert('Por favor ingresa tu nombre completo');
            nameInput.focus();
            return;
        }

        if (!this.userPhone) {
            alert('Por favor ingresa tu número de teléfono');
            phoneInput.focus();
            return;
        }

        // Validate phone number (basic validation)
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(this.userPhone)) {
            alert('Por favor ingresa un número de teléfono válido (10 dígitos)');
            phoneInput.focus();
            return;
        }

        // Select random questions
        this.selectRandomQuestions();

        // Reset quiz state
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;

        // Show questions screen
        this.showScreen('quiz-questions');
        this.displayQuestion();
    }

    selectRandomQuestions() {
        // Fisher-Yates shuffle algorithm for true randomness (better than sort with random)
        const shuffled = [...this.allQuestions];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        // Take the requested number of questions
        this.currentQuestions = shuffled.slice(0, this.questionCount);

        // Shuffle answer options for each question to prevent memorization
        this.currentQuestions = this.currentQuestions.map(q => {
            const question = { ...q };
            const correctOption = question.options[question.correctAnswer];

            // Create array of indices and shuffle them using Fisher-Yates
            const indices = [0, 1, 2];
            for (let i = indices.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [indices[i], indices[j]] = [indices[j], indices[i]];
            }

            // Reorder options based on shuffled indices
            const shuffledOptions = indices.map(i => question.options[i]);

            // Find new position of correct answer
            const newCorrectIndex = shuffledOptions.indexOf(correctOption);

            return {
                ...question,
                options: shuffledOptions,
                correctAnswer: newCorrectIndex
            };
        });

        // Update total questions display
        document.getElementById('totalQuestions').textContent = this.questionCount;
    }

    displayQuestion() {
        const question = this.currentQuestions[this.currentQuestionIndex];

        // Update progress
        const progressPercent = ((this.currentQuestionIndex + 1) / this.questionCount) * 100;
        document.getElementById('progressBar').style.width = progressPercent + '%';
        document.getElementById('currentQuestion').textContent = this.currentQuestionIndex + 1;

        // Update topic
        document.getElementById('questionTopic').textContent = question.topic.split(':')[0];

        // Update question text
        document.getElementById('questionText').textContent = question.question;

        // Display options
        this.displayOptions(question);

        // Disable next button
        document.getElementById('nextQuestionBtn').disabled = true;
    }

    displayOptions(question) {
        const optionsContainer = document.getElementById('questionOptions');
        optionsContainer.innerHTML = '';

        const letters = ['A', 'B', 'C'];

        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-btn';
            button.dataset.index = index;

            button.innerHTML = `
                <span class="option-letter">${letters[index]}</span>
                <span class="option-text">${option}</span>
            `;

            button.addEventListener('click', () => this.selectOption(index));

            optionsContainer.appendChild(button);
        });
    }

    selectOption(selectedIndex) {
        const question = this.currentQuestions[this.currentQuestionIndex];
        const optionButtons = document.querySelectorAll('.option-btn');

        // Remove previous selections
        optionButtons.forEach(btn => {
            btn.classList.remove('selected', 'correct', 'incorrect');
            btn.classList.add('disabled');
        });

        // Mark selected option
        const selectedButton = optionButtons[selectedIndex];
        selectedButton.classList.add('selected');

        // Show correct/incorrect
        const isCorrect = selectedIndex === question.correctAnswer;

        if (isCorrect) {
            selectedButton.classList.add('correct');
            this.score++;
        } else {
            selectedButton.classList.add('incorrect');
            // Also show the correct answer
            optionButtons[question.correctAnswer].classList.add('correct');
        }

        // Store answer
        this.userAnswers.push({
            questionId: question.id,
            question: question.question,
            selectedAnswer: selectedIndex,
            correctAnswer: question.correctAnswer,
            isCorrect: isCorrect
        });

        // Enable next button
        document.getElementById('nextQuestionBtn').disabled = false;
    }

    nextQuestion() {
        this.currentQuestionIndex++;

        if (this.currentQuestionIndex < this.questionCount) {
            // Show next question
            this.displayQuestion();
        } else {
            // Quiz complete, show results
            this.showResults();
        }
    }

    showResults() {
        // Calculate results
        const percentage = Math.round((this.score / this.questionCount) * 100);
        const incorrect = this.questionCount - this.score;

        // Update results display
        document.getElementById('resultsName').textContent = this.userName;
        document.getElementById('scorePercentage').textContent = percentage + '%';
        document.getElementById('scoreFraction').textContent = `${this.score}/${this.questionCount}`;
        document.getElementById('correctCount').textContent = this.score;
        document.getElementById('incorrectCount').textContent = incorrect;
        document.getElementById('percentageValue').textContent = percentage + '%';

        // Animate score circle
        const circumference = 2 * Math.PI * 90; // radius = 90
        const offset = circumference - (percentage / 100) * circumference;
        const scoreCircle = document.getElementById('scoreCircle');
        scoreCircle.style.strokeDasharray = circumference;

        // Animate after a short delay
        setTimeout(() => {
            scoreCircle.style.strokeDashoffset = offset;
        }, 100);

        // Show results screen
        this.showScreen('quiz-results');

        // Auto-generate and download certificate after a short delay
        setTimeout(() => {
            generateCertificate({
                name: this.userName,
                phone: this.userPhone,
                score: this.score,
                total: this.questionCount,
                percentage: percentage,
                answers: this.userAnswers
            });
        }, 500);
    }

    resetQuiz() {
        this.showScreen('quiz-setup');

        // Reset form
        document.getElementById('userName').value = '';
        document.getElementById('userPhone').value = '';
        document.getElementById('questionCount').value = '10';

        // Reset state
        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;
    }

    showScreen(screenId) {
        const screens = document.querySelectorAll('.quiz-screen');
        screens.forEach(screen => screen.classList.remove('active'));

        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.add('active');
        }
    }
}

// Initialize quiz when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    window.quizManager = new QuizManager();
});
