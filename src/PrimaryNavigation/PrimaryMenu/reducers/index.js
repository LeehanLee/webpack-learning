import {INIT_PRIMARY_MENU} from "../actions/index.js";

export default function(state = [], action){
    switch (action.type) {
        case INIT_PRIMARY_MENU:
        return action.data;
    }
    return state;
}