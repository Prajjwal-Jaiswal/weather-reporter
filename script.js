const options = {
    method: 'GET',
    // headers: {
    //     'X-RapidAPI-Key': 'ce81e7b4abmshbd4675fe84fe8afp1c477djsn82992a1bfc13',
    //     'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    // }
};
//api returns results in form of object containing all weather reports
const getWeather = (city) => {
    cityname.innerHTML = city
    // fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    fetch('http://api.weatherapi.com/v1/current.json?key=e8ec3627656642179ad172322222412&q=' + city, options)
        .then(response => response.json())
        .then(response => {

            // cloud_pct.innerHTML = response.cloud_pct


            feelslike_c.innerHTML = response.current.feelslike_c
            gust_kph.innerHTML = response.current.gust_kph
            humidity.innerHTML = response.current.humidity
            uv.innerHTML = response.current.uv
            precip_mm.innerHTML = response.current.precip_mm
            pressure_mb.innerHTML = response.current.pressure_mb
            temp_c.innerHTML = response.current.temp_c
            temp_f.innerHTML = response.current.temp_f
            wind_degree.innerHTML = response.current.wind_degree
            wind_dir.innerHTML = response.current.wind_dir
            wind_kph.innerHTML = response.current.wind_kph
            wind_mph.innerHTML = response.current.wind_mph

            //         feelslike_c.innerHTML = response.current.feelslike_c 
            //         feelslike_f.innerHTML = response.current.feelslike_f
            //       gust_kph.innerHTML = response.current.gust_kph
            //        gust_mph.innerHTML = response.current.gust_mph
            //       humidity.innerHTML = response.current.humidity
            //        is_day.innerHTML = response.current.is_day
            //        last_updated.innerHTML = response.current.last_updated
            //         last_updated_epoch.innerHTML = response.current.last_updated_epoch
            //         precip_in.innerHTML = response.current.precip_in
            //       precip_mm.innerHTML = response.current.precip_mm
            //         pressure_in.innerHTML = response.current.pressure_in
            //       pressure_mb.innerHTML = response.current.pressure_mb
            //       temp_c.innerHTML = response.current.temp_c
            //        temp_f.innerHTML = response.current.temp_f
            //         uv.innerHTML = response.current.uv
            //        vis_km.innerHTML = response.current.vis_km
            //        vis_miles.innerHTML = response.current.vis_miles
            //        wind_degree.innerHTML = response.current.wind_degree
            //         wind_dir.innerHTML = response.current.wind_dir
            //       wind_kph.innerHTML = response.current.wind_kph
            //       wind_mph.innerHTML = response.current.wind_mph


            // temp.innerHTML = response.temp
            // feels_like.innerHTML = response.feels_like
            // humidity.innerHTML = response.humidity
            // min_temp.innerHTML = response.min_temp
            // max_temp.innerHTML = response.max_temp
            // wind_speed.innerHTML = response.wind_speed
            // wind_degrees.innerHTML = response.wind_degrees
            // sunrise.innerHTML = response.sunrise
            // sunset.innerHTML = response.sunset
            // temp2.innerHTML=response.temp
            // humidity2.innerHTML=response.humidity
            // wind_speed2.innerHTML=response.wind_speed

            console.log(response)
        })

        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault() //prevents default reload
    getWeather(city.value) //when submit clicked check weather for a particular city
})

getWeather("Delhi")//BY DEFAULT CALLED FOR DELHI

function displayTime() {
    time = new Date();
    console.log(time);
    document.getElementById('time').innerHTML = time;
}
setInterval(displayTime, 1000);
