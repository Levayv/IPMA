import React from "react";
import {Component} from "react";

class List_Table extends Component{
    constructor(props) {
        super(props);
        this.dataList = Array.from(this.props.dataList);
    }

    render() {
        console.log("! len = " + this.dataList.length);
        console.log("! len = " + this.props.dataList.length);
        // let data1 = Array.from(this.props.data);
        // console.log(this.props.data);
        // console.log("len="+this.props.data);
        // console.log(data1);
        // console.log("len="+data1.length);
        // console.log(data1.pop());
        
        let lessons = [
            {
                id:"1",
                title: "lesson 1"
            } ,
            {
                id:"2",
                title: "lesson 2"
            }
        ];
        return(
            <ul className="list-group list-group-flush">
                {lessons.map(el => (
                    <li className="list-group-item" key={el.id}>
                        {el.title+"X"}
                    </li>
                ))}
            </ul>            
        )
    }
}

export default List_Table;