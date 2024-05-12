let itemsDiv = document.getElementById("items")
let itemsArray = ['Газонокосарка 121','Тример 122','Електрична газонокосарка 125','Електричний тример 111']

if (itemsDiv){
    console.log("Items container is present")
    itemsArray.forEach((item,index) => {itemsDiv.innerHTML+= `<div class="item"><h2>Item ${index+1} out of ${itemsArray.length}</h2><p>${item}</p></div>`})
}
else{
    console.log("Items container is not present")
}