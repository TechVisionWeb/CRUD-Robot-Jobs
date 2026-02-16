
export const addJobToList = (jobs, id, aJob, newJob, setJobs, setNewJob) => {
    // Basic input validation
    const idAlreadyExists = jobs.some(job => job.id === id);
    console.log( newJob.status + " a");
 if (!newJob.id || !newJob.name || !newJob.status) {
        alert("Please fill in all fields.");
        return;
    }
else if (idAlreadyExists) {
        if (window.confirm(`Do you want to change the job with id: ${id}?`)) {
             if(aJob === null){
            setJobs(jobs.map(job => (job.id === newJob.id ? newJob : job)));

            }
            else {
            let updateJobs = (jobs.map(job => (job.id === newJob.id ? newJob : job)));
                                       
        setJobs([...updateJobs]);
                 console.log( newJob.status + " a");

            }
        }
 }  else {
        //..jobs copies jobs elements into a new array, together with newJob
        setJobs([...jobs, newJob]);

    }
    // Clear input fields after adding/updating
                 console.log( newJob.status + " a");
setNewJob({id : "", name: "", status: ""});
}

export default addJobToList;