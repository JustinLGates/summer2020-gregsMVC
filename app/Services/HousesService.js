import House from "../Models/House.js";
import store from "../store.js";
// @ts-ignore
let _api = axios.create({
  baseURL: "http://bcw-sandbox.herokuapp.com/api/houses",
  timeout: 15000,
});

class HousesService {
  getHouses() {
    _api.get().then((res) => {
      let houses = res.data.data.map((obj) => new House(obj));
      store.commit("houses", houses);
    });
  }
  bidHouse(id) {
    let foundHouse = store.State.houses.find((h) => h.id == id);
    if (foundHouse) {
      foundHouse.price += 7000;
      _api.put(id, foundHouse).then((res) => {
        this.getHouses();
      });
    }
  }
  addHouse(houseobj) {
    //NOTE POST always takes a url first,and then the data to create second
    _api
      .post("", houseobj)
      .then((res) => {
        console.log(res);
        //NOTE two ways of updating data after a request
        //first way
        //PROS: only one call to db | cons: cant trust that local array contains the same information as database
        // let newCar = new Car(res.data.data)
        // let cars = [newCar, ...store.State.cars]
        // store.commit('cars', cars)

        //pros: our data will always be up to date with the database | cons: potential slower app time/reload from extra call to db
        //second way
        this.getHouses();
      })
      .catch((err) => console.error(err));
  }
  deleteHouse(id) {
    debugger;
    _api.delete(id).then((res) => {
      this.getHouses();
    });
  }
  constructor() {
    console.log("housesService");
  }
}

const HOUSESSERVICE = new HousesService();
export default HOUSESSERVICE;
