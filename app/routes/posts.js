import fetch from 'fetch';
import { route } from 'ember-redux';

const model = (dispatch) => {
  return fetch('https://www.reddit.com/r/emberjs.json').then(r => r.json()).then(payload => dispatch({type: 'POSTS:FETCH_API', payload}));
}

export default route({model})();
