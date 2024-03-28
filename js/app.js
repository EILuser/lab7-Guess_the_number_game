function getRandomNumber(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


function guessTheNumberGame() {

    const maxNumber = 10;
    const minNumber = 0;
    const randomNumber = getRandomNumber(minNumber, maxNumber);
    const userNumberOnScreen = document.getElementById("number");
    const resultMarker = document.getElementById("marker");
    let attemptsNumber = 5;
    let userNumber;

    while (true) {
        userNumber = prompt(`Введите число от ${minNumber} до ${maxNumber}`);

        if (userNumber == randomNumber) {
            confirm('Вы выиграли!!! Если хотите сыграть еще, нажмите на кнопку "Начать игру"');
            resultMarker.src = "images/check_mark.png";
            break;
        }
        else if (userNumber > randomNumber) {
            alert("Неверно!!! Ваше число больше загаданного");
            attemptsNumber--;
        }
        else if (userNumber < randomNumber) {
            alert("Неверно!!! Ваше число меньше загаданного");
            attemptsNumber--;
        }

        if (attemptsNumber == 0) {
            confirm('Количество попыток исчерпано. Если хотите попробовать угадать число еще раз, нажмите на конпку "Начать игру"');
            resultMarker.src = "images/cross.png";
            break;
        }

        userNumberOnScreen.textContent = `${randomNumber}`;
    }

}