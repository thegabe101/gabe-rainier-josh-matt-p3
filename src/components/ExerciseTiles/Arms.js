import React from "react";
import bicepcurls from "../../images/bicepcurls.gif";
import tricepextensions from "../../images/tricepextensions.webp";
import "../../styles/GlowingText.css";

export default function Arms() {


    return (
        <div>
            <div className="tile">
                <img src={bicepcurls} />
                <div className="text">
                    <h1 className="glowingText">Bicep curls</h1>
                    <h2 className="animate-text">Curls for girls!</h2>
                    <p className="animate-text">The classic dumbbell bicep curl has been a staple of pro bodybuilders for decades, but doing bicep work can also encourage better elbow health as well to complement your pressing movements.</p>
                    <a href="https://www.youtube.com/watch?v=i1YgFZB6alI" className="animate-text" target="_blank">Learn more here</a>
                </div>
            </div>

            <div className="tile">
                <img src={tricepextensions} />
                <div className="text">
                    <h1 className="glowingText">Tricep extensions</h1>
                    <h2 className="animate-text">The tricep represents a larger portion of the arm than the bicep.</h2>
                    <p className="animate-text">So go work your triceps if you want bigger arms! Tricep extensions are a staple tricep accessory exercise.</p>
                    <a href="https://www.youtube.com/watch?v=popGXI-qs98" className="animate-text" target="_blank">Learn more here</a>
                </div>
            </div>
        </div>
    )
}