export function getTourTemplate(obj, i) {
    const tmpl = ` 
       <div  data-tour-item-index=${i} class="tour-block">
           <h2>${obj.name}</h2>
           <img class='tour-pic' src="../app/assets/img/${obj.img}"/>
           <div class="ticket-description">${obj.description}</div>
           <p>Buy for ${obj.price}</p>
       </div>
    `;
    return tmpl;
}
//# sourceMappingURL=tours.js.map