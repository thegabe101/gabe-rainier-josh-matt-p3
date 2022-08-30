import React from 'react'
import shoulderpress from '../../images/shoulderpress.gif';
import dumbellpress from '../../images/dumbell-press.gif';
import skullcrushers from '../../images/skullcrushers.gif';
import barbellrow from '../../images/barbellrow.gif';
import dips from '../../images/dips.gif';
import lateralraise from '../../images/Lateral-Raise.gif';




export default function UpperBody() {
  return (
    <div>
      <div className="tile">
        <img src={shoulderpress} />
        <div className="text">
          <h1>Shoulder press</h1>
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
        <img src={dumbellpress} />
        <div className="text">
          <h1>Dumbbell press</h1>
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
        <img src={skullcrushers} />
        <div className="text">
          <h1>Skullcrushers</h1>
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
        <img src={barbellrow} />
        <div className="text">
          <h1>Barbell row</h1>
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
        <img src={dips} />
        <div className="text">
          <h1>Dips</h1>
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
        <img src={lateralraise} />
        <div className="text">
          <h1>Lateral raise</h1>
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