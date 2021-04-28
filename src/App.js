// import logo from './logo.svg';
import './App.css';
import Park from './Park'
import React from 'react'
import ParkForm from './ParkForm'

class App extends React.Component {

  state = {
    parks: []
  };

  componentDidMount() {
    console.log('component mounted')

    fetch('http://localhost:3001/parks')
    .then(response => response.json())
    .then(parksData => {
      this.setState({parks: parksData})
    })
  }

  addPark = (arrayOfParks) => {
    let parkPackage = {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        'Accept' : 'application/json'
      },
      body: JSON.stringify(arrayOfParks)
    }
    fetch('http://localhost:3001/parks', parkPackage)
    .then(res=> res.json())
    .then(postedPark=>{
      this.setState({
        parks: [...this.state.parks, postedPark],
      });
    })
  };

  toggleVisit = (parkArg) => {
    
    fetch(`http://localhost:3001/parks/${parkArg.id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json',
      },
      body: JSON.stringify({
        Visited: !parkArg.Visited
      })
    })
    .then(response => response.json())
    .then(updatedPark => {
      this.setState({
        parks: this.state.parks.map(park => park.id === updatedPark.id ? updatedPark : park)
      })
    })

  }

  render() {
    return(
      <div className="container">
        
        <img src="https://www.pngkit.com/png/full/905-9055418_nancy-and-steve-move-pawnee-parks-and-rec.png" style={{width: "400px"}} alt=""></img>
        <br></br>
        <br></br>
        <ParkForm addPark={this.addPark} />
        {this.state.parks.map(park => {
          return <Park park={park} toggleVisit={this.toggleVisit}/>
        })}
        
      </div>
    )
  }
}

export default App;
