//Upgrades
upgUpgainPrice = 17, upgBreakWallPrice = 200, upgBeginPrice = 1300, upgEndPrice = 3000, upgFinishPrice = 2000000;

function upgUpgain(){
	if (Money - upgUpgainPrice < 0){
	document.getElementById("Warning").innerHTML='Need more money';
	} else {
	Money = Money - upgUpgainPrice;
    Gain = Gain - (Divider - 50);
	}
}

function upgBreakWall(){
	if (Money - upgBreakWallPrice < 0){
	document.getElementById("Warning").innerHTML='Need more money';
	} else {
	Money = Money - upgBreakWallPrice;
    Divide = 0.1;
	}
}

function upgBegin(){
	if (Money - upgBeginPrice < 0){
	document.getElementById("Warning").innerHTML='Need more money';
	} else {
	Money = 0;
    Divide = 0.1;
    Divider = 0.1;
    Gain = 1;
	}
}

function upgEnd(){
	if (Money - upgEndPrice < 0){
	document.getElementById("Warning").innerHTML='Need more money';
	} else {
	Money = 0;
    Divide = 0.1;
    Divider = 0.1;
    Gain = 1;
    Wall = 15000;
	}
}

function upgFinish(){
	if (Money - upgFinishPrice < 0){
	document.getElementById("Warning").innerHTML='Need more money';
	} else {
        Money = 0;
        Gain = 0;
        Divide = 0;
        Divider = 0;
        document.getElementById("beatBut").value='GO AWAY';
        Win = 'block';
	}
}

function upgWhat(){
        document.getElementById("beatBut").value='YOU WIN!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1';
        document.getElementById('What').value='YOU WINNNNNNNNNNNNNNNNNNNNNNN!!!!!!!!!!!!!!!!!!!!!!!';
        document.getElementById("Warning").innerHTML='YOU WINNNNNNNNNNNNNNNNNNNNNNNNnNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN!!111211!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!';
        alert( "YOU WIN" );
    }