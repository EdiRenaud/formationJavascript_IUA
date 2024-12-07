var anonymous = function(){
    var myString = "Hello, world!";

    //alert(myString.length); // 13  Taille de l'objet
    //alert(myString.toUpperCase()); // HELLO, WORLD!

    var myArray1 = []; // new Array()
    var myArray2 = ["Sebastien", "Jean", "Pauline", "Christophe"]; // new Array("Sebastien", "Jean", "Pauline", "Christophe");

    alert(myArray2[0]);  //Sebastien


    //Modifier les valeurs d'un tableau
                        
    myArray2[0] = "Paul-Esdras";
    alert(myArray2[0]) ; //Paul-Esdras


    // Push et UnShift
    var newArray = ["Paul", "John"];
    var otherName = "Ludovic";

    newArray.push(otherName);
    alert(newArray); // ["Paul", "John", "Ludovic"]

    newArray.unshift(otherName); // ["Ludovic", "Paul", "John"]



    // Shift et Pop
    var newArray = ["Paul", "John", "Moussa", "Ali", "Kone"];
    newArray.shift(); // retirer Paul
    newArray.pop();  // retirer Kone

    alert(newArray);

    //Join
    var joinArray = ["Paul", "John", "Moussa", "Ali", "Kone"];
    alert(joinArray.join(",")); // Paul, John, Moussa, Ali, Kone
}


//Objet litéraux

var personne = {
    nom : 'Koffi',
    prenom: 'Didier',
    age : 41,
    genre: 'M',
    Taille: 187,
    poids: 87
}

alert(personne.nom); //Koffi
alert(personne.prenom); //Didier
alert(personne['Taille']) //187

//Ajouter une nouvelle propriété

personne.adresse = "12 rue de la République";
alert(personne.adresse); //12 rue de la République

personne['contacts'] = "0102890123";

alert(personne.contacts); //0102890123


function getCoordonnees(longitude, latitude){
    
    return { long: longitude, lat: latitude}
}

var coordonnees = getCoordonnees(48.866667, 2.333333);
longitude = coordonnees.long;
latitude = coordonnees.lat;

alert(longitude);
alert(latitude);










