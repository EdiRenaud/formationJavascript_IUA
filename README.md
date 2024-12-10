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
        > 
        1-17 ans => "Vous n'êtes pas encore majeur";
        18-49 ans => "Vous êtes majeur mais pas encore senior";
        50-59 ans => "Vous êtes senior mais pas encore retraité";
        60-120 ans => "Vous êtes retraité, profitez de votre temps libre";


        1. L'utilisateur charge la page Web
        2. Il est ensuite invité à taper son âge dans une fenêtre d'interaction
        3. Une fois l'âge fourni l'utilisateur obtient un petit commentaire

    ----------
    Correction exercice

    ```javascript
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

    ```


    Les structures iteratives (Les boucles)

        - L'incrémentation
        Insctruction utilisée pour ajouter une unité à un nombre au moyen d'une syntaxe courte.

        var number = 0;
        number = number + 1;
        number++;


        - Décrémentation

        Insctruction utilisée pour retirer une unité à un nombre au moyen d'une syntaxe courte.

        var number2 = 10;
        number2 = number2 - 1;
        number2--;


        - L'ordre des opérateurs
        number++;
        ++number;

        number2--;
        --number2;

        - La boucle WHILE
            
            Tant que ....... Faire 
            
            La syntaxe

            while(condition){
                .. Instruction 1;
                .. Instruction 2;
                .. Instruction 3;
            }
        
            Ex1:
                ```javascript
                    var numberI = 1;
                    while(numberI <10){
                        numberI++;
                    }
                    alert(numberI);
                ```
            
            Ex2:
                ```javascript
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
                ```
            - Do While

                Faire ...... Tant que
            
                La syntaxe

                do{
                    Instruction_1..;
                    Instruction_2..;
                    Instruction_3..;
                }
                while(condition);
            
            - La boucle For

                La syntaxe

                for(initialisation; condition; incrementation){
                    Instructions_1..;
                    Instructions_2..;
                    Instructions_3..;
                }

                Ex:

                    ```javascript
                        for(var init=0; init>=10; init++){
                            alert("Iteration n° " + init);
                        }
                    ```
    
    Les fonctions

        Qu'est ce qu'une fonction ?

        L'utilisation des fonctions permet:
        - de simplifier grandement notre code
        - Reduire notre code

        Ex de fonctions natives à Javascript
        
            - alert()
            - prompt()
            - parseInt()
        

        Concevoir des fonctions

        ```javascript
        function nom_fonction(arguments..){
            // Code que la fonction va exécuter
        }
        ```
        De quoi se compose une fonction ?

        - Le mot clé function
        - Le nom de la fonction <<nom_fonction>> (Limité aux caratères alphanumeriques) 
            _ et $
        - Le couple de parenthèses qui contient les arguments
            Les arguments servent à fournir des informations à la fonction
        - Le couple d'accolades


        Nb: Tout le code qui sera ecrit dans notre fonction ne sera exécuté seulement si on appelle la fonction.

        ```javascript
            function maFonction(nom_animal){
                //les instructions de ma fonction
                alert(nom_animal);
            }

            //appel de ma fonction
            maFonction("Chien");
        ```
        

        La portée des variables dans l'utilisation des fonctions

        -- Portée globale

            ```javascript
            var nom_animal = "Chat";
            
            function maFonction(){
                alert(nom_animal);
            }
            //appel de ma fonction
            maFonction();
            ```


        -- Portée locale

            ```javascript
            function ditBonjour(){
                var text = "Hello !";
            }

            ditBonjour();

            alert(text);
            ```
            La variable text sera inaccessible par la fonction alert();

        
        La portée des arguments

            function scope(arg){
                
                // Argument(arg) est initialisé au debut
                
                // Peut être utilisé ici à l'intérieur de notre fonction
                    alert(arg);
                
                // Une fois l'exécution de la fonction est terminée, l'argument (arg) est détruit
            }

            La portée des arguments n'est valable qu'à l'interieur de la fonction

        

        Les Arguments facultatifs

            Scenario 1:

                ```javascript
                function optional(name, color){
                    if(typeof color === 'undefined')
                        color = "";

                    alert(name + ' ' + color);
                }

                optional("David");
                ```
            
            Scenario 2:

                ```javascript
                function optional(name, color=""){
                    alert(name + ' ' + color);
                }

                optional("David");
                ```

        Les valeurs de retour

            L'instruction qui permet de réaliser cela est <<return>>

            ```javascript
                function retourneValeur(valeur){
                    // Instruction 1
                    // Instruction 2
                    return valeur;

                    // Instruction 3 ne sera pas exécuté par la fonction
                    // Instruction 4 ne sera pas exécuté par la fonction
                }

                var resultat = retourneValeur(10); //resultat = 10;
            ```

        
        Les fonctions anonymes

            - Elles sont dites anonymes parcequ'elles n'ont pas de nom
            
            Ex: 
            function(arguments){}

            Ex2:
            
            (function(){
                alert('Blue');
            })();


    Les Tableaux et les Objets littéraux


        C'est quoi un objet ?

            - Un concept, une chose, une idee.
            - Un objet possède une structure qui lui permet de foctionner et d'interagir avec les autres objets.
            - les nombres, les chaines de caratères, les booleens sont des objets.

            var myString = "Hello world";  == new String("Hello world");

            Javascript comporte des objets natifs que sont :

                String = gère les chaines de caratères
                Number = gère les nombres
                Boolean = gère les booleens
                Array = gère les tableaux


        C'est quoi un tableau ?

            - une variable qui contient plusieurs valeurs qu'on appelle [items]
            - Chaque item du tableau est accessible par le biais d'un [indice] == [index] dont la numérotation comme par 0.
            
        La syntaxe
            Le mot clé [var]
                Ex : var montableau;
            Une paire de crochets
                Ex : var montableau = [];
            Les valeurs du tableau sont indiquées à l'intérieur des crochets.
            Ces valeurs sont séparées par des virgules (,).
        
        Accès aux items ou Récupération des valeurs d'un tableau

            Nom de la variable qui est suivie des crochets contenant l'indice == position de l'index
            Ex:
                var myArray2 = ["Sebastien", "Jean", "Pauline", "Christophe"];
                alert(myArray2[0]) ; // Sebastien

        Modifier les valeurs d'un tableau

            Ex:
                var myArray2 = ["Sebastien", "Jean", "Pauline", "Christophe"];
                
                myArray2[0] = "Paul-Esdras";

                alert(myArray2[0]) ; //Paul-Esdras
        
        
        Les Operations sur les tableaux

            Ajouter et Supprimer des items

                Ajouter un element à la fin d'un tableau
                    var newArray = ["Paul", "John"];
                    var otherName = "ludovic";
                    newArray.push(otherName);
                
                Ajouter un element en début du tableau

                    newArray.unshift(otherName);
            
                Supprimer un element dans un tableau

                    var newArray = ["Paul", "John", "Moussa", "Ali", "Kone"];
                    newArray.shift(); // retirer Paul
                    newArray.pop();  // retirer Kone
        
        
        Chaines de caratères et tableaux

            Une chaine de caratères n'est rien d'autre qu'un tableau de caratères

                var chaine = "Tout est grace";
                var tableau = ["T","o","u","t"," ",];

            Convertir une chaine se caratères en tableau

                var chaine = "Tout est grace";
                var tableau = chaine.split(" "); //["Tout", "est", "grace"];

            Convertir un tableau en chaine de caratères

                var newArray = ["Paul", "John", "Moussa", "Ali", "Kone"];
                newArray.join(",");  // Paul, John, Moussa, Ali, Kone
        
        
        Parcourir un tableau

            Parcourir un tableau c'est passer en revue tous ses items un à un pour leur faire subir des mofifications ou exécuter des actions en fonction de leur contenu

            Parmi les structures itératives que nous avons vues, la boucle for est la plus pratique pour parcourir les tableaux.

            var tableau =[];
            for(var i=0; i<tableau.length; i++ ){
                tableau[i];
            }

        

        Les objets littéraux (Personnalisés)

            La syntaxe
                
                var literal = {};

                Ex tableau:

                    var tabPersonne = ['Koffi','Didier',41,'M',187,87];
                    
                Ex: 
                
                    var personne = {
                        nom : 'Koffi',
                        prenom: 'Didier',
                        age : 41,
                        genre: 'M',
                        Taille: 187,
                        poids: 87
                    }

                    personne.nom

    Exercice:

        Enoncé: Reprendre l'exercice ci-dessous en utilisant les tableaux pour stocker les prénoms
        et afficher le contenu du tableau seulement s'il contient des prénoms.
        ça ne servira à rien de l'afficher s'il ne contient rien.


        ```javascript
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
        ```

    Manipuler le code Html avec Javascript
        
        - Comment naviguer entre les noeuds qui composent une page Html


            - Document Object Model (DOM)

                C'est une API (Interface de Programmation d'Application) qui s'utilise sur les documents Html et Xml.
                Son rôle c'est de permettre au javascript d'accéder à notre code XML ou Html.
                
                - L'objet Window (Fenêtre du navigateur)

                    C'est à partir de cet objet que notre Js est exécuté.
                    C'est lui qui contient notre page Html
                    L'objet window apporte des fonctions qui sont dites implicites

                    Ex:

                        alert()  === window.alert()
                        parseInt() === parseFloat() === fonction globale

                - Les variables avec l'objet window

                    Si vous déclarez une variable sans spécifier le mot clé <<var>>, cette variable appartient automatiquement
                    à l'objet window.


                    Ex:
                        (function(){
                            text = "Variable accessible";
                        })();

                        alert(window.text);

                
                - Le document

                    Il represente notre notre page web et plus précisement notre balise HTML

                
                - Accéder aux élements du DOM

                    Notre Object document possède des methodes qui permettent d'accéder aux éléments Html.

                    Ex:
                        - getElementById()
                        - getElementsByTagName()
                        - getElementsByName()

                
                    - getElementById()

                        Elle permet d'accéder à un élément du DOM par le biais de son ID

                    - getElementsByTagName()

                        Elle permet d'accéder aux éléments du DOM par le biais du nom de la balise

                    - getElementsByName()

                        Elle permet d'accéder aux éléments du DOM par le biais de l'attribut nom de la balise

                
                - Accéder aux éléments grâce aux technologies récentes

                    - querySelector()
                    - querySelectorAll()
            

            - Editer les élémements du DOM


                    - L'heritage des proprietes et des methodes

                        Notion d'heritage

                    - Editer Les elements HTML

                        Editer les attributs
                            - via l'objet element

                                - getAttribute(nom_attribut_element)
                                - setAttribute(nom_attribut_element, valeur)
                            
                            - Attributs directement accessibles

                                Ex: href
                            
                            - Classe

                                Ex: className (Accéder et modifier la valeur d'une classe)

                                - element.className
                                - element.className = 'New Class'

                        Editer le contenu

                            - innerHTML (quand on veut recupérer ou modifier du contenu HTML)
                            - innerText (quand on veut recupérer ou modifier un contenu text)
                            - textContent = innerText

                    











                
                




                







        - Manipuler le code html avec notre Javascript

    








        






                    
























        


























    

        

    

 







