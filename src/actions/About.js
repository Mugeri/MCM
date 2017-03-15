import * as types from 'actionTypes';

export const addContent = (mContent) => {
    return {
        type: types.ADD_CONTENT,
        mContent,
    };
}
