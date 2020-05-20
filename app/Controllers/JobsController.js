import store from "../store.js";
import _JobsService from "../Services/JobsService.js";

function _drawJobs() {
  let template = "";
  store.State.jobs.forEach((j) => (template += j.Template));
  document.getElementById("jobs").innerHTML = template;
}

export default class JobsController {
  constructor() {
    console.log("jobs controller");
    store.subscribe("jobs", _drawJobs);
    _JobsService.getJobs();
  }
  addJob(event) {
    event.preventDefault();
    let data = event.target;
    let job = {
      company: data.company.value,
      jobTitle: data.jobTitle.value,
      hours: data.hours.value,
      rate: data.rate.value,
      description: data.description.value,
    };
    _JobsService.addJob(job);
    data.reset();
  }
  delete(id) {
    _JobsService.delete(id);
  }
}
