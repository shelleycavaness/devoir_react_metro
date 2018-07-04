import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Info from './Info.js'
import Input from './Input'

class App extends Component {
  state = {
    json: {},
    json2: {},
    dataInput: ""

  }
  getDataFromInput = (event) =>{
    //console.log(event.target.value)
    this.setState({
      dataInput: event.target.value
    })
  }
  clickBtn = () => {
    this.getDataFromApi2()
  }

  componentDidMount(){
    this.getDataFromApi();
    this.getDataFromApi2();
  }

  getDataFromApi= () =>{
    axios.get('https://api-ratp.pierre-grimaud.fr/v3/schedules/metros/9/croix+de+chavaux/A+R')
  .then((response) => {
    // handle success
    console.log(response);
    this.setState({
      json: response.data.result.schedules
    }, () =>{
      console.log(this.state.json)
    })

  })
  .catch((error) => {
    // handle error
    console.log(error);
  })
  }
//new api
getDataFromApi2= () =>{
  axios.get(`https://api-ratp.pierre-grimaud.fr/v3/schedules/metros/11/${this.state.dataInput === "" ? "rambuteau" : this.state.dataInput}/A+R`)
.then((response) => {
  // handle success
  console.log(response);
  this.setState({
    json2: response.data.result.schedules
  }, () =>{
    console.log(this.state.json2)
  })

})
.catch((error) => {
  // handle error
  console.log(error);
})
}



  beforeRender = () => {
    if(this.state.json[0] && this.state.json2[0]){
      return (
        <div>
        <Info station="croix de chavau" data={this.state.json}/> 
        <Info station={this.state.dataInput} data={this.state.json2}/> 
        </div>
      )
    }
  }

  render() {
    return (
      <div className="App">
        <h1>meteo</h1>
        
        <Input btnF={this.clickBtn} input={this.getDataFromInput} />
        {this.beforeRender()}
        
      </div>
    );
  }
}

export default App;
