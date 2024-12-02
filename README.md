# Formation Javascript & Framework Associés IUA

**Les bases du javascript**

- Qu'est-ce que le Javascript

    Les particularité du langage Javascript
    - Sa syntaxe
    - Son modèle objet.

    Langage de programmation de script qui est orienté Objet.

    * Langage de programmation
    * Programmer un script, c'est quoi ?
        - Scripts compilés
        - Scripts précompilés
        - Scripts interpretés
    * Langage orienté objet, c'est quoi ?

- Les versions du Javascript

    Organisme de standardisation du Javascript ECMAScript
    ES1
    ES2
    ES3
    ES4
    ES5
    ES6

- Premiers pas avec Javascript
    Afficher une alerte #Welcome# -- voir fichier welcome.html
    ``<script>alert("Welcome");</script>``

    La syntaxe du Javascript

        instruction_1;
        instruction_2;
        instruction_3;
    
    Les commentaires
        // commentaire monoligne
        /* commentaire multiligne*/
    
    Les fonctions se compose de:
        - nom
        - Un couple de parenthèses ()
        - Les paramètres 

        Ex: Si on prend la fonction alert("Welcome")
            nom = alert
            paramètre = "Welcome";
        
        Ex: une fonction personalisée
            #function# qui est toujours présente qui permet de déclarer une fonction
            nom = helloWorld
            paramètres: nom_pays, date

            helloWorld(nom_pays, date)
    
        Les paramètres optionnels

            ```  <script>
                    function helloWorld(nom_pays, date="30/11/2024") {
                        var returnValue = nom_pays + " " + date;
                        alert(returnValue);
                    }            
                    helloWorld("France","10/12/2023");
                </script>
            ```
    Les variables

        Qu'est ce que c'est qu'une variable ?

            Espace de stockage sur mon ordinateur
        
        Comment déclarer une variable ?

            C'est réserver un espace de stockage sur mon ordinateur
            Une variable a un nom composé de caratères alphanumeriques

            Ex: var maVariable123; var maVariable; var animal; var ecole;
                var 123mavariable #A proscrire#
        
        Comment affecter une valeur à une variable ?

            var animal = "Panthère";
        

        Les types de variable

            Ex avec JAVA : String animal = "Panthère";
            
            Pour verifier le type d'une variable 
            Pour verifier l'existence d'une variable
                typeof(nom_variable)

            String = chaine de caractère
            Number = Nombre
            Boolean = Booleen True/False
        

    Les opérateurs arithmetiques

        Les operateurs arithmetiques : +, - , * , / , %

        var number1 = 3, number2 = 5, number3 = 7, number4 = 9, number5 = 10, resultat;
        
        resultat = number1 * number2;

        var nombre1 = "3", nombre2 = "5", nombre3 = "7", nombre4 = "9", nombre5 = "10", result;

        result = nombre1 + nombre2;


        Simplifions les calculs 

        var nb1 = 3;
        var result = nb1 + 5 ;
        nb1 = result;

        var chiffre = 3;
        chiffre = chiffre + 5;

        var chiffre1 = 3;
        chiffre1 += 5;

    
    Conversion des types

        var nombre1 = "3", nombre2 = "5", nombre3 = "7", nombre4 = "9", nombre5 = "10", result;

        result = parseInt(nombre1) + parseInt(nombre2);

        parseInt(); parseFloat();



    Les Conditions

        La base de toutes conditions c'est les booléens. (Vrai/Faux)
        Les conditions utilisent Les opérateurs de comparaison

        Opérateurs de comparaison :

        ==
        != 
        ===  ("2" === "2") True
        !==  (2 !== "2") True
        > 
        <
        >=
        <=

        Opérateurs logiques

        && => Et
        || => Ou
        !  => Non 


    Les structures conditionnelles

    If .. Else ...

    ```Javascript
    
        if conditions alors
        sinon fais ceci

        if(condition) 
        {
        Instructions ... 
        }
        else{
            Instructions par défaut
        }
    ```

    Switch 

    ```Javascript
    
       var data;
        switch(data)
        {
            case 1: 
                //TODO:
                break;
            case 2: 
                //TODO:
                break;
            default: 
                //TODO:
        }
    ```

    Instructions Ternaires

    Ex : 
    ```Javascript
    
        var adult = confirm("Êtes vous majeur ?");
        var text = adult ? "Vous etes un adulte" : "Vous etes mineur";
        alert(text);
    ```




Exercice :

----------
1-17 ans => "Vous n'êtes pas encore majeur";
18-49 ans => "Vous êtes majeur mais pas encore senior";
50-59 ans => "Vous êtes senior mais pas encore retraité";
60-120 ans => "Vous êtes retraité, profitez de votre temps libre";

    1. L'utilisateur charge la page Web
    2. Il est ensuite invité à taper son âge dans une fenêtre d'interaction
    3. Une fois l'âge fourni l'utilisateur obtient un petit commentaire








    

        

    

 







