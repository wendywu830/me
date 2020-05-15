import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-2.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Trippin'</a></h3>
											<span>A travel planner to plan itineraries with flights and attractions as well as get recommendations for activites</span>
											<p className="icon">
												<span><a href="https://github.com/wendywu830/CIS550-Project"><i className="icon-link2" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-1.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Heart to Heart</a></h3>
											<span>Django web app</span>
											<p className="icon">
												<span><a href="https://github.com/wendywu830/Heart-to-Heart"><i className="icon-link2" /></a></span>
											</p>
										</div>
									</div>
								</div>
							
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/img-3.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">TL;DR</a></h3>
											<span>A Python CLI tool that analyzes New York Times articles and does fundamental text analysis on them, creating visualizations of their data, and offering an option to archive and organize results</span>
											<p className="icon">
												<span><a href="https://github.com/luciahuo/TL-DR"><i className="icon-link2" /></a></span>
											</p>
										</div>
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
