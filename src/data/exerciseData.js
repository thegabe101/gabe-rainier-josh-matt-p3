import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';

const exerciseData = [
    {
        id: "Compound",
        name: "Bench Press"
    },
    {
        id: "Compound",
        name: "Squat"
    },
    {
        id: "Compound",
        name: "Deadlift"
    },
    {
        id: "Upper Body",
        name: "Shoulder Press"
    },
    {
        id: "Upper Body",
        name: "Dumbbell Press"
    },
    {
        id: "Chest",
        name: "Chest Flies"
    },
    {
        id: "Arms",
        name: "Tricep Extensions"
    },
    {
        id: "Upper Body",
        name: "Skullcrushers"
    },
    {
        id: "Arms",
        name: "Bicep Curl"
    },
    {
        id: "Upper Body",
        name: "Barbell Row"
    },
    {
        id: "Back",
        name: "Dumbbell Row"
    },
    {
        id: "Core",
        name: "Lat Pulldown"
    },
    {
        id: "Back",
        name: "Cable Row"
    },
    {
        id: "Legs",
        name: "Leg Press"
    },
    {
        id: "Legs",
        name: "Quad Extension"
    },
    {
        id: "Legs",
        name: "Hamstring Curl"
    },
    {
        id: "Legs",
        name: "Calf Raise"
    },
    {
        id: "Core",
        name: "Hip Thrust"
    },
    {
        id: "Core",
        name: "Hip Abduction"
    },
    {
        id: "Core",
        name: "Hip Adduction"
    },
    {
        id: "Upper Body",
        name: "Dips"
    },
    {
        id: "Core",
        name: "Planks"
    },
    {
        id: "Upper Body",
        name: "Lateral Raise"
    },
    {
        id: "Back",
        name: "Face Pull"
    },
    {
        id: "Back",
        name: "Back Extensions"
    },
    {
        id: "Back",
        name: "Inverted Row"
    }
]


export default function getExerciseData() {
    return exerciseData;
};
