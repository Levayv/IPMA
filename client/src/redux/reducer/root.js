// todo import actions
// todo define initialState and assign it as default value to root function

import {CRUD_READ_ALL} from "../action-types";
const initState = {
    something: ""
};
function root(state = initState, action){
    console.debug("RootReducer: action type is " + action.type);
    
    if (action.type === CRUD_READ_ALL) {
        return Object.assign({}, state, {
            // something: state.something.concat(action.payload)
            something: action.payload.something
        });
    }
    // switch (action.type) {
    //     case ADD_ARTICLE:
    //         break;
    //    
    // }
    return state;
}
export default root;
