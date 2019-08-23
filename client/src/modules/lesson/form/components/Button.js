import React from "react";
import "./Button.css"

export default class Button extends React.Component {
    /**
     * PROPS
     * action - EDIT or DELETE
     * recordID - Record's id to delete or Edit
     * handleClick - handleEdit or handleDelete
     * */
    constructor(props) {
        super(props);
        this.state = {recordID: this.props.recordID}
    }

    render() {
        return (
            <button
                id={"button-"
                + this.props.action
                + "-record-with-id-"
                + this.props.recordID}
                className={"button-" + this.props.action}
                onClick={this.props.handleClick}
            >
                {this.props.action}
            </button>
        )
    }
}