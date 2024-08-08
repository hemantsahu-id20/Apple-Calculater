const display = document.getElementById('display');

function clearDisplay() {
    display.innerText = '0';
}

function toggleSign() {
    if (display.innerText[0] === '-') {
        display.innerText = display.innerText.substring(1);
    } else {
        display.innerText = '-' + display.innerText;
    }
}

function appendCharacter(char) {
    if (display.innerText === '0' && char !== '.') {
        display.innerText = char;
    } else {
        display.innerText += char;
    }
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText.replace('÷', '/').replace('×', '*'));
    } catch (e) {
        display.innerText = 'Error';
    }
}