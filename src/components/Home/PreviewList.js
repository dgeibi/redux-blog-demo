import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Preview from './Preview'

class PreviewList extends Component {
  static propTypes = {
    error: PropTypes.bool,
    loading: PropTypes.bool,
    fetchArticles: PropTypes.func,
    articleList: PropTypes.arrayOf(PropTypes.object),
    push: PropTypes.func
  }

  componentDidMount() {
    this.props.fetchArticles()
  }

  render() {
    const { error, articleList, loading } = this.props
    if (error) {
      return <p className='message'>Oops, something is wrong.</p>
    }

    if (loading) {
      return <p className='message'>Loading ...</p>
    }

    return (
      <div>
        {articleList.map(x =>
          <Preview
            {...x}
            key={x.id}
            link={`detail/${x.id}`}
            push={this.props.push}
          />
        )}
      </div>
    )
  }
}

export default PreviewList
