// for (let x = 3; x < 10000; x = x * 3) {
//     console.log(x)
// }


// let x = 3 
// while (x < 1000) {
//     x = x * 3
//     console.log (x)
// }


/*  #1
var animals = ["Кот", "Рыба", "Лемур", "Комодский варан"]
    for (let i = 0; i < animals.length;  i++) {
        animals[i]  =  animals[i] + " - прекрасное животное"
        console.log( animals)
    }


    #2
var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";

var randomString = "";
    while (randomString.length < 6) {
      randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
}

console.log(randomString)


    #3 */
var input = "javascript is awesome";
var output = "";

for (i = 0; i < input.length; i++) {
    let item = input[i]
    if (item === "a") {
        output += 4 
    } else if (item === "e") {
        output += 3
    } else if (item === "i") {
        output += 1 
    } else if (item === "o") {
        output += 0
    } else {
        output += item
    }
}

console.log(output)