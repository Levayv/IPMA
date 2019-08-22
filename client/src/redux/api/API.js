import react from "react";
import axios from 'axios';

class API_core {
    static lastReqID=0;
    static _doAfterSomething(method, topic, id = "", payload ,toDoAfterPromise) {
        console.debug("API CORE ------------------------------------------------------");
        console.debug("method is " + method);
        console.debug("topic is " + topic);
        console.debug("id is " + id);
        console.debug("api link is " + (topic + "/" + id));
        // if (payload) {
        //     console.log("payload is ...");
        //     for (let prop of payload) {
        //         console.log("props - " + prop);
        //     }
        // }
        
        let reqID = ++API_core.lastReqID;
        console.debug("API " + method + " request ... (ReqID=" + reqID+")");
        const axiosInstance = axios.create({
            baseURL: "http://"
                + process.env.REACT_APP_BACKEND_IP_PORT
                + "/api"
        });
        // axiosInstance.post();
        axiosInstance[method](topic + "/" + id , payload)
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
                console.debug(error);
                toDoAfterPromise(false, undefined)
            })
            .finally(() => {
                    console.debug("API (ReqID="+reqID+") completed");
                }
            )
    }
    // static _doDebugWrapper(method, topic, id = "", payload ,toDoAfterPromise){
    //     try{
    //         API_core._doAfterSomething(method, topic, id = "", payload ,toDoAfterPromise);
    //     }catch (e) {
    //         console.log(e);
    //     }
    // }
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
        API_core._doAfterSomething("get", topic,
            undefined,
            undefined,
            toDoAfterPromise11);
    }
    static doAfterGet(topic, id, toDoAfterPromise22) {
        API_core._doAfterSomething("get", topic,
            id,
            undefined,
            toDoAfterPromise22);
    }
    static doAfterPost(topic, payload, toDoAfterPromise33) {
        API_core._doAfterSomething("post", topic,
            undefined,
            payload,
            toDoAfterPromise33);
    }
    static doAfterPut(topic, id, payload, toDoAfterPromise44) {
        API_core._doAfterSomething("put", topic,
            id,
            payload,
            toDoAfterPromise44);
    }
    static doAfterDelete(topic, id, toDoAfterPromise55) {
        API_core._doAfterSomething("delete", topic,
            id,
            undefined,
            toDoAfterPromise55);
    }
}

export default API;