const confirmButton = document.getElementById('confirm');
const cancelButton = document.getElementById('cancel');
const messageElement = document.getElementById('message');

cancelButton.addEventListener('click', () => {
    messageElement.textContent = 'Opção inválida, tente novamente!';
    messageElement.classList.remove('hidden');
});

confirmButton.addEventListener('click', () => {
    messageElement.textContent = 'Parabéns, Opção certa!!! Sua namorada te espera ansiosa. ';
    messageElement.classList.remove('hidden');
});