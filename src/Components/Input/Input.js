const InputBox = props => {

    let {
      testId,
      value,
      ProgressInputHandler
    } = props
  
    
     
      return (
        <>
          <input 
            data-testid={testId}
            type="text" 
            value={value}
            onChange={ProgressInputHandler} 
        />
            
        </>
      )
    }
  
    export default InputBox