import React from "react";
import Button from "../../form/components/Button"
import history from "../../../../history";

class LessonItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleEdit = (event) =>{
            const recordID = this.extractRecordID(
                event.target.id ,
                event.target.className
            );
            console.log("EVENT !!! EDIT pushed record with ID "+ recordID);
            // Redirecting to Edit form
            history.push("/lesson/edit/"+recordID)
        };
        this.handleDelete = (event) =>{
            const recordID = this.extractRecordID(
                event.target.id ,
                event.target.className
            );
            console.log("EVENT !!! DELETE recordID = "+ recordID);
            // Redirecting to List
            history.push("/lesson/");
        };
        this.handleDetails= (event) => {
            const recordID = this.extractRecordID(
                event.target.id ,
                event.target.className
            );
            console.log("EVENT !!! DETAILS recordID = "+ recordID);
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
                    <Button
                        action={"details"}
                        recordID={lesson.id}
                        handleClick={this.handleDetails}
                    >
                        DELETE
                    </Button>
                </td>
            </tr>
        )
    }
}

export default LessonItem;