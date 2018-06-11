Money = 0, Seeds = 1, Pain = 0; //Количество денег и семян
var SeedsBuyPrice = 0.1, SeedsSellPrice = 0.12, SeedsSellAmount = 1; //цена покупки, цена продажи, количество за клик
var upgSeedsPrice = 1, upgAmountPrice = 10, upgTiredPrice = 100, upgAmphPrice = 10000, upgFarmPrice = 100000; //цена апгрейдов
var buildGrandsonPrice = 1, buildGranddaughterPrice = 1;  
function sell(){
	if (Seeds - SeedsSellAmount < 0){
	document.getElementById("Warning").innerHTML='Need more seeds';
	} else {
	Seeds = Seeds - SeedsSellAmount;
	Money = Money + SeedsSellPrice;
	document.getElementById("MoneyView").innerHTML='Money: ' + Money.toFixed(2).toLocaleString();
	document.getElementById("SeedsView").innerHTML='Seeds: ' + Seeds.toFixed(0).toLocaleString();
	}
}
function buy(){
	if (Money - SeedsBuyPrice < 0){
	document.getElementById("Warning").innerHTML='Need more money';
	} else {
	Seeds = Seeds + SeedsSellAmount;
	Money = Money - SeedsBuyPrice;
	document.getElementById("MoneyView").innerHTML='Money: ' + Money.toFixed(2).toLocaleString();
	document.getElementById("SeedsView").innerHTML='Seeds: ' + Seeds.toFixed(0).toLocaleString();
	}
}

function upgSeeds(){
	if (Money - upgSeedsPrice < 0){
	document.getElementById("Warning").innerHTML='Need more money';
	} else {
	Money = Money - upgSeedsPrice;
	document.getElementById("MoneyView").innerHTML='Money: ' + Money.toFixed(2).toLocaleString();
	document.getElementById("VendorPrice").innerHTML='Vendor price: ' + SeedsBuyPrice.toFixed(2).toLocaleString();
	SeedsBuyPrice = SeedsBuyPrice / 2;
	document.getElementById("upgSeeds").style.display = "none";
	}
}

function upgAmount(){
	if (Money - upgAmountPrice < 0){
	document.getElementById("Warning").innerHTML='Need more money';
	} else {
	Money = Money - upgAmountPrice;
	document.getElementById("MoneyView").innerHTML='Money: ' + Money.toFixed(2).toLocaleString();
	SeedsSellAmount = SeedsSellAmount * 5;
	document.getElementById("upgAmount").style.display = "none";
	Pain++;
	document.getElementById("PainView").innerHTML='Pain: ' + Pain.toFixed(0).toLocaleString();
	}
}

function buildGrandson(){
	if (Pain - buildGrandsonPrice < 0){
	document.getElementById("Warning").innerHTML='Need more pain';
	} else {
	Pain = Pain - buildGrandsonPrice;
	document.getElementById("PainView").innerHTML='Pain: ' + Pain.toFixed(0).toLocaleString();
	document.getElementById("buildGrandson").style.display = "none";
	var timerId = setInterval(function() {
	if (Money - SeedsBuyPrice < 0){
	document.getElementById("Warning").innerHTML='Need more money';
	} else {
	Seeds = Seeds + SeedsSellAmount;
	Money = Money - SeedsBuyPrice;
	document.getElementById("MoneyView").innerHTML='Money: ' + Money.toFixed(2).toLocaleString();
	document.getElementById("SeedsView").innerHTML='Seeds: ' + Seeds.toFixed(0).toLocaleString();
	}
}, 1000);
	}
}

function upgTired(){
	if (Money - upgTiredPrice < 0){
	document.getElementById("Warning").innerHTML='Need more money';
	} else {
	Money = Money * 3;
	document.getElementById("MoneyView").innerHTML='Money: ' + Money.toFixed(2).toLocaleString();
	document.getElementById("buybut").disabled = true;
	document.getElementById("sellbut").disabled = true;
	document.getElementById("upgTired").style.display = "none";
	Pain++;
	document.getElementById("PainView").innerHTML='Pain: ' + Pain.toFixed(0).toLocaleString();
	document.getElementById("BuyButSweater").style.visibility= "visible";
	document.getElementById("TieButSweater").style.visibility= "visible";
	document.getElementById("SellButSweater").style.visibility= "visible";
	}
}

function buildGranddaughter(){
	if (Pain - buildGranddaughterPrice < 0){
	document.getElementById("Warning").innerHTML='Need more pain';
	} else {
	Pain = Pain - buildGranddaughterPrice;
	document.getElementById("PainView").innerHTML='Pain: ' + Pain.toFixed(0).toLocaleString();
	document.getElementById("buildGranddaughter").style.display = "none";
	var timerId = setInterval(function() {
	if (Seeds - SeedsSellAmount < 0){
	document.getElementById("Warning").innerHTML='Need more seeds';
	} else {
	Seeds = Seeds - SeedsSellAmount;
	Money = Money + SeedsSellPrice;
	document.getElementById("MoneyView").innerHTML='Money: ' + Money.toFixed(2).toLocaleString();
	document.getElementById("SeedsView").innerHTML='Seeds: ' + Seeds.toFixed(0).toLocaleString();
	}
}, 500);
	}
}

function upgAmph(){
	if (Money - upgAmphPrice < 0){
	document.getElementById("Warning").innerHTML='Need more money';
	} else {
	Money = Money - upgAmphPrice;
	document.getElementById("MoneyView").innerHTML='Money: ' + Money.toFixed(2).toLocaleString();
	SeedsSellAmount = SeedsSellAmount * 10;
	SeedsSellPrice = SeedsSellPrice * 1000;
	document.getElementById("upgAmph").style.display = "none";
	}
}