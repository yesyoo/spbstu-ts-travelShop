export class Modal {
    constructor(selector) {
        this.selector = selector;
    }
    ;
    open(template) {
        const modal = document.createElement('div');
        modal.innerHTML = template;
        modal.id = this.selector;
        modal.classList.add('modal-element');
        document.querySelector('body').append(modal);
    }
    ;
    remove() {
        console.log('remove =>');
        const modal = document.querySelector(this.selector);
        modal.parentNode.removeChild(modal);
    }
}
//# sourceMappingURL=modal.js.map