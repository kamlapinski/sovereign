let popup = document.querySelector('.popup');
let popupX = document.querySelector('.x1');
let black = document.querySelector('.black');
let outPopup = function() {
    black.style.display='none';
    popup.style.display='none';
};
popupX.addEventListener('click', outPopup);