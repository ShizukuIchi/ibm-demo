import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Results from './Results';

class App extends Component {
  state = {
    home: true,
    keyword: '',
  };
  triggerSearch = keyword => {
    this.setState({
      home: false,
      keyword,
    });
  };
  renderResult = data => {
    if(typeof data === 'object') {
      return data.map(d => (
        <div key={d.id} className="data">
          <div className="data-left">
            <div style={{backgroundColor: reliabilityLevelColor(d.reliability)}} className="reliability">
              <div>Rank</div>
              <div>{d.reliability/10}</div>
            </div>
          </div>
          <div className="data-right">
            <div className="head">
              <div className="title">{d.title}</div>
              <div className="source">{d.source}</div>
            </div>
            <div className="text" align="left">{d.text}</div>
            <div className="interaction">討論程度：{d.interaction}</div>
          </div>
        </div>
      ))
    }
    return data
  };
  render() {
    return (
      <div className="App">
        <Home onSearch={this.triggerSearch} />
        {this.state.home || (
          <Results keyword={this.state.keyword}>
            {this.renderResult}
          </Results>
        )}
      </div>
    );
  }
}

function reliabilityLevelColor(percent) {
  switch(true) {
    case percent > 90:
      return 'green';
    case percent > 80:
      return 'greenyellow';
    case percent > 50:
      return 'yellow';
    case percent > 30:
      return 'orange';
    default:
      return 'red';
  }
}

export default App;
