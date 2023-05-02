import React from "react";

const ColorCircle = ({ color }) => {
    const circleStyle = {
        width: '18px',
        height: '18px',
        borderRadius: '50%',
        backgroundColor: color,
        display: 'inline-block',
        border:'2px solid',
        borderColor:'#000000'
    }
    return <div className="color-circle-row" style={circleStyle}></div>
}

export default ColorCircle;