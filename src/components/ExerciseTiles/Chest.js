import React from 'react'
import chestflies from '../../images/chestflies.gif';
import "../../styles/GlowingText.css";

export default function Chest() {
  return (
    <div>
      <div className="tile">
        <img src={chestflies} />
        <div className="text">
          <h1 className="glowingText">Chest Flies</h1>
          <h2 className="animate-text">Great for isolating your chest muscles!</h2>
          <p className="animate-text">The chest fly is a solid accessory pick during your workouts to isolate the chest muscles. Can be done with dumbbells or a machine.</p>
          <a href='https://www.youtube.com/watch?v=eozdVDA78K0' className="animate-text">Learn more here</a>

        </div>
      </div>
    </div>
  )
}