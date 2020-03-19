import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I'm currently a <strong>sophomore</strong>  at the University of Pennsylvania majoring
in computer science. I’m fascinated by how software has challenged the boundaries of what can and cannot be done. 
From machine learning that make what is arduous to an average human effortless to efficient algorithms 
that tackle big issues seamlessly, I aspire to be a <strong>software engineer</strong>  that handles it all. 
I’m an <i>enthusiastic</i> and <i>purpose-driven</i> individual who also knows how to be a collaborative <strong> team player</strong>.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Skills</h2>
            </div>
            </div>
            <div className="row row-pt-md" >
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                    <div className="desc">
                        <h3>Programming Languages</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <ul>
                                <b>Advanced</b>
                                    <li>Java</li>
                                    <li>Python</li>
                                    <li>JavaScript</li>
                                    <li>HTML/CSS</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul>                                
                                    <b>Proficient</b>
                                    <li>OCaml</li>
                                    <li>C</li>
                                    <li>SQL</li>
                                    <li>C#</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                    <div className="desc">
                        <h3>Tools/Frameworks</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <ul>
                                <b>Advanced</b>
                                    <li>Git</li>
                                    <li>Linux/Unix</li>
                                    <li>React</li>
                                    <li>Django</li>
                                    <li>Node.js</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul>                                
                                    <b>Proficient</b>
                                    <li>Hadoop</li>
                                    <li>AWS</li>
                                    <li>Docker</li>
                                    <li>Flask</li>
                                    <li>Jenkins</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <div className="desc">
                    <h3>Leadership</h3>
                    <ul>
                        <li>PennApps (Head of Outreach)</li>
                        <li>Pan-Asian Dance Troupe (Publicity Director, Choreographer)</li>
                        <li>Women in Computer Science (Advocacy Committee)</li>
                        <li>Rewriting the Code Fellow</li>
                        <li>Asian Pacific American Heritage Week (Gen Board)</li>
                        <li>SEAS Wellness (Gen Board)</li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
