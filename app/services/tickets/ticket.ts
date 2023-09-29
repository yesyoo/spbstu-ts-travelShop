import { TicketType, IVipTicket } from '../../models/ticket/ticket';
import { IUser } from 'models/user/user';
import { ITicket } from '../../models/ticket/ticket';
import { initTicketElementTemplate } from '../../templates/ticketInfo';
import { postTicketData } from '../rest/tickets';


export function initTicketInfo(ticket: TicketType | IVipTicket): void {
    const targetElement = document.querySelector('.ticket-info') as HTMLDivElement;

    const ticketDescription: string = ticket?.description;
    const ticketOperator: string = ticket?.tourOperator;
    let vipClientType: string;
    if ("vipStatus" in ticket) {
        vipClientType = ticket.vipStatus;
    }


    const ticketElemsArr: [string, string, string] = [ticketDescription, ticketOperator, vipClientType];
    let ticketElemTemplate: string;

    ticketElemsArr.forEach((el, i) => {
        ticketElemTemplate+= initTicketElementTemplate(el, i);
    });

    targetElement.innerHTML = ticketElemTemplate;

}

export function initUserData(): IUser { // ??
const userInfo = document.querySelectorAll('.user-info > p') as NodeListOf<HTMLParagraphElement>;
let userInfoObj: IUser;
    userInfo.forEach((el) => {
    const inputDataName: string = el.getAttribute('data-name');
    if (inputDataName) {
        const inputElems = el.querySelector('input') as HTMLInputElement;
        userInfoObj[inputDataName] = inputElems.value;
    }
    });

    console.log('userInfoObj',userInfoObj)
    return userInfoObj;
}

export function initPostData(data: ITicket) {
    initUserData();
    postTicketData(data).then((data) => {
        if (data.success) {

        }
    })
}

export function registerConfirmButton(data): void {
    const targetEl = document.getElementById('accept-order-button');
    if (targetEl) {
        targetEl.addEventListener('click', () => {
            initPostData(data);
        });
    }
}



