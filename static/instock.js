//In stock items
const items = [
    {
        id: `LG '55`,
        type: 'tv',
        brand: 'LG',
        price: '$1800',
        image: 'img/items/lg1.jpg'
    },
    {
        id: 'iPhone 11',
        type: 'phone',
        brand: 'Apple',
        price: '$900',
        image: 'img/items/iphone1.png'
    },
    {
        id: 'Microsoft Surface',
        type: 'laptop',
        brand: 'Microsoft',
        price: '$600',
        image: 'img/items/microsoftsurface1.jpg'
    },
    {
        id: 'Asus VivoBook',
        type: 'laptop',
        brand: 'Asus',
        price: '$550',
        image: 'img/items/asus1.jpg'
    },
    {
        id: 'Sony Pulse 3D',
        type: 'headset',
        brand: 'Sony',
        price: '$60',
        image: 'img/items/sony1.jpg'
    },
    {
        id: `TCL '32`,
        type: 'tv',
        brand: 'TCL',
        price: '$1200',
        image: 'img/items/tcl2.jpg'
    },
    {
        id: 'Samsung Galaxy Fold Z',
        type: 'phone',
        brand: 'Samsung',
        price: '$1100',
        image: 'img/items/sphone1.jpg'
    },
    {
        id: `Sony '55`,
        type: 'tv',
        brand: 'Sony',
        image: 'img/items/sonytv1.jpg',
        price: '$2000'
    },
    {
        id: 'Logitech G Pro',
        type: 'headset',
        brand: 'Logitec',
        price: '$45',
        image: 'img/items/logitec1.png'
    },
    {
        id: 'Acer Swift',
        type: 'laptop',
        brand: 'Acer',
        price: '$500',
        image: 'img/items/acer-swift.png'
    },
    {
        id: 'Dell XPS',
        brand: 'Dell',
        type: 'laptop',
        price: '$900',
        image:'img/items/dell-xps.jpg'
    },
    {
        id: 'HP Pavillion',
        brand: 'HP',
        type: 'laptop',
        price: '$600',
        image: 'img/items/hp-pavillion.jpg'
    },
    {
        id: 'iPhone 13',
        brand: 'Apple',
        type: 'phone',
        price: '$1300',
        image: 'img/items/iphone-13.png'
    },
    {
        id: 'Pixel 5a',
        brand: 'Google',
        type: 'phone',
        price: '$800',
        image: 'img/items/pixel-5a.jpg'
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
        <p id="price"> Price: ${item.price}</p>
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

//Navbar
const html = document.querySelector('html');
const burger = document.querySelector('.burger');
const burgerLines = document.querySelectorAll('.burger div')
console.log(burgerLines)
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');

    if (navLinks.classList.contains('nav-active')) {
        burgerLines.forEach((line) => {
            line.style.backgroundColor = 'white';
        });
        html.style.overflow = 'hidden';
    } else {
        burgerLines.forEach((line) => {
            line.style.backgroundColor = '#01A0C2';
        })
        html.style.overflow = 'auto';
    }
});
