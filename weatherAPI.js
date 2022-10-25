/* OpenWeather API Key: a9758a7d8f7c146587d3cfa992ccba5d
base = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&units=imperial&appid${apiKey}` 
*/
const apiKey = "a9758a7d8f7c146587d3cfa992ccba5d"

// convert metric temp to imperial: const fahr = (temp *9) /5 + 32;

const showWeather = async (data) => {
    data.stopPropagation();
    data.preventDefault();
    
    let city = data.target.city.value
    let state = data.target.state.value

    // let high = data.main.temp_max
    // let low = data.main.temp_min
    // let humidity = data.main.humidity
    // let forecast = data.weather[0].main    
    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state},us&appid=${apiKey}&units=metric`, 
        {method: 'GET',
    })
    const result = await response.json() 
    console.log(result)
           
    document.getElementById('loc').innerHTML = result.name
    document.getElementById('desc').innerHTML = result.weather[0].description
    document.getElementById("high-f").innerHTML = Math.round(result.main.temp_max * 9/5 + 32) + '&#176;' +'F'
    document.getElementById("high-c").innerHTML = Math.round(result.main.temp_max) + '&#176;' +'C'
    document.getElementById("low-f").innerHTML = Math.round(result.main.temp_min * 9/5 + 32) + '&#176;' +'F'
    document.getElementById("low-c").innerHTML = Math.round(result.main.temp_min) + '&#176;' +'C'
    document.getElementById("hum").innerHTML = result.main.humidity + "%"
    document.getElementById("feels-f").innerHTML = Math.round(result.main.feels_like * 9/5 + 32) + '&#176;' +'F'
    document.getElementById("feels-c").innerHTML = Math.round(result.main.feels_like) + '&#176;' +'C'
        
};

document.getElementById('search').addEventListener('submit', showWeather)
// const form = document.querySelector('#form');

// form.addEventListener('click', (event) => {
//     // let searchBtn = document.querySelector("submit")
//     console.log("submit clicked")
//     event.preventDefault();
//     let city = document.getElementById('city');
//     let state = document.getElementById('state')
  
//     console.log(city.value, state.value);
//     showWeather(city.value, state.value)
// });

// document.getElementById('submit').addEventListener('submit', showWeather)
