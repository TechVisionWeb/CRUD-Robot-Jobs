import  { Fragment } from 'react'
import './JobButton.css';

export const JobButton = (props) => {
  return (
    <Fragment>
        <button id={props.id} className={props.className}  type="button"    name={"name"} title={props.title}  value={props.name} onClick={ props.handleInputNew}>{ props.name}</button>

    </Fragment>
  )
}

export default JobButton
