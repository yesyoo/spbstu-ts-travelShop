import {ITours} from "../models/tours";
import {images} from "@services/img/img";


export function getTourTemplate(obj: ITours, i: number): string {
    const tmpl: string = ` 
       <div  data-tour-item-index=${i} class="tour-block">
           <h2>${obj.name}</h2>
           <img class='tour-pic' src="../app/assets/img/${obj.img}"/>
           <div class="ticket-description">${obj.description}</div>
           <p>Buy for ${obj.price}</p>
       </div>
    `
   return tmpl;
}
