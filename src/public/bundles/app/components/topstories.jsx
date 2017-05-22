import React from 'react';

export default class Topstories extends React.Component {

  componentDidMount() {
    this.props.onGetTopstories();
  }

  render() {
    return (
      <div className="container">
        <pre>{ JSON.stringify(this.props.topstories, null, 2) }</pre>
      </div>
    );
  }
}

Topstories.propTypes = {
  onGetTopstories: React.PropTypes.func.isRequired,
  topstories: React.PropTypes.object.isRequired,
};
