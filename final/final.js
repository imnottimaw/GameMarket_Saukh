let itemsDiv = document.getElementById("items")
let itemsArray = [
    {
        firstName: "Анжела",
        lastName: "Лознюк",
        subject: "Українська мова",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/10/photo_2023-10-25_15-46-33-1-693x1024.jpg",
        url: "https://lyceum.ztu.edu.ua/team/loznyuk-anzhela-leonidivna/",
    },
    {
        firstName: "Наталія ",
        lastName: "Зинюк",
        subject: "Хімія, Біологія",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2024/01/zynjuk-natalija-mykolayivna-683x1024.jpg",
        url: "https://lyceum.ztu.edu.ua/team/zynyuk-nataliya-mykolayivna/",
    },
    {
        firstName: "puk",
        lastName: "pik",
        subject: "BAR",
        photo: "FOO",
        url: "STUB",
    },
    {
        firstName: "puk",
        lastName: "pik",
        subject: "BAR",
        photo: "FOO",
        url: "STUB",
    },
    {
        firstName: "puk",
        lastName: "pik",
        subject: "BAR",
        photo: "FOO",
        url: "STUB",
    },
    {
        firstName: "puk",
        lastName: "pik",
        subject: "BAR",
        photo: "FOO",
        url: "STUB",
    },
    {
        firstName: "puk",
        lastName: "pik",
        subject: "BAR",
        photo: "FOO",
        url: "STUB",
    },
    {
        firstName: "puk",
        lastName: "pik",
        subject: "BAR",
        photo: "FOO",
        url: "STUB",
    },
    {
        firstName: "puk",
        lastName: "pik",
        subject: "BAR",
        photo: "FOO",
        url: "STUB",
    },
    {
        firstName: "puk",
        lastName: "pik",
        subject: "BAR",
        photo: "FOO",
        url: "STUB",
    },
    {
        firstName: "puk",
        lastName: "pik",
        subject: "BAR",
        photo: "FOO",
        url: "STUB",
    },
    {
        firstName: "puk",
        lastName: "pik",
        subject: "BAR",
        photo: "FOO",
        url: "STUB",
    }
]

if (itemsDiv){
    console.log("Items container is present")
    itemsArray.forEach((item,index) => {itemsDiv.innerHTML+= `<div class="item"><h2>Teacher ${index+1} out of ${itemsArray.length}</h2><p>${item.firstName} ${item.lastName}</p><p>Предмет: ${item.subject}</p><p><img src="${item.photo}" class = "item-image"></p><p><a href = "${item.url}" target = "_blank" class = "bonus price">Profile</a></p><p><a href = "mailto:${item.email}?subject=Question&body=Good afternoon" target="_blank" class = "price">Write a letter</a></p></div>`})
}
else{
    console.log("Items container is not present")
}