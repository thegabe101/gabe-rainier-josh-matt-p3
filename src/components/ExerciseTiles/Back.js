import React from "react";
import dumbellrow from '../../images/dumbellrow.gif';
import cablerow from '../../images/cablerow.webp';
import backextensions from '../../images/backextensions.gif';
import invertedrow from '../../images/invertedrow.webp';
import latpulldown from '../../images/latpulldown.gif';
import "../../styles/GlowingText.css";

export default function Back() {
    return (
        <div>
            <div className="tile">
                <img src={dumbellrow} />
                <div className="text">
                    <h1 className="glowingText">Dumbell Row</h1>
                    <h2 className="animate-text">Another classic essential accessory movement.</h2>
                    <p className="animate-text">The dumbbell row doesn't require any fancy equipment, maybe just the weight and a bench. Great for building size in your upper back.</p>
                    <a href="https://www.youtube.com/watch?v=djKXLt7kv7Q" className="animate-text">Learn more here</a>
                </div>
            </div>


            <div className="tile">
                <img src={cablerow} />
                <div className="text">
                    <h1 className="glowingText">Cable Row</h1>
                    <h2 className="animate-text">Just one of a million row variations.</h2>
                    <p className="animate-text">Working with the cable row can provide a few benefits over its dumbbell counterpart. You can customize the grip width, and constant tension through the whole movement are two big ones!</p>
                    <a href="https://www.youtube.com/watch?v=GZbfZ033f74" className="animate-text">Learn more here</a>
                </div>
            </div>

            <div className="tile">
                <img src={backextensions} />
                <div className="text">
                    <h1 className="glowingText">Back Extensions</h1>
                    <h2 className="animate-text">Protect your lumbar!</h2>
                    <p className="animate-text">Back extensions are an often forgotten excercise, but incredibly efficient at creating stronger lower back muscles, even without weight loading.</p>
                    <a href="https://www.youtube.com/watch?v=ph3pddpKzzw" className="animate-text">Learn more here</a>
                </div>
            </div>
            <div className="tile">
                <img src={invertedrow} />
                <div className="text">
                    <h1 className="glowingText">Inverted Row</h1>
                    <h2 className="animate-text">More row variations...</h2>
                    <p className="animate-text">Sort of a cousin to the pull-up. If you're struggling with doing pull-ups, the inverted row is a great excercise that will help you get your first pull-up!</p>
                    <a href="https://www.youtube.com/watch?v=hXTc1mDnZCw" className="animate-text">Learn more here</a>
                </div>
            </div>
            <div className="tile">
                <img src={latpulldown} />
                <div className="text">
                    <h1 className="glowingText">Lat pullDown</h1>
                    <h2 className="animate-text">Get the dorito back shape!</h2>
                    <p className="animate-text">A very effective accessory exercise for hitting the latissimus dorsi, another great one for building size, especially width in your upper back.</p>
                    <a href="https://www.youtube.com/watch?v=O94yEoGXtBY" className="animate-text">Learn more here</a>

                </div>
            </div>
        </div>
    )
}