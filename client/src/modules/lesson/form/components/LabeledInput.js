import React from 'react';

class LabeledInput extends React.Component {
    render() {
        return (
            <label> {this.props.displayName}:
                <input
                    value={this.props.value}
                    onChange={this.props.onUpdate}
                />
                <br/>
            </label>
        );
    }
}
export default LabeledInput;