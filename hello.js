const oneLinerJoke = require("one-liner-joke");
const cowsay = require("cowsay");
var getRandomJoke = oneLinerJoke.getRandomJoke();
const joke=getRandomJoke.body;
console.log(getRandomJoke. body);
console.log(cowsay.say({
    text : joke,
    e : "oO",
    T : "U "
}));