var quotes = [
    "Be yourself; everyone else is already taken.",
    "So many books, so little time.",
    "A room without books is like a body without a soul.",
    "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    "You only live once, but if you do it right, once is enough.",
    "Be the change that you wish to see in the world.",
    "In three words I can sum up everything I've learned about life: it goes on"
]

var lastNum = 0;
function getNum() {
    var randomNum = Math.floor(Math.random() * quotes.length);
    if (randomNum == lastNum) {
        getNum()
    }
    else {
        lastNum = randomNum;
        document.getElementById("quote").innerHTML = quotes[randomNum];
        console.log(randomNum)
    }
}

