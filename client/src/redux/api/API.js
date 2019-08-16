import react from "react";
import axios from 'axios';

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
    static doAfterGetAll(topic, toDoAfterPromise) {
        API._doAfterSomething("get", topic, undefined, toDoAfterPromise);
    }
    static doAfterGet(topic, id, toDoAfterPromise) {
        API._doAfterSomething("get", topic, id, toDoAfterPromise);
    }

    static doAfterPost(topic, id, toDoAfterPromise) {
        API._doAfterSomething("post", topic, id, toDoAfterPromise);
    }

    static lastReqID=0;
    static _doAfterSomething(method, topic, id = "", toDoAfterPromise) {
        let reqID = ++API.lastReqID;
        console.debug("API " + method + " request ... (ReqID=" + reqID+")");
        const ax = axios.create({
            baseURL: "http://"
                + process.env.REACT_APP_BACKEND_IP_PORT
                + "/api"
        });
        ax[method](topic + "/" + id)
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

export default API;