var blueDiv = document.querySelector('#blueDiv');
var myDiv = document.querySelector('#myDiv');
blueDiv.addEventListener('mouseover',function(event){
    event.target.style.color = 'red';
});

blueDiv.addEventListener('mouseout',function(event){
    event.target.style.color = 'blue';
});

myDiv.addEventListener('click', function(event){

    var myclassname = event.target.className;

    if(myclassname == 'yellow'){
        event.target.className = 'brown';
        event.target.innerHTML = "Je suis une classe BROWN";
    }
    else{
        event.target.className = 'yellow';
        event.target.innerHTML = "Je suis une classe YELLOW"
    }
    
});