import { getTours } from "@rest/tours";
import './assets/styles/main.scss';
import { images } from "@services/img/img";
import { initApp, initToursDivElements } from "@services/general/general";
export let toursDataArray = [];
let cards = false;
const imagesStore = images; // ссылка на изображения нужна чтобы webpack формировал изображения в папке dist
const tourData = getTours();
function addCards() {
    if (!cards) {
        tourData.then((data) => {
            console.log('call ');
            toursDataArray = data;
            initToursDivElements(data);
        });
    }
}
addCards();
initApp(toursDataArray);
console.log('start =>');
//# sourceMappingURL=index.js.map