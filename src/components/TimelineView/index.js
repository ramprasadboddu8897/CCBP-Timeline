// Write your code here
import {Chrono} from 'react-chrono'
import {Component} from 'react'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

class TimelineView extends Component {
  renderChronoList = () => {
    const {timelineItemsList} = this.props
    const titles = timelineItemsList.map(eachItem => ({
      title: eachItem.title,
    }))
    return (
      <Chrono
        mode="VERTICAL_ALTERNATING"
        theme={{
          primary: '#2b237c',
          secondary: '#ffffff',
          cardForeColor: 'violet',
          titleColor: ' #2b237c',
        }}
        items={titles}
      >
        {timelineItemsList.map(eachItem => {
          if (eachItem.categoryId === 'COURSE') {
            return (
              <CourseTimelineCard key={eachItem.id} courseDetails={eachItem} />
            )
          }
          return (
            <ProjectTimelineCard key={eachItem.id} courseDetails={eachItem} />
          )
        })}
      </Chrono>
    )
  }

  render() {
    return (
      <div className="chrono-container">
        <h1 className="my-journey-text">MY JOURNEY OF CCBP 4.0</h1>
        {this.renderChronoList()}
      </div>
    )
  }
}

export default TimelineView
