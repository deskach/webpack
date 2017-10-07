import {CLEAR_ERROR, CREATE_ERROR} from '../actions/types';

export default (state = '', action) => {
    switch (action.type) {
        case CREATE_ERROR:
            return 'There was an error inserting this record';
        case CLEAR_ERROR:
            return '';
        default:
            return state;
    }
};
