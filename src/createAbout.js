

const createAbout = () => {
    const about = document.createElement('div');
    about.classList = 'about'

    about.appendChild(Object.assign(document.createElement('h3'), {textContent: 'About'}));
    about.appendChild(Object.assign(document.createElement('p'), {textContent: 'This is the best place you will ever eat at in your life. We have 4 great options that will never get old so dont complain about that. The best thing about this place is how awsome you will feel after eating here. Dont get to addicted'}));

    return about;
}

export default createAbout;