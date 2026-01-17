const container = document.getElementById('container');
const colorValue = document.getElementById('colorValue');
const colorInput = document.getElementById('color-input');
const randomBtn = document.getElementById('randomBtn');
const applyBtn = document.getElementById('applyBtn');
const errorMsg = document.getElementById('errorMsg');

function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function isValidColor(color) {
    const s = new Option().style;
    s.color = color;
    return s.color !== '';
}

function showError(message) {
    errorMsg.textContent = message;
    errorMsg.classList.add('show');
    setTimeout(() => {
        errorMsg.classList.remove('show');
    }, 3000);
}

function updateColor(color) {
    if (isValidColor(color)) {
        container.style.background = color;
        colorValue.textContent = color;
        colorInput.value = '';
        errorMsg.classList.remove('show');
    } else {
        showError('Invalid color! Please enter a valid color name or hex code.');
    }
}

randomBtn.addEventListener('click', () => {
    const randomColor = generateRandomColor();
    updateColor(randomColor);
});

applyBtn.addEventListener('click', () => {
    const inputColor = colorInput.value.trim();
    if (inputColor === '') {
        showError('Please enter a color!');
        return;
    }
    updateColor(inputColor);
});

colorInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const inputColor = colorInput.value.trim();
        if (inputColor === '') {
            showError('Please enter a color!');
            return;
        }
        updateColor(inputColor);
    }
});