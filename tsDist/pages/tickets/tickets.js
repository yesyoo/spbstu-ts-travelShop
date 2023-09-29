import { getTicketById, postTicketData } from "@rest/tickets";
import '@myCss'; // добавлена новая ссылка - ссылка ведет на один файл
import '@assets/styles/tickets.scss';
import { initTicketElementTemplate } from "../../templates/ticketInfo";
import { initFooterTitle, initHeaderTitle } from "@services/general/general";
let ticketInstance;
let ticketPostInstance;
const clientType = "custom";
// init main  data
initApp();
registerConfirmButton();
function initApp() {
    const ticketData = getTicketById('someId'); // 
    ticketData.then((data) => {
        ticketInstance = data[0];
        const ticketName = typeof ticketInstance?.name === "string" ? ticketInstance?.name : '';
        initHeaderTitle(ticketName, 'h3');
        initFooterTitle('Туры по всему миру', 'h2');
        initTicketInfo(ticketInstance);
    });
}
/*  - перенести все методы ниже в раздел services (сюда импортировать и вызывать)
    - Указать в методах возвращающие типы, в теле функции также указать типы чтобы не было ошибок
*/
function initTicketInfo(ticket) {
    const targetElement = document.querySelector('.ticket-info');
    const ticketDescription = ticket?.description;
    const ticketOperator = ticket?.tourOperator;
    let vipClientType;
    if ("vipStatus" in ticket) {
        vipClientType = ticket.vipStatus;
    }
    const ticketElemsArr = [ticketDescription, ticketOperator, vipClientType];
    let ticketElemTemplate;
    ticketElemsArr.forEach((el, i) => {
        ticketElemTemplate += initTicketElementTemplate(el, i);
    });
    targetElement.innerHTML = ticketElemTemplate;
}
function initUserData() {
    const userInfo = document.querySelectorAll('.user-info > p');
    let userInfoObj;
    userInfo.forEach((el) => {
        const inputDataName = el.getAttribute('data-name');
        if (inputDataName) {
            const inputElems = el.querySelector('input');
            userInfoObj[inputDataName] = inputElems.value;
        }
    });
    console.log('userInfoObj', userInfoObj);
    return userInfoObj;
}
function initPostData(data) {
    initUserData();
    postTicketData(data).then((data) => {
        if (data.success) {
        }
    });
}
function registerConfirmButton() {
    const targetEl = document.getElementById('accept-order-button');
    if (targetEl) {
        targetEl.addEventListener('click', () => {
            initPostData(ticketPostInstance);
        });
    }
}
//# sourceMappingURL=tickets.js.map