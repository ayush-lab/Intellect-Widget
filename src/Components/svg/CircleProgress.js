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
  radius = center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth),
  dashArray = 2 * Math.PI * radius,
  dashOffset = dashArray * ((100 - progress) / 100)

  const ProgressInputHandler=(e)=>{
    console.log(e.target.value)
    let value = e.target.value;

    if(isNaN(value)){
      alert("please enter a number")
      return;
    }

    if(value <=10)  
      setProgress(value)

    else 
      alert("Invalid input, Enter between 0 and 10. Your value = " + value)
  }
   
    return (
      <>
        <div
          className="svg-pi-wrapper"
          style={{ width: size, height: size }}
        >
          <svg
            className="svg-pi" 
            style={{ width: size, height: size }}
          >
            <circle
              className="svg-pi-track"
              // cx={center}
              // cy={center}
              // r={radius}
              fill="#446D7D"
              // stroke={trackColor}
              // strokeWidth={trackWidth}
            />
            <circle
              className={`svg-pi-indicator`}
              cx={center}
              cy={center}
              fill="transparent"
              r={radius}
              stroke={indicatorColor}
              strokeWidth={indicatorWidth}
              strokeDasharray={dashArray}
              strokeDashoffset={dashOffset}
              strokeLinecap={indicatorCap}
            />
          </svg>
          <div className="svg-pi-label">
            <span className="svg-pi-label__loading">
              <input 
                type="text" 
                value={Math.floor(progress/10)}
                onChange={ProgressInputHandler} 
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