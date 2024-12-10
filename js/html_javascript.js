(function(){
    text = "Variable accessible";

    //alert(window.text);

    var input = document.getElementById("poids");
    //alert(input);

    var inputs = document.getElementsByTagName("input");
    //alert(inputs);

    for(var i=0; i<inputs.length; i++){
        alert("Element n° "+(i+1) + ' : '+inputs[i]);
    }

    var inputsByName = document.getElementsByName("poids");
    alert(inputsByName);

    var query = document.querySelector("#poids");
    query.value="Tout est grace";

    var queries = document.querySelectorAll(".red");
    queries.forEach(item=>{
        item.innerHTML = "Class rouge";
    }) 


    function execute(){
        var btn_rechercher = document.querySelector("#btn_rechercher");
        var class_name = btn_rechercher.className;
        if(class_name == "yellow") {
            btn_rechercher.className = "brown";
            btn_rechercher.innerText = "Valider";
        }
        else {
            btn_rechercher.innerText = "Rechercher";
            btn_rechercher.className = "yellow";
        }
    }


    var input = document.getElementById("poids");
    var link = document.getElementById("lien");
    var link2 = document.querySelector("#lien");

    var valueHref = link2.getAttribute("href");
    var valueHref2 = link2.href;

    link2.className = "yellow";

    alert(link2.className);

    //alert(valueHref2);


    link2.setAttribute("href", "https://www.google.com");

    valueHref2 = link2.href;

    var elementLink = document.querySelector("#idPoids");
    alert(elementLink.innerHTML);

    elementLink.innerHTML += "<div><label class='red' for='poids'>Genre</label>"+
                            "<input radio id='genreM' name='genre' value='M' type='radio'><label for='genreM'>Masculin"+
                            "<input radio id='genreF' name='genre' value='F' type='radio'><label for='genreF'>Feminin</div>";
})


var elementLink = document.querySelector("#lien");
alert(elementLink.innerText);
elementLink.innerText += "Un nouveau text";
elementlink.textContent





                    


