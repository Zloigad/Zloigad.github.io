//Player attributes
Money = 0; Win = "none";

//Money gain formula
Divider = 1;
Gain = 1;
Divide = 0.5;
Wall = 15;

//Updates
var timerId = setInterval(function() {
    document.getElementById("MoneyView").innerHTML='Money: ' + Money.toFixed(2).toLocaleString();
    document.getElementById('What').style.display= Win; 
}, 200);

//Click Mechanic
function beat(){
    Money = Money + Gain;
    Win = 'none';
    document.getElementById('What').style.display='none';
    if (Money > Wall){
        Divider = Divider + Divide;
        Gain = Gain / Divider; 
        console.log(Divider);        
    } 
}

