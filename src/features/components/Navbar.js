import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCoordinatesAsync, fetchWeatherAsync } from '../weather/weatherSlice'

export default function Navbar() {
  const [city,setCity]=useState("mumbai")
  const dispatch = useDispatch()
  const locations = useSelector(state=>state.weather.locations)

  const handleChange = async (city) =>{
    dispatch(fetchCoordinatesAsync(city))
    const {latitude,longitude} = await locations.locations[0].referencePosition
    dispatch(fetchWeatherAsync({lat:latitude,long:longitude}))
  }
  useEffect(()=>{
    handleChange(city)
    // eslint-disable-next-line
  },[])
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Link
            </a>
          </li>
        </ul>
        <div className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e)=>setCity(e.target.value)}
          />
          <button className="btn btn-outline-success" onClick={()=>handleChange(city)}>
            Search
          </button>
        </div>
      </div>
    </div>
  </nav>
  
    </>
  )
}
