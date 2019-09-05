let moreBtn = document.querySelector('.openMore');
let moreClosed = document.querySelector('.moreClosed');
let moreArt = document.querySelector('.articleOne');
let artMore = document.querySelector('.articleMore');

let closeMore = () => {
        artMore.classList.toggle('articleMore2');
};

moreBtn.addEventListener('click', closeMore);