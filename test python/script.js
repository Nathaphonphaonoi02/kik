let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

/* ฟังก์ชันอื่น ๆ เช่น calculate() หรือ clearDisplay() สามารถเพิ่มเติมเองตามที่ต้องการ */


function calculate() {
    try {
        let result = eval(currentInput);
        display.value = result;
        currentInput = result;
    } catch (error) {
        display.value = result;
        currentInput = '';
    }
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}
