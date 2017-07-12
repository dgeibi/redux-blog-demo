import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Article from '../components/Detail/Article'
import { articleAction } from './DetailRedux'

class Detail extends Component {
  static propTypes = {
    article: PropTypes.object,
    articleAction: PropTypes.object,
    match: PropTypes.object
  }

  render() {
    return (
      <div>
        <h1>Detail</h1>
        <Article
          {...this.props.articleAction}
          {...this.props.article}
          id={this.props.match.params.id}
        />
      </div>
    )
  }
}

export default connect(
  state => ({
    article: state.detail.article
  }),
  dispatch => ({
    articleAction: bindActionCreators(articleAction, dispatch)
  })
)(Detail)
