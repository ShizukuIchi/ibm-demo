import React, { Component } from 'react';

import Typed from './Typed' 
import './index.css';
import coffee from './coffee.jpg'

export default class Home extends Component {
  state = {
    full: true,
  };
  onKeyPress = e => {
    if(e.key === 'Enter') {
      this.search.style.transition = 'all 1s';
      this.search.style.top = '5.3em';
      this.setState({
        full: false,
      })
      this.props.onSearch(e.target.value)
    }
  }
  render() {
    return (
      <div className={this.state.full ? "page" : 'page-header'}>
        <div className="header">
          <div className="header-logo">LOGOOOO</div>
          <div ref={r => this.holder = r} id="input-holder" />
          <div className="header-item">About</div>
          <div className="header-item">Contact</div>
          <div className="header-item">Login</div>
        </div>
        <section className={this.state.full ? 'content' : 'content fade-out'}>
          <div className="slogan">Search with high reliability, and fast.</div>
          <Typed className="typed"></Typed>
        </section>
        <div className="search" ref={r => this.search = r}>
          <div className="search-icon"></div>
          <input  type="text" placeholder="Search for something...." onKeyPress={this.onKeyPress} />
        </div>
      </div>
    );
  }
}
