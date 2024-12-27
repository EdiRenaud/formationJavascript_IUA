
var clickme = document.querySelector('#clickme');

/* 
clickme.onclick = function(){
    alert('Vou m\'avez cliqué !');
} 
*/

clickme.addEventListener('click', function(event){
    alert('Vou m\'avez cliqué !');
    var newTexte = "J'ai cliqué sur le lien";
    event.target.innerHTML = newTexte;
    event.preventDefault(); // Empêche le lien de se recharger
});


