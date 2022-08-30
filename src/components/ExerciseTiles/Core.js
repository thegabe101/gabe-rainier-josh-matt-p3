import React from 'react'
import planks from '../../images/planks.webp';

export default function Core() {
  return (
    <div>
      <div className="tile">
        <img src={planks} />
        <div className="text">
          <h1>Planks</h1>
          <h2 className="animate-text">Strengthen your core.</h2>
          <p className="animate-text">Core strength is key in lifting, and in your daily life as well. Good core strength can strengthen your abdominal bracing, which protect your spine while lifting, whether it be weightlifting, or picking up your groceries from the ground.</p>
          <a className="animate-text">Learn more: https://www.youtube.com/watch?v=yeKv5oX_6GY</a>
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