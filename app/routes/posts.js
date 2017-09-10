import fetch from 'fetch';
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return fetch('https://www.reddit.com/r/emberjs.json')
      .then(r => r.json());
  }
});
