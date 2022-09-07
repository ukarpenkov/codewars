function century(year) {
    let a = year / 100
    let century = Math.ceil(a)
    return century
}


century(1705) //18
century(2000) //20
century(789) //20
century(89)  //1

var cardsData = [
    {
        inStock: true,
        imgUrl: 'gllacy/choco.jpg',
        text: 'Сливочно-кофейное с кусочками шоколада',
        price: 310,
        isHit: true,
        specialOffer: 'Двойная порция сиропа бесплатно!'
    },
    {
        inStock: false,
        imgUrl: 'gllacy/lemon.jpg',
        text: 'Сливочно-лимонное с карамельной присыпкой',
        price: 125,
        isHit: false
    },
    {
        inStock: true,
        imgUrl: 'gllacy/cowberry.jpg',
        text: 'Сливочное с брусничным джемом',
        price: 170,
        isHit: false
    },
    {
        inStock: true,
        imgUrl: 'gllacy/cookie.jpg',
        text: 'Сливочное с кусочками печенья',
        price: 250,
        isHit: false
    },
    {
        inStock: true,
        imgUrl: 'gllacy/creme-brulee.jpg',
        text: 'Сливочное крем-брюле',
        price: 190,
        isHit: false
    }
];

var makeElement = function (tagName, className, text) {
    var element = document.createElement(tagName);
    element.classList.add(className);
    if (text) {
        element.textContent = text;
    }
    return element;
};

var createCard = function (product) {
    var listItem = makeElement('li', 'good')
    var title = makeElement('li', 'good__description', product.text)
    listItem.appendChild(title)
    var picture = makeElement('img', 'good__image')
    picture.src = product.imgUrl
    picture.alt = product.text
    listItem.appendChild(picture)

    var price = makeElement('p', 'good__price', product.price + '₽/кг');
    listItem.appendChild(price);

    var availabilityClass = 'good--available';
    if (!product.inStock) {
        availabilityClass = 'good--unavailable';
    }
    listItem.classList.add(availabilityClass);

    if (product.isHit) {
        listItem.classList.add('good--hit');
        var specialOffer = makeElement('p', 'good__special-offer', product.specialOffer);
        listItem.appendChild(specialOffer);
    }

    return listItem;

}

var cardList = document.querySelector('.goods')

var renderCards = function (dataArray) {

    for (var i = 0; i < dataArray.length; i++) {
        var cardItem = createCard(dataArray[i]);
        cardList.appendChild(cardItem);
    }
}
renderCards(cardsData)