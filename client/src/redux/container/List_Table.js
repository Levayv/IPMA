import React from "react";
import {Component} from "react";

class List_Table extends Component{
    render() {
        console.log(this.props.data);
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
                        {el.title}
                    </li>
                ))}
            </ul>            
        )
    }
}

export default List_Table;