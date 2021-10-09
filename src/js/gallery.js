import cardMenu from  '../templates/menu-card.hbs';
import menuArrey  from'../menu.json'







const cardsMarcup = createMenuCards(menuArrey);
const menuEl = document.querySelector('.js-menu');

function createMenuCards(menuArrey) {
   return cardMenu(menuArrey);
}
menuEl.insertAdjacentHTML('beforeend',cardsMarcup);














