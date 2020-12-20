
var ul = document.getElementById('list');
var li;

var addbutton = document.getElementById('add');
addbutton.addEventListener("click", addfun);


var removebutton = document.getElementById('remove');
removebutton.addEventListener("click", remfun);

var removeAllbutton = document.getElementById('removeall');
removeAllbutton.addEventListener("click", remall);


function addfun() {
    var input = document.getElementById('input');  // creating input tag
    var item = input.value;        // taking value from textbox
    var textnode = document.createTextNode(item); //assigning item to textnode to add todo value inside tag

    if (item === '') {
        return false;
    } else {

        //create li
        li = document.createElement('li');

        //create checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check');


        //create label
        var label = document.createElement('label');
        label.setAttribute('for', 'item') //optional

        //adding these element on web page

        ul.appendChild(label);
        li.appendChild(checkbox);

        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0])// insertBefore(value to insert,position)

        setTimeout(() => {
            li.className = 'visual';
        }, 4)


        input.value = " ";
    }

}


function remfun() {
    li = ul.children;
    for (var index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index]);
        }
    }
    console.log(ul.children);
}


function remall() {
    li = ul.children;
    for (var index = 0; index < li.length; index++) {
        ul.remove(li[index]);
    }
    /* console.log(ul.children); */
}