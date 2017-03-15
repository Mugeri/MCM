import * as types from './actionTypes';

export const updateMenu = (menu) => {
 return {
   type: types.UPDATE_MENU,
    menu,
  };
}
