export const addJobToList = (jobs, newJob, setJobs, setNewJob) => {
   const { id, name, status, notes } = newJob;

   if (!id || !name || !status ||  !notes) {
    alert('Please fill in all of the fields for a new job (do not pick the status "options")  or change a status for an existing job.');
    return;
  }

   const idAlreadyExists = jobs.some(job => job.id === id);

  if (idAlreadyExists) {
     if (window.confirm(`Do you want to change the job with id: ${id}?`)) {
        const updatedJobs = jobs.map(job => (job.id === id ? newJob : job));
      setJobs(updatedJobs);
      console.log(`Job with id ${id} updated to status: ${status}.`);
    }
  } else {
      setJobs([...jobs, newJob]);
    console.log(`New job with id ${id} added.`);
  }

   setNewJob({ id: "", name: "", status: "", notes: " " });
};

export default addJobToList;
