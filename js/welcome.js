//alert("Welcome");

function helloWorld(nom_pays, date="30/11/2024") {
    var returnValue = nom_pays + " " + date;
    alert(returnValue);
}
//helloWorld("France","10/12/2023");

var animal = true;

//alert(typeof(animal));

// Les operateurs arithmetiques : +, - , * , / , %

var number1 = 3, number2 = 5, number3 = 7, number4 = 9, number5 = 10, resultat;

resultat = number1 * number2;


var nombre1 = "3", nombre2 = "5", nombre3 = "7", nombre4 = "9", nombre5 = "10", result;
//result = nombre1 + nombre2;
result = parseInt(nombre1) + parseInt(nombre2);

number1 = number1 + "";



//IMC = poids/Taille²
var imc, poids, taille;

//poids = prompt("Entrez votre poids svp :");
//taille = prompt("Entrez votre taille svp :");

//imc = parseFloat(poids) / (parseFloat(taille) * parseFloat(taille));

//alert("Mon IMC est : "+imc)


/*************Les conditions***/

//Operateurs logiques

var test = true;
//test = !test;

var isChecked = false, conditions;

conditions = !isChecked;

//alert(conditions);

var adult = confirm("Etes vous majeur ?");

/* if(adult==true){
    alert("Vous êtes un adulte");
}
else{
    alert("Vous êtes mineur");
} */

var city = "Abidjan";
var postalCode ="0000";

alert(adult==true ? "Vous etes un adulte" : "Vous etes mineur");


alert(postalCode ? "Vous etes un adulte" : "Vous etes mineur");









