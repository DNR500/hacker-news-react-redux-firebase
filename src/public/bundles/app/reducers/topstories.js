import ActionTypes from '../constants/action-types';

const topstories = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.GetTopStoriesFulfilled:
      return action.topstories || state.slice(0);
    default:
      return state;
  }
};

export default topstories;
