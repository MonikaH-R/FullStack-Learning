import React, { Component } from 'react'
import Greetings from './Components/Greetings'
import Introduction from './Components/Introduction'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hi I am App.js </h1>
        <Greetings/>
        <Introduction/>
      </div>
    )
  }
}