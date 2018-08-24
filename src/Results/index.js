import React, { Component } from 'react'
import './index.css';
import data from './data'

function api(keyword) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data[keyword] || 'nothing')
    },Math.random()*500+500)
  })
}

export default class Results extends Component {
  state={
    data: 'loading'
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps
  }
  componentDidUpdate(prevProps) {
    if (this.props.keyword !== prevProps.keyword) {
      this.setState({
        data: 'loading'
      })
      this.fetchData(this.props.keyword);
    }
  }
  componentDidMount() {
    this.fetchData(this.props.keyword)
  }
  fetchData = keyword => {
    api(keyword).then(data => {
      this.setState({data})
    })
  }
  render() {
    return (
      <section className="result">
        {this.props.children(this.state.data)}
      </section>
    )
  }
}
