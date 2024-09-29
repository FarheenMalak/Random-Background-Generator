const generateButton = document.getElementById('generateButton');
const colorValue = document.getElementById('colorValue');

function getRandomColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

generateButton.addEventListener('click', () => {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    colorValue.textContent = newColor;
});
