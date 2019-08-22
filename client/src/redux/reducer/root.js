// todo import actions
// todo define initialState and assign it as default value to root function
// todo wrong action logicly read_all vs read
import {CRUD_READ_ALL} from "../action-types";
import {CRUD_READ} from "../action-types";
import {FORM_DATA_UPDATE} from "../action-types";
import {FORM_DATA_UPDATE_NAME} from "../action-types";
import {FORM_DATA_UPDATE_LINK} from "../action-types";
import {DIABOLICAL_REDIRECT} from "../action-types";

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
    if (action.type === FORM_DATA_UPDATE) {
        const nameOfProperty = Object.keys(action.payload)[0];
        const value = action.payload[nameOfProperty];
        // console.log("Reducer test start");
        // console.log("name = "+nameOfProperty);
        // console.log("value = "+value);
        let match;
        match = "name";
        if (nameOfProperty === match){
            // console.log("Reducer match - name");
            return Object.assign({}, state, {
                    formData:{
                        name: action.payload.name,
                        link: state.formData.link,
                    }
                }
            )
        }
        match = "link";
        if (nameOfProperty === match){
            // console.log("Reducer match - link");
            return Object.assign({}, state, {
                    formData:{
                        name: state.formData.name,
                        link: action.payload.link,
                    }
                }
            )
        }
        // console.log("Reducer test end");
    }
    if (action.type === DIABOLICAL_REDIRECT) {
        
        // return Object.assign({}, state, {
        //         formData:{
        //             name: state.formData.name,
        //             link: action.payload.link,
        //         }
        //     }
        // )
    } 
    
    // if (action.type === FORM_DATA_UPDATE_NAME) {
    //     console.log("THIS IS BUG !!! link");
    //     return Object.assign({}, state, {
    //             formData:{
    //                 name: action.payload.name,
    //                 link: state.formData.link,
    //             } 
    //         }
    //     )
    // }
    // if (action.type === FORM_DATA_UPDATE_LINK) {
    //     console.log("THIS IS BUG !!! link");
    //     return Object.assign({}, state, {
    //             formData:{
    //                 name: state.formData.name,
    //                 link: action.payload.link,
    //             }
    //         }
    //     )
    // }

    // switch (action.type) {
    //     case ADD_ARTICLE:
    //         break;
    //    
    // }
    return state;
}

export default root;
