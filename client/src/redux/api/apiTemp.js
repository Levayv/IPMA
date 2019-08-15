import react from "react";

class baseApi {
    constructor(baseLink){
        this.baseLink = baseLink;
        // this.isAlive = false;
        // this.isChecked = false;
    }
    buildUrl(){
        
    }
}
class ApiTemp extends baseApi{
    //todo change to instance ,, this.create = ...
    static checkConnection = "asd"; 
    static create = "create!";
    static read = "read!";
    static readAll = "readAll!";
    constructor(baseLink) {
        super(baseLink);
        // this.checkConnection = this.checkConnection.bind(this);
        this.doAfterFetch(this.showConnectionStatus)
        // this.crud = [];
        // crud.add({})
    }
    showConnectionStatus(isConnectionSuccess){
        // only output to console yet 
        if (isConnectionSuccess){
            console.log("Backend online");
        }else{
            console.log("Backend offline");
        }
    }
    foo(){
        console.log("Api api test");
        console.log(this.baseLink);
    }
    doAfterFetch(someFuntion){
        fetch("http://localhost:8000/api/lesson/1")
            .then(response => response.json())
            .then( 
                (result) => {
                    console.log("fetch promise fulfill");
                    someFuntion(true);
                },
                (error) => {
                    console.log("fetch promise rejected");
                    // console.log(error.toString());
                    someFuntion(false)
                }
            )    
    }
}
const Api = ApiTemp;
export default Api;