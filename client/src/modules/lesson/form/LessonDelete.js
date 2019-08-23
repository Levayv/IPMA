import React, {Component} from "react";
import FormSubmitButton from "./components/FormSubmitButton";
import "./LessonForm.css"

//todo refactor to popup
class LessonDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonLabel: "Confirm",
        };
    }

    render() {
        return (
            <div className={"container-form"}>
                <form>
                    <fieldset>
                        <div
                            className={"form-header"}
                        > Please Confirm deletion</div>
                        <FormSubmitButton
                            text={this.state.buttonLabel}
                            recordID={this.props.match.params.recordID}
                            action={"delete"}
                        />
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default LessonDelete;