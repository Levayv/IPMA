import React from 'react';
import {connect} from "react-redux"
import {form_data_update} from "../action/index"
import API from "../api/API";
class ConnectedFormSubmitButton extends React.Component {
    constructor(props) {
        super(props);
        this.updateData = (event) => {
            console.log("FormSubmitButton.updateData()");
            console.log(event.target.value);
        };
        this.handleSubmit = (event) =>{
            console.log("FormSubmitButton.handleSubmit()");
            console.log(event.target.value);
            event.preventDefault();
            // let payload = {
            //     name : "Lesson55 ",
            //     link : "another diabolical string",
            // };
            let formData = new FormData();
            
            
            // todo ASAP !!!!
            formData.append('name' , this.props.formData.temp);
            formData.append('name' , this.props.formData.temp) ;

            console.log("!!!");
            console.log("formData is ...");
            console.log(formData.get("name"));
            console.log(formData.get("link"));
                        
            formData.append('name' , "Lesson 555");
            formData.append('link' , "another string");
            console.log(formData.get("name"));
            console.log(formData.get("link"));
            API.doAfterPost("lesson",undefined, formData, this.job)
        };
        this.job = (isSuccess, data) => {
            console.debug("FormSubmitButton.job()");
            try{
                if (isSuccess) {
                    console.log("HOORAY! ++ ");
                } else {
                    console.log("HOORAY! -- ");
                }
            }catch (e) {
            debugger
                console.log(e);
            }
        }
    }

    render() {
        console.debug("LabeledInput.render() " + this.props.label + " = " + this.props.value);
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
function mapDispatchToProps(dispatch) {
    return {
        form_data_update: data => dispatch(form_data_update(data)),
    };
}
const FormSubmitButton = connect(mapStateToProps, mapDispatchToProps)
(ConnectedFormSubmitButton);
export default FormSubmitButton;