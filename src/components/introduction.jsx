import React, { Component } from 'react'
import Typed from 'react-typed';

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
          <ul className="slides">
              <li>
            <div className="animation">
            <div className="col-md-offset-3 col-md-pull-3 js-fullheight slider-text">
              <div className="slider-text-inner js-fullheight">
                <div className="desc">
                <Typed
                  loop
                  typeSpeed={50}
                  backSpeed={50}
                  strings={["Hey there!", "I'm Wendy.","I'm a student.", "I'm a coder.", "I'm a dancer.", "I'm a solver.", "I'm Wendy."]}
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  cursorChar="|"
                />
                </div>
              </div>
              </div>
            </div>
            </li>
            </ul> 
          </div>
        </section>
      </div>
    )
  }
}
