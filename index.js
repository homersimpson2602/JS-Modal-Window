const fruits = [
    {id: 1, title: "Яблоки", price: 20, img: "https://m.dom-eda.com/uploads/images/catalog/item/86df51de21/c25c94fe96_1000.jpg"},
    {id: 2, title: "Апельсины", price: 30, img: "https://befreshcorp.net/wp-content/uploads/2017/07/product-packshot-Orange.jpg"},
    {id: 3, title: "Манго", price: 40, img: "https://e0.edimdoma.ru/data/ingredients/0000/1089/1089-ed4_wide.jpg?1482770262"}
    
]

/*
1.Динамически на основе массива вывести список карточек
2. Показать цену в модалке (и это должна быть 1 модалка)
3. Модалка для удаления с 2мя кнопками (удалить, отмена)
-------
4. Если нажали на "Удалить да" удаляем карточку, на основе плагина $.modal 
    нужно сделать другой плагин $.confirm (Promise)
*/

const modal = $.modal({
    title: "Yuri modal",
    closable: true,
    content: `<p> my content with break line <br> in this place</p>`,
    width: "400px",
    footerButtons: [
        {text: "Ok", type: "primary", handler() {
            console.log("Primary btn clicked");
            modal.close();
        }},
        {text: "Cansel", type: "danger", handler() {
            console.log("Danger btn clicked");
            modal.close();
        }}
    ]

});

