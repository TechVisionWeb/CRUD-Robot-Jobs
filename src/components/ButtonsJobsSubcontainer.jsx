 import JobButton from './JobButton';

  export const ButtonsJobsSubcontainer = (props) => {
    
  
   return ( 
    <div className="buttons-container__sub-container"> 

                       
                               

 {  props.descriptors.map(  descriptor  =>    < JobButton key={descriptor.replaceAll(" ", "_")} className={props.buttonClass} id={ descriptor.replaceAll(" ", "_")} title={descriptor} name={descriptor}  handleInputNew={ props.handleInputNew  } />  ) }

                       
                             
   
    
   </div>
   )

   

}

   export default ButtonsJobsSubcontainer;
