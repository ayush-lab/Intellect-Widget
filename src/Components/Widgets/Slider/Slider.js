import CircleProgress from '../../CircleProgress/CircleProgress'
import styles from './Slider.module.css'
import { useState, useEffect } from 'react'

const Slider = ()=>{

    const [progress, setProgress] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [size, setSize] = useState(150)
    
    const circularProgress=(value)=>{
        if(value === '') return '';
        let progress = (value)*10;
        return progress;
    }

    const SliderInputHandler=(event)=>{
        setProgress(event.target.value)
    }

    useEffect(() => {
        window
        .matchMedia("(max-width: 400px)")
        .addEventListener('change', e => setIsMobile(e.matches));

        return ()=>{
            window
            .matchMedia("(max-width: 400px)")
            .removeEventListener('change',e => setIsMobile(e.matches));
        }
    
      }, []);

    useEffect(() => {
      
        if(isMobile){
            setSize(120)
        }
        else setSize(150)
      
      }, [isMobile]);



    return(<div className={styles.Slider_Wrapper}>
    <div className={styles.Slider}>
        <div className={styles.Slider_container}>
            <div className={styles.outer_circle}>   
                <div className={styles.outer_main_circle}>
                    <CircleProgress 
                        data-testid="circularProgress"
                        setProgress={setProgress} 
                        progress={circularProgress(progress)}
                        trackWidth={5} 
                        indicatorWidth={5}
                        size={size}
                    />
                </div>
            </div>


            <div className={styles.Slider_input}>
                <input 
                    style={{background:"#6CD1DC"}} 
                    type="range" 
                    min="0" 
                    max="10"
                    value={progress==='' ? 0 : progress}
                    onChange={SliderInputHandler}/>
            </div>
        </div>
    </div>
    </div>)
}

export default Slider