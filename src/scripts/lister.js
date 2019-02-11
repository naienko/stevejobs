// display all the jobs in reverse order on the DOM

import getJobs from "./fetcher.js";
import jobFactory from "./factory.js";

const listEl = document.querySelector("#lister");

const showAllJobs = () => {
    getJobs()
    .then(resultObject => {
        let jobArray = resultObject.results;
        jobArray.reverse().forEach(element => {
            listEl.innerHTML += jobFactory(element);
        })
    })
}

export default showAllJobs;