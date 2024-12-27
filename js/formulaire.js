var fieldText = document.querySelector('#text');
var button = document.querySelector('#button');

fieldText.addEventListener('focus', function(event){
    event.target.value = "Vous avez le focus !";
    //event.target.readonly = true;
    event.target.disabled = false;
}, true);

fieldText.addEventListener('blur', function(event){
    event.target.value = "Vous n'avez plus le focus !";
    event.target.disabled = true;
    //event.target.readonly = false;
}, true);


button.addEventListener('click', function(event){
    var checkboxes = document.getElementsByName('check');
    
    for( var i=0; i<checkboxes.length; i++){
        if(checkboxes[i].checked)
            alert("La case cochée est la numéro "+checkboxes[i].value);
    }
})





