import React from "react";

class LessonItem extends React.Component {
    static lastUsedRowNumber = 0;
    render() {
        console.log("LessonItem.render()");
        const datum = this.props.datum;
        console.log(datum);
        return (
            <tr key={datum.id}>
                <td className="class1" >
                    {++LessonItem.lastUsedRowNumber}
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