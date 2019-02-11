// use fetch to get the list of jobs from the api

const getJobs = () => {
    return fetch("https://api.stevebrownlee.com/jobs/")
        .then(res => res.json());
};

export getJobs;