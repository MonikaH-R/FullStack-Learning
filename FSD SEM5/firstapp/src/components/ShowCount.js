import React, { Component } from 'react'

export default class ShowCount extends Component {
  render() {
    return (
      <div>
        <h1>Hi I know the valueof count it is {this.props.c}</h1>
      </div>
    )
  }
}
