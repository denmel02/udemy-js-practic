import './slider';
import { modals, tabs } from './modules';

document.addEventListener('DOMContentLoaded', () => {
    modals.initModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    modals.initModal('.phone_link', '.popup', '.popup .popup_close');
    modals.openModalByDelay('.popup');

    tabs.initTabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs.initTabs('.decoration_slider', '.decoration_item > div', '.decoration_content > div > div', 'after_click');
});