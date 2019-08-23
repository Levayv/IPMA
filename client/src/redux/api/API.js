import axios from 'axios';

class API_core {
    // todo refactor commented logging functionality
    // static lastReqID=0;
    static _doAfterSomething(method, topic, id = "", payload ,toDoAfterPromise) {
        // console.log("API CORE ------------------------------------------------------");
        // console.log("method is " + method);
        // console.log("topic is " + topic);
        // console.log("id is " + id);
        // console.log("api link is " + (topic + "/" + id));
        // if (payload) {
        //     console.log("payload is ...");
        //     for (let prop in payload) {
        //         console.log("property - " + prop);
        //     }
        // }
        
        // let reqID = ++API_core.lastReqID;
        // console.debug("API " + method + " request ... (ReqID=" + reqID+")");
        const axiosInstance = axios.create({
            baseURL: "http://"
                + process.env.REACT_APP_BACKEND_IP_PORT
                + "/api"
        });
        // axiosInstance.post();
        axiosInstance[method](topic + "/" + id , payload)
            .then(response => {
                    toDoAfterPromise(true, response.data);
                }
            )
            .catch(error => {
                toDoAfterPromise(false, undefined)
            })
            .finally(() => {
                    // console.debug("API (ReqID="+reqID+") completed");
                }
            )
    }
}

class API {
    // GET --- all records
    static doAfterGetAll(topic, toDoAfterPromise11) {
        API_core._doAfterSomething("get", topic,
            undefined,
            undefined,
            toDoAfterPromise11);
    }
    // GET --- single record 
    static doAfterGet(topic, id, toDoAfterPromise22) {
        API_core._doAfterSomething("get", topic,
            id,
            undefined,
            toDoAfterPromise22);
    }
    // POST
    static doAfterPost(topic, payload, toDoAfterPromise33) {
        API_core._doAfterSomething("post", topic,
            undefined,
            payload,
            toDoAfterPromise33);
    }
    // PUT
    static doAfterPut(topic, id, payload, toDoAfterPromise44) {
        API_core._doAfterSomething("put", topic,
            id,
            payload,
            toDoAfterPromise44);
    }
    // DELETE
    static doAfterDelete(topic, id, toDoAfterPromise55) {
        API_core._doAfterSomething("delete", topic,
            id,
            undefined,
            toDoAfterPromise55);
    }
}

export default API;