const e = React.createElement;

function  Temperature() {
    const [ temp, setTemp ] = React.useState(0)
    const [ scale, setScale ] = React.useState('C')
    const changeDigiC = (e) => {
        setTemp(e.target.value)
        setScale('C')
    }
    const changeDigiF = (e) => {
        setTemp(e.target.value)
        setScale('F')
    }
    const c = 
        scale === 'C' 
        ? temp 
        : isNaN(parseFloat(temp))
            ? ''
            : Math.round(((parseFloat(temp) - 32) * 5 / 9) * 1000) / 1000
    const f = 
        scale === 'F' 
        ? temp
        : isNaN(parseFloat(temp))
            ? '' 
            : Math.round((parseFloat(temp) * 9 / 5 + 32) * 1000) / 1000
    
    return (
        <div className="bodyWrap">
            <h1>섭씨·화씨 변환기</h1>
            <div className="allWrap">
                <div className="programWrap">
                    <div className="program">
                        <p>온도를 입력해주세요(단위:섭씨C)</p>
                        <input
                            value={c}
                            onChange={changeDigiC}
                        />
                    </div>
                    <div className="program">
                        <p>온도를 입력해주세요(단위:화씨F)</p>
                        <input
                            value={f}
                            onChange={changeDigiF}
                        />
                    </div>
                    <p className="boiling">
                        {c >= 100
                        ? '물이 끓습니다.'
                        : '물이 끓지 않습니다.'
                        }
                    </p>
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
                    <div className="note04">
                        <a href='https://github.com/kimminsu0000/FCconverter.git' target='_blank'>code 보기</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <Temperature/>
);