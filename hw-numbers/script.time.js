function timeCalc() {
    const totalSeconds = parseFloat(document.getElementById('secondsInput').value);

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById("resultTime").textContent =
        `${hours} год : ${minutes} хв : ${seconds} сек`;
}

const time = document.getElementById("time");
time.innerHTML = `
    <input type="number" placeholder="Введіть кількість секунд" id="secondsInput" />
    <button onclick="timeCalc()">Обчислити</button>
    <p id="resultTime"></p>
`;
