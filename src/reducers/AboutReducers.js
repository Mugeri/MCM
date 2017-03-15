import * as types from '../actions/actionTypes';

export default (state={}, action) => {
    switch (action.type) {
        case types.ADD_CONTENT:
            return Object.assign({}, state, action.mContent);

        default:
            return state;
        }
    }
