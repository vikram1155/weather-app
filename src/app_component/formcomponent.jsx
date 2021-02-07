import React from 'react';
import "./formstyle.css";

const Form = (props) => {
    return (
        <div className="container">
        <div>
            {props.error ? error() :null}
        </div>
        <form onSubmit={props.loadWeather}>
        <div className="row">
            <div className="col-md-4 offset-md-2">
                <input type="text" placeholder="City"  className="form-control" name="city" autoComplete="off" />
            </div>
            <div className="col-md-4">
                <input type="text" placeholder="Country" className="form-control" name="country" autoComplete="off" />
            </div>
            <div className="col-md-12 mt-md-0 "><br></br>
            <button class="btn btn-primary" type="submit">Get Results</button>
            </div> 
            </div>  

        </form>
                    
        </div>
    )
}

function error() {
    return(
        <div class="alert alert-warning" role="alert">
Please Enter City and Country!</div>
        
    );
    
};

export default Form;
