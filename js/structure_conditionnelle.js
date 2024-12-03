
var age = prompt("Veuillez saisir votre age:");
var ageNumber = parseInt(age);

if(ageNumber >= 1 && ageNumber <=17){
    alert("Vous n'êtes pas encore majeur");
}
else if(ageNumber >= 18 && ageNumber <=49){
    alert("Vous êtes majeur mais pas encore senior");
}
else if(ageNumber >= 50 && ageNumber <=59){
    alert("Vous êtes senior mais pas encore retraité");
}
else if(ageNumber >= 60 && ageNumber <=120){
    alert("Vous êtes retraité, profitez de votre temps libre");
}
else{
    alert("Age invalide");
}
