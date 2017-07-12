import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PreviewList from '../components/Home/PreviewList'
import { listActions } from './HomeRedux'
import { push } from 'react-router-redux'
import PropTypes from 'prop-types'

class Home extends Component {
  static propTypes = {
    list: PropTypes.object,
    listActions: PropTypes.object,
    push: PropTypes.func
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <PreviewList
          {...this.props.list}
          {...this.props.listActions}
          push={this.props.push}
        />
      </div>
    )
  }
}

export default connect(
  state => ({
    list: state.home.list
  }),
  dispatch => ({
    listActions: bindActionCreators(listActions, dispatch),
    push: bindActionCreators(push, dispatch)
  })
)(Home)
