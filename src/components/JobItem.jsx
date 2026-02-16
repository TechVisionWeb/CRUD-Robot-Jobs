
import addJobToList from '../js/addJobToList'
import "./JobItem.css";

import handleInputUpdate from '../js/handleInputUpdate'
import handleInputEdit from '../js/handleInputEdit'
import JobOption from './JobOption'
import JobButton from './JobButton'

//props is already an object , so there is no need for brackets in signiture
export const JobItem = (props) => {

  const deleteJob = (aId) => {
    props.setJobs(props.jobs.filter(aJob => aJob.id !== aId));
  };

  return (

    <>
      <li id={"job item" + props.id} key={"job_item" + props.id} className={props.job.status.toLowerCase() === "need to start" ? "red  item" : props.job.status.toLowerCase() === "in progress" ? "orange item" : "green item"}>
        <div className="job-item__data">{`ID: ${props.job.id}, Name: ${props.job.name}, Status: ${props.job.status}`}</div>
        <div className="job-item__data">{`Notes: ${props.job.notes}`} </div>

        <div className="job-item__actions">




    

          <JobButton key={"Remove-Job"} className="button button--wide-width" title={"Remove Job"} name={"Remove Job"} handleInputNew={() => deleteJob(props.job.id)} />

          < JobButton key={"Edit-Job"} className="button button--wide-width" title={"Edit Job"} name={"Edit Job"} handleInputNew={() => handleInputEdit(props.setNewJob, props.job)} />
          < JobButton id={"button" + props.id} className="button button--wide-width" title={"Update Job"} name={"Update Job"} handleInputNew={() => addJobToList(props.jobs, props.newJob, props.setJobs, props.setNewJob)} />

          <select name="status"
            title="status" id={"selectStatusItem" + props.id} className="job-status"

            onChange={(e) => handleInputUpdate(e, props.setNewJob, props.job)}>
            <JobOption value={"Options"} />
            <JobOption value={"Need to Start"} />
            <JobOption value={"In Progress"} />
            <JobOption value={"Completed"} />
   
          </select>



        </div>
      </li>
    </>
  );
}

export default JobItem;