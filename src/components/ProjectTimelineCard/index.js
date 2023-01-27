// Write your code here
import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = courseDetails

  return (
    <div className="course-container">
      <img className="project-image" alt="project" src={imageUrl} />
      <div className="header">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar className="duration-icon" />
          <p className="description">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a className="visit-link" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default CourseTimelineCard
