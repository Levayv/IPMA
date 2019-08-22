import React from "react";
import {Component} from "react";
import LabeledInput from "./LabeledInput";
import FormSubmitButton from "./FormSubmitButton" 
class LessonCreateForm extends Component {
    constructor(props) {
        super(props);
        
        
        this.state = {
            isEditing:false,
            buttonLabel: "Create Lesson",
        }
        
        // this.state = {
        //     name: "",
        //     link: "",
        // };
        // this.updateName = (event) => {
        //     this.setState({name:event.target.value})
        // };
        // this.updateLink = (event) => {
        //     this.setState({link:event.target.value})
        // };
    }
    componentDidMount() {
        if (this.props.editingID !== undefined) {
            console.log("!!!");
            console.log(this.props.editingID);
            this.setState({
                isEditing: true,
                buttonLabel: "Update Lesson",
            })
        }
    }

    render() {
        return (<div>
                <form>
                    <fieldset>
                        <LabeledInput
                            labelName={"name"}
                            displayName={"Lesson's Name"}
                            // value={this.state.name}
                            // updateState={this.updateName}
                        />
                        <LabeledInput
                            labelName={"link"}
                            displayName={"Lesson's Link"}
                            // value={this.state.link}
                            // updateState={this.updateLink}
                        />
                        {/*<button*/}
                        {/*    onClick={this.props.parentHandleSubmit}*/}
                        {/*>*/}
                        {/*    Submit - react state */}
                        {/*</button>*/}
                        <FormSubmitButton
                            text={this.state.buttonLabel} 
                        />
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default LessonCreateForm;