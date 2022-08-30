import React from "react";
import dumbellrow from '../../images/dumbellrow.gif';
import cablerow from '../../images/cablerow.webp';
import backextensions from '../../images/backextensions.gif';
import invertedrow from '../../images/invertedrow.webp';

export default function Back() {
    return (
        <div>
            <div className="tile">
                <img src={dumbellrow} />
                <div className="text">
                    <h1>Dumbell row</h1>
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
                <img src={cablerow} />
                <div className="text">
                    <h1>Cable row</h1>
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
                <img src={backextensions} />
                <div className="text">
                    <h1>Back extensions</h1>
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
                <img src={invertedrow} />
                <div className="text">
                    <h1>Inverted row</h1>
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