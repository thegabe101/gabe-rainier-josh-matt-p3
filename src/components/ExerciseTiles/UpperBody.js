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
          <h2 className="animate-text">Grow boulder shoulders!</h2>
          <p className="animate-text">The shoulder press is a great movement for building overhead strength, and targetting the shoulder muscles. Translates well to bench press strength as well!</p>
          <a className="animate-text">Learn more: https://www.youtube.com/watch?v=qEwKCR5JCog</a>
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
          <h1>Dumbbell Press</h1>
          <h2 className="animate-text">Old school chest blaster.</h2>
          <p className="animate-text">The dumbbell press and it's many variations are essential accessories in hitting the different regions of the chest, w/ the flat, incline, and decline variations.</p>
          <a className="animate-text">Learn more: https://www.youtube.com/watch?v=Y_7aHqXeCfQ</a>
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
          <h2 className="animate-text">Not as scary as it sounds.</h2>
          <p className="animate-text">Skullcrushers are a classic accessory that are great for gaining tricep strength and size.</p>
          <a className="animate-text">Learn more: https://www.youtube.com/watch?v=d_KZxkY_0cM</a>
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
          <h1>Barbell Row</h1>
          <h2 className="animate-text">A classic for growing back thickness!</h2>
          <p className="animate-text">One of the most well known lifting excercises around, the barbell row is a simple exercise which also comes with several variations, that is very effective for increasing the size and strength of your back.</p>
          <a className="animate-text">Learn more: https://www.youtube.com/watch?v=axoeDmW0oAY</a>
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
          <h2 className="animate-text">Great without weight!</h2>
          <p className="animate-text">Dips are a great excercise that can be done with or without weight, to target the chest and shoulders. Extremely beneficial for those who train olympic weightlifting.</p>
          <a className="animate-text">Learn more: https://www.youtube.com/watch?v=yN6Q1UI_xkE</a>
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
          <h1>Lateral Raise</h1>
          <h2 className="animate-text">Shoulder blaster!</h2>
          <p className="animate-text">A great shoulder accessory for targeting the side delts, and growing those boulder shoulders.</p>
          <a className="animate-text">Learn more: https://www.youtube.com/watch?v=v_ZkxWzYnMc</a>
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