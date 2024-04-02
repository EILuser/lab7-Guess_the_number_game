// Необходимые для реализации игры функции
function getRandomNumber(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function isValid(min, max, num) {
    if (num === "") {
        alert("Введите число!!!");
        return false;
    }
    else if (isNaN(parseInt(num)) || num < min || num > max) {
        alert(`Некорректный ввод. По правилам игры вы должны ввести число от ${min} до ${max}. Попробуйте снова`);
        return false;
    }

    return true;
}

function isExit(num) {
    if (num === null && confirm("Хотите ли вы закончить игру?")) {
        return true;
    }
    num = "cancel";
    return false;
}


function guessTheNumberGame() {

    const maxNumber = parseInt(document.getElementById("input_range").value);
    const minNumber = 0;
    const randomNumber = getRandomNumber(minNumber, maxNumber);
    const userNumberOnScreen = document.getElementById("number");
    const resultMarker = document.getElementById("marker");
    let attemptsNumber = 5;

    while (true) {
        userNumber = prompt(`Введите число от ${minNumber} до ${maxNumber}`);

        if (isExit(userNumber)) {
            return;
        }
        else if (userNumber != null) {
            if (!isValid(minNumber, maxNumber, userNumber)) {
                continue;
            }

            if (userNumber == randomNumber) {
                confirm('Вы выиграли!!! Если хотите сыграть еще, нажмите на кнопку "Начать игру"');
                resultMarker.src = "images/check_mark.png";
                userNumberOnScreen.textContent = `${randomNumber}`;
                return;
            }
            else if (userNumber > randomNumber) {
                alert("Неверно!!! Ваше число БОЛЬШЕ загаданного");
                attemptsNumber--;
            }
            else if (userNumber < randomNumber) {
                alert("Неверно!!! Ваше число МЕНЬШЕ загаданного");
                attemptsNumber--;
            }


            if (attemptsNumber === 0) {
                confirm('Количество попыток исчерпано. Если хотите попробовать угадать число еще раз, нажмите на конпку "Начать игру"');
                resultMarker.src = "images/cross.png";
                userNumberOnScreen.textContent = `${randomNumber}`;
                return;
            }
        }

    }

}

// Отображение изменения значения ползунком
const maxNumber = document.getElementById("max_number");
const input = document.getElementById("input_range");
maxNumber.textContent = `Значение: ${input.value}`;
input.addEventListener("input", event => {
    maxNumber.textContent = `Значение: ${event.target.value}`;
});