import { Modal } from "../../classess/modal";
import { toursDataArray } from "../../index"; // ссылка на массив с данными
// Определить типы для метода (возвращающие и для переменных в теле функции)
export function openModal(type, i) {
    const data = toursDataArray[i];
    const tourId = data[i]?.id;
    let modalInfo = {};
    // function openPage(): void {
    //     const page = document
    // }
    switch (type) {
        case "order":
            const modalTemplate = `
      <div> 
      <p data-moda-id="tour-modal" class="close-modal" onclick="closeModal()">X</p>
      <p>${data.name}</p>
      <p>${data.description}</p>
       
       <div data-tour-id=${tourId} class="ticket-submit">
       <a href="ticke.html">Buy</a>
</div>
     </div>
  `;
            const modal = new Modal('tour-modal');
            modal.open(modalTemplate);
            console.log('open modal =>');
            break;
    }
}
export function closeModal() {
    const div = document.querySelector('.modal-element');
    div.parentNode.removeChild(div);
}
//# sourceMappingURL=modalService.js.map