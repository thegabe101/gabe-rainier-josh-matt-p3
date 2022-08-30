import React from "react";
import bicepcurls from "../../images/bicepcurls.gif";
import tricepextensions from "../../images/tricepextensions.webp";

export default function Arms() {
    return (
        <div>
            <div className="tile">
                <img src={bicepcurls} />
                <div className="text">
                    <h1>Bicep curls</h1>
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
                <img src={tricepextensions} />
                <div className="text">
                    <h1>Tricep extensions</h1>
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