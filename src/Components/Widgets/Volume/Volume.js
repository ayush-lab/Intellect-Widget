import { useEffect, useState } from 'react'
import'./Volume.css'

const Volume = ()=>{

    const [barLevel, setBarLevel] = useState(6);
    const [status, setStatus] = useState("Muted");

    const volumeHandler=(index)=>{
        setBarLevel(index+1)
    }

    useEffect(()=>{
        if(barLevel ===6) setStatus("Muted");

        else if(barLevel >3 ){
            setStatus("Low")
        }
        else if(barLevel === 3){
            setStatus("Medium")
        }
        else setStatus("High")

    },[barLevel])

    return(<div className="Volume_Wrapper">
        <p className="Volume_label" data-testid="volumeStatus">Volume level : <span>{status}</span></p>
        <div className="Volume">
            {[1,2,3,4,5].map((_,index)=>{
                return(  <div key={index} 
                              style={{background:barLevel <= index+1 ? "white" : "#819DA8"}}
                              onClick={()=>volumeHandler(index)} className={`bar bar${index+1}`}>
                         </div>)
            })}
         
        </div>


    </div>)
}

export default Volume;