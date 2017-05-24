import React from 'react';
import StoryListItem from './story-list-item';

const StoryList = ({ stories }) => (
  <div className="container stories-container">
    <ul className="stories-list">
      {
        stories.map(item => <StoryListItem story={item} key={item.id} />)
      }
    </ul>
  </div>
);


StoryList.propTypes = {
  stories: React.PropTypes.array,
};

export default StoryList;

