import React from "react";

function TempInput (props) {
    const handleChange = (e) => {
        props.setTemp(e.target.value)
        if (props.inputScale === 'C') {
            props.setScale('C')
        } else {
            props.setScale('F')
        }
    }
    let inputValue;
    if (isNaN(parseFloat(props.temp))) {
        inputValue = ''
    } else {
        if (props.inputScale === 'C') {
            if (props.scale === 'C') {
                inputValue = props.temp
            } else {
                inputValue = Math.round(((parseFloat(props.temp) - 32) * 5 / 9) * 1000) / 1000
            }
        } else {
            if (props.scale === 'C') {
                inputValue = Math.round((parseFloat(props.temp) * 9 / 5 + 32) * 1000) / 1000
            } else {
                inputValue = props.temp
            }
        }
    }
    return (
        <fieldset>
            <p>온도를 입력해주세요(단위:{props.inputScale === 'C' ? '섭씨C' : '화씨F'})</p>
            <input
                value={inputValue}
                onChange={handleChange}
            />
        </fieldset>
    )
}

export default TempInput