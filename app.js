let searchIcon = document.querySelector('#search');
let searchInput = document.querySelector('.input-container');
let searchClose = document.querySelector('#close');

searchIcon.onclick =function () {
    if (searchInput.style.left = '100%') {
        searchInput.style.left = '0';
        searchIcon.style.display = 'none';
        searchClose.style.display = 'block';
    }
};

searchClose.onclick =function () {
    if (searchInput.style.left = '0') {
        searchInput.style.left = '100%';
        searchIcon.style.display = 'block';
        searchClose.style.display = 'none';
    }
}
































let items = document.querySelector('.s-items');
let item = items.children;
let itemTitle = item.children

for (let i = 0; i < item.length; i++) {
    item[i].onclick = function () {
        for (let i = 0; i < itemTitle.length; i++) {
            console.log(itemTitle[1]);
        }
    }    
}

