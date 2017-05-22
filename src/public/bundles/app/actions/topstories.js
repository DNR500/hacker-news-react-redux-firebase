import shuffle from './../utils/shuffle';
import ActionTypes from '../constants/action-types';
import database from './../data/database';

const requestTopstories = () => database.ref('/v0').child('topstories').once('value');

const select10StoriesAtRandom = snap => shuffle(snap.val()).slice(0, 10);

const requestStoryInfo = (storyIds) => {
  const storyRequests = storyIds.map(id => database.ref('/v0')
      .child(`item/${id}`)
      .once('value')
      .then(snap => snap.val()));
  return Promise.all(storyRequests);
};

const requestUserInfo = (stories) => {
  const userRequests = stories.map(story => database.ref('/v0')
      .child(`user/${story.by}`)
      .once('value')
      .then(snap => snap.val()));
  return Promise.all(userRequests).then(users => ({ users, stories }));
};

const formatData = ({ users, stories }) =>
  stories.map((story, i) => {
    const { title, url, time, score } = story;
    return {
      title,
      url,
      time,
      score,
      authorId: users[i].id,
      authorKarma: users[i].karma,
    };
  });

const orderByScore = stories => stories.sort((a, b) => a.score - b.score);

function getTopStoriesRequestedAction() {
  return {
    type: ActionTypes.GetTopStoriesRequested,
  };
}

function getTopStoriesRejectedAction(error) {
  return {
    type: ActionTypes.GetTopStoriesRejected,
    error,
  };
}

function getTopStoriesFulfilledAction(topstories) {
  return {
    type: ActionTypes.GetTopStoriesFulfilled,
    topstories,
  };
}

export default function getTopstories() {
  return (dispatch) => {
    dispatch(getTopStoriesRequestedAction());
    return requestTopstories()
      .then(select10StoriesAtRandom)
      .then(requestStoryInfo)
      .then(requestUserInfo)
      .then(formatData)
      .then(orderByScore)
      .then(completeStories =>
        dispatch(getTopStoriesFulfilledAction(completeStories)))
      .catch(error =>
        dispatch(getTopStoriesRejectedAction(error)));
  };
}
