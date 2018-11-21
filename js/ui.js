class UI {
  constructor() {
    this.w_location = document.getElementById('w-location');
    this.w_description = document.getElementById('w-desc');
    this.w_string =  document.getElementById('w-string');
    this.w_icon = document.getElementById('w-icon');
    this.w_humidity = document.getElementById('w-humidity');
    this.w_dewpoint = document.getElementById('w-dewpoint');
    this.w_wind = document.getElementById('w-wind');
  }

  updateUI(weatherObj) {
    this.w_location.textContent = `${weatherObj.name}, ${weatherObj.sys.country}`
    this.w_description.textContent = weatherObj.weather[0].description;
    this.w_string.textContent = `${weatherObj.main.temp} C`;
    // openweathermap uses a dedicated end point for images and icons
    this.w_icon.setAttribute('src', `https://openweathermap.org/img/w/${weatherObj.weather[0].icon}.png`);
    this.w_humidity.textContent = `Huminity: ${weatherObj.main.humidity} %`;
    this.w_dewpoint.textContent = `Pressure: ${weatherObj.main.pressure} hpa`;
    this.w_wind.textContent = `Wind: ${weatherObj.wind.speed} Km/h`;
    console.log(weatherObj);
  }
}
