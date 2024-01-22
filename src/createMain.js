

const createMain = () => {
    const main = document.createElement('div');
    main.classList = 'main';
    let tempNode = document.createElement('h3');
    tempNode.textContent = "Home";
    main.appendChild(tempNode);
    tempNode = document.createElement('p');
    tempNode.textContent = 'If you ever have any questions about this resturant then feel free to ask, however we would perfer you dont and just eat the food';
    main.appendChild(tempNode);
    return main;
}

export default createMain;