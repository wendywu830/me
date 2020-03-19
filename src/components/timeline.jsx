import React, { Component } from 'react'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react'

const experiences = [
  {
    title: "CIS 120 Teaching Assistant",
    company: "University of Pennsylvania",
    dateText: "Aug 2019 - Present",
    list: ["Prepare and lead a weekly recitation for 20+ students to teach course material on advanced programming design and techniques as well as object-oriented and functional programming in Java and OCaml respectively"
    , "Hold weekly office hours and exam review sessions for 400 students"]
  },
  {
    title: "Software Engineer Intern",
    company: "Worldpay from FIS",
    dateText: "May 2019 - Aug 2019",
    list: ["Utilize Agile practices, like daily stand-ups and pair programming for flexibility and rapid solutions",
    "Dockerize sandbox testing environment for cnp API requests",
    "Develop Python/Flask, ASP.NET, Ruby on Rails, Java Spring, & PHP web applications using cnp API SDKs",
    "Spearhead new features, manage SQL databases, and remodel integration and unit tests for an internal server dashboard that monitors the status of production servers using Java Mbeans"]
  },
  {
    title: "Computer Science Research Assistant",
    company: "University of Pennsylvania",
    dateText: "Jan 2019 - May 2019",
    list: ["Advisor: Prof.  Sampath Kannan / Funded by Google Explore CS Research for Women",
    "Coding Python simulation to investigate algorithmic fairness and machine learning in affirmative action"]
  },
  {
    title: "Java and Web Design Instructor",
    company: "College Academy",
    dateText: "June 2018 - July 2018",
    list: ["Teach over 80 students in a full day summer program for 4th to 8th graders",
    "Design and implement original lesson plans to teach Java programming and Web design (HTML/CSS/Javascript)",
    "Interact 1-on-1 with students, debugging code, providing a fun learning environment"]
  },
  {
    title: "Content Intern",
    company: "TripAdvisor",
    dateText: "June 2019 - Aug 2019",
    list: ["Processed over 300,000 user submitted photos, ensuring compliance with guidelines",
    "Presented at weekly meetings to discuss priorities and address tool bugs"]
  }

  /*{
    title: "",
    company: "",
    dateText: "",
    list: []
  } */
]

export default class MyTimeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
        <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
        <Timeline lineColor={'#ddd'} style={{maxWidth: "900px"}}>
        {experiences.map((exp, index) => {
            return (
                  <TimelineItem
                  key="001"
                  dateText= {exp.dateText}
                  dateInnerStyle={{ background: '#207cb1', color: '#fff', fontSize: '14px'}}
                  style={{ color: '#207cb1' }}
                  >
                  <h4>{exp.title}, {exp.company}</h4>
                  <ul style={{color: 'rgba(0, 0, 0, 0.7)', fontSize: '12px', marginTop: '7px'}}>
                    {exp.list.map(item => {
                      return (
                        <li >{item}</li>
                      )
                    })}
                  </ul>
                  </TimelineItem>
            )
        })}
        </Timeline>
        </div>
        </section>
      </div>
    )
  }
}
