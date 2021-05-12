import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import './App.css';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
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

componentDidUpdate(prevProps, prevState){


  if(this.state.value.length === 0) return;
  if(prevState.value !== this.state.value){

  
 
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${API_KEY}&units=metric`;

  fetch(API)
  .then(response => {
    if(response.ok){
      return response
    }
    throw Error("Can not find")
  }) 
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
    }) 
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
