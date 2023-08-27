import { useState } from "react"
import InputBox from "../Input/Input"
import "./CircleProgress.css"

const CircleProgress = props => {
  
  let {
    size = 150,
    progress = 0,
    trackWidth = 10,
    indicatorWidth = 10,
    indicatorColor = `white`,
    indicatorCap = `round`,
    setProgress
  } = props

  const center = size / 2,
  radius = center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth)
  const dashArray = 2 * Math.PI * radius;
  const dashOffset = dashArray * ((100 - progress) / 100)
 

  const [isInnerInput, setIsInnerInput] = useState(false)

  const ProgressInputHandler=(e)=>{
    setIsInnerInput(true);
    let value = e.target.value;

    if(isNaN(value)){
       alert("please enter a number")
       return;
    }

    if(value <=10) {
      setProgress(value)
    }

    else alert("Invalid input, Enter between 0 and 10. Your value = " + value)
    
  }

  const onBlueHandler = ()=>{
    console.log("out of the input box")
    setIsInnerInput(false)
  }

    return (
      <>
        <div
          data-testid="circularProgress"
          className="svg-pi-wrapper"
          style={{ width: size, height: size }}
        >
          <svg
            className="svg-pi" 
            style={{ width: size, height: size }}
          >
            <circle
              className="svg-pi-track"
              fill="#446D7D"
            />
            <circle
              className={`svg-pi-indicator`}
              fill="transparent"
              stroke={indicatorColor}
              strokeWidth={indicatorWidth}
              strokeDasharray={dashArray}
              strokeDashoffset={dashOffset}
              strokeLinecap={indicatorCap}
            />
          </svg>
          <div className="svg-pi-label">
            <span className="svg-pi-label__loading">
              <InputBox
                testId="sliderInput"
                value={isInnerInput? [progress ==='' ? '' : [progress === 0 ? 0 : Math.floor(progress/10)] ] : Math.floor(progress/10)}
                ProgressInputHandler={ProgressInputHandler}
                onBlur={onBlueHandler}
              />
            </span>
          </div>

          <div className="innermost-asset">
            
          </div>
          
        </div>
      </>
    )
  }

  export default CircleProgress