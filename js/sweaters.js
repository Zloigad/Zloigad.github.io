var wool = 0, sweaters = 0;
var woolBuyPrice = 50, sweatersSellPrice = 560, BuyAmount = 1, TieAmount = 5;

function BuyWool(){
	if (Money - woolBuyPrice < 0){
	document.getElementById("Warning").innerHTML='Need more money';
	} else {
	wool = wool + BuyAmount;
	Money = Money - woolBuyPrice;
	document.getElementById("MoneyView").innerHTML='Money: ' + Money.toFixed(2).toLocaleString();
	document.getElementById("WoolView").innerHTML='Wool: ' + wool.toFixed(0).toLocaleString();
	}
}

function Tie(){
	if (wool - TieAmount < 0){
	document.getElementById("Warning").innerHTML='Need more wool';
	} else {
	wool = wool - TieAmount;
	sweaters = sweaters + 1;
	document.getElementById("SweatersView").innerHTML='Sweaters: ' + sweaters.toFixed(2).toLocaleString();
	document.getElementById("WoolView").innerHTML='Wool: ' + wool.toFixed(0).toLocaleString();
	}
}

function SellSweater(){
	if (sweaters - 1 < 0){
	document.getElementById("Warning").innerHTML='Need more sweaters';
	} else {
	sweaters = sweaters - 1;
	Money = Money + sweatersSellPrice;
	document.getElementById("SweatersView").innerHTML='Sweaters: ' + sweaters.toFixed(2).toLocaleString();
	document.getElementById("MoneyView").innerHTML='Money: ' + Money.toFixed(0).toLocaleString();
	}
}