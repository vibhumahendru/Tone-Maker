import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

interval
constructor(){
    super()
    this.audioContext = new AudioContext();
    this.anyNote = this.audioContext.createOscillator()
    this.biquadFilter = this.audioContext.createBiquadFilter()
  }

state={
  frequency:0
}

handleInterval=()=>{
   this.interval = setInterval(this.handleNotePlay, 100)
}

handleClearInterval=()=>{
  clearInterval(this.interval)
}

handleNotePlay=()=>{
  let osc = this.audioContext.createOscillator()
  osc.frequency.value = this.state.frequency
  osc.connect(this.audioContext.destination)
  osc.start()
  setTimeout(()=>osc.disconnect(), 100)

}

handleFreqSelect=(event)=>{
  if (event.pageY <= 75) {
      this.setState({
        frequency:440
      })
  }
  if (75<event.pageY && event.pageY < 150) {
    this.setState({
      frequency:523.251
    })
  }
  if (150<event.pageY && event.pageY<225) {
    this.setState({
      frequency:659.255
    })
  }
  if (225<event.pageY && event.pageY<300) {
    this.setState({
      frequency:698.456
    })
  }
  if (300<event.pageY && event.pageY<375) {
    this.setState({
      frequency:783.991
    })
  }
  if (375<event.pageY && event.pageY<450) {
    this.setState({
      frequency:880
    })
  }
  if (450<event.pageY && event.pageY<524) {
    this.setState({
      frequency:987.767
    })
  }
}





  render() {
    return (
      <div className="App">
      sup
      <canvas id="canvas" onMouseLeave={this.handleClearInterval} onMouseMove={(event)=>this.handleFreqSelect(event)} onMouseDown={this.handleInterval} onMouseUp={this.handleClearInterval}></canvas>
      </div>
    );
  }
}

export default App;
