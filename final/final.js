let itemsDiv = document.getElementById("items")
let itemsArray = [
    {
        email: "23b_stv@liceum.ztu.edu.ua",
        group: "10-B 2",
        fullName: "Саух Тимофій",
        gameTitle: "Якісь колодязі",
        authorPhoto: "Саух.jpg",
        gamePhoto: "Саух_game.jpg",
        githubRepo: "https://github.com/imnottimaw/Phaser2ndGame",
        githubPages: "https://imnottimaw.github.io/Phaser2ndGame/",
        documentationFolder: "https://drive.google.com/drive/folders/1YvPNGVqCD6BBzWr4azgHLxwar91rtT6H?usp=sharing",
        surveyForm: "https://forms.gle/a58ghZiZdVJfZVLg6",
        gameMarketRepo: "https://github.com/imnottimaw/GameMarket_Saukh",
        gameMarketPages: "https://imnottimaw.github.io/GameMarket_Saukh/",
        marketPages: "https://23a-bam.github.io/GameMarket_Saukh/final/final.html",
        finalGameMarketPage: "https://23a-bam.github.io/GameMarket_Saukh/final/final.html"
    }
]



if (itemsDiv) {
    console.log("Items container is present")
    ///itemsArray.forEach((item,index) => {itemsDiv.innerHTML+= `<div class="item"><h2>Teacher ${index+1} out of ${itemsArray.length}</h2><p>${item.firstName} ${item.lastName}</p><p>Предмет: ${item.subject}</p><p><img src="${item.photo}" class = "item-image"></p><p><a href = "${item.url}" target = "_blank" class = "bonus price">Profile</a></p><p><a href = "mailto:${item.email}?subject=Question&body=Good afternoon" target="_blank" class = "price">Write a letter</a></p></div>`})
    itemsArray.forEach((item, index) => {
        itemsDiv.innerHTML += `            <div class="item">
    <div class="item-title">${item.gameTitle}</div>
    <div class="item-image">
        <img src=img/${item.authorPhoto}>
        <img src=img/${item.gamePhoto}>
    </div>
    <div class="parts-pay">
        <div><img src="img/mono-lapka.png">${item.mono}</div>
        <div><img src="img/pb.png">${item.pb}</div>
    </div>
    <div class="price">
        <div><span>${item.price_standart}</span><sup>грн</sup></div>
        <div><span>${item.price_discount}</span><sup>грн</sup></div>
    </div>
    <div class="price bonus">
        <div>ціна за купоном</div>
        <div><span>${item.price_coupon}</span><sup>грн</sup></div>
    </div>
</div>`})
}
else {
    console.log("Items container is not present")
}