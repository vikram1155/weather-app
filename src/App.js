import './App.css';
import React from 'react'
import Weather from './app_component/weathercomp';
import Form from './app_component/formcomponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';

const API_key = "3d98d85878bdbb634ce3ca6800c1e730";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            city: undefined,
            country: undefined,
            temperature: undefined,
            min: undefined,
            max: undefined,
            desc: "",
            icon: undefined,
            humidity: undefined,
            pressure: undefined,
            error: false,
        };
        this.weatherIcon = {
            ThunderStorm: "wi-thunderstorm",
            Drizzle: "wi-sleet",
            Rain: "wi-storm-showers",
            Snow: "wi-snow",
            Atmosphere: "wi-fog",
            Clear: "wi-day-sunny",
            Clouds: "wi-day-fog"
        };
    }

    calCelcius(temp) {
        let cell = Math.floor(temp - 273.15);
        return cell;
    }

    get_WeatherIcon(icons, rangeId) {
        switch (true) {
            case rangeId >= 200 && rangeId <= 232:
                this.setState({ icon: this.weatherIcon.ThunderStorm });
                break;
            case rangeId >= 300 && rangeId <= 321:
                this.setState({ icon: this.weatherIcon.Drizzle });
                break;
            case rangeId >= 500 && rangeId <= 531:
                this.setState({ icon: this.weatherIcon.Rain });
                break;
            case rangeId >= 600 && rangeId <= 622:
                this.setState({ icon: this.weatherIcon.Snow });
                break;
            case rangeId >= 700 && rangeId <= 781:
                this.setState({ icon: this.weatherIcon.Atmosphere });
                break;
            case rangeId == 800:
                this.setState({ icon: this.weatherIcon.Clear });
                break;
            case rangeId >= 801 && rangeId <= 804:
                this.setState({ icon: this.weatherIcon.Clouds });
                break;


        }
    }

    getWeather = async(e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        if (city && country) {

            const api_call = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`
            );
            const response = await api_call.json();
            console.log(response);
            this.setState({
                city: `${response.name},${response.sys.country}`,
                temperature: this.calCelcius(response.main.temp),
                min: this.calCelcius(response.main.temp_min),
                max: this.calCelcius(response.main.temp_max),
                desc: response.weather[0].description,
                humidity: response.main.humidity,
                pressure: response.main.pressure,
                error: false,

            });
            this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);

        } else {
            this.setState({ error: true })
        }


    };

    render() {
        return ( 
        <div className = "App" >
            <br></br> 
            <h1> Weather App </h1><br></br>
            <Form loadWeather = { this.getWeather }
            error = { this.state.error }/> 
            <Weather 
            city = { this.state.city }
            temperature = { this.state.temperature }
            min = { this.state.min }
            max = { this.state.max }
            desc = { this.state.desc }
            humidity = { this.state.humidity }
            pressure = { this.state.pressure }
            weatherIcon = { this.state.icon }
            />
            </div>
        )
    }
}
export default App;
