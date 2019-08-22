import React from 'react';
import {connect} from "react-redux"
import API from "../../../../redux/api/API";
import history from "../../../../history";

class ConnectedFormSubmitButton extends React.Component {
    constructor(props) {
        super(props);
        // this.updateData = (event) => {
        //     console.log("FormSubmitButton.updateData()");
        //     console.log(event.target.value);
        // };
        this.handleSubmit = (event) =>{
            console.debug("FormSubmitButton.handleSubmit()");
            event.preventDefault();
            // let formData;
            // formData = new FormData();
            // formData.append('name' , this.props.values.name);
            // formData.append('link' , this.props.values.link) ;
            // console.log("aslmkdbfaskjldbfasdhf");
            // console.log("aslmkdbfaskjldbfasdhf " + formData.get("name"));
            // console.log("aslmkdbfaskjldbfasdhf " + formData.get("link"));
            if (this.props.recordID){
                // console.log("!!! " + this.props.action);
                if (this.props.action === "edit"){
                    let payload = {
                        name: this.props.values.name,
                        link: this.props.values.link,
                    };
                    API.doAfterPut("lesson", this.props.recordID , payload, this.job);
                }
                if (this.props.action === "delete"){
                    API.doAfterDelete("lesson", this.props.recordID , this.job);
                }
            }else {
                let payload = {
                    name: this.props.values.name,
                    link: this.props.values.link,
                };
                API.doAfterPost("lesson", payload, this.job);
            }
        };
        this.job = (isSuccess, data) => {
            console.debug("FormSubmitButton.job()");
            try{
                if (isSuccess) {
                    console.log("Reqest & Response Success");
                    history.push("/lesson/list/")
                } else {
                    console.log("Reqest & Response Failed");
                }
            }catch (e) {
                console.log(e);
                debugger
            }
        }
    }

    render() {
        console.debug("FormSubmitButton.render() ");
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
        qwe: state.qwe,
    };
};
const FormSubmitButton = connect(mapStateToProps, null)
(ConnectedFormSubmitButton);
export default FormSubmitButton;