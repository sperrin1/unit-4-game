$(document).ready(function () {

    // Setting up random values for each jewel = 1-12
    var crystal1 = Math.floor(Math.random() * 11 + 1)
    var crystal2 = Math.floor(Math.random() * 11 + 1)
    var crystal3 = Math.floor(Math.random() * 11 + 1)
    var crystal4 = Math.floor(Math.random() * 11 + 1)

    //  generate random number to match and put it in #div3
    var targetNumber = Math.floor((Math.random() * 101) + 19)
    $('#targetNumber').text(targetNumber);
    // console.log("target number", targetNumber);

    //  wins and losses tally keeper for #div4
    var wins = 0;
    var losses = 0;
    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);

    var playerTotal = 0;
    $('#playerTotal').text(playerTotal);

    //resets the game
    function reset() {
        targetNumber = Math.floor(Math.random() * 101 + 19);
        // console.log(targetNumber)
        $('#randomNumber').text(targetNumber);
        num1 = Math.floor(Math.random() * 11 + 1);
        num2 = Math.floor(Math.random() * 11 + 1);
        num3 = Math.floor(Math.random() * 11 + 1);
        num4 = Math.floor(Math.random() * 11 + 1);
        playerTotal = 0;
        $('#playerScore').text(playerTotal);
    }
    //adds the wins to the playerTotal
    function winna() {
        alert("You won!");
        wins++;
        $('#numberWins').text(wins);
        reset();
    }
    //addes the losses to the playerTotal
    function loser() {
        alert("You lose!");
        losses++;
        $('#numberLosses').text(losses);
        reset()
    }

    //functions for jewel buttons
    $('#crystal1').on('click', function () {
        playerTotal = playerTotal + crystal1;
        // console.log("New playerTotal= " + playerTotal);
        $('#playerScore').text(playerTotal);
        //sets win/lose conditions
        if (playerTotal == targetNumber) {
            winna();
        }
        else if (playerTotal > targetNumber) {
            loser();
        }
    })
    $('#crystal2').on('click', function () {
        playerTotal = playerTotal + crystal2;
        // console.log("New playerTotal= " + playerTotal);
        $('#playerScore').text(playerTotal);
        //sets win/lose conditions
        if (playerTotal == targetNumber) {
            winna();
        }
        else if (playerTotal > targetNumber) {
            loser();
        }
    })
    $('#crystal3').on('click', function () {
        playerTotal = playerTotal + crystal3;
        // console.log("New playerTotal= " + playerTotal);
        $('#playerScore').text(playerTotal);
        //sets win/lose conditions
        if (playerTotal == targetNumber) {
            winna();
        }
        else if (playerTotal > targetNumber) {
            loser();
        }
    })
    $('#crystal4').on('click', function () {
        playerTotal = playerTotal + crystal4;
        // console.log("New playerTotal= " + playerTotal);
        $('#playerScore').text(playerTotal);
        //sets win/lose conditions
        if (playerTotal == targetNumber) {
            winna();
        }
        else if (playerTotal > targetNumber) {
            loser();
        }
    });















});