$(document).ready(function () {

    // Setting up random values for each jewel = 1-12
    var crystal1 = Math.floor(Math.random() * 11 + 1)
    var crystal2 = Math.floor(Math.random() * 11 + 1)
    var crystal3 = Math.floor(Math.random() * 11 + 1)
    var crystal4 = Math.floor(Math.random() * 11 + 1)

    //  generate random number to match and put it in #div3
    var targetNumber = Math.floor((Math.random() * 101) + 19)
    $('#targetNumber').text(targetNumber);
    console.log("target number", targetNumber);

    //  wins and losses tally keeper for #div4
    var userTotal = 0;
    var wins = 0;
    var losses = 0;
    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);















});