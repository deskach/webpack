import {FETCH_POSTS} from "../actions";
import _ from 'lodash';
import {DELETE_POST} from "../actions/index";

export default function (state = {}, action = {}) {
    switch (action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, "id");
        case DELETE_POST:
            return _.omit(state, action.payload);
    }

    return state;
}