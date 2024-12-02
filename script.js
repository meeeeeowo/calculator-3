var product = document.getElementById("product");
product.innerText = "*";
// Получаем все кнопки калькулятора
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

