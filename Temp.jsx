import React, { useState } from "react";
// import TempInput from "./TempInput01";
import TempInput from "./TempInput02";
import Boil from "./Boil";
import './css.css'

function Temperature () {
    const [ temp, setTemp ] = useState(0)
    const [ scale, setScale ] = useState('C')
    return (
        <div>
            <h1>섭씨·화씨 변환기</h1>
            <div className="allWrap">
                <div className="programWrap">
                    <TempInput
                        inputScale = 'C'
                        setTemp = {setTemp}
                        setScale = {setScale}
                        temp = {temp}
                        scale = {scale}
                    />
                    <TempInput
                        inputScale = 'F'
                        setTemp = {setTemp}
                        setScale = {setScale}
                        temp = {temp}
                        scale = {scale}
                    />
                    <Boil 
                        temp = {temp}
                        scale = {scale}
                    />
                </div>
                <div className="noteWrap">
                    <div className="note01">
                        <p className="title">Note 01</p>
                        <ul>
                            <li>섭씨를 화씨로, 화씨를 섭씨로 변환시켜주는 프로그램</li>
                            <li>섭씨가 100도 이상일 때, 화씨가 212도 이상일 때 끓는 문구 변화</li>
                        </ul>
                    </div>
                    <div className="note02">
                        <p className="title">Note 02</p>
                        <ul>
                            <li>
                                컴포넌트를 3가지로 분류
                                <ul>
                                    <li>- 전체 컴포넌트</li>
                                    <li>- 하위컴포넌트1 (input영역)</li>
                                    <li>- 하위컴포넌트2 (끓는 문구 영역)</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="note03">
                        <p className="title">Note 03</p>
                        <ul>
                            <li>소수점 셋째 자리 까지만 출력</li>
                            <li>숫자 입력하다가 문자 입력시 출력안되게끔</li>
                            <li>문자부터 입력하는것 자체는 불가능</li>
                            <li>NaN이 나오지 않도록 조치</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Temperature