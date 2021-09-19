
let loctionInput = document.getElementById("loction");
let findLocBtn = document.getElementById("findLoc");
let dayName = undefined;
let dayNum = undefined;
let monthName = undefined;
let locationName = "";
let currentWeather = '';
let conditionIcon = undefined;
let conditionText = "";
let windHumidity = undefined;
let windKM = undefined;
let maxTempDay1 = undefined;
let minTempDay1 = undefined;
let conditionIconDay1 = undefined;
let conditionTextDay1 = "";
let maxTempDay2 = undefined;
let minTempDay2 = undefined;
let conditionIconDay2 = undefined;
let conditionTextDay2 = "";

loctionInput.addEventListener("keyup", getWeatherCurrent);


async function getWeatherCurrent()
{
    country = loctionInput.value;
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=d83b3e6e4c304b67b56174939211809&q=${country}&days=3`);
    let result = await response.json();
    locationName = result.location.name;
    currentWeather = result.current.temp_c;
    conditionIcon = result.current.condition.icon;
    conditionText = result.current.condition.text;
    windHumidity = result.current.humidity;
    windKM = result.current.wind_kph;
    display(0);
    getWeatherDayOne()
    getWeatherDayTwo()
   
}


async function getWeatherDayOne()
{
    country = loctionInput.value;
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=d83b3e6e4c304b67b56174939211809&q=${country}&days=3`);
    let result = await response.json();
    maxTempDay1 = result.forecast.forecastday[1].day.maxtemp_c;
    minTempDay1 = result.forecast.forecastday[1].day.mintemp_c;
    conditionIconDay1 = result.forecast.forecastday[1].day.condition.icon;
    console.log(conditionIconDay1);
    conditionTextDay1 =  result.forecast.forecastday[1].day.condition.text;
    display(1);
}

async function getWeatherDayTwo()
{
    country = loctionInput.value;
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=d83b3e6e4c304b67b56174939211809&q=${country}&days=3`);
    let result = await response.json();
    maxTempDay2 = result.forecast.forecastday[2].day.maxtemp_c;
    minTempDay2 = result.forecast.forecastday[2].day.mintemp_c;
    conditionIconDay2 = result.forecast.forecastday[2].day.condition.icon;
    conditionTextDay2 =  result.forecast.forecastday[2].day.condition.text;
    display(2);
}



function display(num)
{
    if(num == 0)
    {
        getDate();
        document.querySelector(".day").innerHTML = dayName;
        document.querySelector(".numDay").innerHTML = dayNum;
        document.querySelector(".month").innerHTML = monthName;
        document.querySelector(".location").innerHTML = locationName;
        document.querySelector(".num").innerHTML = currentWeather;
        document.querySelector(".iconStatus").setAttribute("src", `https:${conditionIcon}`);
        document.querySelector(".custom").innerHTML = conditionText;
        document.querySelector(".humid").innerHTML = windHumidity;
        document.querySelector(".speedWind").innerHTML = windKM;
    }
    else if(num == 1)
    {
        document.querySelector(".day1").innerHTML = dayName1;
        document.querySelector(".iconStatusDay1").setAttribute("src", `https:${conditionIconDay1}`);
        document.querySelector(".maxNumDay1").innerHTML = maxTempDay1;
        document.querySelector(".minNumDay1").innerHTML = minTempDay1;
        document.querySelector(".customDay1").innerHTML = conditionTextDay1;
    }
    else {
        document.querySelector(".day2").innerHTML = dayName2;
        document.querySelector(".iconStatusDay2").setAttribute("src", `https:${conditionIconDay2}`);
        document.querySelector(".maxNumDay2").innerHTML = maxTempDay2;
        document.querySelector(".minNumDay2").innerHTML = minTempDay2;
        document.querySelector(".customDay2").innerHTML = conditionTextDay2;
    }
    
}





function getDate()
{
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    let d = new Date();
    dayName = days[d.getDay()];
    dayName1 = days[d.getDay() + 1];
    dayName2 = days[d.getDay() + 2];
    dayNum = d.getDate();
    monthName = monthNames[d.getMonth()];

}




(async function DefaultWeatherCurrent()
{
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=d83b3e6e4c304b67b56174939211809&q=cairo&days=3`);
    let result = await response.json();
    locationName = result.location.name;
    currentWeather = result.current.temp_c;
    conditionIcon = result.current.condition.icon;
    conditionText = result.current.condition.text;
    windHumidity = result.current.humidity;
    windKM = result.current.wind_kph;
    display(0);
})();

(async function DefaultWeatherDayOne()
{
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=d83b3e6e4c304b67b56174939211809&q=cairo&days=3`);
    let result = await response.json();
    maxTempDay1 = result.forecast.forecastday[1].day.maxtemp_c;
    minTempDay1 = result.forecast.forecastday[1].day.mintemp_c;
    conditionIconDay1 = result.forecast.forecastday[1].day.condition.icon;
    conditionTextDay1 =  result.forecast.forecastday[1].day.condition.text;
    display(1);
})();

(async function DefaultWeatherDayTwo()
{
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=d83b3e6e4c304b67b56174939211809&q=cairo&days=3`);
    let result = await response.json();
    maxTempDay2 = result.forecast.forecastday[2].day.maxtemp_c;
    minTempDay2 = result.forecast.forecastday[2].day.mintemp_c;
    conditionIconDay2 = result.forecast.forecastday[2].day.condition.icon;
    conditionTextDay2 =  result.forecast.forecastday[2].day.condition.text;
    display(2);
})();



