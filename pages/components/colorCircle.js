import React from "react";

const ColorCircle = ({ color }) => {
    const circleStyle = {
        width: '18px',
        height: '18px',
        borderRadius: '50%',
        backgroundColor: color,
        display: 'inline-block',
       
        
    }
    return <div style={circleStyle}></div>
}

export default ColorCircle;