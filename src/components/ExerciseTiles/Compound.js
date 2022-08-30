import React from 'react'
import benchPress from '../../images/benchpress.gif';
import deadLift from '../../images/dead-lift.gif';
import squat from '../../images/squatgif.gif';

export default function Compound() {
  return (
    <div>
      <div className="tile">
        <img src={benchPress} />
        <div className="text">
          <h1>Bench Press</h1>
          <h2 className="animate-text">The staple chest excercise!</h2>
          <p className="animate-text">The bench press is the most well known chest excercise. It's one of the three compound movements in lifting.</p>
          <a className="animate-text">Learn more: https://www.youtube.com/watch?v=GkA-maBl-vU</a>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>


      <div className="tile">
        <img src={squat} />
        <div className="text">
          <h1>Squat</h1>
          <h2 className="animate-text">Stereotypically neglected by men.</h2>
          <p className="animate-text">The squat, another of the three compound movements, is one of the most important to have in your workout regiment. Along with the obvious benefits to your leg muscles, your core also works a lot to stabilize during this lift.</p>
          <a className="animate-text">Learn more: https://www.youtube.com/watch?v=UpsOJCh0p-o</a>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div className="tile">
        <img src={deadLift} />
        <div className="text">
          <h1>Deadlift</h1>
          <h2 className="animate-text">Is sumo deadlift a real deadlift?</h2>
          <p className="animate-text">The most divisive compound lift, deadlift may seem intimidating, but with proper form and technique, you're not any more likely to be injured doing a deadlift, and it still has tremendous benefits!</p>
          <a className="animate-text">Learn more: https://www.youtube.com/watch?v=714rtVpWXsw</a>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}
