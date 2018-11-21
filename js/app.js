const ui = new UI();
const storage = new Storage();

const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city, weatherLocation.country);
console.log(weatherLocation.city, weatherLocation.country);

document.addEventListener('DOMContentLoaded', loadWeather);

document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const state = document.getElementById('city').value;
  const country = document.getElementById('country').value;
});

document.getElementById('w-change-btn').addEventListener('click', () => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('country').value;

  // No update the weather object to change location
  weather.changeLocation(city, state);

  // Update object
  loadWeather();

  // Persist location data
  storage.setLocationData(city, state);

  $('#locModal').modal('hide');
});

function loadWeather() {
  weather.getWeather()
    .then(res => ui.updateUI(res))
    .catch(err => console.log(err))

}
