class Weather {
  constructor(city, country) {
    this.apiKey = 'c1df0f69fefc0e94d0ca52b686dcbe46';
    this.city = city;
    this.country = country;
  }

  async getWeather() {
    const results = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=metric&APPID=${this.apiKey}`);
    const res = await results.json();
    return res;
  }

  changeLocation(city, state) {
    this.city = city;
    this.country = state;
  }
}
