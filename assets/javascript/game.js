// when window loads the game will start

window.onload = function () {

    // establishing computer letter array

    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
        "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ];

    // stating displayed variables

    var Wins = 0;

    var Losses = 0;

    var Guesses = 10;

    var Guessed = "";

    // writing variables to html

    document.getElementById("wins").innerHTML = "Wins: " + Wins;
    document.getElementById("losses").innerHTML = "Losses: " + Losses;
    document.getElementById("guesses").innerHTML = "Guesses: " + Guesses;
    document.getElementById("guessed").innerHTML = "Guessed: " + Guessed;

    // setting letter to guess

    var letter = genLetter()

    // functions for game conditionals a set to run after key is pressed

    document.onkeyup = function (event) {

        // converts player letter pick into a string, also when key is pressed Guesses go down

        var input = String.fromCharCode(event.keyCode);
        Guesses--;

        // writes player letter into Guessed letters

        if (Guessed !== "") {
            Guessed = Guessed + ", " + input.toLowerCase();
        } else {
            Guessed = input.toLowerCase();
        }

        // condition for win or lose scenario 

        if (input.toLowerCase() === letter) {
            Wins++;
            Guesses = 10;
            Guessed = "";
            genLetter();
        } else if (Guesses === 0) {
            Losses++;
            Guesses = 10;
            Guessed = "";
            genLetter();
        }

        // rewrites variables to html

        document.getElementById("wins").innerHTML = "Wins: " + Wins;
        document.getElementById("losses").innerHTML = "Losses: " + Losses;
        document.getElementById("guesses").innerHTML = "Guesses: " + Guesses;
        document.getElementById("guessed").innerHTML = "Guessed: " + Guessed;



    }

    // function for computer picking letter

    function genLetter() {
        return letters[Math.floor(Math.random() * letters.length)];
    }


}