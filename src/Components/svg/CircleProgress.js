const CircleProgress = props => {

  let {
    size = 150,
    progress = 0,
    trackWidth = 10,
    trackColor = `#ddd`,
    indicatorWidth = 10,
    indicatorColor = `white`,
    indicatorCap = `round`,
    label = `Loading...`,
    labelColor = `#333`,
    spinnerMode = false,
    spinnerSpeed = 1,
    setProgress
  } = props

  const center = size / 2,
  radius = center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth),
  dashArray = 2 * Math.PI * radius,
  dashOffset = dashArray * ((100 - progress) / 100)

  const ProgressInputHandler=(e)=>{
    console.log(e.target.value)
    let value = e.target.value;

    console.log(value.toString().length)

    if(value <=10)  
      setProgress(value)

    else alert("Invalid input")
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
              cx={center}
              cy={center}
              fill="#446D7D"
              r={radius}
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
                // defaultValue={progress/100}
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