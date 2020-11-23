//gets cart div where elements are going to be insterted
var src = document.getElementById("cart");
//sets total to 0
var total = 0;
//sets objects in local storage to a variable
var storedNames = JSON.parse(localStorage.getItem("itemList"));

//checks to see if items are stored
if(storedNames != null){
    //loops through each object in the stored names array, and adds a counter i to remember index position
    storedNames.forEach(function (itemObject, i) {
        
        //creating html elements
        var img = document.createElement("img");
        img.src = itemObject.img;
        var item = document.createElement("label");
        item.innerHTML = itemObject.name + " $" + itemObject.cost;
        var but = document.createElement("button");
        but.innerHTML = 'remove';

        //couldn't get interpolation with vanilla js so this works I guess
        var butOnClick = 'removeItem(' + i + ')';
        but.setAttribute('onclick',butOnClick);
    
        //adding html elements to cart div
        src.appendChild(img);
        src.appendChild(item);
        src.appendChild(but);
        src.appendChild(document.createElement("br"));

        //increasing the total cost
        total += itemObject.cost;
        


    });
}

//adding to total cost and showing element on page
var totalLabel = document.createElement("p");
totalLabel.innerHTML = "Total: $"+total;
src.appendChild(totalLabel);

//clears entire item list
function checkOut(){
    localStorage.clear("itemList");
}

//removes item from cart with array index
function removeItem(itemNumber){
    storedNames.splice(itemNumber, 1);
    localStorage.setItem("itemList", JSON.stringify(storedNames));
    //reloads page
    location.reload();
}