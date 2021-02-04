import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }
//changes the state to what it needs ot be when clicked
onChangeType = (event) => {
console.log(event.target.value)
  this.setState({
    filters: {
      type: event.target.value
    }

  })
}

onFindPetsClick = () => {
  // fetch('/api/pets')
  console.log("hellooooo")
  let URL
  if (this.state.filters.type === "all") {
    URL = '/api/pets'
  } else {
    URL = '/api/pets?type=' + this.state.filters.type
  }
  fetch(URL)
    .then(res => res.json())
    .then(data => this.setState({pets: data}))
}

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
              
            </div>
            <div className="twelve wide column">
              <PetBrowser petData={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
