import burgerPic from './burger-Pic.jpeg';
import pizzaPic from './classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg';
import tacoPic from './tacos.png';
import steakPic from './steak-n-cheese.jpeg';

const createMenuItem = (food, img, discription, price) => {
    const menuItem = document.createElement('div');
    menuItem.classList = 'menu-item';

    menuItem.appendChild(Object.assign(document.createElement('img'), {src: img}));
    menuItem.appendChild(Object.assign(document.createElement('p'), {classList: 'food-name', textContent: food}));
    menuItem.appendChild(Object.assign(document.createElement('p'), {textContent: discription}));
    menuItem.appendChild(Object.assign(document.createElement('p'), {classList: 'price', textContent: price}));

    return menuItem;
}

const createMenu = () => {
    const menu = document.createElement('div');
    menu.classList = 'menu';
    menu.appendChild(Object.assign(document.createElement('h3'), {textContent: 'Menu'}));
    const menuItems = document.createElement('div');
    menuItems.classList = 'menu-items';
    menuItems.appendChild(createMenuItem('Burger', burgerPic, 'All america 100% beef burger with your choice of toppings', '$10.99'));
    menuItems.appendChild(createMenuItem('Pizza', pizzaPic, 'Very itallian pizza with the best toppings of you chosing', '$16.99'));
    menuItems.appendChild(createMenuItem('Tacos', tacoPic, 'Best tacos in the area with 100% beef and the best toppings', '$8.99'));
    menuItems.appendChild(createMenuItem('Steak n Cheese', steakPic, 'Steak n cheese with onions, lettus and mayo will make you fell great after', '$12.99'));
    menu.appendChild(menuItems);
    return menu;
}

export default createMenu;