export const handleInputUpdate = (e, setNewJob, job) => {
 

 
      let { name, value } = e.target;
 



  //the name of an input is either id, name or status. This pattern can be used to identify which input changed. IF an input name is id,
  //then the brackets [] change the String in the name variable into the name of the variable, or container: e.g [name] becomes id, name or status
  //  and it can be asigned a value stored in the value variable

  //job.status = value; 

 

  setNewJob(
 
    ({
    ...job,
    
    [name]: value,
  }))

   

 
};

export default handleInputUpdate;