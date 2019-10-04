/*   #4. Соеденение чисел
Как с помощью метода join превратить массив [3, 2, 1] в строку
"3 больше, чем 2 больше, чем 1"?    */

var a = [3, 2, 1];
 a.join(" больше чем, ");

/*   #1. Новые дразнилки 
Сделайте генератор случайных дразнилок со своим набором
слов.   */

var ernestich = ["плюш", "медведыч", "погчампыч"];
var randomErnest = ernestich[Math.floor(Math.random() * 3)];

var doings = ["спит", "ест", "смотрит мемы", "смотрит видяшки"];
var randomDoing = doings[Math.floor(Math.random() * 4)];

var times = ["постоянно", "24/7", "супер много", "вечно", "все время"];
var randomTime = times[Math.floor(Math.random() * 5)];

var sentences = "Знаменитый " + randomErnest + " только и делает что " + randomTime + " " +randomDoing + "!!!";
sentences;


/*   #2. Изощренные дразнилки
Усовершенствуйте генератор дразнилок, чтобы он создавал дразнилки такого типа:
«У тебя [часть тела] еще более [прилагательное],чем [часть тела животного] у [животное]».
Подсказка: нужно будет создать еще один массив.   */

var randomBodyParts = ["глаз", "нос", "череп"];
var randomAdjectives = ["вонючий", "унылый", "дурацкий"];
var randomWords = ["мухи", "выдры", "дубины", "мартышкы", "крысы"];

// Выбор случайной части тела из массива randomBodyParts:
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];

// Выбор случайного прилагательного из массива randomAdjectives:
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];

// Выбор случайного слова из массива randomWords:
var randomWord = randomWords[Math.floor(Math.random() * 5)];

// Соединяем случайные строки в предложение:
var randomInsult = "У тебя " + randomBodyPart + " еще более " + randomAdjective + ", чем " + randomBodyPart + " " + randomWord + "!!!";
randomInsult;

/*   #3. Оператор + или join?
Сделайте две версии своего генератора дразнилок: одна пусть
использует для составления дразнилки оператор +, а другая создает массив со словами и соединяет их через пробел с помощью
join. Какой вариант вам больше нравится и почему?   */

var ernestich = ["плюш", "медведыч", "погчампыч"];
var randomErnest = ernestich[Math.floor(Math.random() * 3)];

var doings = ["спит", "ест", "смотрит мемы", "смотрит видяшки"];
var randomDoing = doings[Math.floor(Math.random() * 4)];

var times = ["постоянно", "24/7", "супер много", "вечно", "все время"];
var randomTime = times[Math.floor(Math.random() * 5)];

var sentences = ["Знаменитый", randomErnest, "только", "и", "делает", "что", randomTime, randomDoing + "!!!"];
sentences.join(" ");