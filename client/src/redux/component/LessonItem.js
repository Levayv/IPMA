import React from "react";

class LessonItem extends React.Component {
    render() {
        console.debug("LessonItem.render()");
        const datum = this.props.datum;
        console.debug("Datum ... ... ... ... ...");
        console.debug(datum.id);
        console.debug(datum.name);
        console.debug(datum.link);
        return (
            <tr>
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