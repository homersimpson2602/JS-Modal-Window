let fruits = [
    {id: 1, title: "Яблоки", price: 20, img: "https://m.dom-eda.com/uploads/images/catalog/item/86df51de21/c25c94fe96_1000.jpg"},
    {id: 2, title: "Апельсины", price: 30, img: "https://befreshcorp.net/wp-content/uploads/2017/07/product-packshot-Orange.jpg"},
    {id: 3, title: "Манго", price: 40, img: "https://e0.edimdoma.ru/data/ingredients/0000/1089/1089-ed4_wide.jpg?1482770262"}
    
]

const toHTML = fruit => `
<div class="col">
<div class="card">
    <img style="height: 300px;"
        src=${fruit.img} alt=${fruit.title}
        class="card-img-top ">
    <div class="card-body">
        <h5 class="card-title">${fruit.title}</h5>
        <a href="" class="btn btn-primary" data-btn="price" data-id="${fruit.id}">Посмотреть цену</a>
        <a href="" class="btn btn-danger" data-btn="remove" data-id="${fruit.id}">Удалить</a>
    </div>
</div>
</div>
`

/*
1.Динамически на основе массива вывести список карточек
2. Показать цену в модалке (и это должна быть 1 модалка)
3. Модалка для удаления с 2мя кнопками (удалить, отмена)
-------
4. Если нажали на "Удалить да" удаляем карточку, на основе плагина $.modal 
    нужно сделать другой плагин $.confirm (Promise)
*/


function render() {
    const html = fruits.map(toHTML).join("");
    document.querySelector("#fruits").innerHTML = html;
}

render();

const priceModal = $.modal({
    title: "Цена на товар",
    closable: true,
    width: "400px",
    footerButtons: [
        {text: "Закрыть", type: "primary", handler() {
            priceModal.close();
        }}
    ]

});


document.addEventListener("click", event => {
    event.preventDefault();
    const btnType = event.target.dataset.btn;
    const id = +event.target.dataset.id;
    const fruit = fruits.find(f  => f.id === id);
    

    if (btnType === "price") {

        priceModal.setContent(`
            <p> Цена на ${fruit.title}: <strong>${fruit.price}$</strong></p>
        `)
        priceModal.open();

        console.log(fruit);
    } else if (btnType === "remove") {
        $.confirm({
            title: "Вы уверены?",
            content: `<p> Вы удаляете фрукт <strong> ${fruit.title} </strong></p>`
        }).then(() => {
            fruits = fruits.filter(f => f.id !== id);
            render();
        }).catch(() => {
            console.log("cansel")
        })
    }
})