const currentColor = "red";

switch (currentColor) {
    case "red": console.log("Stop");
        break;
    case "yellow": console.log("Get ready");
        break;
    case "green": console.log("Go");
        break;
    default: console.log("traffic light doesn`t work")
}

function isEven(num) {
    if (num % 2 === 0) {
        console.log(`${num} парне`)
    } else {
        console.log(`${num} не парне`)
    }
}

isEven(6);
isEven(7)