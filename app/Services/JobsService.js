import store from "../store.js";
import Job from "../Models/Job.js";

// @ts-ignore
let _api = axios.create({
  baseURL: "http://bcw-sandbox.herokuapp.com/api/jobs",
  timeout: 15000,
});

class JobsService {
  constructor() {}
  getJobs() {
    _api.get().then((res) => {
      let jobs = res.data.data.map((j) => new Job(j));
      store.commit("jobs", jobs);
    });
  }
  addJob(job) {
    _api.post("", job).then((res) => {
      this.getJobs();
    });
  }
  delete(id) {
    _api.delete(id).then((res) => {
      console.log(res);
      this.getJobs();
    });
  }
}

const JOBS_SERVICE = new JobsService();
export default JOBS_SERVICE;
