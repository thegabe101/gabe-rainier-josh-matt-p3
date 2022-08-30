import React from 'react'
import chestflies from '../../images/chestflies.gif';

export default function Chest() {
  return (
    <div>
      <div className="tile">
        <img src={chestflies} />
        <div className="text">
          <h1>Chest flies</h1>
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