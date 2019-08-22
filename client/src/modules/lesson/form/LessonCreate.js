import React, {Component} from "react";
import {connect} from "react-redux";
import * as PropTypes from "prop-types";
import API from "../../../redux/api/API"
// import {crud_read_all} from "../../../redux/action";
import {crud_read} from "../../../redux/action";
import './LessonCreate.css'
import LessonCreateForm from "./components/LessonCreateForm"
import LabeledInput from "./components/LabeledInput";
import FormSubmitButton from "./components/FormSubmitButton";

class ConnectedLessonCreate extends Component {
    constructor(props) {
        super(props);

        // this.forwardEditingID = 
        //     (this.props.match.params.recordID === undefined)
        //         ?(0)
        //         :(this.props.match.params.recordID);

        console.debug("LessonCreate.constructor()");
        // console.log("LessonCreate.constructor()");
        // console.log(this.props);
        // console.log("!!!!!!!!!!!!!!!!!!!");
        // console.log(this.forwardEditingID);
        //todo refactor 
        this.job1 = this.job1.bind(this);
        // this.handleSubmitAndPreventDefault =
        //     this.handleSubmitAndPreventDefault.bind(this);


        //------------------------------------------
        this.state = {
            buttonLabel: "Create Lesson",
            values: {
                name: "QQQ",
                link: "EEE",
            }
        };
        this.updateNameValue = (event) => {
            const value = (event.target.value)
                // ?(event.target.value)
                // :("")
            ;
            this.setState(state =>
                Object.assign({}, state, {
                    values: {
                        name: value,
                        link: state.values.link,
                    }
                }));
        };
        this.updateLinkValue = (event) => {
            const value = (event.target.value)
                // ?(event.target.value)
                // :("")
            ;
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
        console.debug("LessonCreate.componentDidMount()");
        // * update color of nav menu 
        if (this.props.match.params.recordID) {
            document.getElementById("router-nav-edit")
                .style.color = "red";
        } else {
            document.getElementById("router-nav-form")
                .style.color = "red";
        }
        // calculate 
        // 1. button label
        // 2. orig field values (empty or axios.get )
        
        if (this.props.match.params.recordID !== undefined) {
            // console.log("!!!");
            // console.log(this.props.match.params.recordID);
            API.doAfterGet("lesson" , this.props.match.params.recordID, this.job1);
            this.setState({
                buttonLabel: "Update Lesson",
                values: {
                    name: this.props.singleRecord.name,
                    link: this.props.singleRecord.link,
                }
            })
        }


        // try {
        //     this.refs.routernavdashboard.style.backgroundColor = "black";
        // }catch (e) {
        //     console.log(e);
        // }
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

    job1(isSuccess, data) {
        console.debug("LessonCreate.job()");
        try {
            if (isSuccess) {
                console.log("HOORAY! ++ ");
                this.props.crud_read(
                    {
                        something: ["something_nice", "something_nicer"],
                        singleRecord: data
                    })
            } else {
                console.log("HOORAY! -- ");
            }
        } catch (e) {
            console.log(e);
            debugger
        }
    }

    // handleSubmitAndPreventDefault(event) {
    //     event.preventDefault();
    //     console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    //     console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    //     console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    //     console.log(this.state.values.name);
    //     console.log(this.state.values.link);
    //
    //     let payload = {
    //         name: "Lesson11 ",
    //         link: "some character sequence",
    //     };
    //     let formData = new FormData();
    //     formData.append('name', "Lesson64 lies");
    //     formData.append('link', "some random character sequence");
    //     // API.doAfterPost("lesson",undefined, formData, this.job1)
    // }

    render() {
        console.debug("LessonCreate.render()");
        return (
            <div>
                <form>
                    <fieldset>
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
                            // method={this.state.isEditing}
                            recordID={this.props.match.params.recordID}
                        />
                    </fieldset>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // crud_read_all: all_lessons => dispatch(crud_read_all(all_lessons)),
        crud_read: singleRecord => dispatch(crud_read(singleRecord))
    };
}

const mapStateToProps = state => {
    return {
        something: state.something,
        list: state.list,
        bulkList: state.bulkList,
        formData: state.formData,
        singleRecord: state.singleRecord,
    };
};
ConnectedLessonCreate.propTypes = {something: PropTypes.any};
const LessonCreate = connect(mapStateToProps, mapDispatchToProps)(ConnectedLessonCreate);
export default LessonCreate;