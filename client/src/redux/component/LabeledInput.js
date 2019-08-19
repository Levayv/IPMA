import React from 'react';

class LabeledInput extends React.Component {
    render() {
        return (
            <label> {this.props.label}:
                <input
                    // name={"asd"}
                    // type="text"
                    // checked={"this.state.isGoing"}
                    // onChange={"this.handleInputChange"}
                />
                <br/>
            </label>
        );
    }
}

export default LabeledInput;