import React from 'react';

export class Toggle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const isToggleOn = this.props.isToggleOn;
    const toggle = this.props.minimizeShapeList;
    const text = isToggleOn?"ON":"OFF";

    return (
      <button onClick={toggle}>
          {text}
      </button>
    );
  }
}
