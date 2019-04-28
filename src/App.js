import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

noteInterval
circleInterval
constructor(){
    super()
    this.audioContext = new AudioContext();
    this.anyNote = this.audioContext.createOscillator()
    this.biquadFilter = this.audioContext.createBiquadFilter()
  }

  componentDidMount(){
    const canvas = this.refs.canvas
    canvas.height = 525
    canvas.width = 1000
    const ctx = canvas.getContext("2d")
    // const ctxTwo = canvas.getContext("2d")
    ctx.fillStyle = '#b2ff59'
    ctx.fillRect(0,0,1000,75)
    ctx.fillStyle = '#eeff41'
    ctx.fillRect(0,75,1000,75)
    ctx.fillStyle = '#64ffda'
    ctx.fillRect(0,150,1000,75)
    ctx.fillStyle = '#18ffff'
    ctx.fillRect(0,225,1000,75)
    ctx.fillStyle = '#ff4081'
    ctx.fillRect(0,300,1000,75)
    ctx.fillStyle = '#ffa726'
    ctx.fillRect(0,375,1000,75)
    ctx.fillStyle = '#03a9f4'
    ctx.fillRect(0,450,1000,75)
    ctx.fillStyle = '#e53935'
    ctx.fillRect(0,525,1000,75)

    ctx.beginPath()
    // ctx.moveTo(200, 300)
    // ctx.lineTo(75, 400)
    ctx.strokeStyle = "blue"
    ctx.stroke()
  }
state={
  frequency:0,
  coordX: 0,
  coordY: 0
}

handleDrawCircles=(event)=>{
  console.log(event.clientX);
  this.circleInterval = setInterval(()=>this.handleDrawArc(event), 100)
}

handleDrawArc=(event)=>{

  const canvas = this.refs.canvas
  const ctx = canvas.getContext("2d")

  for (var i = 0; i < 1; i++) {
    let x = this.state.coordX
    let y = this.state.coordY
    let realX = (window.innerWidth - canvas.width)/2

    let colorNum = Math.floor(Math.random() * 6) + 0
    let colors = ["green", "red", "blue", "orange", "purple", "pink"]
    console.log(colorNum);
    ctx.beginPath()
    ctx.arc(x -realX, y, 30, Math.PI * 2, false)
    ctx.strokeStyle = colors[colorNum]
    ctx.stroke()
    console.log("hi");
  }

}
handleClearRect=()=>{
  const canvas = this.refs.canvas
  const ctx = canvas.getContext("2d")
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#b2ff59'
  ctx.fillRect(0,0,1000,75)
  ctx.fillStyle = '#eeff41'
  ctx.fillRect(0,75,1000,75)
  ctx.fillStyle = '#64ffda'
  ctx.fillRect(0,150,1000,75)
  ctx.fillStyle = '#18ffff'
  ctx.fillRect(0,225,1000,75)
  ctx.fillStyle = '#ff4081'
  ctx.fillRect(0,300,1000,75)
  ctx.fillStyle = '#ffa726'
  ctx.fillRect(0,375,1000,75)
  ctx.fillStyle = '#03a9f4'
  ctx.fillRect(0,450,1000,75)
  ctx.fillStyle = '#e53935'
  ctx.fillRect(0,525,1000,75)

}

handleInterval=()=>{
  this.handleDrawArc()
   this.noteInterval = setInterval(this.handleNotePlay, 200)
}

handleClearInterval=()=>{
  clearInterval(this.noteInterval)
  clearInterval(this.circleInterval)
  this.handleClearRect()

}

handleNotePlay=()=>{
  let osc = this.audioContext.createOscillator()
  osc.frequency.value = this.state.frequency
  osc.connect(this.audioContext.destination)
  osc.start()
  setTimeout(()=>osc.disconnect(), 100)

}

handleFreqSelect=(event)=>{
  this.setState({
    coordX: event.pageX,
    coordY: event.pageY
  })
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

handleClearNote = ()=>{
clearInterval(this.noteInterval)
}





  render() {

    return (
      <div className="App">
      sup
      <canvas ref="canvas" id="canvas" onMouseOver={(event)=>this.handleDrawCircles(event)} onMouseLeave={this.handleClearInterval} onMouseMove={(event)=>this.handleFreqSelect(event)} onMouseDown={this.handleInterval} onMouseUp={this.handleClearNote}/>

      </div>
    );
  }
}

export default App;
