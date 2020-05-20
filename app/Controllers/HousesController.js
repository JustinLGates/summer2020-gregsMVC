import store from "../store.js";
import _HousesService from "../Services/HousesService.js";

function _drawHouses() {
  let template = "";
  store.State.houses.forEach((h) => (template += h.Template));
  document.getElementById("houses").innerHTML = template;
}

export default class HousesController {
  constructor() {
    store.subscribe("houses", _drawHouses);
    _HousesService.getHouses();
  }
  delete(id) {
    _HousesService.deleteHouse(id);
  }
  addHouse(event) {
    event.preventDefault();
    let data = event.target;
    let housePojo = {
      imgUrl: data.imgUrl.value,
      year: data.year.value,
      bedrooms: data.bedrooms.value,
      price: data.price.value,
      bathrooms: data.bathrooms.value,
      levels: data.levels.value,
      description: data.description.value,
    };
    _HousesService.addHouse(housePojo);
    // data.reset();
  }
  bid(id) {
    _HousesService.bidHouse(id);
  }
}
