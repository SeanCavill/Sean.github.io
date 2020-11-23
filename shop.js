//checks to see if cart array exists and if it doese't creates it
var cartItems = [];
var storedNames = JSON.parse(localStorage.getItem("itemList"));


if(storedNames != null){
storedNames.forEach(function (itemObject) {
    cartItems.push(itemObject);
});
}

//function to add items to local storage
function AddToCart(itemName, imgLink, price){

    
    //creating item object
    var itemDetails = {name:itemName, img:imgLink, cost:price};
    cartItems.push(itemDetails);
    localStorage.setItem("itemList", JSON.stringify(cartItems));
    var storedNames = JSON.parse(localStorage.getItem("itemList"));

}

