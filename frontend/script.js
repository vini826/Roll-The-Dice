// frontend/script.js
document.addEventListener('DOMContentLoaded', () => {
    const diceSelectorButtons = document.querySelectorAll('.dice-type-btn');
    const rollButton = document.getElementById('rollButton');
    const resultDisplay = document.getElementById('resultDisplay');
    const errorDisplay = document.getElementById('errorDisplay');
    const diceImage = document.getElementById('diceImage'); // Elemento para a imagem do dado

    // Elementos para o histórico
    const historyList = document.getElementById('historyList');
    const clearHistoryButton = document.getElementById('clearHistoryButton');

    // URL base do seu backend
    const API_BASE_URL = 'http://localhost:3000';

    let currentSelectedDice = 6; // Começa com d6 como padrão

    // Função para atualizar a imagem do dado e o texto do botão de rolagem
    function updateDiceDisplay(sides) {
        // *** ATUALIZADO AQUI PARA USAR SUAS IMAGENS LOCAIS ***
        diceImage.src = `./assets/d${sides}.png`; // Caminho relativo para sua imagem
        // Verifique se o nome do arquivo da imagem corresponde ao tipo de dado (ex: d6.png para d6)
        // Se você tiver um D2, certifique-se de ter um arquivo d2.png, etc.

        diceImage.alt = `Dado de ${sides} lados`;
        rollButton.textContent = `Rolar D${sides}`;
    }

    // Inicializa a exibição do dado padrão
    updateDiceDisplay(currentSelectedDice);

    // ... (o restante do seu código JavaScript, incluindo os event listeners, permanece o mesmo) ...

    diceSelectorButtons.forEach(button => {
        button.addEventListener('click', () => {
            diceSelectorButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            currentSelectedDice = parseInt(button.dataset.sides, 10);
            updateDiceDisplay(currentSelectedDice);
            resultDisplay.textContent = '--';
            errorDisplay.textContent = '';
        });
    });

    rollButton.addEventListener('click', async () => {
        errorDisplay.textContent = '';
        resultDisplay.textContent = '...';

        try {
            const response = await fetch(`${API_BASE_URL}/roll/${currentSelectedDice}`);

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Erro ao rolar o dado.');
            }

            const data = await response.json();
            resultDisplay.textContent = data.result;
            addRollToHistory(data.message);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
            errorDisplay.textContent = `Ocorreu um erro: ${error.message}`;
            resultDisplay.textContent = 'Erro!';
        }
    });

    function addRollToHistory(message) {
        const listItem = document.createElement('li');
        listItem.textContent = message;
        historyList.prepend(listItem);

        const maxHistoryItems = 10;
        while (historyList.children.length > maxHistoryItems) {
            historyList.removeChild(historyList.lastChild);
        }
    }

    clearHistoryButton.addEventListener('click', () => {
        historyList.innerHTML = '';
    });

    document.querySelector('.dice-type-btn[data-sides="6"]').classList.add('active');
});