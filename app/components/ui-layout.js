import { connect } from 'ember-redux';
import { filterPosts } from '../reducers/posts';

const stateToComputed = state => {
  return {
    posts: filterPosts(state),
    filter: state.posts.filter
  }
}

const dispatchToActions = dispatch => {
  return {
    filterWith: (author) => dispatch({type: 'POSTS:FILTER_POSTS', author})
  }
}

export default connect(stateToComputed, dispatchToActions)();
