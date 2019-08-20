// todo import actions
// todo define initialState and assign it as default value to root function
// todo wrong action logicly read_all vs read
import {CRUD_READ_ALL, FORM_UPDATE_DATA} from "../action-types";
import {CRUD_READ} from "../action-types";

const initState = {
    something: "",
    list: [],
    bulkList: [],
    formData: {
        temp: "temppp",
        name: "",
        link: "",
    },
    page: null
};

function root(state = initState, action) {
    console.log("Reducer[Root]: Action type is " + action.type);
    console.debug("Reducer[Root]: Current state is ...");
    console.debug(state);
    console.debug("Reducer[Root]: Action payload is ...");
    console.debug(action.payload);
    if (action.type === CRUD_READ_ALL) {
        let data = action.payload.data;
        return Object.assign({}, state, {
                bulkList: action.payload.bulkData
            }
        )
    }
    if (action.type === CRUD_READ) {
        let data = action.payload.data;
        return Object.assign({}, state, {
                list: state.list.concat(action.payload.data)
            }
        )
    }

    if (action.type === FORM_UPDATE_DATA) {
        let data = action.payload.data;
        return Object.assign({}, state, {
                formData:{
                    temp: state.formData.temp.concat(action.payload.string)
                } 
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
