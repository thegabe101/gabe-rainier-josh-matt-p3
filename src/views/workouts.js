import React from 'react';
import '../styles/Workouts.css';
import { useAuth0 } from '@auth0/auth0-react';
import benchPress from '../images/benchpress.gif';
import squat from '../images/squatgif.gif';
import deadLift from '../images/dead-lift.gif';


const ExternalApi = () => {


    //GMS all of the spans in these cards are for future text placement. 
    //GMS it's sort of clunky but the way we can add cards right now is simply alt-shifting these. we could write a loop to render more if we're drawing from a database later. 

    return (
        <div class="wrap">
            <div class="tile">
                <img src={benchPress} />
                <div class="text">
                    <h1>Bench press</h1>
                    <h2 class="animate-text">More lorem ipsum bacon ipsum.</h2>
                    <p class="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
                    <div class="dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>


            <div class="tile">
                <img src={squat} />
                <div class="text">
                    <h1>Squat</h1>
                    <h2 class="animate-text">More lorem ipsum bacon ipsum.</h2>
                    <p class="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
                    <div class="dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>

            <div class="tile">
                <img src={deadLift} />
                <div class="text">
                    <h1>Deadlift</h1>
                    <h2 class="animate-text">More lorem ipsum bacon ipsum.</h2>
                    <p class="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
                    <div class="dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default ExternalApi;