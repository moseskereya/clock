import React, { Component } from 'react';
class App extends Component {
  constructor(){
    super()
    this.state=({
      year:2019,
      name:"Moses",
      M_month:'Mar',
      month:1,
      day:1,
      week:1,
      hour:12,
      Minute:1,
      second:1,
      M_months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Spt","Oct","Nov","Dec"],
    })
  }

 componentWillMount(){
   setInterval(()=>{
     let time= new Date()
     this.setState({
      M_month:this.state.M_months[time.getUTCMonth()],
      month:time.getMonth()+1,
      day:time.getDate(),
      week:time.getDay(),
      hour:time.getHours(),
      Minute:time.getMinutes(),
      second:time.getSeconds()
     })
   },1000)

 }
  array = length => Array.from({length}).map((v, k) => k).map(x=>x+1);
  addPreZero = num =>{
    if(num>=10)return num
    return '0'+num
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className='msg'>
            <div  className='year'>
            <span>
            {this.state.name} - 
            {this.state.year}
            </span> 
            </div>
          </div>
          <div className='M_month'>
          {`${this.state.M_month}`}
          </div>
          <div className='box'>

           

            {this.array(12).map((x,index)=>{
              return (
                <div key={index} className={`month item ${index===(this.state.month-1)?"active":""}`} style={{transform: `rotate(${index*30-30*(this.state.month-1)}deg)`}}>
                  {`${x} month`}
                </div>
              )
            })}

            {this.array(30).map((x,index)=>{
              return (
                <div key={index} className={`day item ${index===(this.state.day-1)?"active":""}`} style={{transform: `rotate(${index*12-12*(this.state.day-1)}deg)`}}>
                  {`${x} day`}
                </div>
              )
            })}

            {this.array(7).map((x,index)=>{
              return (
                <div key={index} 
                className={`week item ${index===(this.state.week-1)?"active":""}`} 
                style={{transform: `rotate(${index*(360/21)-(360/21)*(this.state.week-1)}deg)`}}>
                  {`week ${x}`}
                </div>
              )
            })}

            {this.array(24).map((x,index)=>{
              return (
                <div key={index} 
                className={`hour item ${index===(this.state.hour-1)?"active":""}`} 
                style={{transform: `rotate(${index*(360/24)-(360/24)*(this.state.hour-1)}deg)`}}>
                  {`${x} hr`}
                </div>
              )
            })}

            {this.array(60).map((x,index)=>{
              return (
                <div key={index} 
                className={`Minute item ${index===(this.state.Minute-1)?"active":""}`} 
                style={{transform: `rotate(${index*(360/60)-(360/60)*(this.state.Minute-1)}deg)`}}>
                  {`${x} min`}
                </div>
              )
            })}

            {this.array(60).map((x,index)=>{
              return (
                <div key={index} 
                className={`second item ${index===(this.state.second-1)?"active":""}`} 
                style={{transform: `rotate(${index*(360/60)-(360/60)*(this.state.second-1)}deg)`}}>
                  {`${x} sec`}
                </div>
              )
            })}
          </div>
        </header>
      </div>
    );
  }
}

export default App;