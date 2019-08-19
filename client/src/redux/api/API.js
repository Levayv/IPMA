import react from "react";
import axios from 'axios';

class API_core {
    static lastReqID=0;
    static _doAfterSomething(method, topic, id = "", toDoAfterPromise) {
        let reqID = ++API_core.lastReqID;
        console.debug("API " + method + " request ... (ReqID=" + reqID+")");
        const axiosInstance = axios.create({
            baseURL: "http://"
                + process.env.REACT_APP_BACKEND_IP_PORT
                + "/api"
        });
        axiosInstance[method](topic + "/" + id)
            .then(response => {
                    console.debug("API._doAfterSomething() Promise fulfilled");
                    toDoAfterPromise(true, response.data);
                }
            )
            .catch(error => {
                console.debug("API._doAfterSomething() Promise rejected");
                console.debug(error.toString());
                console.debug(error.message);
                console.debug(error.stack);
                toDoAfterPromise(false, undefined)
            })
            .finally(() => {
                    console.debug("API (ReqID="+reqID+") completed");
                }
            )
    }
}

class API {
    // todo ? still useless 
    static showConnectionStatus(isConnectionSuccess) {
        // only output to console yet 
        if (isConnectionSuccess) {
            console.log("Backend online");
        } else {
            console.log("Backend offline");
        }
    }
    
    static doAfterGetAll(topic, toDoAfterPromise11) {
        API_core._doAfterSomething("get", topic, undefined, toDoAfterPromise11);
    }
    static doAfterGet(topic, id, toDoAfterPromise22) {
        API_core._doAfterSomething("get", topic, id, toDoAfterPromise22);
    }
    static doAfterPost(topic, id, toDoAfterPromise33) {
        API_core._doAfterSomething("post", topic, id, toDoAfterPromise33);
    }
}

export default API;