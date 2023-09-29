import {ITours} from "../models/tours";
import { ITicket } from '../models/ticket/ticket';
import { IUser } from '../models/user/user';


export function initTicketElementTemplate(data: string, i: number): string {
    const tmpl: string = `
       <div  data-item-index=${i} class="ticket-block">
           <p>${data}</p>
       </div>
    `
    return tmpl;
}