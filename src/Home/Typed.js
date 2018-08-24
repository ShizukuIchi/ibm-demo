import React from 'react';
import Typed from 'typed.js';

export default class TypedStrings extends React.Component {
  componentDidMount() {
    const options = {
      strings: ['貪婪老人', '南部災情', '豪雨特報', '組長好帥','停班停課', '吳宗憲兒子','孫安佐','治水失敗','亞運戰況'],
      typeSpeed: 60,
      backSpeed: 50,
      backDelay: 900,
      loop: true,
    };
    this.typed = new Typed(this.el, options);
  }
  componentWillUnmount() {
    this.typed.destroy();
  }
  render() {
    return (
      <div style={{ minHeight: '2em' }}>
        <span className={this.props.className} ref={r => (this.el = r)} />
      </div>
    );
  }
}
