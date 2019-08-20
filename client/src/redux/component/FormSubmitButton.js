import React from 'react';
import {connect} from "react-redux"
import API from "../api/API";
class ConnectedFormSubmitButton extends React.Component {
    constructor(props) {
        super(props);
        this.updateData = (event) => {
            console.log("FormSubmitButton.updateData()");
            console.log(event.target.value);
        };
        this.handleSubmit = (event) =>{
            console.debug("FormSubmitButton.handleSubmit()");
            event.preventDefault();
            let formData;
            formData = new FormData();
            formData.append('name' , this.props.formData.name);
            formData.append('link' , this.props.formData.link) ;

            console.debug("FormData's name = " + formData.get("name"));
            console.debug("FormData's link = " + formData.get("link"));
            API.doAfterPost("lesson",undefined, formData, this.job)
        };
        this.job = (isSuccess, data) => {
            console.debug("FormSubmitButton.job()");
            try{
                if (isSuccess) {
                    console.log("Reqest & Response Success");
                } else {
                    console.log("Reqest & Response Failed");
                }
            }catch (e) {
            debugger
                console.log(e);
            }
        }
    }

    render() {
        console.debug("FormSubmitButton.render() " + this.props.label + " = " + this.props.value);
        return (
            <button
                onClick={this.handleSubmit}>
                {this.props.text}
            </button>
        );
    }
}

const mapStateToProps = state => {
    return {
        formData: state.formData,
    };
};
const FormSubmitButton = connect(mapStateToProps, null)
(ConnectedFormSubmitButton);
export default FormSubmitButton;