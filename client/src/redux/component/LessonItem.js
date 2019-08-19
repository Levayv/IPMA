import React from "react";

class LessonItem extends React.Component {
    render() {
        console.log("LessonItem.render()");
        const datum = this.props.datum;
        console.log(datum);
        return (
            <tr key={datum.id}>
                <td className="class1" >
                    {this.props.index}
                </td>
                <td className="class1" >
                    {datum.name}
                </td>
                <td className="class1" >
                    {datum.link}
                </td>
            </tr>
        )
    }
}

export default LessonItem;