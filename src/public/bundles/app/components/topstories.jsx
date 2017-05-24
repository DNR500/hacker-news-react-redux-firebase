import React from 'react';
import StoryList from './story-list';
import LoadingIndicator from './loading-indicator';

export default class Topstories extends React.Component {

  componentDidMount() {
    this.props.onGetTopstories();
  }

  topstoriesRenderable() {
    return this.props.topstories.length > 0;
  }

  render() {
    const { topstories } = this.props;

    return this.topstoriesRenderable() ?
          (<StoryList stories={topstories} />)
        :
          (<LoadingIndicator />);
  }
}

Topstories.propTypes = {
  onGetTopstories: React.PropTypes.func.isRequired,
  topstories: React.PropTypes.array.isRequired,
};
