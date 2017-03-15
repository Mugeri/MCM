import * as types from '../actions/actionTypes';

const menu = {
  home: true,
  about: false,
  marathon: false,
  gallery: false,
  contact: false,
};

export default (state=menu, action) => {
    switch (action.type) {
        case types.UPDATE_MENU:
            return Object.assign({}, state, action.menu);

        default:
            return state;
        }
}
