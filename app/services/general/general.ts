import { openModal } from "@services/modal/modalService";
import { getTourTemplate} from "../../templates/tours"
import { ITours } from '../../models/tours/index';




export function initApp(data: ITours[]) {
  initHeaderTitle('Туры', 'h1');
  initFooterTitle('Туры по всему миру', 'h2');
  () => { initToursDivElements(data) }
}


export function initHeaderTitle(ticketName: string, selector: string): void {
    const headerElement= document.querySelector('header') as HTMLHeadingElement;
    const targetItem = headerElement.querySelector(selector) as HTMLHeadingElement;
    if (targetItem) {
        targetItem.innerText = ticketName;
    }
}

export function initFooterTitle(ticketName: string, selector: string): void {
    const headerElement = document.querySelector('footer') as HTMLHeadingElement;
    const targetItem = headerElement.querySelector(selector) as HTMLHeadingElement;
    if (targetItem) {
        targetItem.innerText = ticketName;
    }
}





 export function initToursDivElements(data: ITours[]): void {

    if (Array.isArray(data)) {
      const rootElement: Element = document.querySelector('.main-app');
      const tourWrap = document.createElement('div') as HTMLDivElement;
  
      tourWrap.classList.add('tour-wrap');
  
      // init click for modal
      initTourElemListener(tourWrap);
  
      let rootElementData: string = '';
      data.forEach((el, i) => {
        rootElementData += getTourTemplate(el, i);
      });
  
      tourWrap.innerHTML = rootElementData;
      rootElement.appendChild(tourWrap) ;
    }
  }
  
  
  export function initTourElemListener(tourWrap: HTMLDivElement): void {
    tourWrap.addEventListener('click', (ev) => {
      const targetItem = ev.target as HTMLElement;
      const parentItem = targetItem?.parentNode as HTMLElement;
      let realTarget: HTMLElement;
  
      if (targetItem.hasAttribute('data-tour-item-index')) {
        realTarget = targetItem;
      } else if (parentItem && parentItem.hasAttribute('data-tour-item-index')) {
        realTarget = parentItem;
      }
  
      if (realTarget) {
        const dataIndex: string = realTarget.getAttribute('data-tour-item-index');
        openModal('order', Number(dataIndex));

      }
    });

  }


