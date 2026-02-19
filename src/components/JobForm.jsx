import  { useState } from 'react';
import JobColumn from './JobColumn';
import progressImage from "../imgs/in_progress.png";
import needsStartImage from "../imgs/need_to_start.png";
import completedImage from "../imgs/completed.png";
import "./JobForm.css";
 import JobButton from './JobButton';

import JobOption from './JobOption';
import ButtonsJobsSubcontainer from './ButtonsJobsSubcontainer';
import handleInputNew from '../js/handleInputNew'

import addJobToList from '../js/addJobToList'


export const JobForm = () => {

    const [jobs, setJobs] = useState( JSON.parse(localStorage.getItem("CharlotteProjectJobsSaveNow")) ||[
       
         
     ]);
    
    const [newJob, setNewJob] = useState({ id: '', name: '', notes: '' , status: '' });
    const [newSearchJob, setNewSearchJob] = useState({ id: '', name: ''});


    return (
        <div className="form-container">
            <form className="form-details-container">
                {/* Input fields as controlled components */}
<div>
                <div className="form-details">

                    <fieldset className="form-details__fields">
                              <legend>Job ID Notes Status</legend>
                        <div>
                            <label htmlFor="inputID">Add ID</label>
                            <input
                                id="inputID"
                                name="id"
                                title="id"
                                value={newJob.id}
                                onChange={(e) => handleInputNew(e, setNewJob)}


                            />
                        </div>
                 
                       
                         <div className="form-details__fields">
                            <label htmlFor="notes"  >Add Notes - max 200 characters</label>
                             
                            <textarea maxLength={500} minLength={1}
                                id="notes"
                                name="notes"
                                value={newJob.notes}
                                  
                                onChange={(e) => handleInputNew(e, setNewJob)}

                             />
                        </div> 
                        < div className="form-details__fields">
                        <label htmlFor="selectStatusMain">Add Status  </label>
                                 
                                 
                            <select name="status"
                                title="status" id="selectStatusMain" className="job-status" value={newJob.status}
                                onChange={(e) => handleInputNew(e, setNewJob)}>
                                <JobOption value={"Options"} />
                                <JobOption value={"Need to Start"} />
                                <JobOption value={"Completed"} />
                                <JobOption value={"In Progress"} />
                            </select>
                            <br/>
                        </div>

                         {/* Add/Update button */}
              
                     </fieldset>
                    
                    <fieldset className="buttons-names-container">
                            <legend>Job Name Input</legend>

                       <div className="form-details__fields">
                            <label htmlFor="name"  >Add Name</label>

                            <input
                                id="name"
                                name="name"
                                value={newJob.name}

                                onChange={(e) => handleInputNew(e, setNewJob)}

                             />
                        </div>

                     <ButtonsJobsSubcontainer buttonClass="button button--small-width" descriptors={["Data Analyzer","Web Parsing","Report Generator"]}   handleInputNew={(e) => {handleInputNew(e,setNewJob);   }}/>
                     <ButtonsJobsSubcontainer buttonClass="button button--small-width" descriptors={["Send Emails","Sort Emails","Read Emails"]}   handleInputNew={(e) => {handleInputNew(e, setNewJob)  }}/>
             

                   
                    </fieldset>

               
                 
               </div>

               <fieldset  className="buttons-main-container">
                                                          <legend>Job Actions</legend>
                        <label className="form-details__fields form-details__fields--searching" htmlFor="inputSearch">Search Job by ID or Press x to Unfliter</label>

                         <input   id="inputSearch"
                                name="id"
                                title="search"
                                className="form-details__fields form-details__fields--searching"
                                placeholder='Type to Filter & X for Unfliter'
                                value={newSearchJob.id}
                                 onChange={(e) => handleInputNew(e, setNewSearchJob)}
                                type="search"/>


                                <label className="form-details__fields form-details__fields--searching" htmlFor="inputName">Search Job by Name or Press x to Unfliter </label>

                         <input   id="inputName"
                                name="name"
                                title="search"
                                className="form-details__fields form-details__fields--searching"
                                placeholder='Type to Filter & X for Unfliter'
                                value={newSearchJob.name} 
                                 onChange={(e) => handleInputNew(e, setNewSearchJob)}
                                type="search"/>
                    <JobButton key={"Add/Update Job"} className="button button--wide-width"  title={"Add/Update Job"} name={"Add/Update job"}  handleInputNew={() => { newJob.status !== "Options" ? addJobToList(jobs, newJob, setJobs, setNewJob)     : window.alert('Must not pick status  "options" to udpate. Choose another status')     }}/> 
                    <JobButton key={"Save Job List"} className="button button--wide-width"  title={"Save Job List"} name={"Save Job List"}  handleInputNew={() =>  { window.confirm("Are you sure you want to save the job List? Can't undo")  ?  localStorage.setItem("CharlotteProjectJobsSaveNow", JSON.stringify(jobs))  : window.alert("Save is stopped or no jobs to save")  }} /> 
               </fieldset>
        </div>
                <br />

                <br />
                {/* Display List of Jobs */
                    //use  () => JobList (if plain js) othewise it executes twice 
                    //pass style={isShown?   {display :"block"} :  {display :"none" } }to  the standard List element because not changing rendering otherwise
                    //or "Conditionally render by writing isShown && JobList JSX style next to it. Becomes a falsey statement overall  "
                }
                <div className='jobColumns'>
                    <JobColumn className="jobColumns__jobColumn"  id={"Need to start"}  jobs={  jobs.filter((job)=> (newSearchJob.id.trimEnd && newSearchJob.name.trimEnd ? ( job.id.includes(newSearchJob.id ) && job.name.includes(newSearchJob.name )   ): newSearchJob.name.trimEnd ? ( job.name.includes(newSearchJob.name )   ): newSearchJob.id.trimEnd ? ( job.id.includes(newSearchJob.id )   ):job) )} newJob={newJob} setJobs={setJobs} setNewJob={setNewJob} title={"Need to start"} image={progressImage} alt="In progress job descriptor" />
                    <JobColumn className="jobColumns__jobColumn" id={"In progress"}
                     jobs={  jobs.filter((job)=> (newSearchJob.id.trimEnd && newSearchJob.name.trimEnd ? ( job.id.includes(newSearchJob.id ) && job.name.includes(newSearchJob.name )   ): newSearchJob.name.trimEnd ? ( job.name.includes(newSearchJob.name )   ): newSearchJob.id.trimEnd ? ( job.id.includes(newSearchJob.id )   ):job) )} newJob={newJob} setJobs={setJobs} setNewJob={setNewJob} title={"In Progress"} image={needsStartImage} alt="Need to start job descriptor" />
                    <JobColumn className="jobColumns__jobColumn" id={"Completed"}   jobs={  jobs.filter((job)=> (newSearchJob.id.trimEnd && newSearchJob.name.trimEnd ? ( job.id.includes(newSearchJob.id ) && job.name.includes(newSearchJob.name )   ): newSearchJob.name.trimEnd ? ( job.name.includes(newSearchJob.name )   ): newSearchJob.id.trimEnd ? ( job.id.includes(newSearchJob.id )   ):job) )} newJob={newJob} setJobs={setJobs} setNewJob={setNewJob} title={"Completed"} image={completedImage} alt="Completed job descriptor" />
                </div>
            </form>
        </div>
    );
};

export default JobForm;