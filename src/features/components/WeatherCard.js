import React from 'react'
import {  useSelector } from 'react-redux';

export default function WeatherCard() {
    const data = useSelector(state=>state.weather.data)
    const locations = useSelector(state=>state.weather.locations)
    const {current} = data
    const {forecast} = data
    const {district,city,province,state,countryName} = locations.locations[0].address
 
    
    return (
        <>
            {current && <div className="container">


                <h1 className="text-center mt-4 mb-0 text-danger-emphasis">Weather For    { district}</h1>
                <div className="text-center text-white my-2">{city} | {province} | {state} | {countryName}</div>
                <p className="text-center mb-0 text-white fs-1 ">
                    <img
                        className="mb-2 "
                        src={current.condition.icon}
                        alt="logo"
                    />{" "}
                    {current.temp_c}°c
                </p>
                <div className="text-center fs-4 pt-0 mt-0 mb-4 text-white">{current.condition.text}</div>



                <div className="row row-cols-1 row-cols-md-3 mb-3 mt-3 text-center">
                    <div className="col ">
                        <div className="card mb-4 rounded-3 shadow-sm">
                            <div className="card-header py-3">
                                <h4 className="my-0 fw-normal text-primary">Temperature</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">{current.temp_c}&deg;c</h1>
                                <div>cloud : {current.cloud}%</div>
                                <div>feels like : {current.feelslike_c}°c</div>
                                <div>max Temperature : {forecast.forecastday[0].day.maxtemp_c}°c</div>
                                <div>Min Temperature : {forecast.forecastday[0].day.mintemp_c}°c</div>
                                <div>last updated : {current.last_updated}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm">
                            <div className="card-header py-3">
                                <h4 className="my-0 fw-normal text-primary">Humidity</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">
                                    53%
                                </h1>
                                <div>condition Mist</div>
                                <div>Humidity : 53%</div>
                                <div>Sun Jun 18 2023</div>
                                <div>time : 15:21 PM</div>
                                <div>time zone : Asia/Kolkata</div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-4 rounded-3 shadow-sm">
                            <div className="card-header py-3">
                                <h4 className="my-0 fw-normal text-primary">wind</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="card-title pricing-card-title">13 km/hr</h1>
                                <div>wind degree : 110°c</div>
                                <div>wind direction : ESE</div>
                                <div>wind speed : 13 km/hr</div>
                                <div>lattitude : 28.63</div>
                                <div>longitude : 77.22</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}
