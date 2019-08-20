import React from "react";
import "./Button.css"

export default class Button extends React.Component{
    constructor(props) {
        super(props);
        this.state = { recordID : this.props.recordID}
        // this.props.action; // EDIT or DELETE
        // this.props.recordID; // Record's id to delete or Edit
        // this.props.handleClick; // handleEdit or handleDelete
    }
    render() {
        return(<button 
                // test={"BooBooGaGa"}
                id={"button-"
                    + this.props.action
                    + "-record-with-id-"
                    + this.props.recordID}
                className={"button-"+this.props.action}
                onClick={this.props.handleClick}
            >
                {this.props.action}
            </button>
        )
    }
}