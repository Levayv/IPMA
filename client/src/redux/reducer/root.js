// todo import actions
// todo define initialState and assign it as default value to root function

import {CRUD_READ_ALL} from "../action-types";
const initState = {
    something: "" ,
    list: ["asd"] ,
    page: null
};
function root(state = initState, action){
    console.debug("RootReducer: action type is " + action.type);
    
    if (action.type === CRUD_READ_ALL) {
        let rv;
        if (state.list.length === 0){
            console.log("!!! list length = 0");
            console.log(state.list);
            rv = action.payload.data
        }else {
            console.log("!!! list length > 0");
            console.log(state.list);
            console.log(state.list.slice());
            rv = action.payload.data
        }
        return Object.assign({}, state, {
            // something: state.something.concat(action.payload)
            something: action.payload.something,
            list: rv
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
