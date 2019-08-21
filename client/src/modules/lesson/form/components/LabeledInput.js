import React from 'react';
import {crud_read, crud_read_all} from "../../../../redux/action";
import {connect} from "react-redux"
import {form_data_update} from "../../../../redux/action"
class ConnectedLabeledInput extends React.Component {
    constructor(props) {
        super(props);
        this.updateData = (event) => {
            console.debug("LabeledInput.updateData()");
            console.debug("Input field name = " + this.props.labelName);
            console.debug("Input field value = " + event.target.value);
            this.props.form_data_update({
                [this.props.labelName]: event.target.value,
            })    
        }
    }

    render() {
        console.debug("LabeledInput.render()");
        // console.log(this.props.formData.name);
        // console.log(this.props.formData.link);
        const tempValue = this.props.formData[this.props.labelName];
        const realValue = (tempValue)?(tempValue):"";
        return (
            <label> {this.props.displayName}:
                <input
                    value={realValue}
                    onChange={this.updateData}
                    // onChange={this.props.updateState}

                    // type="text"
                    // checked={"this.state.isGoing"}
                />
                <br/>
            </label>
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
const LabeledInput = connect(mapStateToProps, mapDispatchToProps)
(ConnectedLabeledInput);
export default LabeledInput;