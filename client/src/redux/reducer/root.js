// todo import actions
// todo define initialState and assign it as default value to root function
// todo wrong action logicly read_all vs read
import {CRUD_READ_ALL} from "../action-types";

const initState = {
    something: "",
    list: [],
    page: null
};

function root(state = initState, action) {
    console.log("Reducer[Root]: Action type is " + action.type);
    console.debug("Reducer[Root]: Current state is ...");
    console.debug(state);
    console.debug("Reducer[Root]: Action payload is ...");
    console.debug(action.payload);

    if (action.type === CRUD_READ_ALL) {
        // let newState = Object.assign({}, state);
        // newState.list.push(action.payload.data)
        // console.debug(" Reducer[Root]: New state will be ...");
        // console.debug(newState);
        // return newState;
        let data = action.payload.data;
        return Object.assign({}, state, {
                list: state.list.concat(action.payload.data)
            }
        )
    }
    // switch (action.type) {
    //     case ADD_ARTICLE:
    //         break;
    //    
    // }
    return state;
}

export default root;
