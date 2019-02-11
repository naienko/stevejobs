// makes each job's card

const jobFactory = jobElement => {
    let end_year = jobElement.end_year;
    if (end_year === null) {
        end_year = "now";
    }
    return `<section>
    <h3>${jobElement.organization}</h3>
    <div>${jobElement.city}, ${jobElement.state}</div>
    <div>${jobElement.start_year} to ${end_year}</div>
    <div>${jobElement.role}</div>
    </section>`;
}

export default jobFactory;