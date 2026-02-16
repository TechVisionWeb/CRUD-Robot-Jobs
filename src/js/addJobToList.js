export const addJobToList = (jobs, newJob, setJobs, setNewJob) => {
  // Destructure the id, name, and status for cleaner code.
  const { id, name, status, notes } = newJob;

  // Basic input validation: check if required fields are filled.
  if (!id || !name || !status || !notes) {
    alert("Please fill in all fields for a new job or change a status for existing job.");
    return;
  }

  // Check if a job with the same ID already exists.
  const idAlreadyExists = jobs.some(job => job.id === id);

  if (idAlreadyExists) {
    // If a job with the ID exists, confirm with the user if they want to update it.
    if (window.confirm(`Do you want to change the job with id: ${id}?`)) {
      // Create a new array with the updated job and use setJobs to update the state.
      // Use map() to find and replace the old job with the new one.
      const updatedJobs = jobs.map(job => (job.id === id ? newJob : job));
      setJobs(updatedJobs);
      console.log(`Job with id ${id} updated to status: ${status}.`);
    }
  } else {
    // If the job ID does not exist, add the new job to the list.
    // Use the spread operator to create a new array with the old jobs and the new one.
    setJobs([...jobs, newJob]);
    console.log(`New job with id ${id} added.`);
  }

  // Clear input fields after adding or updating a job.
  setNewJob({ id: "", name: "", status: "", notes: " " });
};

export default addJobToList;
