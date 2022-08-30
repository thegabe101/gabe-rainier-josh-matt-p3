import React from 'react';
import legpress from '../../images/legPress.gif';
import quadextension from '../../images/quad-extension.gif';
import hamstringcurl from '../../images/hamstringcurl.gif';
import calfraise from '../../images/calfraise.gif';
import hipabduction from '../../images/hipabduction.gif';
import hipthrust from '../../images/hipthrust.gif';

export default function Legs() {
    return (
        <div>
            <div className="tile">
                <img src={legpress} />
                <div className="text">
                    <h1>Leg Press</h1>
                    <h2 className="animate-text">You should still squat!</h2>
                    <p className="animate-text">Unfortunately, the leg press isn't capable of replacing the squat, but it is a great accessory to focus working only your legs without the weightbearing on your back!</p>
                    <a className="animate-text">Learn more: https://www.youtube.com/watch?v=iqxZO3xod2I</a>
                    <div className="dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>


            <div className="tile">
                <img src={quadextension} />
                <div className="text">
                    <h1>Quadricep Extension</h1>
                    <h2 className="animate-text">A great leg workout finisher!</h2>
                    <p className="animate-text">The quad extension is a great isolation excercise for your legs, targetting specifically the quadriceps muscle. Strengthening your quads can also promote better knee health!</p>
                    <a className="animate-text">Learn more: https://www.youtube.com/watch?v=ljO4jkwv8wQ</a>
                    <div className="dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>

            <div className="tile">
                <img src={hamstringcurl} />
                <div className="text">
                    <h1>Hamstring Curl</h1>
                    <h2 className="animate-text">Leg curls for girls!</h2>
                    <p className="animate-text">Another great leg isolation excercise to be done at the end of your leg days, this isolates the hamstring, which often times is hard to feel working while squatting for example.</p>
                    <a className="animate-text">Learn more: https://www.youtube.com/watch?v=0a_fVS2s4Ho</a>
                    <div className="dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>

            <div className="tile">
                <img src={calfraise} />
                <div className="text">
                    <h1>Calf Raise</h1>
                    <h2 className="animate-text">Great for healthier ankles!</h2>
                    <p className="animate-text">Calf raises are a staple for getting bigger and stronger calves. Strengthening your calves can increase explosiveness for athletes, and promote ankle health.</p>
                    <a className="animate-text">Learn more: https://www.youtube.com/watch?v=-qsRtp_PbVM</a>
                    <div className="dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>

            <div className="tile">
                <img src={hipabduction} />
                <div className="text">
                    <h1>Hip abduction</h1>
                    <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
                    <p className="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
                    <a className="animate-text">Learn more: https://www.youtube.com/watch?v=yeKv5oX_6GY</a>
                    <div className="dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className="tile">
                <img src={hipthrust} />
                <div className="text">
                    <h1>Hip thrust</h1>
                    <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
                    <p className="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
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
};