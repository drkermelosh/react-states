import React, { Component } from 'react'

export default class AnotherComponent extends Component {
  render() {
    return (
      <div>
        <p>{this.props.someproperty}</p>
      </div>
    )
  }
}
