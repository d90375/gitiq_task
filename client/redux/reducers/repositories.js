import axios from 'axios';

const getRepoUrl = (username) => `https://api.github.com/users/${username}/repos`;

const UPDATE_REPOS = 'UPDATE_REPOS';

const initialState = {
  username: '',
  list: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_REPOS:
      return { ...state, username: action.username, list: action.list };
    default:
      return state;
  }
}

export function getRepos(username) {
  return (dispatch) => {
    axios(getRepoUrl(username))
      .then(({ data }) => data)
      .then((result) => {
        dispatch({ type: UPDATE_REPOS, list: result.map((it) => it.name), username });
      });
  };
}
