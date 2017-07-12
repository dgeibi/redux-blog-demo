import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Preview.css'

class Preview extends Component {
  constructor(props) {
    super(props)
    this.handleNavigate = this.handleNavigate.bind(this, this.props.link)
  }

  static propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
    push: PropTypes.func
  }

  handleNavigate(link, e) {
    e.preventDefault()
    this.props.push(link)
  }

  render() {
    return (
      <article className='article-preview-item'>
        <h1 className='title'>
          <a href={`#${this.props.link}`} onClick={this.handleNavigate}>
            {this.props.title}
          </a>
        </h1>
        <span className='date'>
          {this.props.date}
        </span>
        <p className='desc'>
          {this.props.description}
        </p>
      </article>
    )
  }
}

export default Preview
