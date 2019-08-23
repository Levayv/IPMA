import React from 'react';
import "./LabeledInput.css"

class LabeledInput extends React.Component {
    render() {
        return (
            <div className={"form-labeled-input"}>
                <label> 
                    {this.props.displayName}:
                </label>
                <input
                    value={this.props.value}
                    onChange={this.props.onUpdate}
                />
                <br/>
            </div>

        );
    }
}

export default LabeledInput;