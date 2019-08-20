import React, {Component} from "react";
import {connect} from "react-redux";
import * as PropTypes from "prop-types";
import API from "../api/API"
import {crud_read_all} from "../action/index";
import {crud_read} from "../action/index";
import './LessonCreate.css'
import LessonCreateForm from "../component/LessonCreateForm"
import LabeledInput from "../component/LabeledInput"

class ConnectedLessonCreate extends Component {
    constructor(props) {
        super(props);
        console.debug("LessonCreate.constructor()");
        // this.job = this.job.bind(this);
        this.job1 = this.job1.bind(this);
        this.handleSubmitAndPreventDefault = this.handleSubmitAndPreventDefault.bind(this);
    }

    componentDidMount() {
        console.debug("LessonCreate.componentDidMount()");
    }

    job1(isSuccess, data) {
        console.debug("LessonCreate.job()");
        try {
            if (isSuccess) {
                console.log("HOORAY! ++ ");
                this.props.crud_read(
                    {
                        something: ["something_nice", "something_nicer"],
                        data: data
                    })
            } else {
                console.log("HOORAY! -- ");
            }
        } catch (e) {
        debugger
            console.log(e);
        }
    }
    handleSubmitAndPreventDefault(event){
        event.preventDefault();
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        let payload = {
            name : "Lesson11 ",
            link : "some character sequence",
        };
        let formData = new FormData();
        formData.append('name' , "Lesson64 lies");
        formData.append('link' , "some random character sequence");
        // API.doAfterPost("lesson",undefined, formData, this.job1)
    }
    render() {
        console.debug("LessonCreate.render()");

        return (
            <LessonCreateForm 
                parentHandleSubmit={this.handleSubmitAndPreventDefault}
            />
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        crud_read_all: all_lessons => dispatch(crud_read_all(all_lessons)),
        crud_read: single_lesson => dispatch(crud_read(single_lesson))
    };
}

const mapStateToProps = state => {
    return {
        something: state.something,
        list: state.list,
        bulkList: state.bulkList,
        formData: state.formData,
    };
};
ConnectedLessonCreate.propTypes = {something: PropTypes.any};
const LessonCreate = connect(mapStateToProps, mapDispatchToProps)(ConnectedLessonCreate);
export default LessonCreate;