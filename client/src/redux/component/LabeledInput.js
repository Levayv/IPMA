import React from 'react';

class LabeledInput extends React.Component {
    render() {
        console.debug("LabeledInput.render() " + this.props.label + " = " + this.props.value);
        return (
            <label> {this.props.label}:
                <input
                    value={this.props.value}
                    onChange={this.props.updateState}

                    // type="text"
                    // checked={"this.state.isGoing"}
                />
                <br/>
            </label>
        );
    }
}

export default LabeledInput;