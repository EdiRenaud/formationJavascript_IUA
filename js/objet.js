function Personne(nom, age, sexe, taille, poids){
    this.nom = nom;
    this.age = age;
    this.sexe = sexe;
    this.taille = taille;
    this.poids = poids;

    this.getAge = function(){
        return this.age;
    }
}

var personne = new Personne("John", 26, "Masculin", 185, 85);
alert("Je me nomme "+personne.nom+" J'ai "+personne.getAge()+" an(s)");