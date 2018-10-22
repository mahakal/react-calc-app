import React, { Component } from 'react';
import './ScreenPanel.css';

class ScreenPanel extends Component {

  render() {
    return (
      <div className="d-flex flex-column screen-group">
          <input className="screen screen1" type="text" value={this.props.text} readOnly />
          <input className="screen screen2" type="text" value={this.props.result} readOnly />
      </div>
    )
  }

}

export default ScreenPanel;
