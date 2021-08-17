import markup from "./tamplates/markup.hbs"
import menu from "./menu.json"

import './sass/main.scss';
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};


const querySelector = {
    input: document.querySelector('.theme-switch__toggle'),
    body: document.querySelector('body')
};



if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', Theme.LIGHT)
    querySelector.body.className = Theme.LIGHT
    querySelector.input.checked = false
}

if (localStorage.getItem('theme') === Theme.DARK) {
    querySelector.input.checked = true
    querySelector.body.className = Theme.DARK
} else {
    querySelector.input.checked = false
    querySelector.body.className = Theme.LIGHT
}



const a = () => {
    // querySelector.body.classList.toggle(Theme.DARK)
    if (localStorage.getItem('theme') === Theme.LIGHT) {
        console.log(`Ви вибрали ${Theme.DARK}🌑!`);
        localStorage.setItem('theme', Theme.DARK)
        querySelector.body.classList.remove(Theme.LIGHT)
        querySelector.body.classList.add(Theme.DARK)
    }
    else {
        console.log(`Ви вибрали ${Theme.LIGHT}🌞!`);
        localStorage.setItem('theme', Theme.LIGHT)
        querySelector.body.classList.remove(Theme.DARK)
        querySelector.body.classList.add(Theme.LIGHT)
    }
    // localStorage.getItem('theme') === querySelector.body.className || Theme.LIGHT;
}

querySelector.input.addEventListener('change', a);





const galleryRef = document.querySelector(".js-menu");

const markups = markup(menu);
galleryRef.insertAdjacentHTML('beforeend', markups);


