import createMain from './createMain';
import createMenu from './createMenu';
import createAbout from './createAbout';
import Logo from './logo.png';
import './styles.css';

const page = document.querySelector('div');
page.classList = 'page';

const header = document.createElement('div');
header.classList = 'header';


const title = document.createElement('div');
title.classList = 'title';
let tempNode = document.createElement('img');
tempNode.src = Logo;
title.appendChild(tempNode);
tempNode = document.createElement('h1');
tempNode.classList = 'restaurant-name';
tempNode.textContent = 'The Best';
title.appendChild(tempNode);
header.appendChild(title);

const tabs = document.createElement('div');
tabs.classList = 'tabs';
tabs.appendChild(Object.assign(document.createElement('div'), {classList: 'tab tab1', textContent: 'Main Page'}));
tabs.appendChild(Object.assign(document.createElement('div'), {classList: 'tab tab2', textContent: 'Menu'}));
tabs.appendChild(Object.assign(document.createElement('div'), {classList: 'tab tab3', textContent: 'About'}));
header.appendChild(tabs);

page.appendChild(header);

const content = document.createElement('div');
content.classList = 'content';
content.appendChild(createMain());

page.appendChild(content);

const mainPageTab = document.querySelector('div.tab1');
const MenuTab = document.querySelector('div.tab2');
const AboutTab = document.querySelector('div.tab3');

mainPageTab.addEventListener('click', () => {
    mainPageTab.classList = 'tab tab1 active';
    MenuTab.classList = 'tab tab2';
    AboutTab.classList = 'tab tab3';
    content.innerHTML = '';
    content.appendChild(createMain());
})

MenuTab.addEventListener('click', () => {
    mainPageTab.classList = 'tab tab1';
    MenuTab.classList = 'tab tab2 active';
    AboutTab.classList = 'tab tab3';
    content.innerHTML = '';
    content.appendChild(createMenu());
})

AboutTab.addEventListener('click', () => {
    mainPageTab.classList = 'tab tab1';
    MenuTab.classList = 'tab tab2';
    AboutTab.classList = 'tab tab3 active';
    content.innerHTML = '';
    content.appendChild(createAbout());
})