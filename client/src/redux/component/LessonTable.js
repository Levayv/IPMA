import React from "react";
import {Component} from "react";
import LessonItem from "./LessonItem";
import './LessonTable.css'

class LessonTable extends Component {
    constructor(props) {
        super(props);
        this.dataList = Array.from(this.props.dataList);
        this.col = {
            id: " ",
            name: "Name",
            link: "Link / URL",
        };
    }

    render() {
        console.log("!!! LessonTable.render()");
        console.log("! len = " + this.props.dataList.length);
        console.log(this.props.dataList);
        // let data1 = Array.from(this.props.data);
        // console.log(this.props.data);
        // console.log("len="+this.props.data);
        // console.log(data1);
        // console.log("len="+data1.length);
        // console.log(data1.pop());

        let lessons = [
            {
                id: "1",
                title: "lesson 1"
            },
            {
                id: "2",
                title: "lesson 2"
            }
        ];

        const tableBody = this.props.dataList.map(
            (element, index) => {
                // console.log("!!! element test");
                // console.log(element);
                return (<LessonItem datum={element} index={index+1}/>);
            }
        );
        return (
            <table>
                <thead>
                <tr>
                    <th>{this.col.id}</th>
                    <th>{this.col.name}</th>
                    <th>{this.col.link}</th>
                </tr>
                </thead>
                <tbody>
                    {tableBody}
                </tbody>
            </table>
        )
    }
}

// (<ul className="list-group list-group-flush">
//     {this.props.dataList.map(el => (
//         <li className="list-group-item" key={el.id}>
//             {el.name+"X"}
//         </li>
//     ))}
// </ul>)
export default LessonTable;