import React, {Component} from "react";
import FormSubmitButton from "./components/FormSubmitButton";

class LessonDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonLabel: "Confirm",
        };
    }
    render() {
        return (
            <div><form><fieldset>
                <div> Please Confirm deletion </div>
                <FormSubmitButton
                    text={this.state.buttonLabel}
                    recordID={this.props.match.params.recordID}
                    action={"delete"}
                />
            </fieldset></form></div>
        );
    }
}
export default LessonDelete;