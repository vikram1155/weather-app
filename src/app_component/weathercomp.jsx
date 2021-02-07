import React from 'react'
 
const Weather = (props) => {
    return (
        <div className="container">
           <div className="cards">
           <p><br></br></p>
           <h3>{props.city}</h3>
           <h5 className="py-4">
                <i className= {` wi ${props.weatherIcon} display-4`}></i>
           </h5>
           
           {minmax(props.min,props.max,props.temperature,props.humidity,props.pressure)}
           <h3 className="py-2">
               {props.desc}<br></br>
              
           </h3>
           </div>
                         
        </div>
    );
}
function minmax(min,max,temp,humidity,pressure ){
    if(min && max && temp){
        return(
            <div>
                <h3>
                <div>
                <span>{temp}&deg;C</span>
                <span><h6>(Ideal temp)</h6></span><br></br>
                </div>
                <span className="px-4">{min}&deg;C</span>
                <span className="px-4">{max}&deg;C</span>
            </h3>
            <h6>
                <span className="px-4">(min) </span>
                <span className="px-4">(max)</span>
                <span>
                <h6>
               <br></br>
               <span className="px-4" >
               Humidity : {humidity}%
               </span>
               
               <span className="px-3" >
               Pressure : {pressure} Pa
               </span>
               
               </h6>
                </span>
            </h6>

            </div>
           
        )

    }

   
}

export default Weather;