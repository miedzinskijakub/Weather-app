import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import './App.css';
//Klucz do Api
const APIKey ='1355db29be412c4bf1999ff232919774';

class App extends Component {
state = {
  value: '',
  country: '',
  date: '',
  city: '',
  temp: '',
  weather: '',
  tempMin: '',
  tempMax: '',
  icon: '',
  err : 'false',
}

handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
}

// handleCitySubmit = (e) => {
//   e.preventDefault();

//   const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;

// fetch(API)
// .then(response => {
//   if(response.ok){
//     return response
//   }
//   throw Error("Nie udało się")
// }) //Spelniony
// .then(response => response.json())
// .then(data => {
//   const time = new Date().toLocaleString()

//   this.setState(state => ({
//   err: false,
//   date: time,
//   city: state.value,
//   sunrise: data.sys.sunrise,
//   sunset: data.sys.sunset,
//   temp: data.main.temp,
//   pressure: data.main.pressure,
//   wind: data.wind.speed,
// }))
// })
// .catch(err => {
//   console.log(err);
// this.setState(prevState => ({
//     err:true,
//     city: prevState.value
//     }))
//   }) //Odrzucony


// }

componentDidUpdate(prevProps, prevState){
  // console.log(prevState.value);
  // console.log(this.state.value);

  if(this.state.value.length === 0) return;
  if(prevState.value !== this.state.value){
    
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;

  fetch(API)
  .then(response => {
    if(response.ok){
      return response
    }
    throw Error("Nie udało się")
  }) //Spelniony
  .then(response => response.json())
  .then(data => {
    const time = new Date().toLocaleString()

    this.setState(state => ({
    err: false,
    date: time,
    city: data.name,
    temp: data.main.temp,
    tempMax: data.main.temp_max,
    tempMin: data.main.temp_min,
    weather: data.weather[0].main,
    icon: data.weather[0].icon,
    country: data.sys.country
  }))
  })
  .catch(err => {
    console.log(err);
  this.setState(prevState => ({
      err:true,
      city: prevState.value
      }))
    }) //Odrzucony
  }
}

render() {
  return (
    <div className="App">
      <Form
      value={this.state.value}
      change={this.handleInputChange}
      submit={this.handleCitySubmit}/>
      <Result weather={this.state}/>

    </div>
  );
}
}

export default App;
