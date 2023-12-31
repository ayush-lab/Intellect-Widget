const InputBox = props => {

    let {
      testId,
      value,
      ProgressInputHandler,
      onBlur
    } = props
  
    
     
      return (
        <>
          <input 
            data-testid={testId}
            type="text" 
            value={value}
            onChange={ProgressInputHandler} 
            onBlur={onBlur}
        />
            
        </>
      )
    }
  
    export default InputBox