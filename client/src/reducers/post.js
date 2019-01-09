// Redux
import { handleActions } from 'redux-actions'

// Actions
import actions from '../actions/post'

export const initialState = {
  isFetching: false,
  error: '',
  items: [],
}

export default handleActions(
  {
    [actions.post.request]: state => ({
      ...state,
      isFetching: true,
      error: '',
    }),

    [actions.post.success]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      items: payload.items,
    }),

    [actions.post.error]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload.error,
    }),
  },
  initialState,
)
