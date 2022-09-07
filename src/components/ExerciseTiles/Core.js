import React from 'react'
import planks from '../../images/planks.webp';
import "../../styles/GlowingText.css";

export default function Core() {
  return (
    <div>
      <div className="tile">
        <img src={planks} />
        <div className="text">
          <h1 className="glowingText">Planks</h1>
          <h2 className="animate-text">Strengthen your core.</h2>
          <p className="animate-text">Core strength is key in lifting, and in your daily life as well. Good core strength can strengthen your abdominal bracing, which protect your spine while lifting, whether it be weightlifting, or picking up your groceries from the ground.</p>
          <a href="https://www.youtube.com/watch?v=yeKv5oX_6GY" className="animate-text">Learn more here</a>
        </div>
      </div>



    </div>
  )
}