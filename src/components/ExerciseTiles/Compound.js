import React from 'react'
import benchPress from '../../images/benchpress.gif';
import deadLift from '../../images/dead-lift.gif';
import squat from '../../images/squatgif.gif';
import "../../styles/GlowingText.css";

export default function Compound() {
  return (
    <div>
      <div className="tile">
        <img src={benchPress} />
        <div className="text">
          <h1 className="glowingText">Bench Press</h1>
          <h2 className="animate-text">The staple chest excercise!</h2>
          <p className="animate-text">The bench press is the most well known chest excercise. It's one of the three compound movements in lifting.</p>
          <a href='https://www.youtube.com/watch?v=GkA-maBl-vU' className="animate-text">Learn more here</a>
        </div>
      </div>


      <div className="tile">
        <img src={squat} />
        <div className="text">
          <h1 className="glowingText">Squat</h1>
          <h2 className="animate-text">Stereotypically neglected by men.</h2>
          <p className="animate-text">The squat, another of the three compound movements, is one of the most important to have in your workout regiment. Along with the obvious benefits to your leg muscles, your core also works a lot to stabilize during this lift.</p>
          <a href='https://www.youtube.com/watch?v=UpsOJCh0p-o' className="animate-text">Learn more here</a>
        </div>
      </div>

      <div className="tile">
        <img src={deadLift} />
        <div className="text">
          <h1 className="glowingText">Deadlift</h1>
          <h2 className="animate-text">Is sumo deadlift a real deadlift?</h2>
          <p className="animate-text">The most divisive compound lift, deadlift may seem intimidating, but with proper form and technique, you're not any more likely to be injured doing a deadlift, and it still has tremendous benefits!</p>
          <a href='https://www.youtube.com/watch?v=714rtVpWXsw' className="animate-text">Learn more here</a>
        </div>
      </div>
    </div>
  )
}
