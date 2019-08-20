import React from 'react';
import {crud_read, crud_read_all} from "../action";
import {connect} from "react-redux"
import {form_data_update} from "../action/index"
class ConnectedLabeledInput extends React.Component {
    constructor(props) {
        super(props);
        this.updateData = (event) => {
            console.log("LabeledInput.updateData()");
            console.log(event.target.value);
            this.props.form_data_update({
                string: event.target.value,
            })    
        }
    }

    render() {
        console.debug("LabeledInput.render() " + this.props.label + " = " + this.props.value);
        return (
            <label> {this.props.formData.temp}:
                <input
                    value={this.props.formData.temp}
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