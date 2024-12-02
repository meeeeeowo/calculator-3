var product = document.getElementById("product");
product.innerText = "*";
// Получаем элементы
const result = document.querySelector('.result');
const buttons = document.querySelectorAll('ul li');

// Функция для обновления экрана
function updateResult(value) {
    if (result.innerText === "0") {
        result.innerText = value;  // Если на экране 0, заменяем на нажатое значение
    } else {
        result.innerText += value;  // Иначе добавляем значение к уже введенному
    }
}

// Обработчик для кнопок
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if (value === "=") {
            try {
                result.innerText = eval(result.innerText); // Выполняем операцию
            } catch (e) {
                result.innerText = "Ошибка";
            }
        } else if (value === "C") {
            result.innerText = "0";  // Очистка
        } else if (value === "+/-") {
            result.innerText = result.innerText.startsWith("-") 
                ? result.innerText.substring(1) 
                : "-" + result.innerText; // Меняем знак
        } else {
            updateResult(value); // Обновляем результат
        }
    });
});
let resultElement = document.querySelector(".result"); // Результат калькулятора
let currentInput = "0";  // Начальный ввод
let isResultDisplayed = false;  // Флаг для отображения результата

// Обработчик кликов по кнопкам калькулятора
document.querySelectorAll("ul li").forEach(button => {
    button.addEventListener("click", function() {
        let buttonText = this.innerText;

        if (buttonText === "C") {
            // Очистка экрана
            currentInput = "0";
        } else if (buttonText === "=") {
            // Выполнение вычисления
            try {
                // Заменяем математические символы на их JavaScript аналоги
                currentInput = currentInput
                    .replace(/x/g, "*")  // Умножение
                    .replace(/&#247;/g, "/")  // Деление
                    .replace(/&#177;/g, "-"); // +/- (изменение знака)

                // Выполняем вычисление
                currentInput = eval(currentInput); 
            } catch (e) {
                currentInput = "Ошибка"; // Обработка ошибок
            }
        } else if (buttonText === "+/-") {
            // Изменение знака числа
            if (currentInput !== "0" && currentInput !== "Ошибка") {
                currentInput = (parseFloat(currentInput) * -1).toString();
            }
        } else {
            // Обработка обычных кнопок
            if (currentInput === "0" || isResultDisplayed) {
                currentInput = buttonText;
                isResultDisplayed = false;
            } else {
                currentInput += buttonText;
            }
        }

        resultElement.innerText = currentInput;
    });
});



