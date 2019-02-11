// makes each job's card

const jobFactory = jobElement => {
    return `<section>
    <h3>${jobElement.organization}</h3>
    <div>${jobElement.city}, ${jobElement.state}</div>
    <div>${jobElement.start_year} to ${jobElement.end_year}</div>
    <div>${jobElement.role}</div>
    </section>`;
}

export default jobFactory;