/*jshint esversion: 6 */
let scores = {
    David: 24, 
    Vitya: 6,
    Sanya: 80,
    Lesha: 100,
    Vadim: 23,
    Dima: 18
};

scores.David = 81;
console.log(scores.David);

//

var myCrazyObject = {
    "name": "Нелепый обьект",
    "some array": [7, 9, { purpose: "путаница", number: 123}, 3.3],
    "random animal": "Банановая акула" 
};
console.log(myCrazyObject["some array"][2].number);
