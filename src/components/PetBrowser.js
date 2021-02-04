import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return <div className="ui cards" >
      {this.props.petData.map(pet => <Pet pet={pet}/>)}
      {/* {this.props.petData.filter((pet) => <pet === petData/> )} */}
    </div>
  }
}

export default PetBrowser

