import React from "react";
import {Component} from "react";
import LabeledInput from "./LabeledInput";

class LessonCreateForm extends Component {
    constructor(props) {
        super(props);
        this.col = {
            id: " ",
            name: "Name",
            link: "Link / URL",
        };
    }
    tempFunc(event){
        event.preventDefault();
        console.log("LessonCreateForm.tempFunc");
        
    }
    render() {
        return (<div>
                <form>
                    <fieldset>
                        <LabeledInput label={"labbul"}/>
                        <LabeledInput label={"bubull"}/>
                        {/*<label>*/}
                        {/*    Number of guests:*/}
                        {/*    <input*/}
                        {/*        // name="numberOfGuests"*/}
                        {/*        // type="number"*/}
                        {/*        // value={"this.state.numberOfGuests"}*/}
                        {/*        // onChange={"this.handleInputChange"}*/}
                        {/*    />*/}
                        {/*</label>*/}
                        <button 
                            onClick={this.props.parentHandleSubmit}
                        >
                            Submit 
                        </button>
                    </fieldset>
                </form>
            </div>
        )
    }
}
export default LessonCreateForm;