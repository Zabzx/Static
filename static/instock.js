//In stock items
const items = [
    {
        id: `LG '55`,
        type: 'tv',
        brand: 'LG',
        price: '$200',
        image: 'img/items/lg1.jpg'
    },
    {
        id: 'iPhone 11',
        type: 'phone',
        brand: 'Apple',
        price: '$100',
        image: 'img/items/iphone1.png'
    },
    {
        id: 'Microsoft Surface',
        type: 'laptop',
        brand: 'Microsoft',
        price: '$110',
        image: 'img/items/microsoftsurface1.jpg'
    },
    {
        id: 'Asus VivoBook',
        type: 'laptop',
        brand: 'Asus',
        price: '$450',
        image: 'img/items/asus1.jpg'
    },
    {
        id: 'Sony Pulse 3D',
        type: 'headset',
        brand: 'Sony',
        price: '$50',
        image: 'img/items/sony1.jpg'
    },
    {
        id: `TCL '32`,
        type: 'tv',
        brand: 'TCL',
        price: '$500',
        image: 'img/items/tcl2.jpg'
    },
    {
        id: 'Samsung Galaxy Fold Z',
        type: 'phone',
        band: 'Samsung',
        price: '$600',
        image: 'img/items/sphone1.jpg'
    },
    {
        id: `Sony '55`,
        type: 'tv',
        brand: 'Sony',
        image: 'img/items/sonytv1.jpg'
    },
    {
        id: 'Logitech G Pro',
        type: 'headset',
        brand: 'Logitec',
        price: '$45',
        image: 'img/items/logitec1.png'
    }
];
//Filter button selectors
const filterBtns = document.querySelectorAll('.filter-btns button');
const mainGrid = document.querySelector('.instock-grid');


//Events
window.addEventListener('DOMContentLoaded', displayItems(items));

//Functions
function displayItems(instockItems){
    let displayedItems = instockItems.map(item => {
        return ` <div class="grid-item-card">
        <img src="${item.image}" alt="">
        <h1 id="item-title">${item.id}</h1>
        <p id="brand">${item.brand}</p>
        <p id="price">${item.price}</p>
    </div>`
    }).join('');
    mainGrid.innerHTML = displayedItems;
    console.log(mainGrid);
}

//filter
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const type = e.target.dataset.id;
        const filtered = items.filter(item => {
            if(item.type === type){
                return item;
            }
        })
        displayItems(filtered);

        if(type === 'all'){
            displayItems(items);
        }
    })
})