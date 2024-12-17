(function(){
    var paragraph = document.querySelector('#paragraph');
    var blockote = paragraph.parentNode;

    alert(blockote.nodeType);
    alert(blockote.nodeName);


    alert(para2.firstChild.nodeValue);
    alert(para2.lastChild.innerText);
    alert(para2.childNodes);

    var children = para2.childNodes;

    for(var i = 0; i < children.length; i++){

        if(children[i].nodeType ===1){
            alert(children[i].firstChild.nodeValue);
        }
        else{
            alert(children[i].nodeValue);
        }
    }

    var para2 = document.querySelector('#paragraph2');
    var firstChild  = para2.firstChild;
    var lastChild = para2.lastChild;
    alert(firstChild.nextSibling.nodeName);
    var previous = lastChild.previousSibling;
    alert(previous.nodeType === 1 ? previous.firstChild.data : previous.data);

    var paragraph = document.querySelector('#paragraph');
    var newLink = document.createElement('a');
    var newLinkText = document.createTextNode("Mon lien dynamique");
    newLink.id = 'link';
    newLink.href = 'welcome.html';
    newLink.title = 'Cliquez moi !';
    newLink.appendChild(newLinkText);

    paragraph.appendChild(newLink);

    var blockote = paragraph.parentNode;
    var children = blockote.childNodes;

    alert(children[1]);

    var suppressNode =blockote.removeChild(children[1]);

    var newDiv = document.createElement('div');
    newDiv.id = 'div';
    var newDivText = document.createTextNode("Une nouvelle DIV dynamique");
    newDiv.appendChild(newDivText);

    var paragraph2 = document.querySelector('#paragraph2');
    var parentNode = paragraph2.parentNode;
    parentNode.insertBefore(newDiv, paragraph2);
});









