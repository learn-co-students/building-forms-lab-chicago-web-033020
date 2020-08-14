import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import Band from '../components/Band';
import { connect } from 'react-redux';



class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((band) => <Band band={band.name}/>)

  render() {
    console.log('container props', this.props)
    return(
      <div>
        <BandInput bands={this.props.bands} addBand={this.props.addBand}/>
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)