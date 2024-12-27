var machaine = "Tout est grace";

var regExp = /^grace/;

if(regExp.test(machaine))
{
    alert("La chaine recherchée existe");
}
else{
    alert("La chaine recherchée n'existe pas");
}


///////////////////////////////


/* setTimeout(function(){
    alert("Tout est grace");
}, 2000); */

setInterval(function(){
    alert("Tout est grace")
},3000)