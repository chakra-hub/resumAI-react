import React from 'react'
import { useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {updateUser} from '../utils/userSlice'
const Form = () => {
  const [submitted, setSubmitted] = useState(false)
  const dispatch = useDispatch();
    const user_details = {
        name: "",
        phone: "",
        email: "",
        linkedin: "",
        currdesignation: "",
        relocate: "",
        skills: "",
        degree: "",
        institute: "",
        prevComp: "",
        timePrevComp: "",
        desgPrevComp: "",
        achievements: "",
        certifications: "",

      };
      const [user, setUser] = useState(user_details);
      const [allError, setAllError] = useState({})
    
      const handleInput = (e) => {
        setUser({...user, [e.target.name]:e.target.value})
        
      };
    
      const handleValidation = (values) => {
        const error ={}
    
      if(values.name==''){
        error.name="Name cannot be null"
      }
      else if(values.name.length>20){
        error.name="First name cannot be more than 20 letters"
      }
      if(values.phone==''){
        error.phone="Phone Number cannot be null"
      }
      else if(!Number.isInteger(values.phone) && values.phone.length!==10){
        error.phone="Phone Number must be a number of 10 digits"
      }
      if(values.email==''){
        error.email="Email cannot be null"
      }
      else if(!values.email.includes('@')){
        error.email="Email not in proper format"
      }
      if(values.linkedin==''){
        error.linkedin="LinkedIn Username can't be null"
      }
      else if(values.linkedin.length<6){
        error.linkedin ="LinkedIn Username must be greater than 6 characters"
      }
      if(values.currdesignation==''){
        error.currdesignation="Current Designation can't be null"
      } 
      if(values.relocate==''){
        error.relocate="Can't be null"
      } 
      else if(values.relocate.toUpperCase()!=="YES"  && values.relocate.toUpperCase()!=="NO"){
        error.relocate ="Type Yes or No"
      }
      if(values.skills==''){
        error.skills="Skills cannot be null"
      }
      else if(!isNaN(values.skills)){
        error.skills="Skills must be string"
      }
      if(values.degree==''){
        error.degree="Degree cannot be null"
      }
      else if(!isNaN(values.degree)){
        error.degree="Degree must be string"
      }
      if(values.institute==''){
        error.institute="Institute cannot be null"
      }
      else if(!isNaN(values.institute)){
        error.institute="Institute must be string"
      }
      if(values.prevComp!=='' && !isNaN(values.prevComp)){
        error.prevComp="Company Name be string"
      }
      if(values.timePrevComp!=='' && !values.timePrevComp.includes('to')){
        error.timePrevComp="Timeline must be in YYYY to YYYY format"
      }
      if(values.desgPrevComp!=='' && !isNaN(values.desgPrevComp)){
        error.desgPrevComp="Designation must be a string"
      }
      if(values.achievements!=='' && !isNaN(values.achievements)){
        error.achievements="Achievements must be a string"
      }
      if(values.certifications!=='' && !isNaN(values.certifications)){
        error.certifications="Certifications must be a string"
      }
      return error;
    }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setAllError(handleValidation(user))
      }
    
      useEffect(()=>{
        if(Object.keys(allError).length==0){
          dispatch(updateUser(user));
        }
      },[allError])
  return (
<>
      <div className="form_container">
        <form action="" onSubmit={handleSubmit}>
          <div className="first_name">
            <div className="sign_up">Fill your career details</div>
            <div className="label">
              <label htmlFor="name">Name</label>
            </div>
            <input
              className="input_area"
              name="name"
              type="text"
              value={user.name}
              onChange={handleInput}
              placeholder="Name"
            />
            <div className="error_msg">{allError.name}</div>
          </div>
          <div className="last_name">
            <div className="label">
              <label htmlFor="phone">Phone</label>
            </div>
            <input
              className="input_area"
              name="phone"
              type="text"
              value={user.phone}
              onChange={handleInput}
              placeholder="Phone"
            />
            <div className="error_msg">{allError.phone}</div>
          </div>

          <div className="email">
            <div className="label">
              <label htmlFor="email">Email</label>
            </div>
            <input
              className="input_area"
              name="email"
              type="text"
              value={user.email}
              onChange={handleInput}
              placeholder="Email ID"
            />
            <div className="error_msg">{allError.email}</div>
          </div>
          <div className="password">
            <div className="label">
              <label htmlFor="linkedin">LinkedIn Username</label>
            </div>
            <input
              className="input_area"
              name="linkedin"
              value={user.linkedin}
              type="text"
              onChange={handleInput}
              placeholder="ChakraPra"
            />
            <div className="error_msg">{allError.linkedin}</div>
          </div>
          <div className="cnf_password">
            <div className="label">
              <label htmlFor="currdesignation">Current Designation</label>
            </div>
            <input
              className="input_area"
              name="currdesignation"
              value={user.currdesignation}
              type="text"
              onChange={handleInput}
              placeholder="SDE 1"
            />
            <div className="error_msg">{allError.currdesignation}</div>
          </div>
          <div className="relocate">
            <div className="label">
              <label htmlFor="relocate">Open to Relocate</label>
            </div>
            <input
              className="input_area"
              name="relocate"
              type="text"
              value={user.relocate}
              onChange={handleInput}
              placeholder="Yes/No"
            />
            <div className="error_msg">{allError.relocate}</div>
          </div>
          <div className="skills">
            <div className="label">
              <label htmlFor="skills">Open to Relocate</label>
            </div>
            <input
              className="input_area"
              name="skills"
              value={user.skills}
              type="text"
              onChange={handleInput}
              placeholder="React, Javascript, Excel etc."
            />
            <div className="error_msg">{allError.skills}</div>
          </div>
          <div className="degree">
            <div className="label">
              <label htmlFor="degree">Degree</label>
            </div>
            <input
              className="input_area"
              name="degree"
              type="text"
              value={user.degree}
              onChange={handleInput}
              placeholder="B.Tech, MBA etc."
            />
            <div className="error_msg">{allError.degree}</div>
          </div>
          <div className="institute">
            <div className="label">
              <label htmlFor="institute">Institute Name</label>
            </div>
            <input
              className="input_area"
              name="institute"
              type="text"
              value={user.institute}
              onChange={handleInput}
              placeholder="IIT, NIT etc."
            />
            <div className="error_msg">{allError.institute}</div>
          </div>
          <div className="prev_comp">
            <div className="label">
              <label htmlFor="prevComp">Previous Company</label>
            </div>
            <input
              className="input_area"
              name="prevComp"
              type="text"
              value={user.prevComp}
              onChange={handleInput}
              placeholder="Capgemini, Microsoft etc."
            />
            <div className="error_msg">{allError.prevComp}</div>
          </div>
          <div className="time_prev_comp">
            <div className="label">
              <label htmlFor="timePrevComp">Timeline of Previous Company</label>
            </div>
            <input
              className="input_area"
              name="timePrevComp"
              type="text"
              value={user.timePrevComp}
              onChange={handleInput}
              placeholder="2021 to 2023"
            />
            <div className="error_msg">{allError.timePrevComp}</div>
          </div>
          <div className="desg_prev_comp">
            <div className="label">
              <label htmlFor="desgPrevComp">Designation of Previous Company</label>
            </div>
            <input
              className="input_area"
              name="desgPrevComp"
              type="text"
              value={user.desgPrevComp}
              onChange={handleInput}
              placeholder="SDE, Manager etc."
            />
            <div className="error_msg">{allError.desgPrevComp}</div>
          </div>
          <div className="achievements">
            <div className="label">
              <label htmlFor="achievements">Achievements in Previous Company</label>
            </div>
            <input
              className="input_area"
              name="achievements"
              type="text"
              value={user.achievements}
              onChange={handleInput}
              placeholder="EOY award"
            />
            <div className="error_msg">{allError.achievements}</div>
          </div>
          <div className="certifications">
            <div className="label">
              <label htmlFor="certifications">Achievements in Previous Company</label>
            </div>
            <input
              className="input_area"
              name="certifications"
              type="text"
              value={user.certifications}
              onChange={handleInput}
              placeholder="AWS, Azure etc. "
            />
            <div className="error_msg">{allError.certifications}</div>
          </div>
          <div>
            <button className="submit_btn" onClick={()=>setSubmitted(true)}>Submit</button>
            <Link to="/your-resume"><button className='generate_btn'>generate</button></Link>
            {console.log(user.name)} 
          </div>
          {Object.keys(allError).length==0 && user.name && user.phone && user.email && user.linkedin && user.currdesignation && user.relocate && user.degree && user.institute && submitted ?<div className='submitted_msg'>Your Details have been submitted. Click on generate button to get your resume</div>:<></>}
        </form>
      </div>
    </>
  )
}

export default Form
