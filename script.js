const options = {  // options -object which mentions which request it is - 'GET'(fetch) or 'POST'(upload)
    method: 'GET',
};

//api returns results in form of object containing all weather reports

const getWeather = (city) => { // get weather- arrow function with parameter city 
    cityname.innerHTML = city  //cityname =id in which name of city is stored
    fetch('http://api.weatherapi.com/v1/current.json?key=e8ec3627656642179ad172322222412&q=' + city, options) //fetch function generating response from api url
        .then(response => response.json()) //arrow function -response converting to json format
         
        // another arrow function
        .then(response => {  

        // feelslike_c =id in HTML where we store the response
        // response is in form of object which contains another object-current inside which we have the data
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

            console.log(response)    //PRINTS RESPONSE IN CONSOLE SECTION
        })
        
        .catch(err => console.error(err)); //if any error then catch
}

submit.addEventListener("click", (e) => {   //submit=id of button
    e.preventDefault() //prevents default reload
    getWeather(city.value) //when submit clicked check weather for a particular city
})

getWeather("Delhi")//BY DEFAULT CALLED FOR DELHI

//function to display time
function displayTime() { 
    time = new Date(); //generates current time
    console.log(time); //prints time in console section
    document.getElementById('time').innerHTML = time; //time=id in HTML where we store the time
}
setInterval(displayTime, 1000); //call same func after every 1s
