import React, { Component } from "react";
import Digit from "./components/CountDown/DigitComponent/Digit";
import Title from "./components/TitleComponet/Title";
import CountDown from './components/CountDown/CountDown'
import Controller from "./components/Controller/Controller";


export default class App extends Component {

  state ={
    time:{
      min:0,
      sec:0,
      mili:0
    }
  }



  getStart=()=>{

  this.intervalId = setInterval (()=>{
      let min = this.state.time.min
      let sec = this.state.time.sec
      let mili = this.state.time.mili
  
      if (mili >= 10){
        sec = sec + 1
        mili = 0
      }
  
      if (sec >= 60){
        min = min + 1
        sec = 0
      }
  
      this.setState({
        ...this.state,
        time:{
        min,
        sec,
        mili: mili +1
        }
        
      })
    },100)
  
  }

  getPause =()=>{
    clearInterval(this.intervalId)
  }

  getReset =()=>{
    this.setState({
      time:{
        min:0,
        sec:0,
        mili:0
      }
    })
  }








  render() {
    return (
      <>
        <div className="container">
          <div className="row x">
            <div className="col-sm-8 offset-sm-2">
              <Title />
              <CountDown time={this.state.time }/>
              <Controller
               start={this.getStart.bind(this)}
               pause={()=>this.getPause()}
               reset={()=>this.getReset()}
               
               />
            </div>
          </div>
        </div>
      </>
    );
  }
}
