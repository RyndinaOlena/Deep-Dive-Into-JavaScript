
function calc() {
    const num = parseFloat(document.getElementById('number').value);
    const percent = parseFloat(document.getElementById('percent').value);

    if (isNaN(num) || isNaN(percent)) {
        document.getElementById('result').textContent = "Будь ласка, введіть обидва числа.";
        return;
    }

    const part = (num * percent) / 100;
    const remainder = num - part;

    document.getElementById('result').textContent =
        `${percent}% від ${num} = ${part}. Залишок: ${remainder}`;
}
const math = document.getElementById("math");
math.innerHTML = `
    <div>
        <input type="number" placeholder="Введіть число" id="number" />
        <input type="number" placeholder="Введіть відсоток" id="percent" />
        <button onclick="calc()">Обчислити</button>
        <p id="result"></p>
    </div>
`;
