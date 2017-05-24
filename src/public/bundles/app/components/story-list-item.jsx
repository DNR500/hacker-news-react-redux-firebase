import React from 'react';

const formatTime = (unixTime) => {
  const d = new Date(unixTime * 1000);
  const date = d.toLocaleDateString('en-GB');
  const time = d.toLocaleTimeString('en-GB');
  return `${date} ${time}`;
};

const StoryListItem = ({ story }) => {
  const { title, url, time, score, authorId, authorKarma } = story;

  return (
    <li className="stories-list__item">
      <h2 className="stories-list__item__title">{title}</h2>
      <div className="stories-list__item__details">
        <div className="stories-list__item__author-details">
          <span className="stories-list__item__author">by {authorId}</span>
          <span className="stories-list__item__karma">author karma: {authorKarma}</span>
        </div>
        <div className="stories-list__item__story-details">
          <span className="stories-list__item__time">Published <time>{formatTime(time)}</time></span>
          <span className="stories-list__item__score">score: {score}</span>
        </div>
      </div>
      <a href={url} className="stories-list__item__link">click for more</a>
    </li>
  );
};

StoryListItem.propTypes = {
  story: React.PropTypes.object.isRequired,
};

export default StoryListItem;
