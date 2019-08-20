import React from "react";
import Button from "./Button"

class LessonItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleEdit = (event) =>{
            console.log("EVENT !!! EDIT this record");
            const recordID = this.extractRecordID(
                event.target.id ,
                event.target.className
            );
            console.log("recordID = "+ recordID);
        };
        this.handleDelete = (event) =>{
            console.log("EVENT !!! DELETE this record");
            const recordID = this.extractRecordID(
                event.target.id ,
                event.target.className
            );
            console.log("recordID = "+ recordID);
        };
        this.extractRecordID = (id , classname) => {
            return id.substr(
                classname.length + 16
            )
        }
    }

    render() {
        console.debug("LessonItem.render()");
        const lesson = this.props.datum;
        console.debug("Single Lesson  ... ... ... ... ...");
        console.debug(lesson.id);
        console.debug(lesson.name);
        console.debug(lesson.link);
        return (
            <tr>
                <td className="class1" >
                    {this.props.index}
                </td>
                <td className="class1" >
                    {lesson.name}
                </td>
                <td className="class1" >
                    {lesson.link}
                </td>
                <td>
                    <Button
                        action={"edit"}
                        recordID={lesson.id} 
                        handleClick={this.handleEdit}
                    >
                        EDIT
                    </Button>
                    <Button
                        action={"delete"}
                        recordID={lesson.id}
                        handleClick={this.handleDelete}
                    >
                        DELETE
                    </Button>
                </td>
            </tr>
        )
    }
}

export default LessonItem;