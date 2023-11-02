import React from "react";

function Boil (props) {
    return (
        <p className="boiling">
            {
                props.scale === 'C' 
                ? props.temp >= 100 
                    ? '물이 끓습니다.'
                    : '물이 끓지 않습니다.'
                : props.temp >= 212
                    ? '물이 끓습니다.'
                    : '물이 끓지 않습니다.'
            }
        </p>
    )
}

export default Boil