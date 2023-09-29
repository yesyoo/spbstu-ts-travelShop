import { openModal } from "@services/modal/modalService";
import { getTourTemplate } from "../../templates/tours";
export function initApp(data) {
    initHeaderTitle('Туры', 'h1');
    initFooterTitle('Туры по всему миру', 'h2');
    () => { initToursDivElements(data); };
}
export function initHeaderTitle(ticketName, selector) {
    const headerElement = document.querySelector('header');
    const targetItem = headerElement.querySelector(selector);
    if (targetItem) {
        targetItem.innerText = ticketName;
    }
}
export function initFooterTitle(ticketName, selector) {
    const headerElement = document.querySelector('footer');
    const targetItem = headerElement.querySelector(selector);
    if (targetItem) {
        targetItem.innerText = ticketName;
    }
}
export function initToursDivElements(data) {
    if (Array.isArray(data)) {
        const rootElement = document.querySelector('.main-app');
        const tourWrap = document.createElement('div');
        tourWrap.classList.add('tour-wrap');
        // init click for modal
        initTourElemListener(tourWrap);
        let rootElementData = '';
        data.forEach((el, i) => {
            rootElementData += getTourTemplate(el, i);
        });
        tourWrap.innerHTML = rootElementData;
        rootElement.appendChild(tourWrap);
    }
}
export function initTourElemListener(tourWrap) {
    tourWrap.addEventListener('click', (ev) => {
        const targetItem = ev.target;
        const parentItem = targetItem?.parentNode;
        let realTarget;
        if (targetItem.hasAttribute('data-tour-item-index')) {
            realTarget = targetItem;
        }
        else if (parentItem && parentItem.hasAttribute('data-tour-item-index')) {
            realTarget = parentItem;
        }
        if (realTarget) {
            const dataIndex = realTarget.getAttribute('data-tour-item-index');
            openModal('order', Number(dataIndex));
        }
    });
}
//# sourceMappingURL=general.js.map