
// Incrémentation
var number = 0;
number = number + 1;
number++;

// Décrementation
var number2 = 10;
number2 = number2 - 1;
number2--;

// Ordre des opérateurs

var number_1 = 0;
var number_2 = 0;

var output = ++number_1;  //1
var output2 = number_1++;

//alert(number_1); //1
//alert(output2); //0

number_1++;
++number_2;

//alert(number_1);
//alert(number_2);

// Boucle While

/* var numberI = 1;
while(numberI <10){
    numberI++;
}

alert(numberI); */


var prenoms = '', prenom, temoin = true;

while(temoin){

    prenom = prompt("Entrez un prénom svp !");

    if(prenom){
        prenoms += prenom + " ";
    }
    else{
        temoin = false;
    }
}

alert(prenoms);





