import React from 'react';
import legpress from '../../images/legPress.gif';
import quadextension from '../../images/quad-extension.gif';
import hamstringcurl from '../../images/hamstringcurl.gif';
import calfraise from '../../images/calfraise.gif';

export default function Legs() {
    return (
        <div>
            <div className="tile">
                <img src={legpress} />
                <div className="text">
                    <h1>Leg press</h1>
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
                <img src={quadextension} />
                <div className="text">
                    <h1>Quad extension</h1>
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
                <img src={hamstringcurl} />
                <div className="text">
                    <h1>Hamstring curl</h1>
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
                <img src={calfraise} />
                <div className="text">
                    <h1>Calf raise</h1>
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
};