import { connect } from 'react-redux';
import React, { Component } from 'react';


class BandInput extends Component {

  constructor() {
    super();
    this.state = {
      name:''
    };
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name:'',
    });
  }

  render() {
    console.log("input props", this.props)
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event)}>
          <input type='text' onChange={this.handleChange} value={this.state.name} />
          <input type='submit' />
        </form>
      </div>
    )
  }
}
// const mapStateToProps = state => {
//   return {
//     bands: state.bands
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData})
//   }
// }

export default BandInput;
