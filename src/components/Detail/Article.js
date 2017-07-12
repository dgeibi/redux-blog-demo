import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Article.css'

class Article extends Component {
  static propTypes = {
    id: PropTypes.string,
    article: PropTypes.object,
    loading: PropTypes.bool,
    error: PropTypes.bool,
    fetchArticle: PropTypes.func
  }

  componentDidMount() {
    this.props.fetchArticle(this.props.id)
  }

  render() {
    const { loading, error, article } = this.props

    if (error) {
      return <p styleName='message'>Oops, something is wrong.</p>
    }

    if (loading) {
      return <p styleName='message'>Loading ...</p>
    }

    const { title, date, description, content } = article

    return (
      <div>
        <h1 styleName='title'>
          {title}
        </h1>
        <span styleName='date'>
          {date}
        </span>
        <p styleName='desc'>
          {description}
        </p>
        <article styleName='article'>
          {content}
        </article>
      </div>
    )
  }
}

export default Article
