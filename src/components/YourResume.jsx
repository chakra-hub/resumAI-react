import React from 'react'
import {useSelector} from 'react-redux'
import { usePrompt } from '../utils/usePrompt'
import jsPDF from 'jspdf'


const YourResume = () => {
  const user = useSelector((store)=>store.user.user)
  let promptWorkHistory = `Prepare a work history section for my resume. I previously worked for ${user.prevComp} from ${user.timePrevComp} as a ${user.desgPrevComp} in team. Please list a few achievements for this role. I achieved ${user.achievements} in the previous job.
  Can you add more skills and make my achievements at these past roles sound smarter?`
  let promptEducation = `Prepare a educational background section for my resume. I have a ${user.degree} degree from ${user.institute}
  Also could you add more information related to it to my education background.` 
  let promptSkills = `Prepare a skills section for my resume. I am a good at ${user.skills}. Also I have certifications in ${user.certifications}.`
  let promptProfessionalSummary = `Prepare a profession summary section for my resume. I am a ${user.currdesignation} with experience in ${user.skills}. Add some more related information to this.`

  const workHistory = usePrompt(promptWorkHistory)
  const education = usePrompt(promptEducation)
  const skills = usePrompt(promptSkills)
  const professionalSummary = usePrompt(promptProfessionalSummary)
  const generatePdf = () => {
    let doc = new jsPDF('p', 'pt', 'a4');
    doc.html(document.getElementsByClassName('resume')[0],{
      callback:(pdf)=>{
        pdf.save('your_resume.pdf');
      }
    })

  }

  return (<>
    {user.name==''?<>Please fill the details first</>:<>
  {(workHistory && education && skills && professionalSummary && user.name!='') ?     <div className='resume_container'>
  <div className="resume">
    <div className="resume_header">
      <div className="candidate_name">{user?.name.toUpperCase()}</div>
      <ul className="header_bottom_section">
        <li className="header_item">{user?.email}</li>
        <li className="header_item">{user?.phone}</li>
        <li className="header_item">LinkedIn/{user?.linkedin}</li>
      </ul>
    </div>
    <div className="summary_container">
      <div className="summary_heading">Professional Summary</div>
      <div className="summary">{professionalSummary}</div>
    </div>
    <div className="education_container">
      <div className="education_heading">Education</div>
      <div className="education">
      {education}
      </div>
    </div>
    <div className="skills_container">
      <div className="skills_heading">Skills & Certifications</div>
      <div className="skills_data">
      {skills}
      </div>
    </div>
    <div className="workhistory_container">
      <div className="workhistory_heading">Work History</div>
      <div className="workhistory">
      {workHistory}
      </div>
    </div>
  </div>
  <button className='download_btn' onClick={generatePdf}>Download PDF</button>
</div>:<>AI is generating your resume. Please wait...</>}
</>}
</>
  )
}

export default YourResume
