export class Modal {
    public template: string
    public selector: string
    constructor(selector: string) {
        this.selector = selector
    };
    open(template: string): void {
        const modal = document.createElement('div') as HTMLDivElement
        modal.innerHTML = template
        modal.id = this.selector
        modal.classList.add('modal-element')
        document.querySelector('body').append(modal)
    };
}