import React from "react";
import {Component} from "react";
import LessonItem from "./LessonItem";
import './LessonTable.css'

class LessonTable extends Component {
    constructor(props) {
        super(props);
        this.col = {
            id: " ",
            name: "Name",
            link: "Link / URL",
            controlls: " ",
        };
    }

    render() {
        const tableBody = this.props.dataList.map(
            (element, index) => {
                return (<LessonItem 
                    key={element.id} 
                    singleLesson={element} 
                    index={index+1}
                />);
            }
        );
        return (
            <table>
                <thead>
                <tr>
                    <th>{this.col.id}</th>
                    <th>{this.col.name}</th>
                    <th>{this.col.link}</th>
                    <th>{this.col.controlls}</th>
                </tr>
                </thead>
                <tbody>
                    {tableBody}
                </tbody>
            </table>
        )
    }
}
export default LessonTable;