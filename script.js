

// let listOfItems=["Apples","Eggs","Milk","Butter","Bread","Bannanas","Coffee"];

// let selectElement = document.getElementById("selectElement");


// listOfItems.forEach((item)=>{

//     const btn = document.createElement("button");
//     btn.classList.add("btn-outline-primary");
//     btn.classList.add("btn");
//     btn.innerText = item;
//     selectElement.append(btn);

// })


// function addToCart(){
//     let shoppingItem =  document.getElementById();
// }

let listOfItems = [
    {
        itemName: "Apples",
        price: 1.20
    },
    {
        itemName: "Eggs",
        price: 2.50
    },
    {
        itemName: "Milk",
        price: 4.89
    },
    {
        itemName: "Butter",
        price: 0.87
    },
    {
        itemName: "Bread",
        price: 3.54
    },
    {
        itemName: "Bannanas",
        price: 0.99
    },
    {
        itemName: "Coffee",
        price: 5.43
    },
]
//   for (i = 0; i < listOfItems.length; i++){
//             console.log(listOfItems[i].itemName);
//   }  

let selectElement = document.getElementById("groceryList");

let checkOutList = [];

var groceryList = document.getElementById("groceryList");

var receiptDiv = document.getElementById("prices");
let grandTotal = 0;

listOfItems.forEach((item) => {

    const option = document.createElement("option");
    option.classList.add("btn-outline-primary");
    option.classList.add("btn");
    // option.addEventListener("click", addToCart);
    option.innerText = item.itemName;
    selectElement.append(option);

})


function addToCart() {
    // var text = groceryList.options[groceryList.selectedIndex].text;
    var item = groceryList.options[groceryList.selectedIndex].text;
    let selectedItem = listOfItems[groceryList.selectedIndex];
    checkOutList.push(selectedItem);
    console.log(selectedItem);
    let newItemAdded = document.createElement("p");
    newItemAdded.innerText = selectedItem.itemName + " | $" + selectedItem.price;
    receiptDiv.appendChild(newItemAdded);
    let grandTotalTag =document.getElementById("grandTotal");
    grandTotal += selectedItem.price;
    grandTotalTag.innerText = grandTotal;




}














