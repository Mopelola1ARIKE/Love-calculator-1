var num = prompt("Enter your name");
var num1 = prompt("Enter your spouse name");

function Love(num, num1){
    
    var LoveCalc = Math.round(Math.random() * 101);

    var LoveCal = num + " and " + num1 + " are " + LoveCalc + "% match" ;

    alert(LoveCal);
}

Love(num, num1);