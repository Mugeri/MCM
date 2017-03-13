import * as types from './actionTypes';

export const addDate = (mDate) => {
 return {
   type: types.ADD_DATE,
    mDate
  };
}

export const addNumber = (mNumber) => {
    return {
        type: types.ADD_NUMBER,
        mNumber
    };
}

export const addName = (mName) => {
    return {
        type: types.ADD_NAME,
        mName
    };
}
