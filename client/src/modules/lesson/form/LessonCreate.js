import './LessonCreate.css'
import React, {Component} from "react";
import {connect} from "react-redux";
import API from "../../../redux/api/API"
import {crud_read} from "../../../redux/action";
import LabeledInput from "./components/LabeledInput";
import FormSubmitButton from "./components/FormSubmitButton";
import history from "../../../history";

class ConnectedLessonCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonLabel: "Create Lesson",
            headerLabel: "Create new Lesson",
            values: {
                name: "",
                link: "",
            }
        };
        this.job1 = (isSuccess, data) => {
            try {
                if (isSuccess) {
                    // todo useless ? storing response data in redux store
                    this.props.crud_read(
                        {
                            singleRecord: data
                        });
                    this.setState({
                        values: {
                            name: this.props.singleRecord.name,
                            link: this.props.singleRecord.link,
                        }
                    });
                    if (this.props.singleRecord.status === "fail") {
                        history.push("/lesson/list/")
                    }
                }
            } catch (e) {
            debugger
            }
        };
        // todo optimise
        this.updateNameValue = (event) => {
            const value = (event.target.value);
            this.setState(state =>
                Object.assign({}, state, {
                    values: {
                        name: value,
                        link: state.values.link,
                    }
                }));
        };
        this.updateLinkValue = (event) => {
            const value = (event.target.value);
            this.setState(state =>
                Object.assign({}, state, {
                    values: {
                        name: state.values.name,
                        link: value,
                    }
                }));
        }

    }

    componentDidMount() {
        // todo Research optimal solution for 
        // Update color of nav menu 
        if (this.props.match.params.recordID) {
            document.getElementById("router-nav-edit")
                .style.color = "red";
        } else {
            document.getElementById("router-nav-form")
                .style.color = "red";
        }
        // calculate / decide 
        // 1. button label
        // 2. orig field values (empty or axios.get )

        if (this.props.match.params.recordID !== undefined) {
            API.doAfterGet("lesson", this.props.match.params.recordID, this.job1);
            this.setState({
                buttonLabel: "Update Lesson",
                headerLabel: "Update existing Lesson",
            })
        }
    }

    componentWillUnmount() {
        if (this.props.match.params.recordID) {
            document.getElementById("router-nav-edit")
                .style.color = null;
        } else {
            document.getElementById("router-nav-form")
                .style.color = null;
        }
    }


    render() {
        return (
            <div>
                <form>
                    <fieldset>
                        <div> {this.state.headerLabel} </div>
                        <LabeledInput
                            labelName={"name"}
                            displayName={"Lesson's Name"}
                            value={this.state.values.name}
                            onUpdate={this.updateNameValue}
                        />
                        <LabeledInput
                            labelName={"link"}
                            displayName={"Lesson's Link"}
                            value={this.state.values.link}
                            onUpdate={this.updateLinkValue}
                        />
                        <FormSubmitButton
                            text={this.state.buttonLabel}
                            values={this.state.values}
                            recordID={this.props.match.params.recordID}
                            action={"edit"}
                        />
                    </fieldset>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        crud_read: singleRecord => dispatch(crud_read(singleRecord))
    };
}

const mapStateToProps = state => {
    return {
        singleRecord: state.singleRecord,
    };
};
const LessonCreate = connect(mapStateToProps, mapDispatchToProps)(ConnectedLessonCreate);
export default LessonCreate;