function req(url) {
    return fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.log(error);
        });
}

let response;
window.addEventListener('load', async () => {
    const URL = 'https://odinkeane.github.io/web-developer/data.json';
    response = await req(URL);
    showProducts(response);
})

const products = document.querySelector('.products');

function showProducts(response) {
    for (let res in response) {
        products.innerHTML += `
        <figure class="product">
            <img src="${response[res].imageURL}" alt="">
            <figcaption>
                <h3>${response[res].name}</h3>
                <p class="product-id">Артикул ${response[res].id}</p>
                <p class="product-price">${response[res].price * 90} ₽</p>
            </figcaption>
        </figure>
        `;
    }
}

function sorted(element) {

    if (element.value == "cheap") {
        cheapSort();
    }
    if (element.value == "expensive"){
        expensiveSort();
    }
}

function cheapSort() {
    products.innerHTML = "";
    let arrayProducts = [];
    for (let res in response) {
        arrayProducts.push(response[res]);
    }
    for (let j = 0; j < arrayProducts.length - 1; j++) {
        for (let i = 0; i < arrayProducts.length - 1; i++) {
            if (arrayProducts[i].price > arrayProducts[i + 1].price) {
                const temp = arrayProducts[i];
                arrayProducts[i] = arrayProducts[i + 1];
                arrayProducts[i + 1] = temp;
            }
        }
    }
    showProducts(arrayProducts);
}

function expensiveSort() {
    products.innerHTML = "";
    let arrayProducts = [];
    for (let res in response) {
        arrayProducts.push(response[res]);
    }
    for (let j = 0; j < arrayProducts.length - 1; j++) {
        for (let i = 0; i < arrayProducts.length - 1; i++) {
            if (arrayProducts[i].price < arrayProducts[i + 1].price) {
                const temp = arrayProducts[i];
                arrayProducts[i] = arrayProducts[i + 1];
                arrayProducts[i + 1] = temp;
            }
        }
    }
    showProducts(arrayProducts);
}

