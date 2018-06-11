var Money = 0, Seeds = 1; //Количество денег и семян
var SeedsBuyPrice = 0.1, SeedsSellPrice = 0.12, SeedsSellAmount = 1; //цена покупки, цена продажи, количество за клик
var upgSeedsPrice = 5, upgAmountPrice = 10; //цена апгрейдов
function sell(){
	if (Seeds - SeedsSellAmount < 0){
	document.getElementById("Warning").innerHTML='Need more seeds';
	} else {
	Seeds = Seeds - SeedsSellAmount;
	Money = Money + SeedsSellPrice;
	document.getElementById("MoneyView").innerHTML='Money: ' + Money.toFixed(2).toLocaleString();
	document.getElementById("SeedsView").innerHTML='Seeds: ' + Seeds.toFixed(2).toLocaleString();
	}
}
function buy(){
	if (Money - SeedsBuyPrice < 0){
	document.getElementById("Warning").innerHTML='Need more money';
	} else {
	Seeds = Seeds + SeedsSellAmount;
	Money = Money - SeedsBuyPrice;
	document.getElementById("MoneyView").innerHTML='Money: ' + Money.toFixed(2).toLocaleString();
	document.getElementById("SeedsView").innerHTML='Seeds: ' + Seeds.toFixed(2).toLocaleString();
	}
}

function upgSeeds(){
	if (Money - upgSeedsPrice < 0){
	document.getElementById("Warning").innerHTML='Need more money';
	} else {
	Money = Money - upgSeedsPrice;
	document.getElementById("MoneyView").innerHTML='Money: ' + Money.toFixed(2).toLocaleString();
	document.getElementById("VendorPrice").innerHTML='Average price on the market: ' + SeedsBuyPrice.toFixed(2).toLocaleString();
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
	}
}
