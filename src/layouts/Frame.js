import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Nav from './Nav'

class Frame extends Component {
  static propTypes = {
    children: PropTypes.element
  }
  render() {
    return (
      <div className='frame'>
        <section className='header'>
          <Nav />
        </section>
        <section>
          {this.props.children}
        </section>
      </div>
    )
  }
}

export default Frame
