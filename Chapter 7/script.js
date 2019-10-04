var words = [
    "программа",
    "макака",
    "прекрасный",
    "оладушек",
    "погчамп",
    "плюшевый",
    "ведмедык",
    "армян"
]

var word = words[Math.floor(Math.random() * words.length)]

answerArray = []
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_"
}

var remainingLetters = word.length

var chances = 10

while ((remainingLetters > 0)  && (chances > 0)) {
    alert(answerArray.join(" "))
    var guess = prompt("Угадайте букву или нажмите <Отмена> для выхода из игры.").toLocaleLowerCase()  
    if (guess === null) {
        break
    } else if (guess.length !== 1) {
        alert("Пожалуйста введите только одну букву.")
    } else {
        chances --
        alert("У вас осталось " + chances + " попыток") 
        if ( chances === 0) {
        alert("У вас не осталось попыток! К сожалению вы приграли!")
        break
        } else {
        }
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess
                remainingLetters--
                alert(answerArray.join(" "))
                alert("Отлично! Было загадано слово " + word)                
            }
        }
    }
}



