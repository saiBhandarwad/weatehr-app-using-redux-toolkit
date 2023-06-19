import axios from 'axios'
export function fetchWeather(lat,long) {
  return  axios.get(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${lat},${long}&days=3`,{
    headers: {
      'X-RapidAPI-Key': '79c6b4dd17msh99173bc8048d9b6p1aba9bjsn473741998611',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  })
  
}
export function fetchCoordinates(city) {
  return  axios.get(`https://api.myptv.com/geocoding/v1/locations/by-text?searchText=${city}&apiKey=RVVfOTI3ZTRiN2FjY2IzNGRiYmE4MGI4Y2I2ODkwNmMyMjQ6NjBkZDM5NTktN2Y5MC00OTRhLWEyMGUtMTMzYmFhYjJmNTRl`)
  
}
