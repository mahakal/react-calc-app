import React, { Component } from 'react';

class ScreenPanel extends Component {

  render() {
    return (
      <div>
        <input className="form-control text-right" type="text" value={this.props.text} style={{borderRadius: 0}} readOnly />
        <input className="form-control text-right" type="text" value={this.props.result} style={{borderRadius: 0}} readOnly />
      </div>
    )
  }

}

export default ScreenPanel;
