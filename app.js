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