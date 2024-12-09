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
})


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


