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
          <h1>Bench press</h1>
          <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
          <p className="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
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
          <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
          <p className="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
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
          <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
          <p className="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
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
