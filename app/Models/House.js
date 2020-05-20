export default class House {
  constructor(data) {
    this.id = data._id;
    this.year = data.year;
    this.bedrooms = data.bedrooms;
    this.bathrooms = data.bathrooms;
    this.levels = data.levels;
    this.description = data.description;
    this.price = data.price;
    this.imgUrl = data.imgUrl;
  }
  get Template() {
    return /*html*/ `
    <div class="col-4">
                <div class="card">
                    <img class="card-img-top" src="${this.imgUrl}" alt="">
                    <div class="card-body">
                        <h4 class="card-title">Year: ${this.year} | Price: ${this.price} </h4>
                        <h5>Bedrooms: ${this.bedrooms}| Bathrooms: ${this.bathrooms} </h5>
                        <h5>Levels: ${this.levels}| Bathrooms: ${this.bathrooms} </h5>
                        <p class="card-text">${this.description}</p>
                        <button class="btn btn-success" onclick="app.housesController.bid('${this.id}')">
                               Bid
                        </button>
                        <button class="btn btn-danger" onclick="app.housesController.delete('${this.id}')">
                               Delete
                        </button>
                    </div>
                </div>
            </div>`;
  }
}
//   "_id":
//   "year":
//   "bedrooms":
//   "bathrooms":
//   "price":
//   "imgUrl":
//   "description":
//   "levels": 1,
