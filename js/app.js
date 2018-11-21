const weather = new Weather('Villanueva', 'HN');
const ui = new UI();

document.addEventListener('DOMContentLoaded', loadWeather);

document.getElementById('w-change-btn').addEventListener('click'), (e) => {
  const state = document.getElementById('city').value;
  const country = document.getElementById('country').value;
});

function loadWeather() {
  weather.getWeather()
    .then(res => ui.updateUI(res))
    .catch(err => console.log(err))

}
