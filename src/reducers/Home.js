import * as types from '../actions/actionTypes';
const initialState={}

 export default (state=initialState, action) => {
     switch (action.type) {
         case types.ADD_NAME:
            return Object.assign({}, state, action.mName);

        case types.ADD_NUMBER:
            return Object.assign({}, state, action.mNumber);

        case types.ADD_DATE:
            return Object.assign({}, state, action.mDate);

         default:
            return state;

     }
 };
