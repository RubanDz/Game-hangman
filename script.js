// Game HangMan
var words = [
    'программа',
    'школа',
    'макака',
    'собака'
]; // массив, для выбора слов
var word = words[Math.floor(Math.random() * words.length)]; // определил выбор случайного слово
// Итоговый массив
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = '_';
}
var remainingLetters = word.length;
// Игровой цикл
while (remainingLetters > 0) {
    // состояние игры
    alert(answerArray.join(' '));
    // Обоаботка введенного ответа
    var quess = prompt('Угадайте букву или нажмите Отмена для выхода из игры.');
    if (quess === null) {
        break;
    } else if (quess.length !== 1) {
        alert('Пожалуйста, введите только одну букву.');
    } else {
        // Обновляем состояние игры
        for (var j = 0; j < word.length; j++) {
            if (word[j] === quess) {
                answerArray[j] = quess;
                remainingLetters--
            }
        }
    }
    // Игровой цикл завершен!
}
// Отображаю ответ и поздравляю игрока
alert(answerArray.join(' '));
alert('Отлично! Было загадано слово ' + word);


