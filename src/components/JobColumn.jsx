import    { useState } from 'react';
import  './JobColumn.css'
 import JobItem from './JobItem';
 


const JobColumn = (   props )    => {
      const [isShown, isJobListShown] = useState(true);

   return (
    <div id = {props.id} className= {props.className}>
      <div className="heading-status">
                <img src={props.image} alt={props.alt} className="status-image" />
           
                 &nbsp;  <h3>{props.title}</h3>

                  {/* Add content for job items here */}
               <button type="button" className={"button button--small-width"} onClick={() => { isJobListShown(!isShown) }}> Show/Hide List</button>
            
      </div>
                <h4> Enter jobs here </h4>

      
           
                  <ul id={props.id} className="job-list" style={isShown ? { visibility: "visible", display: "block" } : { visibility: "hidden", display: "block" }}>
          
                    {/* Map through jobs and render JobItem components */}
                     {props.jobs.map(  job =>     ( job.status && job.status.toLowerCase()  === props.title.toLowerCase())  &&   <JobItem key={ job.id} columnTitle={props.columnTitle} id={ job.id} job={ job} jobs={props.jobs} setJobs={props.setJobs}  setNewJob ={props.setNewJob } newJob={props.newJob}/>)   }
                  </ul>
            
             
           
       
    </div>
  );
};

export default JobColumn;