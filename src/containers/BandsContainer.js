import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'
import Bands from '../components/Bands';


class BandsContainer extends Component {

  render() {
    console.log(this.props)
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands}/>
      </div>
    )
  }
}

const mapInputToProps = (dispatch) => ({
  addBand: (band) => dispatch({type: "ADD_BAND", payload: band}) 
})

export default connect(state => ({bands: state.bands}), mapInputToProps)(BandsContainer)
