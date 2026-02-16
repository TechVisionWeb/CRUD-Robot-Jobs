
import { Fragment } from 'react'

export const JobOption = ({value}) => {
    return (
        <Fragment>
         
            <option key={value} value={value}>{value}</option>
          
       </Fragment>
    )
}

export default JobOption

