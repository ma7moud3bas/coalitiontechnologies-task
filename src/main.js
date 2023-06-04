import './index.css'
import '@splidejs/splide/css';
import Splide from '@splidejs/splide';
import { doc } from 'prettier';

new Splide('.splide', {
    type: 'loop',
    breakpoints: {
        640: {
            perPage: 1,
            perMove: 1,
        },
        768: {
            perPage: 2,
            perMove: 2,
        },
        1024: {
            perPage: 3,
            perMove: 3,
        },
        1280: {
            perPage: 4,
            perMove: 4,
        }
    },
    perPage: 4,
    perMove: 4,
    autoplay: true,
    gap: "1rem",
    fixedHeight: "135px",
    pagination: true,
    classes: {
        pagination: 'splide__pagination [bottom:-1.5rem_!important;]',
        page: 'splide__pagination__page !bg-white',
    },
    arrows: false,
}).mount();


const tabButtonsContainer = document.getElementById("tab-buttons");

const tabButtons = tabButtonsContainer.querySelectorAll("button");

const tabDataContainer = document.getElementById("tab-data-container");

const tabData = tabDataContainer.querySelectorAll("[data-tab-id]");


tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
        tabButtons.forEach((button) => {
            button.dataset.selected = false;
        });
        button.dataset.selected = true;
        tabData.forEach((tab) => {
            tab.dataset["active"] = false;
        });

        const tabId = button.dataset.tabid
        console.log(tabId, button);
        const tab = tabDataContainer.querySelector(`[data-tab-id="${tabId}"]`);
        tab.dataset["active"] = true;
    });
});