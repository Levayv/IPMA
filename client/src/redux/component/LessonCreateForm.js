import React from "react";
import {Component} from "react";
import LabeledInput from "./LabeledInput";
import FormSubmitButton from "./FormSubmitButton" 
class LessonCreateForm extends Component {
    constructor(props) {
        super(props);
        this.col = {
            id: " ",
            name: "Name",
            link: "Link / URL",
        };
        this.state = {
            name: "",
            link: "",
        };
        this.updateName = (event) => {
            this.setState({name:event.target.value})
        };
        this.updateLink = (event) => {
            this.setState({link:event.target.value})
        };
    }

    render() {
        return (<div>
                <form>
                    <fieldset>
                        <LabeledInput
                            label={"lessonName"}
                            value={this.state.name}
                            updateState={this.updateName}
                        />
                        <LabeledInput
                            label={"lessonLink"}
                            value={this.state.link}
                            updateState={this.updateLink}
                        />
                        <button
                            onClick={this.props.parentHandleSubmit}
                        >
                            Submit - react state 
                        </button>
                        <FormSubmitButton
                            text={"Submit - redux state"} 
                        />
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default LessonCreateForm;